exports.id = 7993;
exports.ids = [7993];
exports.modules = {

/***/ 71540:
/***/ (function(__unused_webpack_module, exports) {

!function(t,e){ true?e(exports):0}(this,(function(t){"use strict";function e(){e=function(){return t};var t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),u=new L(n||[]);return o(a,"_invoke",{value:x(t,r,u)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var h={};function p(){}function v(){}function d(){}var y={};s(y,a,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(k([])));m&&m!==r&&n.call(m,a)&&(y=m);var b=d.prototype=p.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,i,a,u){var c=l(t[o],t,i);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function x(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return I()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=O(a,r);if(u){if(u===h)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=l(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function O(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function k(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:I}}function I(){return{value:void 0,done:!0}}return v.prototype=d,o(b,"constructor",{value:d,configurable:!0}),o(d,"constructor",{value:v,configurable:!0}),v.displayName=s(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(S.prototype),s(S.prototype,u,(function(){return this})),t.AsyncIterator=S,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new S(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(b),s(b,c,"Generator"),s(b,a,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,i=void 0,"symbol"==typeof(i=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"))?i:String(i)),n)}var o,i}function n(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},a=function(t){return t&&t.Math==Math&&t},u=a("object"==typeof globalThis&&globalThis)||a("object"==typeof window&&window)||a("object"==typeof self&&self)||a("object"==typeof i&&i)||function(){return this}()||i||Function("return this")(),c={},s=function(t){try{return!!t()}catch(t){return!0}},f=!s((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),l=!s((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),h=l,p=Function.prototype.call,v=h?p.bind(p):function(){return p.apply(p,arguments)},d={},y={}.propertyIsEnumerable,g=Object.getOwnPropertyDescriptor,m=g&&!y.call({1:2},1);d.f=m?function(t){var e=g(this,t);return!!e&&e.enumerable}:y;var b,w,S=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},x=l,O=Function.prototype,E=O.call,j=x&&O.bind.bind(E,E),L=x?j:function(t){return function(){return E.apply(t,arguments)}},k=L,I=k({}.toString),P=k("".slice),T=function(t){return P(I(t),8,-1)},R=s,A=T,C=Object,_=L("".split),N=R((function(){return!C("z").propertyIsEnumerable(0)}))?function(t){return"String"==A(t)?_(t,""):C(t)}:C,F=function(t){return null==t},D=F,M=TypeError,U=function(t){if(D(t))throw M("Can't call method on "+t);return t},G=N,z=U,B=function(t){return G(z(t))},$="object"==typeof document&&document.all,K={all:$,IS_HTMLDDA:void 0===$&&void 0!==$},V=K.all,H=K.IS_HTMLDDA?function(t){return"function"==typeof t||t===V}:function(t){return"function"==typeof t},W=H,q=K.all,J=K.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:W(t)||t===q}:function(t){return"object"==typeof t?null!==t:W(t)},Y=u,Z=H,Q=function(t,e){return arguments.length<2?(r=Y[t],Z(r)?r:void 0):Y[t]&&Y[t][e];var r},X=L({}.isPrototypeOf),tt="undefined"!=typeof navigator&&String(navigator.userAgent)||"",et=u,rt=tt,nt=et.process,ot=et.Deno,it=nt&&nt.versions||ot&&ot.version,at=it&&it.v8;at&&(w=(b=at.split("."))[0]>0&&b[0]<4?1:+(b[0]+b[1])),!w&&rt&&(!(b=rt.match(/Edge\/(\d+)/))||b[1]>=74)&&(b=rt.match(/Chrome\/(\d+)/))&&(w=+b[1]);var ut=w,ct=ut,st=s,ft=u.String,lt=!!Object.getOwnPropertySymbols&&!st((function(){var t=Symbol();return!ft(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&ct&&ct<41})),ht=lt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,pt=Q,vt=H,dt=X,yt=Object,gt=ht?function(t){return"symbol"==typeof t}:function(t){var e=pt("Symbol");return vt(e)&&dt(e.prototype,yt(t))},mt=String,bt=function(t){try{return mt(t)}catch(t){return"Object"}},wt=H,St=bt,xt=TypeError,Ot=function(t){if(wt(t))return t;throw xt(St(t)+" is not a function")},Et=Ot,jt=F,Lt=function(t,e){var r=t[e];return jt(r)?void 0:Et(r)},kt=v,It=H,Pt=J,Tt=TypeError,Rt={exports:{}},At=u,Ct=Object.defineProperty,_t=function(t,e){try{Ct(At,t,{value:e,configurable:!0,writable:!0})}catch(r){At[t]=e}return e},Nt=_t,Ft="__core-js_shared__",Dt=u[Ft]||Nt(Ft,{}),Mt=Dt;(Rt.exports=function(t,e){return Mt[t]||(Mt[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.30.2",mode:"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.30.2/LICENSE",source:"https://github.com/zloirock/core-js"});var Ut=U,Gt=Object,zt=function(t){return Gt(Ut(t))},Bt=zt,$t=L({}.hasOwnProperty),Kt=Object.hasOwn||function(t,e){return $t(Bt(t),e)},Vt=L,Ht=0,Wt=Math.random(),qt=Vt(1..toString),Jt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+qt(++Ht+Wt,36)},Yt=u,Zt=Rt.exports,Qt=Kt,Xt=Jt,te=lt,ee=ht,re=Yt.Symbol,ne=Zt("wks"),oe=ee?re.for||re:re&&re.withoutSetter||Xt,ie=function(t){return Qt(ne,t)||(ne[t]=te&&Qt(re,t)?re[t]:oe("Symbol."+t)),ne[t]},ae=v,ue=J,ce=gt,se=Lt,fe=function(t,e){var r,n;if("string"===e&&It(r=t.toString)&&!Pt(n=kt(r,t)))return n;if(It(r=t.valueOf)&&!Pt(n=kt(r,t)))return n;if("string"!==e&&It(r=t.toString)&&!Pt(n=kt(r,t)))return n;throw Tt("Can't convert object to primitive value")},le=TypeError,he=ie("toPrimitive"),pe=function(t,e){if(!ue(t)||ce(t))return t;var r,n=se(t,he);if(n){if(void 0===e&&(e="default"),r=ae(n,t,e),!ue(r)||ce(r))return r;throw le("Can't convert object to primitive value")}return void 0===e&&(e="number"),fe(t,e)},ve=gt,de=function(t){var e=pe(t,"string");return ve(e)?e:e+""},ye=J,ge=u.document,me=ye(ge)&&ye(ge.createElement),be=function(t){return me?ge.createElement(t):{}},we=be,Se=!f&&!s((function(){return 7!=Object.defineProperty(we("div"),"a",{get:function(){return 7}}).a})),xe=f,Oe=v,Ee=d,je=S,Le=B,ke=de,Ie=Kt,Pe=Se,Te=Object.getOwnPropertyDescriptor;c.f=xe?Te:function(t,e){if(t=Le(t),e=ke(e),Pe)try{return Te(t,e)}catch(t){}if(Ie(t,e))return je(!Oe(Ee.f,t,e),t[e])};var Re={},Ae=f&&s((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Ce=J,_e=String,Ne=TypeError,Fe=function(t){if(Ce(t))return t;throw Ne(_e(t)+" is not an object")},De=f,Me=Se,Ue=Ae,Ge=Fe,ze=de,Be=TypeError,$e=Object.defineProperty,Ke=Object.getOwnPropertyDescriptor,Ve="enumerable",He="configurable",We="writable";Re.f=De?Ue?function(t,e,r){if(Ge(t),e=ze(e),Ge(r),"function"==typeof t&&"prototype"===e&&"value"in r&&We in r&&!r[We]){var n=Ke(t,e);n&&n[We]&&(t[e]=r.value,r={configurable:He in r?r[He]:n[He],enumerable:Ve in r?r[Ve]:n[Ve],writable:!1})}return $e(t,e,r)}:$e:function(t,e,r){if(Ge(t),e=ze(e),Ge(r),Me)try{return $e(t,e,r)}catch(t){}if("get"in r||"set"in r)throw Be("Accessors not supported");return"value"in r&&(t[e]=r.value),t};var qe=Re,Je=S,Ye=f?function(t,e,r){return qe.f(t,e,Je(1,r))}:function(t,e,r){return t[e]=r,t},Ze={exports:{}},Qe=f,Xe=Kt,tr=Function.prototype,er=Qe&&Object.getOwnPropertyDescriptor,rr=Xe(tr,"name"),nr={EXISTS:rr,PROPER:rr&&"something"===function(){}.name,CONFIGURABLE:rr&&(!Qe||Qe&&er(tr,"name").configurable)},or=H,ir=Dt,ar=L(Function.toString);or(ir.inspectSource)||(ir.inspectSource=function(t){return ar(t)});var ur,cr,sr,fr=ir.inspectSource,lr=H,hr=u.WeakMap,pr=lr(hr)&&/native code/.test(String(hr)),vr=Rt.exports,dr=Jt,yr=vr("keys"),gr=function(t){return yr[t]||(yr[t]=dr(t))},mr={},br=pr,wr=u,Sr=J,xr=Ye,Or=Kt,Er=Dt,jr=gr,Lr=mr,kr="Object already initialized",Ir=wr.TypeError,Pr=wr.WeakMap;if(br||Er.state){var Tr=Er.state||(Er.state=new Pr);Tr.get=Tr.get,Tr.has=Tr.has,Tr.set=Tr.set,ur=function(t,e){if(Tr.has(t))throw Ir(kr);return e.facade=t,Tr.set(t,e),e},cr=function(t){return Tr.get(t)||{}},sr=function(t){return Tr.has(t)}}else{var Rr=jr("state");Lr[Rr]=!0,ur=function(t,e){if(Or(t,Rr))throw Ir(kr);return e.facade=t,xr(t,Rr,e),e},cr=function(t){return Or(t,Rr)?t[Rr]:{}},sr=function(t){return Or(t,Rr)}}var Ar={set:ur,get:cr,has:sr,enforce:function(t){return sr(t)?cr(t):ur(t,{})},getterFor:function(t){return function(e){var r;if(!Sr(e)||(r=cr(e)).type!==t)throw Ir("Incompatible receiver, "+t+" required");return r}}},Cr=L,_r=s,Nr=H,Fr=Kt,Dr=f,Mr=nr.CONFIGURABLE,Ur=fr,Gr=Ar.enforce,zr=Ar.get,Br=String,$r=Object.defineProperty,Kr=Cr("".slice),Vr=Cr("".replace),Hr=Cr([].join),Wr=Dr&&!_r((function(){return 8!==$r((function(){}),"length",{value:8}).length})),qr=String(String).split("String"),Jr=Ze.exports=function(t,e,r){"Symbol("===Kr(Br(e),0,7)&&(e="["+Vr(Br(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!Fr(t,"name")||Mr&&t.name!==e)&&(Dr?$r(t,"name",{value:e,configurable:!0}):t.name=e),Wr&&r&&Fr(r,"arity")&&t.length!==r.arity&&$r(t,"length",{value:r.arity});try{r&&Fr(r,"constructor")&&r.constructor?Dr&&$r(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=Gr(t);return Fr(n,"source")||(n.source=Hr(qr,"string"==typeof e?e:"")),t};Function.prototype.toString=Jr((function(){return Nr(this)&&zr(this).source||Ur(this)}),"toString");var Yr=H,Zr=Re,Qr=Ze.exports,Xr=_t,tn=function(t,e,r,n){n||(n={});var o=n.enumerable,i=void 0!==n.name?n.name:e;if(Yr(r)&&Qr(r,i,n),n.global)o?t[e]=r:Xr(e,r);else{try{n.unsafe?t[e]&&(o=!0):delete t[e]}catch(t){}o?t[e]=r:Zr.f(t,e,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t},en={},rn=Math.ceil,nn=Math.floor,on=Math.trunc||function(t){var e=+t;return(e>0?nn:rn)(e)},an=function(t){var e=+t;return e!=e||0===e?0:on(e)},un=an,cn=Math.max,sn=Math.min,fn=function(t,e){var r=un(t);return r<0?cn(r+e,0):sn(r,e)},ln=an,hn=Math.min,pn=function(t){return t>0?hn(ln(t),9007199254740991):0},vn=pn,dn=function(t){return vn(t.length)},yn=B,gn=fn,mn=dn,bn=function(t){return function(e,r,n){var o,i=yn(e),a=mn(i),u=gn(n,a);if(t&&r!=r){for(;a>u;)if((o=i[u++])!=o)return!0}else for(;a>u;u++)if((t||u in i)&&i[u]===r)return t||u||0;return!t&&-1}},wn={includes:bn(!0),indexOf:bn(!1)},Sn=Kt,xn=B,On=wn.indexOf,En=mr,jn=L([].push),Ln=function(t,e){var r,n=xn(t),o=0,i=[];for(r in n)!Sn(En,r)&&Sn(n,r)&&jn(i,r);for(;e.length>o;)Sn(n,r=e[o++])&&(~On(i,r)||jn(i,r));return i},kn=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],In=Ln,Pn=kn.concat("length","prototype");en.f=Object.getOwnPropertyNames||function(t){return In(t,Pn)};var Tn={};Tn.f=Object.getOwnPropertySymbols;var Rn=Q,An=en,Cn=Tn,_n=Fe,Nn=L([].concat),Fn=Rn("Reflect","ownKeys")||function(t){var e=An.f(_n(t)),r=Cn.f;return r?Nn(e,r(t)):e},Dn=Kt,Mn=Fn,Un=c,Gn=Re,zn=s,Bn=H,$n=/#|\.prototype\./,Kn=function(t,e){var r=Hn[Vn(t)];return r==qn||r!=Wn&&(Bn(e)?zn(e):!!e)},Vn=Kn.normalize=function(t){return String(t).replace($n,".").toLowerCase()},Hn=Kn.data={},Wn=Kn.NATIVE="N",qn=Kn.POLYFILL="P",Jn=Kn,Yn=u,Zn=c.f,Qn=Ye,Xn=tn,to=_t,eo=function(t,e,r){for(var n=Mn(e),o=Gn.f,i=Un.f,a=0;a<n.length;a++){var u=n[a];Dn(t,u)||r&&Dn(r,u)||o(t,u,i(e,u))}},ro=Jn,no=function(t,e){var r,n,o,i,a,u=t.target,c=t.global,s=t.stat;if(r=c?Yn:s?Yn[u]||to(u,{}):(Yn[u]||{}).prototype)for(n in e){if(i=e[n],o=t.dontCallGetSet?(a=Zn(r,n))&&a.value:r[n],!ro(c?n:u+(s?".":"#")+n,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;eo(i,o)}(t.sham||o&&o.sham)&&Qn(i,"sham",!0),Xn(r,n,i,t)}},oo=T,io=Array.isArray||function(t){return"Array"==oo(t)},ao=TypeError,uo=de,co=Re,so=S,fo=function(t,e,r){var n=uo(e);n in t?co.f(t,n,so(0,r)):t[n]=r},lo={};lo[ie("toStringTag")]="z";var ho="[object z]"===String(lo),po=ho,vo=H,yo=T,go=ie("toStringTag"),mo=Object,bo="Arguments"==yo(function(){return arguments}()),wo=po?yo:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=mo(t),go))?r:bo?yo(e):"Object"==(n=yo(e))&&vo(e.callee)?"Arguments":n},So=L,xo=s,Oo=H,Eo=wo,jo=fr,Lo=function(){},ko=[],Io=Q("Reflect","construct"),Po=/^\s*(?:class|function)\b/,To=So(Po.exec),Ro=!Po.exec(Lo),Ao=function(t){if(!Oo(t))return!1;try{return Io(Lo,ko,t),!0}catch(t){return!1}},Co=function(t){if(!Oo(t))return!1;switch(Eo(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Ro||!!To(Po,jo(t))}catch(t){return!0}};Co.sham=!0;var _o=!Io||xo((function(){var t;return Ao(Ao.call)||!Ao(Object)||!Ao((function(){t=!0}))||t}))?Co:Ao,No=io,Fo=_o,Do=J,Mo=ie("species"),Uo=Array,Go=function(t){var e;return No(t)&&(e=t.constructor,(Fo(e)&&(e===Uo||No(e.prototype))||Do(e)&&null===(e=e[Mo]))&&(e=void 0)),void 0===e?Uo:e},zo=function(t,e){return new(Go(t))(0===e?0:e)},Bo=s,$o=ut,Ko=ie("species"),Vo=function(t){return $o>=51||!Bo((function(){var e=[];return(e.constructor={})[Ko]=function(){return{foo:1}},1!==e[t](Boolean).foo}))},Ho=no,Wo=s,qo=io,Jo=J,Yo=zt,Zo=dn,Qo=function(t){if(t>9007199254740991)throw ao("Maximum allowed index exceeded");return t},Xo=fo,ti=zo,ei=Vo,ri=ut,ni=ie("isConcatSpreadable"),oi=ri>=51||!Wo((function(){var t=[];return t[ni]=!1,t.concat()[0]!==t})),ii=function(t){if(!Jo(t))return!1;var e=t[ni];return void 0!==e?!!e:qo(t)};Ho({target:"Array",proto:!0,arity:1,forced:!oi||!ei("concat")},{concat:function(t){var e,r,n,o,i,a=Yo(this),u=ti(a,0),c=0;for(e=-1,n=arguments.length;e<n;e++)if(ii(i=-1===e?a:arguments[e]))for(o=Zo(i),Qo(c+o),r=0;r<o;r++,c++)r in i&&Xo(u,c,i[r]);else Qo(c+1),Xo(u,c++,i);return u.length=c,u}});var ai=l,ui=Function.prototype,ci=ui.apply,si=ui.call,fi="object"==typeof Reflect&&Reflect.apply||(ai?si.bind(ci):function(){return si.apply(ci,arguments)}),li=L([].slice),hi=wo,pi=String,vi=function(t){if("Symbol"===hi(t))throw TypeError("Cannot convert a Symbol value to a string");return pi(t)},di=io,yi=H,gi=T,mi=vi,bi=L([].push),wi=no,Si=Q,xi=fi,Oi=v,Ei=L,ji=s,Li=H,ki=gt,Ii=li,Pi=function(t){if(yi(t))return t;if(di(t)){for(var e=t.length,r=[],n=0;n<e;n++){var o=t[n];"string"==typeof o?bi(r,o):"number"!=typeof o&&"Number"!=gi(o)&&"String"!=gi(o)||bi(r,mi(o))}var i=r.length,a=!0;return function(t,e){if(a)return a=!1,e;if(di(this))return e;for(var n=0;n<i;n++)if(r[n]===t)return e}}},Ti=lt,Ri=String,Ai=Si("JSON","stringify"),Ci=Ei(/./.exec),_i=Ei("".charAt),Ni=Ei("".charCodeAt),Fi=Ei("".replace),Di=Ei(1..toString),Mi=/[\uD800-\uDFFF]/g,Ui=/^[\uD800-\uDBFF]$/,Gi=/^[\uDC00-\uDFFF]$/,zi=!Ti||ji((function(){var t=Si("Symbol")();return"[null]"!=Ai([t])||"{}"!=Ai({a:t})||"{}"!=Ai(Object(t))})),Bi=ji((function(){return'"\\udf06\\ud834"'!==Ai("\udf06\ud834")||'"\\udead"'!==Ai("\udead")})),$i=function(t,e){var r=Ii(arguments),n=Pi(e);if(Li(n)||void 0!==t&&!ki(t))return r[1]=function(t,e){if(Li(n)&&(e=Oi(n,this,Ri(t),e)),!ki(e))return e},xi(Ai,null,r)},Ki=function(t,e,r){var n=_i(r,e-1),o=_i(r,e+1);return Ci(Ui,t)&&!Ci(Gi,o)||Ci(Gi,t)&&!Ci(Ui,n)?"\\u"+Di(Ni(t,0),16):t};Ai&&wi({target:"JSON",stat:!0,arity:3,forced:zi||Bi},{stringify:function(t,e,r){var n=Ii(arguments),o=xi(zi?$i:Ai,null,n);return Bi&&"string"==typeof o?Fi(o,Mi,Ki):o}});var Vi=wo,Hi=ho?{}.toString:function(){return"[object "+Vi(this)+"]"};ho||tn(Object.prototype,"toString",Hi,{unsafe:!0});var Wi,qi,Ji,Yi,Zi="undefined"!=typeof process&&"process"==T(process),Qi=L,Xi=Ot,ta=H,ea=String,ra=TypeError,na=function(t,e,r){try{return Qi(Xi(Object.getOwnPropertyDescriptor(t,e)[r]))}catch(t){}},oa=Fe,ia=function(t){if("object"==typeof t||ta(t))return t;throw ra("Can't set "+ea(t)+" as a prototype")},aa=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=na(Object.prototype,"__proto__","set"))(r,[]),e=r instanceof Array}catch(t){}return function(r,n){return oa(r),ia(n),e?t(r,n):r.__proto__=n,r}}():void 0),ua=Re.f,ca=Kt,sa=ie("toStringTag"),fa=function(t,e,r){t&&!r&&(t=t.prototype),t&&!ca(t,sa)&&ua(t,sa,{configurable:!0,value:e})},la=Ze.exports,ha=Re,pa=function(t,e,r){return r.get&&la(r.get,e,{getter:!0}),r.set&&la(r.set,e,{setter:!0}),ha.f(t,e,r)},va=Q,da=pa,ya=f,ga=ie("species"),ma=function(t){var e=va(t);ya&&e&&!e[ga]&&da(e,ga,{configurable:!0,get:function(){return this}})},ba=X,wa=TypeError,Sa=function(t,e){if(ba(e,t))return t;throw wa("Incorrect invocation")},xa=_o,Oa=bt,Ea=TypeError,ja=Fe,La=function(t){if(xa(t))return t;throw Ea(Oa(t)+" is not a constructor")},ka=F,Ia=ie("species"),Pa=T,Ta=L,Ra=function(t){if("Function"===Pa(t))return Ta(t)},Aa=Ot,Ca=l,_a=Ra(Ra.bind),Na=function(t,e){return Aa(t),void 0===e?t:Ca?_a(t,e):function(){return t.apply(e,arguments)}},Fa=Q("document","documentElement"),Da=TypeError,Ma=function(t,e){if(t<e)throw Da("Not enough arguments");return t},Ua=/(?:ipad|iphone|ipod).*applewebkit/i.test(tt),Ga=u,za=fi,Ba=Na,$a=H,Ka=Kt,Va=s,Ha=Fa,Wa=li,qa=be,Ja=Ma,Ya=Ua,Za=Zi,Qa=Ga.setImmediate,Xa=Ga.clearImmediate,tu=Ga.process,eu=Ga.Dispatch,ru=Ga.Function,nu=Ga.MessageChannel,ou=Ga.String,iu=0,au={},uu="onreadystatechange";Va((function(){Wi=Ga.location}));var cu=function(t){if(Ka(au,t)){var e=au[t];delete au[t],e()}},su=function(t){return function(){cu(t)}},fu=function(t){cu(t.data)},lu=function(t){Ga.postMessage(ou(t),Wi.protocol+"//"+Wi.host)};Qa&&Xa||(Qa=function(t){Ja(arguments.length,1);var e=$a(t)?t:ru(t),r=Wa(arguments,1);return au[++iu]=function(){za(e,void 0,r)},qi(iu),iu},Xa=function(t){delete au[t]},Za?qi=function(t){tu.nextTick(su(t))}:eu&&eu.now?qi=function(t){eu.now(su(t))}:nu&&!Ya?(Yi=(Ji=new nu).port2,Ji.port1.onmessage=fu,qi=Ba(Yi.postMessage,Yi)):Ga.addEventListener&&$a(Ga.postMessage)&&!Ga.importScripts&&Wi&&"file:"!==Wi.protocol&&!Va(lu)?(qi=lu,Ga.addEventListener("message",fu,!1)):qi=uu in qa("script")?function(t){Ha.appendChild(qa("script"))[uu]=function(){Ha.removeChild(this),cu(t)}}:function(t){setTimeout(su(t),0)});var hu={set:Qa,clear:Xa},pu=function(){this.head=null,this.tail=null};pu.prototype={add:function(t){var e={item:t,next:null},r=this.tail;r?r.next=e:this.head=e,this.tail=e},get:function(){var t=this.head;if(t)return null===(this.head=t.next)&&(this.tail=null),t.item}};var vu,du,yu,gu,mu,bu=pu,wu=/ipad|iphone|ipod/i.test(tt)&&"undefined"!=typeof Pebble,Su=/web0s(?!.*chrome)/i.test(tt),xu=u,Ou=Na,Eu=c.f,ju=hu.set,Lu=bu,ku=Ua,Iu=wu,Pu=Su,Tu=Zi,Ru=xu.MutationObserver||xu.WebKitMutationObserver,Au=xu.document,Cu=xu.process,_u=xu.Promise,Nu=Eu(xu,"queueMicrotask"),Fu=Nu&&Nu.value;if(!Fu){var Du=new Lu,Mu=function(){var t,e;for(Tu&&(t=Cu.domain)&&t.exit();e=Du.get();)try{e()}catch(t){throw Du.head&&vu(),t}t&&t.enter()};ku||Tu||Pu||!Ru||!Au?!Iu&&_u&&_u.resolve?((gu=_u.resolve(void 0)).constructor=_u,mu=Ou(gu.then,gu),vu=function(){mu(Mu)}):Tu?vu=function(){Cu.nextTick(Mu)}:(ju=Ou(ju,xu),vu=function(){ju(Mu)}):(du=!0,yu=Au.createTextNode(""),new Ru(Mu).observe(yu,{characterData:!0}),vu=function(){yu.data=du=!du}),Fu=function(t){Du.head||vu(),Du.add(t)}}var Uu=Fu,Gu=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}},zu=u.Promise,Bu="object"==typeof Deno&&Deno&&"object"==typeof Deno.version,$u=!Bu&&!Zi&&"object"==typeof window&&"object"==typeof document,Ku=u,Vu=zu,Hu=H,Wu=Jn,qu=fr,Ju=ie,Yu=$u,Zu=Bu,Qu=ut;Vu&&Vu.prototype;var Xu=Ju("species"),tc=!1,ec=Hu(Ku.PromiseRejectionEvent),rc=Wu("Promise",(function(){var t=qu(Vu),e=t!==String(Vu);if(!e&&66===Qu)return!0;if(!Qu||Qu<51||!/native code/.test(t)){var r=new Vu((function(t){t(1)})),n=function(t){t((function(){}),(function(){}))};if((r.constructor={})[Xu]=n,!(tc=r.then((function(){}))instanceof n))return!0}return!e&&(Yu||Zu)&&!ec})),nc={CONSTRUCTOR:rc,REJECTION_EVENT:ec,SUBCLASSING:tc},oc={},ic=Ot,ac=TypeError,uc=function(t){var e,r;this.promise=new t((function(t,n){if(void 0!==e||void 0!==r)throw ac("Bad Promise constructor");e=t,r=n})),this.resolve=ic(e),this.reject=ic(r)};oc.f=function(t){return new uc(t)};var cc,sc,fc,lc=no,hc=Zi,pc=u,vc=v,dc=tn,yc=aa,gc=fa,mc=ma,bc=Ot,wc=H,Sc=J,xc=Sa,Oc=function(t,e){var r,n=ja(t).constructor;return void 0===n||ka(r=ja(n)[Ia])?e:La(r)},Ec=hu.set,jc=Uu,Lc=function(t,e){try{1==arguments.length?console.error(t):console.error(t,e)}catch(t){}},kc=Gu,Ic=bu,Pc=Ar,Tc=zu,Rc=oc,Ac="Promise",Cc=nc.CONSTRUCTOR,_c=nc.REJECTION_EVENT,Nc=nc.SUBCLASSING,Fc=Pc.getterFor(Ac),Dc=Pc.set,Mc=Tc&&Tc.prototype,Uc=Tc,Gc=Mc,zc=pc.TypeError,Bc=pc.document,$c=pc.process,Kc=Rc.f,Vc=Kc,Hc=!!(Bc&&Bc.createEvent&&pc.dispatchEvent),Wc="unhandledrejection",qc=function(t){var e;return!(!Sc(t)||!wc(e=t.then))&&e},Jc=function(t,e){var r,n,o,i=e.value,a=1==e.state,u=a?t.ok:t.fail,c=t.resolve,s=t.reject,f=t.domain;try{u?(a||(2===e.rejection&&ts(e),e.rejection=1),!0===u?r=i:(f&&f.enter(),r=u(i),f&&(f.exit(),o=!0)),r===t.promise?s(zc("Promise-chain cycle")):(n=qc(r))?vc(n,r,c,s):c(r)):s(i)}catch(t){f&&!o&&f.exit(),s(t)}},Yc=function(t,e){t.notified||(t.notified=!0,jc((function(){for(var r,n=t.reactions;r=n.get();)Jc(r,t);t.notified=!1,e&&!t.rejection&&Qc(t)})))},Zc=function(t,e,r){var n,o;Hc?((n=Bc.createEvent("Event")).promise=e,n.reason=r,n.initEvent(t,!1,!0),pc.dispatchEvent(n)):n={promise:e,reason:r},!_c&&(o=pc["on"+t])?o(n):t===Wc&&Lc("Unhandled promise rejection",r)},Qc=function(t){vc(Ec,pc,(function(){var e,r=t.facade,n=t.value;if(Xc(t)&&(e=kc((function(){hc?$c.emit("unhandledRejection",n,r):Zc(Wc,r,n)})),t.rejection=hc||Xc(t)?2:1,e.error))throw e.value}))},Xc=function(t){return 1!==t.rejection&&!t.parent},ts=function(t){vc(Ec,pc,(function(){var e=t.facade;hc?$c.emit("rejectionHandled",e):Zc("rejectionhandled",e,t.value)}))},es=function(t,e,r){return function(n){t(e,n,r)}},rs=function(t,e,r){t.done||(t.done=!0,r&&(t=r),t.value=e,t.state=2,Yc(t,!0))},ns=function(t,e,r){if(!t.done){t.done=!0,r&&(t=r);try{if(t.facade===e)throw zc("Promise can't be resolved itself");var n=qc(e);n?jc((function(){var r={done:!1};try{vc(n,e,es(ns,r,t),es(rs,r,t))}catch(e){rs(r,e,t)}})):(t.value=e,t.state=1,Yc(t,!1))}catch(e){rs({done:!1},e,t)}}};if(Cc&&(Gc=(Uc=function(t){xc(this,Gc),bc(t),vc(cc,this);var e=Fc(this);try{t(es(ns,e),es(rs,e))}catch(t){rs(e,t)}}).prototype,(cc=function(t){Dc(this,{type:Ac,done:!1,notified:!1,parent:!1,reactions:new Ic,rejection:!1,state:0,value:void 0})}).prototype=dc(Gc,"then",(function(t,e){var r=Fc(this),n=Kc(Oc(this,Uc));return r.parent=!0,n.ok=!wc(t)||t,n.fail=wc(e)&&e,n.domain=hc?$c.domain:void 0,0==r.state?r.reactions.add(n):jc((function(){Jc(n,r)})),n.promise})),sc=function(){var t=new cc,e=Fc(t);this.promise=t,this.resolve=es(ns,e),this.reject=es(rs,e)},Rc.f=Kc=function(t){return t===Uc||undefined===t?new sc(t):Vc(t)},wc(Tc)&&Mc!==Object.prototype)){fc=Mc.then,Nc||dc(Mc,"then",(function(t,e){var r=this;return new Uc((function(t,e){vc(fc,r,t,e)})).then(t,e)}),{unsafe:!0});try{delete Mc.constructor}catch(t){}yc&&yc(Mc,Gc)}lc({global:!0,constructor:!0,wrap:!0,forced:Cc},{Promise:Uc}),gc(Uc,Ac,!1),mc(Ac);var os={},is=os,as=ie("iterator"),us=Array.prototype,cs=wo,ss=Lt,fs=F,ls=os,hs=ie("iterator"),ps=function(t){if(!fs(t))return ss(t,hs)||ss(t,"@@iterator")||ls[cs(t)]},vs=v,ds=Ot,ys=Fe,gs=bt,ms=ps,bs=TypeError,ws=function(t,e){var r=arguments.length<2?ms(t):e;if(ds(r))return ys(vs(r,t));throw bs(gs(t)+" is not iterable")},Ss=v,xs=Fe,Os=Lt,Es=Na,js=v,Ls=Fe,ks=bt,Is=function(t){return void 0!==t&&(is.Array===t||us[as]===t)},Ps=dn,Ts=X,Rs=ws,As=ps,Cs=function(t,e,r){var n,o;xs(t);try{if(!(n=Os(t,"return"))){if("throw"===e)throw r;return r}n=Ss(n,t)}catch(t){o=!0,n=t}if("throw"===e)throw r;if(o)throw n;return xs(n),r},_s=TypeError,Ns=function(t,e){this.stopped=t,this.result=e},Fs=Ns.prototype,Ds=function(t,e,r){var n,o,i,a,u,c,s,f=r&&r.that,l=!(!r||!r.AS_ENTRIES),h=!(!r||!r.IS_RECORD),p=!(!r||!r.IS_ITERATOR),v=!(!r||!r.INTERRUPTED),d=Es(e,f),y=function(t){return n&&Cs(n,"normal",t),new Ns(!0,t)},g=function(t){return l?(Ls(t),v?d(t[0],t[1],y):d(t[0],t[1])):v?d(t,y):d(t)};if(h)n=t.iterator;else if(p)n=t;else{if(!(o=As(t)))throw _s(ks(t)+" is not iterable");if(Is(o)){for(i=0,a=Ps(t);a>i;i++)if((u=g(t[i]))&&Ts(Fs,u))return u;return new Ns(!1)}n=Rs(t,o)}for(c=h?t.next:n.next;!(s=js(c,n)).done;){try{u=g(s.value)}catch(t){Cs(n,"throw",t)}if("object"==typeof u&&u&&Ts(Fs,u))return u}return new Ns(!1)},Ms=ie("iterator"),Us=!1;try{var Gs=0,zs={next:function(){return{done:!!Gs++}},return:function(){Us=!0}};zs[Ms]=function(){return this},Array.from(zs,(function(){throw 2}))}catch(t){}var Bs=function(t,e){if(!e&&!Us)return!1;var r=!1;try{var n={};n[Ms]=function(){return{next:function(){return{done:r=!0}}}},t(n)}catch(t){}return r},$s=zu,Ks=nc.CONSTRUCTOR||!Bs((function(t){$s.all(t).then(void 0,(function(){}))})),Vs=v,Hs=Ot,Ws=oc,qs=Gu,Js=Ds;no({target:"Promise",stat:!0,forced:Ks},{all:function(t){var e=this,r=Ws.f(e),n=r.resolve,o=r.reject,i=qs((function(){var r=Hs(e.resolve),i=[],a=0,u=1;Js(t,(function(t){var c=a++,s=!1;u++,Vs(r,e,t).then((function(t){s||(s=!0,i[c]=t,--u||n(i))}),o)})),--u||n(i)}));return i.error&&o(i.value),r.promise}});var Ys=no,Zs=nc.CONSTRUCTOR,Qs=zu,Xs=Q,tf=H,ef=tn,rf=Qs&&Qs.prototype;if(Ys({target:"Promise",proto:!0,forced:Zs,real:!0},{catch:function(t){return this.then(void 0,t)}}),tf(Qs)){var nf=Xs("Promise").prototype.catch;rf.catch!==nf&&ef(rf,"catch",nf,{unsafe:!0})}var of=v,af=Ot,uf=oc,cf=Gu,sf=Ds;no({target:"Promise",stat:!0,forced:Ks},{race:function(t){var e=this,r=uf.f(e),n=r.reject,o=cf((function(){var o=af(e.resolve);sf(t,(function(t){of(o,e,t).then(r.resolve,n)}))}));return o.error&&n(o.value),r.promise}});var ff=v,lf=oc;no({target:"Promise",stat:!0,forced:nc.CONSTRUCTOR},{reject:function(t){var e=lf.f(this);return ff(e.reject,void 0,t),e.promise}});var hf=Fe,pf=J,vf=oc,df=no,yf=nc.CONSTRUCTOR,gf=function(t,e){if(hf(t),pf(e)&&e.constructor===t)return e;var r=vf.f(t);return(0,r.resolve)(e),r.promise};Q("Promise"),df({target:"Promise",stat:!0,forced:yf},{resolve:function(t){return gf(this,t)}});var mf={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},bf=be("span").classList,wf=bf&&bf.constructor&&bf.constructor.prototype,Sf=wf===Object.prototype?void 0:wf,xf=Na,Of=N,Ef=zt,jf=dn,Lf=zo,kf=L([].push),If=function(t){var e=1==t,r=2==t,n=3==t,o=4==t,i=6==t,a=7==t,u=5==t||i;return function(c,s,f,l){for(var h,p,v=Ef(c),d=Of(v),y=xf(s,f),g=jf(d),m=0,b=l||Lf,w=e?b(c,g):r||a?b(c,0):void 0;g>m;m++)if((u||m in d)&&(p=y(h=d[m],m,v),t))if(e)w[m]=p;else if(p)switch(t){case 3:return!0;case 5:return h;case 6:return m;case 2:kf(w,h)}else switch(t){case 4:return!1;case 7:kf(w,h)}return i?-1:n||o?o:w}},Pf={forEach:If(0),map:If(1),filter:If(2),some:If(3),every:If(4),find:If(5),findIndex:If(6),filterReject:If(7)},Tf=s,Rf=Pf.forEach,Af=function(t,e){var r=[][t];return!!r&&Tf((function(){r.call(null,e||function(){return 1},1)}))},Cf=Af("forEach")?[].forEach:function(t){return Rf(this,t,arguments.length>1?arguments[1]:void 0)},_f=u,Nf=mf,Ff=Sf,Df=Cf,Mf=Ye,Uf=function(t){if(t&&t.forEach!==Df)try{Mf(t,"forEach",Df)}catch(e){t.forEach=Df}};for(var Gf in Nf)Nf[Gf]&&Uf(_f[Gf]&&_f[Gf].prototype);Uf(Ff);var zf=Ln,Bf=kn,$f=Object.keys||function(t){return zf(t,Bf)},Kf=zt,Vf=$f;no({target:"Object",stat:!0,forced:s((function(){Vf(1)}))},{keys:function(t){return Vf(Kf(t))}});var Hf={},Wf=f,qf=Ae,Jf=Re,Yf=Fe,Zf=B,Qf=$f;Hf.f=Wf&&!qf?Object.defineProperties:function(t,e){Yf(t);for(var r,n=Zf(e),o=Qf(e),i=o.length,a=0;i>a;)Jf.f(t,r=o[a++],n[r]);return t};var Xf,tl=Fe,el=Hf,rl=kn,nl=mr,ol=Fa,il=be,al="prototype",ul="script",cl=gr("IE_PROTO"),sl=function(){},fl=function(t){return"<"+ul+">"+t+"</"+ul+">"},ll=function(t){t.write(fl("")),t.close();var e=t.parentWindow.Object;return t=null,e},hl=function(){try{Xf=new ActiveXObject("htmlfile")}catch(t){}var t,e,r;hl="undefined"!=typeof document?document.domain&&Xf?ll(Xf):(e=il("iframe"),r="java"+ul+":",e.style.display="none",ol.appendChild(e),e.src=String(r),(t=e.contentWindow.document).open(),t.write(fl("document.F=Object")),t.close(),t.F):ll(Xf);for(var n=rl.length;n--;)delete hl[al][rl[n]];return hl()};nl[cl]=!0;var pl=Object.create||function(t,e){var r;return null!==t?(sl[al]=tl(t),r=new sl,sl[al]=null,r[cl]=t):r=hl(),void 0===e?r:el.f(r,e)},vl=ie,dl=pl,yl=Re.f,gl=vl("unscopables"),ml=Array.prototype;null==ml[gl]&&yl(ml,gl,{configurable:!0,value:dl(null)});var bl,wl,Sl,xl=!s((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})),Ol=Kt,El=H,jl=zt,Ll=xl,kl=gr("IE_PROTO"),Il=Object,Pl=Il.prototype,Tl=Ll?Il.getPrototypeOf:function(t){var e=jl(t);if(Ol(e,kl))return e[kl];var r=e.constructor;return El(r)&&e instanceof r?r.prototype:e instanceof Il?Pl:null},Rl=s,Al=H,Cl=J,_l=Tl,Nl=tn,Fl=ie("iterator"),Dl=!1;[].keys&&("next"in(Sl=[].keys())?(wl=_l(_l(Sl)))!==Object.prototype&&(bl=wl):Dl=!0);var Ml=!Cl(bl)||Rl((function(){var t={};return bl[Fl].call(t)!==t}));Ml&&(bl={}),Al(bl[Fl])||Nl(bl,Fl,(function(){return this}));var Ul={IteratorPrototype:bl,BUGGY_SAFARI_ITERATORS:Dl},Gl=Ul.IteratorPrototype,zl=pl,Bl=S,$l=fa,Kl=os,Vl=function(){return this},Hl=function(t,e,r,n){var o=e+" Iterator";return t.prototype=zl(Gl,{next:Bl(+!n,r)}),$l(t,o,!1),Kl[o]=Vl,t},Wl=no,ql=v,Jl=H,Yl=Hl,Zl=Tl,Ql=aa,Xl=fa,th=Ye,eh=tn,rh=os,nh=nr.PROPER,oh=nr.CONFIGURABLE,ih=Ul.IteratorPrototype,ah=Ul.BUGGY_SAFARI_ITERATORS,uh=ie("iterator"),ch="keys",sh="values",fh="entries",lh=function(){return this},hh=function(t,e,r,n,o,i,a){Yl(r,e,n);var u,c,s,f=function(t){if(t===o&&d)return d;if(!ah&&t in p)return p[t];switch(t){case ch:case sh:case fh:return function(){return new r(this,t)}}return function(){return new r(this)}},l=e+" Iterator",h=!1,p=t.prototype,v=p[uh]||p["@@iterator"]||o&&p[o],d=!ah&&v||f(o),y="Array"==e&&p.entries||v;if(y&&(u=Zl(y.call(new t)))!==Object.prototype&&u.next&&(Zl(u)!==ih&&(Ql?Ql(u,ih):Jl(u[uh])||eh(u,uh,lh)),Xl(u,l,!0)),nh&&o==sh&&v&&v.name!==sh&&(oh?th(p,"name",sh):(h=!0,d=function(){return ql(v,this)})),o)if(c={values:f(sh),keys:i?d:f(ch),entries:f(fh)},a)for(s in c)(ah||h||!(s in p))&&eh(p,s,c[s]);else Wl({target:e,proto:!0,forced:ah||h},c);return p[uh]!==d&&eh(p,uh,d,{name:o}),rh[e]=d,c},ph=function(t,e){return{value:t,done:e}},vh=B,dh=function(t){ml[gl][t]=!0},yh=os,gh=Ar,mh=Re.f,bh=hh,wh=ph,Sh=f,xh="Array Iterator",Oh=gh.set,Eh=gh.getterFor(xh),jh=bh(Array,"Array",(function(t,e){Oh(this,{type:xh,target:vh(t),index:0,kind:e})}),(function(){var t=Eh(this),e=t.target,r=t.kind,n=t.index++;return!e||n>=e.length?(t.target=void 0,wh(void 0,!0)):wh("keys"==r?n:"values"==r?e[n]:[n,e[n]],!1)}),"values"),Lh=yh.Arguments=yh.Array;if(dh("keys"),dh("values"),dh("entries"),Sh&&"values"!==Lh.name)try{mh(Lh,"name",{value:"values"})}catch(t){}var kh={exports:{}},Ih={},Ph=fn,Th=dn,Rh=fo,Ah=Array,Ch=Math.max,_h=function(t,e,r){for(var n=Th(t),o=Ph(e,n),i=Ph(void 0===r?n:r,n),a=Ah(Ch(i-o,0)),u=0;o<i;o++,u++)Rh(a,u,t[o]);return a.length=u,a},Nh=T,Fh=B,Dh=en.f,Mh=_h,Uh="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];Ih.f=function(t){return Uh&&"Window"==Nh(t)?function(t){try{return Dh(t)}catch(t){return Mh(Uh)}}(t):Dh(Fh(t))};var Gh=s((function(){if("function"==typeof ArrayBuffer){var t=new ArrayBuffer(8);Object.isExtensible(t)&&Object.defineProperty(t,"a",{value:8})}})),zh=s,Bh=J,$h=T,Kh=Gh,Vh=Object.isExtensible,Hh=zh((function(){Vh(1)}))||Kh?function(t){return!!Bh(t)&&((!Kh||"ArrayBuffer"!=$h(t))&&(!Vh||Vh(t)))}:Vh,Wh=!s((function(){return Object.isExtensible(Object.preventExtensions({}))})),qh=no,Jh=L,Yh=mr,Zh=J,Qh=Kt,Xh=Re.f,tp=en,ep=Ih,rp=Hh,np=Wh,op=!1,ip=Jt("meta"),ap=0,up=function(t){Xh(t,ip,{value:{objectID:"O"+ap++,weakData:{}}})},cp=kh.exports={enable:function(){cp.enable=function(){},op=!0;var t=tp.f,e=Jh([].splice),r={};r[ip]=1,t(r).length&&(tp.f=function(r){for(var n=t(r),o=0,i=n.length;o<i;o++)if(n[o]===ip){e(n,o,1);break}return n},qh({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:ep.f}))},fastKey:function(t,e){if(!Zh(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!Qh(t,ip)){if(!rp(t))return"F";if(!e)return"E";up(t)}return t[ip].objectID},getWeakData:function(t,e){if(!Qh(t,ip)){if(!rp(t))return!0;if(!e)return!1;up(t)}return t[ip].weakData},onFreeze:function(t){return np&&op&&rp(t)&&!Qh(t,ip)&&up(t),t}};Yh[ip]=!0;var sp=H,fp=J,lp=aa,hp=no,pp=u,vp=L,dp=Jn,yp=tn,gp=kh.exports,mp=Ds,bp=Sa,wp=H,Sp=F,xp=J,Op=s,Ep=Bs,jp=fa,Lp=function(t,e,r){var n,o;return lp&&sp(n=e.constructor)&&n!==r&&fp(o=n.prototype)&&o!==r.prototype&&lp(t,o),t},kp=tn,Ip=function(t,e,r){for(var n in e)kp(t,n,e[n],r);return t},Pp=pl,Tp=pa,Rp=Ip,Ap=Na,Cp=Sa,_p=F,Np=Ds,Fp=hh,Dp=ph,Mp=ma,Up=f,Gp=kh.exports.fastKey,zp=Ar.set,Bp=Ar.getterFor,$p={getConstructor:function(t,e,r,n){var o=t((function(t,o){Cp(t,i),zp(t,{type:e,index:Pp(null),first:void 0,last:void 0,size:0}),Up||(t.size=0),_p(o)||Np(o,t[n],{that:t,AS_ENTRIES:r})})),i=o.prototype,a=Bp(e),u=function(t,e,r){var n,o,i=a(t),u=c(t,e);return u?u.value=r:(i.last=u={index:o=Gp(e,!0),key:e,value:r,previous:n=i.last,next:void 0,removed:!1},i.first||(i.first=u),n&&(n.next=u),Up?i.size++:t.size++,"F"!==o&&(i.index[o]=u)),t},c=function(t,e){var r,n=a(t),o=Gp(e);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key==e)return r};return Rp(i,{clear:function(){for(var t=a(this),e=t.index,r=t.first;r;)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete e[r.index],r=r.next;t.first=t.last=void 0,Up?t.size=0:this.size=0},delete:function(t){var e=this,r=a(e),n=c(e,t);if(n){var o=n.next,i=n.previous;delete r.index[n.index],n.removed=!0,i&&(i.next=o),o&&(o.previous=i),r.first==n&&(r.first=o),r.last==n&&(r.last=i),Up?r.size--:e.size--}return!!n},forEach:function(t){for(var e,r=a(this),n=Ap(t,arguments.length>1?arguments[1]:void 0);e=e?e.next:r.first;)for(n(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!c(this,t)}}),Rp(i,r?{get:function(t){var e=c(this,t);return e&&e.value},set:function(t,e){return u(this,0===t?0:t,e)}}:{add:function(t){return u(this,t=0===t?0:t,t)}}),Up&&Tp(i,"size",{configurable:!0,get:function(){return a(this).size}}),o},setStrong:function(t,e,r){var n=e+" Iterator",o=Bp(e),i=Bp(n);Fp(t,e,(function(t,e){zp(this,{type:n,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=i(this),e=t.kind,r=t.last;r&&r.removed;)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?Dp("keys"==e?r.key:"values"==e?r.value:[r.key,r.value],!1):(t.target=void 0,Dp(void 0,!0))}),r?"entries":"values",!r,!0),Mp(e)}};(function(t,e,r){var n=-1!==t.indexOf("Map"),o=-1!==t.indexOf("Weak"),i=n?"set":"add",a=pp[t],u=a&&a.prototype,c=a,s={},f=function(t){var e=vp(u[t]);yp(u,t,"add"==t?function(t){return e(this,0===t?0:t),this}:"delete"==t?function(t){return!(o&&!xp(t))&&e(this,0===t?0:t)}:"get"==t?function(t){return o&&!xp(t)?void 0:e(this,0===t?0:t)}:"has"==t?function(t){return!(o&&!xp(t))&&e(this,0===t?0:t)}:function(t,r){return e(this,0===t?0:t,r),this})};if(dp(t,!wp(a)||!(o||u.forEach&&!Op((function(){(new a).entries().next()})))))c=r.getConstructor(e,t,n,i),gp.enable();else if(dp(t,!0)){var l=new c,h=l[i](o?{}:-0,1)!=l,p=Op((function(){l.has(1)})),v=Ep((function(t){new a(t)})),d=!o&&Op((function(){for(var t=new a,e=5;e--;)t[i](e,e);return!t.has(-0)}));v||((c=e((function(t,e){bp(t,u);var r=Lp(new a,t,c);return Sp(e)||mp(e,r[i],{that:r,AS_ENTRIES:n}),r}))).prototype=u,u.constructor=c),(p||d)&&(f("delete"),f("has"),n&&f("get")),(d||h)&&f(i),o&&u.clear&&delete u.clear}s[t]=c,hp({global:!0,constructor:!0,forced:c!=a},s),jp(c,t),o||r.setStrong(c,t,n)})("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),$p);var Kp=L,Vp=an,Hp=vi,Wp=U,qp=Kp("".charAt),Jp=Kp("".charCodeAt),Yp=Kp("".slice),Zp=function(t){return function(e,r){var n,o,i=Hp(Wp(e)),a=Vp(r),u=i.length;return a<0||a>=u?t?"":void 0:(n=Jp(i,a))<55296||n>56319||a+1===u||(o=Jp(i,a+1))<56320||o>57343?t?qp(i,a):n:t?Yp(i,a,a+2):o-56320+(n-55296<<10)+65536}},Qp={codeAt:Zp(!1),charAt:Zp(!0)},Xp=Qp.charAt,tv=vi,ev=Ar,rv=hh,nv=ph,ov="String Iterator",iv=ev.set,av=ev.getterFor(ov);rv(String,"String",(function(t){iv(this,{type:ov,string:tv(t),index:0})}),(function(){var t,e=av(this),r=e.string,n=e.index;return n>=r.length?nv(void 0,!0):(t=Xp(r,n),e.index+=t.length,nv(t,!1))}));var uv=u,cv=mf,sv=Sf,fv=jh,lv=Ye,hv=ie,pv=hv("iterator"),vv=hv("toStringTag"),dv=fv.values,yv=function(t,e){if(t){if(t[pv]!==dv)try{lv(t,pv,dv)}catch(e){t[pv]=dv}if(t[vv]||lv(t,vv,e),cv[e])for(var r in fv)if(t[r]!==fv[r])try{lv(t,r,fv[r])}catch(e){t[r]=fv[r]}}};for(var gv in cv)yv(uv[gv]&&uv[gv].prototype,gv);yv(sv,"DOMTokenList");var mv=s,bv=f,wv=ie("iterator"),Sv=!mv((function(){var t=new URL("b?a=1&b=2&c=3","http://a"),e=t.searchParams,r="";return t.pathname="c%20d",e.forEach((function(t,n){e.delete("b"),r+=n+t})),!e.size&&!bv||!e.sort||"http://a/c%20d?a=1&c=3"!==t.href||"3"!==e.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!e[wv]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==r||"x"!==new URL("http://x",void 0).host})),xv=_h,Ov=Math.floor,Ev=function(t,e){var r=t.length,n=Ov(r/2);return r<8?jv(t,e):Lv(t,Ev(xv(t,0,n),e),Ev(xv(t,n),e),e)},jv=function(t,e){for(var r,n,o=t.length,i=1;i<o;){for(n=i,r=t[i];n&&e(t[n-1],r)>0;)t[n]=t[--n];n!==i++&&(t[n]=r)}return t},Lv=function(t,e,r,n){for(var o=e.length,i=r.length,a=0,u=0;a<o||u<i;)t[a+u]=a<o&&u<i?n(e[a],r[u])<=0?e[a++]:r[u++]:a<o?e[a++]:r[u++];return t},kv=no,Iv=u,Pv=v,Tv=L,Rv=f,Av=Sv,Cv=tn,_v=pa,Nv=Ip,Fv=fa,Dv=Hl,Mv=Ar,Uv=Sa,Gv=H,zv=Kt,Bv=Na,$v=wo,Kv=Fe,Vv=J,Hv=vi,Wv=pl,qv=S,Jv=ws,Yv=ps,Zv=Ma,Qv=Ev,Xv=ie("iterator"),td="URLSearchParams",ed=td+"Iterator",rd=Mv.set,nd=Mv.getterFor(td),od=Mv.getterFor(ed),id=Object.getOwnPropertyDescriptor,ad=function(t){if(!Rv)return Iv[t];var e=id(Iv,t);return e&&e.value},ud=ad("fetch"),cd=ad("Request"),sd=ad("Headers"),fd=cd&&cd.prototype,ld=sd&&sd.prototype,hd=Iv.RegExp,pd=Iv.TypeError,vd=Iv.decodeURIComponent,dd=Iv.encodeURIComponent,yd=Tv("".charAt),gd=Tv([].join),md=Tv([].push),bd=Tv("".replace),wd=Tv([].shift),Sd=Tv([].splice),xd=Tv("".split),Od=Tv("".slice),Ed=/\+/g,jd=Array(4),Ld=function(t){return jd[t-1]||(jd[t-1]=hd("((?:%[\\da-f]{2}){"+t+"})","gi"))},kd=function(t){try{return vd(t)}catch(e){return t}},Id=function(t){var e=bd(t,Ed," "),r=4;try{return vd(e)}catch(t){for(;r;)e=bd(e,Ld(r--),kd);return e}},Pd=/[!'()~]|%20/g,Td={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},Rd=function(t){return Td[t]},Ad=function(t){return bd(dd(t),Pd,Rd)},Cd=Dv((function(t,e){rd(this,{type:ed,iterator:Jv(nd(t).entries),kind:e})}),"Iterator",(function(){var t=od(this),e=t.kind,r=t.iterator.next(),n=r.value;return r.done||(r.value="keys"===e?n.key:"values"===e?n.value:[n.key,n.value]),r}),!0),_d=function(t){this.entries=[],this.url=null,void 0!==t&&(Vv(t)?this.parseObject(t):this.parseQuery("string"==typeof t?"?"===yd(t,0)?Od(t,1):t:Hv(t)))};_d.prototype={type:td,bindURL:function(t){this.url=t,this.update()},parseObject:function(t){var e,r,n,o,i,a,u,c=Yv(t);if(c)for(r=(e=Jv(t,c)).next;!(n=Pv(r,e)).done;){if(i=(o=Jv(Kv(n.value))).next,(a=Pv(i,o)).done||(u=Pv(i,o)).done||!Pv(i,o).done)throw pd("Expected sequence with length 2");md(this.entries,{key:Hv(a.value),value:Hv(u.value)})}else for(var s in t)zv(t,s)&&md(this.entries,{key:s,value:Hv(t[s])})},parseQuery:function(t){if(t)for(var e,r,n=xd(t,"&"),o=0;o<n.length;)(e=n[o++]).length&&(r=xd(e,"="),md(this.entries,{key:Id(wd(r)),value:Id(gd(r,"="))}))},serialize:function(){for(var t,e=this.entries,r=[],n=0;n<e.length;)t=e[n++],md(r,Ad(t.key)+"="+Ad(t.value));return gd(r,"&")},update:function(){this.entries.length=0,this.parseQuery(this.url.query)},updateURL:function(){this.url&&this.url.update()}};var Nd=function(){Uv(this,Fd);var t=rd(this,new _d(arguments.length>0?arguments[0]:void 0));Rv||(this.length=t.entries.length)},Fd=Nd.prototype;if(Nv(Fd,{append:function(t,e){Zv(arguments.length,2);var r=nd(this);md(r.entries,{key:Hv(t),value:Hv(e)}),Rv||this.length++,r.updateURL()},delete:function(t){Zv(arguments.length,1);for(var e=nd(this),r=e.entries,n=Hv(t),o=0;o<r.length;)r[o].key===n?Sd(r,o,1):o++;Rv||(this.length=r.length),e.updateURL()},get:function(t){Zv(arguments.length,1);for(var e=nd(this).entries,r=Hv(t),n=0;n<e.length;n++)if(e[n].key===r)return e[n].value;return null},getAll:function(t){Zv(arguments.length,1);for(var e=nd(this).entries,r=Hv(t),n=[],o=0;o<e.length;o++)e[o].key===r&&md(n,e[o].value);return n},has:function(t){Zv(arguments.length,1);for(var e=nd(this).entries,r=Hv(t),n=0;n<e.length;)if(e[n++].key===r)return!0;return!1},set:function(t,e){Zv(arguments.length,1);for(var r,n=nd(this),o=n.entries,i=!1,a=Hv(t),u=Hv(e),c=0;c<o.length;c++)(r=o[c]).key===a&&(i?Sd(o,c--,1):(i=!0,r.value=u));i||md(o,{key:a,value:u}),Rv||(this.length=o.length),n.updateURL()},sort:function(){var t=nd(this);Qv(t.entries,(function(t,e){return t.key>e.key?1:-1})),t.updateURL()},forEach:function(t){for(var e,r=nd(this).entries,n=Bv(t,arguments.length>1?arguments[1]:void 0),o=0;o<r.length;)n((e=r[o++]).value,e.key,this)},keys:function(){return new Cd(this,"keys")},values:function(){return new Cd(this,"values")},entries:function(){return new Cd(this,"entries")}},{enumerable:!0}),Cv(Fd,Xv,Fd.entries,{name:"entries"}),Cv(Fd,"toString",(function(){return nd(this).serialize()}),{enumerable:!0}),Rv&&_v(Fd,"size",{get:function(){return nd(this).entries.length},configurable:!0,enumerable:!0}),Fv(Nd,td),kv({global:!0,constructor:!0,forced:!Av},{URLSearchParams:Nd}),!Av&&Gv(sd)){var Dd=Tv(ld.has),Md=Tv(ld.set),Ud=function(t){if(Vv(t)){var e,r=t.body;if($v(r)===td)return e=t.headers?new sd(t.headers):new sd,Dd(e,"content-type")||Md(e,"content-type","application/x-www-form-urlencoded;charset=UTF-8"),Wv(t,{body:qv(0,Hv(r)),headers:qv(0,e)})}return t};if(Gv(ud)&&kv({global:!0,enumerable:!0,dontCallGetSet:!0,forced:!0},{fetch:function(t){return ud(t,arguments.length>1?Ud(arguments[1]):{})}}),Gv(cd)){var Gd=function(t){return Uv(this,fd),new cd(t,arguments.length>1?Ud(arguments[1]):{})};fd.constructor=Gd,Gd.prototype=fd,kv({global:!0,constructor:!0,dontCallGetSet:!0,forced:!0},{Request:Gd})}}var zd,Bd,$d=Fe,Kd=s,Vd=u.RegExp,Hd=Kd((function(){var t=Vd("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),Wd=Hd||Kd((function(){return!Vd("a","y").sticky})),qd={BROKEN_CARET:Hd||Kd((function(){var t=Vd("^r","gy");return t.lastIndex=2,null!=t.exec("str")})),MISSED_STICKY:Wd,UNSUPPORTED_Y:Hd},Jd=s,Yd=u.RegExp,Zd=Jd((function(){var t=Yd(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)})),Qd=s,Xd=u.RegExp,ty=Qd((function(){var t=Xd("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")})),ey=v,ry=L,ny=vi,oy=function(){var t=$d(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e},iy=qd,ay=Rt.exports,uy=pl,cy=Ar.get,sy=Zd,fy=ty,ly=ay("native-string-replace",String.prototype.replace),hy=RegExp.prototype.exec,py=hy,vy=ry("".charAt),dy=ry("".indexOf),yy=ry("".replace),gy=ry("".slice),my=(Bd=/b*/g,ey(hy,zd=/a/,"a"),ey(hy,Bd,"a"),0!==zd.lastIndex||0!==Bd.lastIndex),by=iy.BROKEN_CARET,wy=void 0!==/()??/.exec("")[1];(my||wy||by||sy||fy)&&(py=function(t){var e,r,n,o,i,a,u,c=this,s=cy(c),f=ny(t),l=s.raw;if(l)return l.lastIndex=c.lastIndex,e=ey(py,l,f),c.lastIndex=l.lastIndex,e;var h=s.groups,p=by&&c.sticky,v=ey(oy,c),d=c.source,y=0,g=f;if(p&&(v=yy(v,"y",""),-1===dy(v,"g")&&(v+="g"),g=gy(f,c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==vy(f,c.lastIndex-1))&&(d="(?: "+d+")",g=" "+g,y++),r=new RegExp("^(?:"+d+")",v)),wy&&(r=new RegExp("^"+d+"$(?!\\s)",v)),my&&(n=c.lastIndex),o=ey(hy,p?r:c,g),p?o?(o.input=gy(o.input,y),o[0]=gy(o[0],y),o.index=c.lastIndex,c.lastIndex+=o[0].length):c.lastIndex=0:my&&o&&(c.lastIndex=c.global?o.index+o[0].length:n),wy&&o&&o.length>1&&ey(ly,o[0],r,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)})),o&&h)for(o.groups=a=uy(null),i=0;i<h.length;i++)a[(u=h[i])[0]]=o[u[1]];return o});var Sy=py;no({target:"RegExp",proto:!0,forced:/./.exec!==Sy},{exec:Sy});var xy=Ra,Oy=tn,Ey=Sy,jy=s,Ly=ie,ky=Ye,Iy=Ly("species"),Py=RegExp.prototype,Ty=Qp.charAt,Ry=L,Ay=zt,Cy=Math.floor,_y=Ry("".charAt),Ny=Ry("".replace),Fy=Ry("".slice),Dy=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,My=/\$([$&'`]|\d{1,2})/g,Uy=v,Gy=Fe,zy=H,By=T,$y=Sy,Ky=TypeError,Vy=fi,Hy=v,Wy=L,qy=function(t,e,r,n){var o=Ly(t),i=!jy((function(){var e={};return e[o]=function(){return 7},7!=""[t](e)})),a=i&&!jy((function(){var e=!1,r=/a/;return"split"===t&&((r={}).constructor={},r.constructor[Iy]=function(){return r},r.flags="",r[o]=/./[o]),r.exec=function(){return e=!0,null},r[o](""),!e}));if(!i||!a||r){var u=xy(/./[o]),c=e(o,""[t],(function(t,e,r,n,o){var a=xy(t),c=e.exec;return c===Ey||c===Py.exec?i&&!o?{done:!0,value:u(e,r,n)}:{done:!0,value:a(r,e,n)}:{done:!1}}));Oy(String.prototype,t,c[0]),Oy(Py,o,c[1])}n&&ky(Py[o],"sham",!0)},Jy=s,Yy=Fe,Zy=H,Qy=F,Xy=an,tg=pn,eg=vi,rg=U,ng=function(t,e,r){return e+(r?Ty(t,e).length:1)},og=Lt,ig=function(t,e,r,n,o,i){var a=r+t.length,u=n.length,c=My;return void 0!==o&&(o=Ay(o),c=Dy),Ny(i,c,(function(i,c){var s;switch(_y(c,0)){case"$":return"$";case"&":return t;case"`":return Fy(e,0,r);case"'":return Fy(e,a);case"<":s=o[Fy(c,1,-1)];break;default:var f=+c;if(0===f)return i;if(f>u){var l=Cy(f/10);return 0===l?i:l<=u?void 0===n[l-1]?_y(c,1):n[l-1]+_y(c,1):i}s=n[f-1]}return void 0===s?"":s}))},ag=function(t,e){var r=t.exec;if(zy(r)){var n=Uy(r,t,e);return null!==n&&Gy(n),n}if("RegExp"===By(t))return Uy($y,t,e);throw Ky("RegExp#exec called on incompatible receiver")},ug=ie("replace"),cg=Math.max,sg=Math.min,fg=Wy([].concat),lg=Wy([].push),hg=Wy("".indexOf),pg=Wy("".slice),vg="$0"==="a".replace(/./,"$0"),dg=!!/./[ug]&&""===/./[ug]("a","$0");qy("replace",(function(t,e,r){var n=dg?"$":"$0";return[function(t,r){var n=rg(this),o=Qy(t)?void 0:og(t,ug);return o?Hy(o,t,n,r):Hy(e,eg(n),t,r)},function(t,o){var i=Yy(this),a=eg(t);if("string"==typeof o&&-1===hg(o,n)&&-1===hg(o,"$<")){var u=r(e,i,a,o);if(u.done)return u.value}var c=Zy(o);c||(o=eg(o));var s=i.global;if(s){var f=i.unicode;i.lastIndex=0}for(var l=[];;){var h=ag(i,a);if(null===h)break;if(lg(l,h),!s)break;""===eg(h[0])&&(i.lastIndex=ng(a,tg(i.lastIndex),f))}for(var p,v="",d=0,y=0;y<l.length;y++){for(var g=eg((h=l[y])[0]),m=cg(sg(Xy(h.index),a.length),0),b=[],w=1;w<h.length;w++)lg(b,void 0===(p=h[w])?p:String(p));var S=h.groups;if(c){var x=fg([g],b,m,a);void 0!==S&&lg(x,S);var O=eg(Vy(o,void 0,x))}else O=ig(g,a,m,b,S,o);m>=d&&(v+=pg(a,d,m)+O,d=m+g.length)}return v+pg(a,d)}]}),!!Jy((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}))||!vg||dg);var yg=Pf.map;function gg(t,e,r,n){return new(r||(r=Promise))((function(o,i){function a(t){try{c(n.next(t))}catch(t){i(t)}}function u(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,u)}c((n=n.apply(t,e||[])).next())}))}no({target:"Array",proto:!0,forced:!Vo("map")},{map:function(t){return yg(this,t,arguments.length>1?arguments[1]:void 0)}});var mg,bg=function t(e,r){if(e===r)return!0;if(e&&r&&"object"==typeof e&&"object"==typeof r){if(e.constructor!==r.constructor)return!1;var n,o,i;if(Array.isArray(e)){if((n=e.length)!=r.length)return!1;for(o=n;0!=o--;)if(!t(e[o],r[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if((n=(i=Object.keys(e)).length)!==Object.keys(r).length)return!1;for(o=n;0!=o--;)if(!Object.prototype.hasOwnProperty.call(r,i[o]))return!1;for(o=n;0!=o--;){var a=i[o];if(!t(e[a],r[a]))return!1}return!0}return e!=e&&r!=r},wg="__googleMapsScriptId";t.LoaderStatus=void 0,(mg=t.LoaderStatus||(t.LoaderStatus={}))[mg.INITIALIZED=0]="INITIALIZED",mg[mg.LOADING=1]="LOADING",mg[mg.SUCCESS=2]="SUCCESS",mg[mg.FAILURE=3]="FAILURE";var Sg=function(){function o(t){var e=t.apiKey,r=t.authReferrerPolicy,n=t.channel,i=t.client,a=t.id,u=void 0===a?wg:a,c=t.language,s=t.libraries,f=void 0===s?[]:s,l=t.mapIds,h=t.nonce,p=t.region,v=t.retries,d=void 0===v?3:v,y=t.url,g=void 0===y?"https://maps.googleapis.com/maps/api/js":y,m=t.version;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=e,this.authReferrerPolicy=r,this.channel=n,this.client=i,this.id=u||wg,this.language=c,this.libraries=f,this.mapIds=l,this.nonce=h,this.region=p,this.retries=d,this.url=g,this.version=m,o.instance){if(!bg(this.options,o.instance.options))throw new Error("Loader must not be called again with different options. ".concat(JSON.stringify(this.options)," !== ").concat(JSON.stringify(o.instance.options)));return o.instance}o.instance=this}var i,a,u;return i=o,a=[{key:"options",get:function(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}},{key:"status",get:function(){return this.errors.length?t.LoaderStatus.FAILURE:this.done?t.LoaderStatus.SUCCESS:this.loading?t.LoaderStatus.LOADING:t.LoaderStatus.INITIALIZED}},{key:"failed",get:function(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}},{key:"createUrl",value:function(){var t=this.url;return t+="?callback=__googleMapsCallback",this.apiKey&&(t+="&key=".concat(this.apiKey)),this.channel&&(t+="&channel=".concat(this.channel)),this.client&&(t+="&client=".concat(this.client)),this.libraries.length>0&&(t+="&libraries=".concat(this.libraries.join(","))),this.language&&(t+="&language=".concat(this.language)),this.region&&(t+="&region=".concat(this.region)),this.version&&(t+="&v=".concat(this.version)),this.mapIds&&(t+="&map_ids=".concat(this.mapIds.join(","))),this.authReferrerPolicy&&(t+="&auth_referrer_policy=".concat(this.authReferrerPolicy)),t}},{key:"deleteScript",value:function(){var t=document.getElementById(this.id);t&&t.remove()}},{key:"load",value:function(){return this.loadPromise()}},{key:"loadPromise",value:function(){var t=this;return new Promise((function(e,r){t.loadCallback((function(t){t?r(t.error):e(window.google)}))}))}},{key:"importLibrary",value:function(t){return this.execute(),google.maps.importLibrary(t)}},{key:"loadCallback",value:function(t){this.callbacks.push(t),this.execute()}},{key:"setScript",value:function(){var t,r,o=this;if(document.getElementById(this.id))this.callback();else{var i,a,u,c,s,f,l,h,p,v,d,y,g,m={key:this.apiKey,channel:this.channel,client:this.client,libraries:this.libraries.length&&this.libraries,v:this.version,mapIds:this.mapIds,language:this.language,region:this.region,authReferrerPolicy:this.authReferrerPolicy};Object.keys(m).forEach((function(t){return!m[t]&&delete m[t]})),(null===(r=null===(t=null===window||void 0===window?void 0:window.google)||void 0===t?void 0:t.maps)||void 0===r?void 0:r.importLibrary)||(i=m,s="The Google Maps JavaScript API",f="google",l="importLibrary",h="__ib__",p=document,v=window,d=(v=v[f]||(v[f]={})).maps||(v.maps={}),y=new Set,g=new URLSearchParams,d[l]?console.warn(s+" only loads once. Ignoring:",i):d[l]=function(t){for(var r=arguments.length,v=new Array(r>1?r-1:0),m=1;m<r;m++)v[m-1]=arguments[m];return y.add(t)&&(a||(a=new Promise((function(t,r){return gg(o,void 0,void 0,e().mark((function o(){var l;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u=p.createElement("script");case 2:for(c in u.id=this.id,g.set("libraries",n(y)+""),i)g.set(c.replace(/[A-Z]/g,(function(t){return"_"+t[0].toLowerCase()})),i[c]);g.set("callback",f+".maps."+h),u.src=this.url+"?"+g,d[h]=t,u.onerror=function(){return a=r(Error(s+" could not load."))},u.nonce=this.nonce||(null===(l=p.querySelector("script[nonce]"))||void 0===l?void 0:l.nonce)||"",p.head.append(u);case 11:case"end":return e.stop()}}),o,this)})))})))).then((function(){return d[l].apply(d,[t].concat(v))}))});var b=this.libraries.map((function(t){return o.importLibrary(t)}));b.length||b.push(this.importLibrary("core")),Promise.all(b).then((function(){return o.callback()}),(function(t){var e=new ErrorEvent("error",{error:t});o.loadErrorCallback(e)}))}}},{key:"reset",value:function(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}},{key:"resetIfRetryingFailed",value:function(){this.failed&&this.reset()}},{key:"loadErrorCallback",value:function(t){var e=this;if(this.errors.push(t),this.errors.length<=this.retries){var r=this.errors.length*Math.pow(2,this.errors.length);console.error("Failed to load Google Maps script, retrying in ".concat(r," ms.")),setTimeout((function(){e.deleteScript(),e.setScript()}),r)}else this.onerrorEvent=t,this.callback()}},{key:"callback",value:function(){var t=this;this.done=!0,this.loading=!1,this.callbacks.forEach((function(e){e(t.onerrorEvent)})),this.callbacks=[]}},{key:"execute",value:function(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version)return console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),void this.callback();this.loading||(this.loading=!0,this.setScript())}}}],a&&r(i.prototype,a),u&&r(i,u),Object.defineProperty(i,"prototype",{writable:!1}),o}();t.DEFAULT_ID=wg,t.Loader=Sg,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=index.umd.js.map


/***/ }),

/***/ 57702:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({ value: true });

var jsxRuntime = __webpack_require__(56786);
var react = __webpack_require__(18038);
var ReactDOM = __webpack_require__(98704);

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var ReactDOM__namespace = /*#__PURE__*/_interopNamespace(ReactDOM);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest$1(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter$1(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = "production";

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

var invariant_1 = invariant;

var invariant$1 = /*@__PURE__*/getDefaultExportFromCjs(invariant_1);

var MapContext = react.createContext(null);
function useGoogleMap() {
    invariant$1(!!react.useContext, 'useGoogleMap is React hook and requires React version 16.8+');
    var map = react.useContext(MapContext);
    invariant$1(!!map, 'useGoogleMap needs a GoogleMap available up in the tree');
    return map;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function reduce(obj, fn, acc) {
    return Object.keys(obj).reduce(function reducer(newAcc, key) {
        return fn(newAcc, obj[key], key);
    }, acc);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function forEach(obj, fn) {
    Object.keys(obj).forEach(function (key) {
        return fn(obj[key], key);
    });
}

/* global google */
function applyUpdaterToNextProps(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
updaterMap, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
prevProps, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
nextProps, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
instance
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var map = {};
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var iter = function (fn, key) {
        var nextValue = nextProps[key];
        if (nextValue !== prevProps[key]) {
            map[key] = nextValue;
            fn(instance, nextValue);
        }
    };
    forEach(updaterMap, iter);
    return map;
}
function registerEvents(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
props, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
instance, eventMap) {
    var registeredList = reduce(eventMap, function reducer(acc, googleEventName, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onEventName) {
        if (typeof props[onEventName] === 'function') {
            acc.push(google.maps.event.addListener(instance, googleEventName, props[onEventName]));
        }
        return acc;
    }, []);
    return registeredList;
}
function unregisterEvent(registered) {
    google.maps.event.removeListener(registered);
}
function unregisterEvents(events) {
    if (events === void 0) { events = []; }
    events.forEach(unregisterEvent);
}
function applyUpdatersToPropsAndRegisterEvents(_a) {
    var updaterMap = _a.updaterMap, eventMap = _a.eventMap, prevProps = _a.prevProps, nextProps = _a.nextProps, instance = _a.instance;
    var registeredEvents = registerEvents(nextProps, instance, eventMap);
    applyUpdaterToNextProps(updaterMap, prevProps, nextProps, instance);
    return registeredEvents;
}

var eventMap$i = {
    onDblClick: 'dblclick',
    onDragEnd: 'dragend',
    onDragStart: 'dragstart',
    onMapTypeIdChanged: 'maptypeid_changed',
    onMouseMove: 'mousemove',
    onMouseOut: 'mouseout',
    onMouseOver: 'mouseover',
    onMouseDown: 'mousedown',
    onMouseUp: 'mouseup',
    onRightClick: 'rightclick',
    onTilesLoaded: 'tilesloaded',
    onBoundsChanged: 'bounds_changed',
    onCenterChanged: 'center_changed',
    onClick: 'click',
    onDrag: 'drag',
    onHeadingChanged: 'heading_changed',
    onIdle: 'idle',
    onProjectionChanged: 'projection_changed',
    onResize: 'resize',
    onTiltChanged: 'tilt_changed',
    onZoomChanged: 'zoom_changed',
};
var updaterMap$i = {
    extraMapTypes: function (map, extra) {
        extra.forEach(function forEachExtra(it, i) {
            map.mapTypes.set(String(i), it);
        });
    },
    center: function (map, center) {
        map.setCenter(center);
    },
    clickableIcons: function (map, clickable) {
        map.setClickableIcons(clickable);
    },
    heading: function (map, heading) {
        map.setHeading(heading);
    },
    mapTypeId: function (map, mapTypeId) {
        map.setMapTypeId(mapTypeId);
    },
    options: function (map, options) {
        map.setOptions(options);
    },
    streetView: function (map, streetView) {
        map.setStreetView(streetView);
    },
    tilt: function (map, tilt) {
        map.setTilt(tilt);
    },
    zoom: function (map, zoom) {
        map.setZoom(zoom);
    },
};
// TODO: unfinished!
function GoogleMapFunctional(_a) {
    var children = _a.children, options = _a.options, id = _a.id, mapContainerStyle = _a.mapContainerStyle, mapContainerClassName = _a.mapContainerClassName, center = _a.center, 
    // clickableIcons,
    // extraMapTypes,
    // heading,
    // mapTypeId,
    onClick = _a.onClick, onDblClick = _a.onDblClick, onDrag = _a.onDrag, onDragEnd = _a.onDragEnd, onDragStart = _a.onDragStart, onMouseMove = _a.onMouseMove, onMouseOut = _a.onMouseOut, onMouseOver = _a.onMouseOver, onMouseDown = _a.onMouseDown, onMouseUp = _a.onMouseUp, onRightClick = _a.onRightClick, 
    // onMapTypeIdChanged,
    // onTilesLoaded,
    // onBoundsChanged,
    onCenterChanged = _a.onCenterChanged, 
    // onHeadingChanged,
    // onIdle,
    // onProjectionChanged,
    // onResize,
    // onTiltChanged,
    // onZoomChanged,
    onLoad = _a.onLoad, onUnmount = _a.onUnmount;
    var _b = react.useState(null), map = _b[0], setMap = _b[1];
    var ref = react.useRef(null);
    // const [extraMapTypesListener, setExtraMapTypesListener] = useState<google.maps.MapsEventListener | null>(null)
    var _c = react.useState(null), centerChangedListener = _c[0], setCenterChangedListener = _c[1];
    var _d = react.useState(null), dblclickListener = _d[0], setDblclickListener = _d[1];
    var _e = react.useState(null), dragendListener = _e[0], setDragendListener = _e[1];
    var _f = react.useState(null), dragstartListener = _f[0], setDragstartListener = _f[1];
    var _g = react.useState(null), mousedownListener = _g[0], setMousedownListener = _g[1];
    var _h = react.useState(null), mousemoveListener = _h[0], setMousemoveListener = _h[1];
    var _j = react.useState(null), mouseoutListener = _j[0], setMouseoutListener = _j[1];
    var _k = react.useState(null), mouseoverListener = _k[0], setMouseoverListener = _k[1];
    var _l = react.useState(null), mouseupListener = _l[0], setMouseupListener = _l[1];
    var _m = react.useState(null), rightclickListener = _m[0], setRightclickListener = _m[1];
    var _o = react.useState(null), clickListener = _o[0], setClickListener = _o[1];
    var _p = react.useState(null), dragListener = _p[0], setDragListener = _p[1];
    // Order does matter
    react.useEffect(function () {
        if (options && map !== null) {
            map.setOptions(options);
        }
    }, [map, options]);
    react.useEffect(function () {
        if (map !== null && typeof center !== 'undefined') {
            map.setCenter(center);
        }
    }, [map, center]);
    react.useEffect(function () {
        if (map && onDblClick) {
            if (dblclickListener !== null) {
                google.maps.event.removeListener(dblclickListener);
            }
            setDblclickListener(google.maps.event.addListener(map, 'dblclick', onDblClick));
        }
    }, [onDblClick]);
    react.useEffect(function () {
        if (map && onDragEnd) {
            if (dragendListener !== null) {
                google.maps.event.removeListener(dragendListener);
            }
            setDragendListener(google.maps.event.addListener(map, 'dragend', onDragEnd));
        }
    }, [onDragEnd]);
    react.useEffect(function () {
        if (map && onDragStart) {
            if (dragstartListener !== null) {
                google.maps.event.removeListener(dragstartListener);
            }
            setDragstartListener(google.maps.event.addListener(map, 'dragstart', onDragStart));
        }
    }, [onDragStart]);
    react.useEffect(function () {
        if (map && onMouseDown) {
            if (mousedownListener !== null) {
                google.maps.event.removeListener(mousedownListener);
            }
            setMousedownListener(google.maps.event.addListener(map, 'mousedown', onMouseDown));
        }
    }, [onMouseDown]);
    react.useEffect(function () {
        if (map && onMouseMove) {
            if (mousemoveListener !== null) {
                google.maps.event.removeListener(mousemoveListener);
            }
            setMousemoveListener(google.maps.event.addListener(map, 'mousemove', onMouseMove));
        }
    }, [onMouseMove]);
    react.useEffect(function () {
        if (map && onMouseOut) {
            if (mouseoutListener !== null) {
                google.maps.event.removeListener(mouseoutListener);
            }
            setMouseoutListener(google.maps.event.addListener(map, 'mouseout', onMouseOut));
        }
    }, [onMouseOut]);
    react.useEffect(function () {
        if (map && onMouseOver) {
            if (mouseoverListener !== null) {
                google.maps.event.removeListener(mouseoverListener);
            }
            setMouseoverListener(google.maps.event.addListener(map, 'mouseover', onMouseOver));
        }
    }, [onMouseOver]);
    react.useEffect(function () {
        if (map && onMouseUp) {
            if (mouseupListener !== null) {
                google.maps.event.removeListener(mouseupListener);
            }
            setMouseupListener(google.maps.event.addListener(map, 'mouseup', onMouseUp));
        }
    }, [onMouseUp]);
    react.useEffect(function () {
        if (map && onRightClick) {
            if (rightclickListener !== null) {
                google.maps.event.removeListener(rightclickListener);
            }
            setRightclickListener(google.maps.event.addListener(map, 'rightclick', onRightClick));
        }
    }, [onRightClick]);
    react.useEffect(function () {
        if (map && onClick) {
            if (clickListener !== null) {
                google.maps.event.removeListener(clickListener);
            }
            setClickListener(google.maps.event.addListener(map, 'click', onClick));
        }
    }, [onClick]);
    react.useEffect(function () {
        if (map && onDrag) {
            if (dragListener !== null) {
                google.maps.event.removeListener(dragListener);
            }
            setDragListener(google.maps.event.addListener(map, 'drag', onDrag));
        }
    }, [onDrag]);
    react.useEffect(function () {
        if (map && onCenterChanged) {
            if (centerChangedListener !== null) {
                google.maps.event.removeListener(centerChangedListener);
            }
            setCenterChangedListener(google.maps.event.addListener(map, 'center_changed', onCenterChanged));
        }
    }, [onClick]);
    react.useEffect(function () {
        var map = ref.current === null
            ? null
            : new google.maps.Map(ref.current, options);
        setMap(map);
        if (map !== null && onLoad) {
            onLoad(map);
        }
        return function () {
            if (map !== null) {
                if (onUnmount) {
                    onUnmount(map);
                }
            }
        };
    }, []);
    return (jsxRuntime.jsx("div", { id: id, ref: ref, style: mapContainerStyle, className: mapContainerClassName, children: jsxRuntime.jsx(MapContext.Provider, { value: map, children: map !== null ? children : jsxRuntime.jsx(jsxRuntime.Fragment, {}) }) }));
}
react.memo(GoogleMapFunctional);
var GoogleMap = /** @class */ (function (_super) {
    __extends(GoogleMap, _super);
    function GoogleMap() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            map: null,
        };
        _this.registeredEvents = [];
        _this.mapRef = null;
        _this.getInstance = function () {
            if (_this.mapRef === null) {
                return null;
            }
            return new google.maps.Map(_this.mapRef, _this.props.options);
        };
        _this.panTo = function (latLng) {
            var map = _this.getInstance();
            if (map) {
                map.panTo(latLng);
            }
        };
        _this.setMapCallback = function () {
            if (_this.state.map !== null) {
                if (_this.props.onLoad) {
                    _this.props.onLoad(_this.state.map);
                }
            }
        };
        _this.getRef = function (ref) {
            _this.mapRef = ref;
        };
        return _this;
    }
    GoogleMap.prototype.componentDidMount = function () {
        var map = this.getInstance();
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$i,
            eventMap: eventMap$i,
            prevProps: {},
            nextProps: this.props,
            instance: map,
        });
        this.setState(function setMap() {
            return {
                map: map,
            };
        }, this.setMapCallback);
    };
    GoogleMap.prototype.componentDidUpdate = function (prevProps) {
        if (this.state.map !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$i,
                eventMap: eventMap$i,
                prevProps: prevProps,
                nextProps: this.props,
                instance: this.state.map,
            });
        }
    };
    GoogleMap.prototype.componentWillUnmount = function () {
        if (this.state.map !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.map);
            }
            unregisterEvents(this.registeredEvents);
        }
    };
    GoogleMap.prototype.render = function () {
        return (jsxRuntime.jsx("div", { id: this.props.id, ref: this.getRef, style: this.props.mapContainerStyle, className: this.props.mapContainerClassName, children: jsxRuntime.jsx(MapContext.Provider, { value: this.state.map, children: this.state.map !== null ? this.props.children : jsxRuntime.jsx(jsxRuntime.Fragment, {}) }) }));
    };
    return GoogleMap;
}(react.PureComponent));

var isBrowser = typeof document !== 'undefined';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function injectScript(_a) {
    var url = _a.url, id = _a.id, nonce = _a.nonce;
    if (!isBrowser) {
        return Promise.reject(new Error('document is undefined'));
    }
    return new Promise(function injectScriptCallback(resolve, reject) {
        var existingScript = document.getElementById(id);
        var windowWithGoogleMap = window;
        if (existingScript) {
            // Same script id/url: keep same script
            var dataStateAttribute = existingScript.getAttribute('data-state');
            if (existingScript.src === url && dataStateAttribute !== 'error') {
                if (dataStateAttribute === 'ready') {
                    return resolve(id);
                }
                else {
                    var originalInitMap_1 = windowWithGoogleMap.initMap;
                    var originalErrorCallback_1 = existingScript.onerror;
                    windowWithGoogleMap.initMap = function initMap() {
                        if (originalInitMap_1) {
                            originalInitMap_1();
                        }
                        resolve(id);
                    };
                    existingScript.onerror = function (err) {
                        if (originalErrorCallback_1) {
                            originalErrorCallback_1(err);
                        }
                        reject(err);
                    };
                    return;
                }
            }
            // Same script id, but either
            // 1. requested URL is different
            // 2. script failed to load
            else {
                existingScript.remove();
            }
        }
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.id = id;
        script.async = true;
        script.nonce = nonce || '';
        script.onerror = function onerror(err) {
            script.setAttribute('data-state', 'error');
            reject(err);
        };
        windowWithGoogleMap.initMap = function onload() {
            script.setAttribute('data-state', 'ready');
            resolve(id);
        };
        document.head.appendChild(script);
    }).catch(function (err) {
        console.error('injectScript error: ', err);
        throw err;
    });
}

function isGoogleFontStyle(element) {
    // 'Roboto' or 'Google Sans Text' font download
    var href = element.href;
    if (href && (href.indexOf('https://fonts.googleapis.com/css?family=Roboto') === 0 ||
        href.indexOf('https://fonts.googleapis.com/css?family=Google+Sans+Text') === 0)) {
        return true;
    }
    // font style elements
    if (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    element.tagName.toLowerCase() === 'style' &&
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        element.styleSheet &&
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        element.styleSheet.cssText &&
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        element.styleSheet.cssText.replace('\r\n', '').indexOf('.gm-style') === 0) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        element.styleSheet.cssText = '';
        return true;
    }
    // font style elements for other browsers
    if (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    element.tagName.toLowerCase() === 'style' &&
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        element.innerHTML &&
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        element.innerHTML.replace('\r\n', '').indexOf('.gm-style') === 0) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        element.innerHTML = '';
        return true;
    }
    // when google tries to add empty style
    if (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    element.tagName.toLowerCase() === 'style' &&
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        !element.styleSheet &&
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        !element.innerHTML) {
        return true;
    }
    return false;
}
// Preventing the Google Maps library from downloading an extra font
function preventGoogleFonts() {
    // we override these methods only for one particular head element
    // default methods for other elements are not affected
    var head = document.getElementsByTagName('head')[0];
    if (head) {
        var trueInsertBefore_1 = head.insertBefore.bind(head);
        // TODO: adding return before reflect solves the TS issue
        head.insertBefore = function insertBefore(newElement, referenceElement) {
            if (!isGoogleFontStyle(newElement)) {
                Reflect.apply(trueInsertBefore_1, head, [newElement, referenceElement]);
            }
            return newElement;
        };
        var trueAppend_1 = head.appendChild.bind(head);
        // TODO: adding return before reflect solves the TS issue
        head.appendChild = function appendChild(textNode) {
            if (!isGoogleFontStyle(textNode)) {
                Reflect.apply(trueAppend_1, head, [textNode]);
            }
            return textNode;
        };
    }
}

function makeLoadScriptUrl(_a) {
    var googleMapsApiKey = _a.googleMapsApiKey, googleMapsClientId = _a.googleMapsClientId, _b = _a.version, version = _b === void 0 ? 'weekly' : _b, language = _a.language, region = _a.region, libraries = _a.libraries, channel = _a.channel, mapIds = _a.mapIds, authReferrerPolicy = _a.authReferrerPolicy;
    var params = [];
    invariant$1((googleMapsApiKey && googleMapsClientId) || !(googleMapsApiKey && googleMapsClientId), 'You need to specify either googleMapsApiKey or googleMapsClientId for @react-google-maps/api load script to work. You cannot use both at the same time.');
    if (googleMapsApiKey) {
        params.push("key=".concat(googleMapsApiKey));
    }
    else if (googleMapsClientId) {
        params.push("client=".concat(googleMapsClientId));
    }
    if (version) {
        params.push("v=".concat(version));
    }
    if (language) {
        params.push("language=".concat(language));
    }
    if (region) {
        params.push("region=".concat(region));
    }
    if (libraries && libraries.length) {
        params.push("libraries=".concat(libraries.sort().join(',')));
    }
    if (channel) {
        params.push("channel=".concat(channel));
    }
    if (mapIds && mapIds.length) {
        params.push("map_ids=".concat(mapIds.join(',')));
    }
    if (authReferrerPolicy) {
        params.push("auth_referrer_policy=".concat(authReferrerPolicy));
    }
    params.push('callback=initMap');
    return "https://maps.googleapis.com/maps/api/js?".concat(params.join('&'));
}

var cleaningUp = false;
function DefaultLoadingElement() {
    return jsxRuntime.jsx("div", { children: "Loading..." });
}
var defaultLoadScriptProps = {
    id: 'script-loader',
    version: 'weekly',
};
var LoadScript = /** @class */ (function (_super) {
    __extends(LoadScript, _super);
    function LoadScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.check = react.createRef();
        _this.state = {
            loaded: false,
        };
        _this.cleanupCallback = function () {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            delete window.google.maps;
            _this.injectScript();
        };
        _this.isCleaningUp = function () { return __awaiter$1(_this, void 0, void 0, function () {
            function promiseCallback(resolve) {
                if (!cleaningUp) {
                    resolve();
                }
                else {
                    if (isBrowser) {
                        var timer_1 = window.setInterval(function interval() {
                            if (!cleaningUp) {
                                window.clearInterval(timer_1);
                                resolve();
                            }
                        }, 1);
                    }
                }
                return;
            }
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(promiseCallback)];
            });
        }); };
        _this.cleanup = function () {
            cleaningUp = true;
            var script = document.getElementById(_this.props.id);
            if (script && script.parentNode) {
                script.parentNode.removeChild(script);
            }
            Array.prototype.slice
                .call(document.getElementsByTagName('script'))
                .filter(function filter(script) {
                return typeof script.src === 'string' && script.src.includes('maps.googleapis');
            })
                .forEach(function forEach(script) {
                if (script.parentNode) {
                    script.parentNode.removeChild(script);
                }
            });
            Array.prototype.slice
                .call(document.getElementsByTagName('link'))
                .filter(function filter(link) {
                return (link.href === 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Google+Sans');
            })
                .forEach(function forEach(link) {
                if (link.parentNode) {
                    link.parentNode.removeChild(link);
                }
            });
            Array.prototype.slice
                .call(document.getElementsByTagName('style'))
                .filter(function filter(style) {
                return (style.innerText !== undefined &&
                    style.innerText.length > 0 &&
                    style.innerText.includes('.gm-'));
            })
                .forEach(function forEach(style) {
                if (style.parentNode) {
                    style.parentNode.removeChild(style);
                }
            });
        };
        _this.injectScript = function () {
            if (_this.props.preventGoogleFontsLoading) {
                preventGoogleFonts();
            }
            invariant$1(!!_this.props.id, 'LoadScript requires "id" prop to be a string: %s', _this.props.id);
            var injectScriptOptions = {
                id: _this.props.id,
                nonce: _this.props.nonce,
                url: makeLoadScriptUrl(_this.props),
            };
            injectScript(injectScriptOptions)
                .then(function () {
                if (_this.props.onLoad) {
                    _this.props.onLoad();
                }
                _this.setState(function setLoaded() {
                    return {
                        loaded: true,
                    };
                });
                return;
            })
                .catch(function (err) {
                if (_this.props.onError) {
                    _this.props.onError(err);
                }
                console.error("\n          There has been an Error with loading Google Maps API script, please check that you provided correct google API key (".concat(_this
                    .props.googleMapsApiKey || '-', ") or Client ID (").concat(_this.props.googleMapsClientId ||
                    '-', ") to <LoadScript />\n          Otherwise it is a Network issue.\n        "));
            });
        };
        return _this;
    }
    LoadScript.prototype.componentDidMount = function () {
        if (isBrowser) {
            if (window.google && window.google.maps && !cleaningUp) {
                console.error('google api is already presented');
                return;
            }
            this.isCleaningUp()
                .then(this.injectScript)
                .catch(function error(err) {
                console.error('Error at injecting script after cleaning up: ', err);
            });
        }
    };
    LoadScript.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.libraries !== prevProps.libraries) {
            console.warn('Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables');
        }
        if (isBrowser && prevProps.language !== this.props.language) {
            this.cleanup();
            // TODO: refactor to use gDSFP maybe... wait for hooks refactoring.
            this.setState(function setLoaded() {
                return {
                    loaded: false,
                };
            }, this.cleanupCallback);
        }
    };
    LoadScript.prototype.componentWillUnmount = function () {
        var _this = this;
        if (isBrowser) {
            this.cleanup();
            var timeoutCallback = function () {
                if (!_this.check.current) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    delete window.google;
                    cleaningUp = false;
                }
            };
            window.setTimeout(timeoutCallback, 1);
            if (this.props.onUnmount) {
                this.props.onUnmount();
            }
        }
    };
    LoadScript.prototype.render = function () {
        return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", { ref: this.check }), this.state.loaded
                    ? this.props.children
                    : this.props.loadingElement || jsxRuntime.jsx(DefaultLoadingElement, {})] }));
    };
    LoadScript.defaultProps = defaultLoadScriptProps;
    return LoadScript;
}(react.PureComponent));

/* eslint-disable filenames/match-regex */
var previouslyLoadedUrl;
function useLoadScript(_a) {
    var _b = _a.id, id = _b === void 0 ? defaultLoadScriptProps.id : _b, _c = _a.version, version = _c === void 0 ? defaultLoadScriptProps.version : _c, nonce = _a.nonce, googleMapsApiKey = _a.googleMapsApiKey, googleMapsClientId = _a.googleMapsClientId, language = _a.language, region = _a.region, libraries = _a.libraries, preventGoogleFontsLoading = _a.preventGoogleFontsLoading, channel = _a.channel, mapIds = _a.mapIds, authReferrerPolicy = _a.authReferrerPolicy;
    var isMounted = react.useRef(false);
    var _d = react.useState(false), isLoaded = _d[0], setLoaded = _d[1];
    var _e = react.useState(undefined), loadError = _e[0], setLoadError = _e[1];
    react.useEffect(function trackMountedState() {
        isMounted.current = true;
        return function () {
            isMounted.current = false;
        };
    }, []);
    react.useEffect(function applyPreventGoogleFonts() {
        if (isBrowser && preventGoogleFontsLoading) {
            preventGoogleFonts();
        }
    }, [preventGoogleFontsLoading]);
    react.useEffect(function validateLoadedState() {
        if (isLoaded) {
            invariant$1(!!window.google, 'useLoadScript was marked as loaded, but window.google is not present. Something went wrong.');
        }
    }, [isLoaded]);
    var url = makeLoadScriptUrl({
        version: version,
        googleMapsApiKey: googleMapsApiKey,
        googleMapsClientId: googleMapsClientId,
        language: language,
        region: region,
        libraries: libraries,
        channel: channel,
        mapIds: mapIds,
        authReferrerPolicy: authReferrerPolicy
    });
    react.useEffect(function loadScriptAndModifyLoadedState() {
        if (!isBrowser) {
            return;
        }
        function setLoadedIfMounted() {
            if (isMounted.current) {
                setLoaded(true);
                previouslyLoadedUrl = url;
            }
        }
        if (window.google && window.google.maps && previouslyLoadedUrl === url) {
            setLoadedIfMounted();
            return;
        }
        injectScript({ id: id, url: url, nonce: nonce })
            .then(setLoadedIfMounted)
            .catch(function handleInjectError(err) {
            if (isMounted.current) {
                setLoadError(err);
            }
            console.warn("\n        There has been an Error with loading Google Maps API script, please check that you provided correct google API key (".concat(googleMapsApiKey ||
                '-', ") or Client ID (").concat(googleMapsClientId || '-', ")\n        Otherwise it is a Network issue.\n      "));
            console.error(err);
        });
    }, [id, url, nonce]);
    var prevLibraries = react.useRef();
    react.useEffect(function checkPerformance() {
        if (prevLibraries.current && libraries !== prevLibraries.current) {
            console.warn('Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables');
        }
        prevLibraries.current = libraries;
    }, [libraries]);
    return { isLoaded: isLoaded, loadError: loadError, url: url };
}

var defaultLoadingElement = jsxRuntime.jsx(DefaultLoadingElement, {});
function LoadScriptNext(_a) {
    var loadingElement = _a.loadingElement, onLoad = _a.onLoad, onError = _a.onError, onUnmount = _a.onUnmount, children = _a.children, hookOptions = __rest$1(_a, ["loadingElement", "onLoad", "onError", "onUnmount", "children"]);
    var _b = useLoadScript(hookOptions), isLoaded = _b.isLoaded, loadError = _b.loadError;
    react.useEffect(function handleOnLoad() {
        if (isLoaded && typeof onLoad === 'function') {
            onLoad();
        }
    }, [isLoaded, onLoad]);
    react.useEffect(function handleOnError() {
        if (loadError && typeof onError === 'function') {
            onError(loadError);
        }
    }, [loadError, onError]);
    react.useEffect(function handleOnUnmount() {
        return function () {
            if (onUnmount) {
                onUnmount();
            }
        };
    }, [onUnmount]);
    return isLoaded ? children : loadingElement || defaultLoadingElement;
}
var LoadScriptNext$1 = react.memo(LoadScriptNext);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

// do not edit .js files directly - edit src/index.jst



var fastDeepEqual$1 = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};

/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at.
 *
 *      Http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_ID = "__googleMapsScriptId";
/**
 * The status of the [[Loader]].
 */
var LoaderStatus;
(function (LoaderStatus) {
    LoaderStatus[LoaderStatus["INITIALIZED"] = 0] = "INITIALIZED";
    LoaderStatus[LoaderStatus["LOADING"] = 1] = "LOADING";
    LoaderStatus[LoaderStatus["SUCCESS"] = 2] = "SUCCESS";
    LoaderStatus[LoaderStatus["FAILURE"] = 3] = "FAILURE";
})(LoaderStatus || (LoaderStatus = {}));
/**
 * [[Loader]] makes it easier to add Google Maps JavaScript API to your application
 * dynamically using
 * [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
 * It works by dynamically creating and appending a script node to the the
 * document head and wrapping the callback function so as to return a promise.
 *
 * ```
 * const loader = new Loader({
 *   apiKey: "",
 *   version: "weekly",
 *   libraries: ["places"]
 * });
 *
 * loader.load().then((google) => {
 *   const map = new google.maps.Map(...)
 * })
 * ```
 */
class Loader {
    /**
     * Creates an instance of Loader using [[LoaderOptions]]. No defaults are set
     * using this library, instead the defaults are set by the Google Maps
     * JavaScript API server.
     *
     * ```
     * const loader = Loader({apiKey, version: 'weekly', libraries: ['places']});
     * ```
     */
    constructor({ apiKey, authReferrerPolicy, channel, client, id = DEFAULT_ID, language, libraries = [], mapIds, nonce, region, retries = 3, url = "https://maps.googleapis.com/maps/api/js", version, }) {
        this.callbacks = [];
        this.done = false;
        this.loading = false;
        this.errors = [];
        this.apiKey = apiKey;
        this.authReferrerPolicy = authReferrerPolicy;
        this.channel = channel;
        this.client = client;
        this.id = id || DEFAULT_ID; // Do not allow empty string
        this.language = language;
        this.libraries = libraries;
        this.mapIds = mapIds;
        this.nonce = nonce;
        this.region = region;
        this.retries = retries;
        this.url = url;
        this.version = version;
        if (Loader.instance) {
            if (!fastDeepEqual$1(this.options, Loader.instance.options)) {
                throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(Loader.instance.options)}`);
            }
            return Loader.instance;
        }
        Loader.instance = this;
    }
    get options() {
        return {
            version: this.version,
            apiKey: this.apiKey,
            channel: this.channel,
            client: this.client,
            id: this.id,
            libraries: this.libraries,
            language: this.language,
            region: this.region,
            mapIds: this.mapIds,
            nonce: this.nonce,
            url: this.url,
            authReferrerPolicy: this.authReferrerPolicy,
        };
    }
    get status() {
        if (this.errors.length) {
            return LoaderStatus.FAILURE;
        }
        if (this.done) {
            return LoaderStatus.SUCCESS;
        }
        if (this.loading) {
            return LoaderStatus.LOADING;
        }
        return LoaderStatus.INITIALIZED;
    }
    get failed() {
        return this.done && !this.loading && this.errors.length >= this.retries + 1;
    }
    /**
     * CreateUrl returns the Google Maps JavaScript API script url given the [[LoaderOptions]].
     *
     * @ignore
     * @deprecated
     */
    createUrl() {
        let url = this.url;
        url += `?callback=__googleMapsCallback`;
        if (this.apiKey) {
            url += `&key=${this.apiKey}`;
        }
        if (this.channel) {
            url += `&channel=${this.channel}`;
        }
        if (this.client) {
            url += `&client=${this.client}`;
        }
        if (this.libraries.length > 0) {
            url += `&libraries=${this.libraries.join(",")}`;
        }
        if (this.language) {
            url += `&language=${this.language}`;
        }
        if (this.region) {
            url += `&region=${this.region}`;
        }
        if (this.version) {
            url += `&v=${this.version}`;
        }
        if (this.mapIds) {
            url += `&map_ids=${this.mapIds.join(",")}`;
        }
        if (this.authReferrerPolicy) {
            url += `&auth_referrer_policy=${this.authReferrerPolicy}`;
        }
        return url;
    }
    deleteScript() {
        const script = document.getElementById(this.id);
        if (script) {
            script.remove();
        }
    }
    /**
     * Load the Google Maps JavaScript API script and return a Promise.
     * @deprecated, use importLibrary() instead.
     */
    load() {
        return this.loadPromise();
    }
    /**
     * Load the Google Maps JavaScript API script and return a Promise.
     *
     * @ignore
     * @deprecated, use importLibrary() instead.
     */
    loadPromise() {
        return new Promise((resolve, reject) => {
            this.loadCallback((err) => {
                if (!err) {
                    resolve(window.google);
                }
                else {
                    reject(err.error);
                }
            });
        });
    }
    importLibrary(name) {
        this.execute();
        return google.maps.importLibrary(name);
    }
    /**
     * Load the Google Maps JavaScript API script with a callback.
     * @deprecated, use importLibrary() instead.
     */
    loadCallback(fn) {
        this.callbacks.push(fn);
        this.execute();
    }
    /**
     * Set the script on document.
     */
    setScript() {
        var _a, _b;
        if (document.getElementById(this.id)) {
            // TODO wrap onerror callback for cases where the script was loaded elsewhere
            this.callback();
            return;
        }
        const params = {
            key: this.apiKey,
            channel: this.channel,
            client: this.client,
            libraries: this.libraries.length && this.libraries,
            v: this.version,
            mapIds: this.mapIds,
            language: this.language,
            region: this.region,
            authReferrerPolicy: this.authReferrerPolicy,
        };
        // keep the URL minimal:
        Object.keys(params).forEach(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (key) => !params[key] && delete params[key]);
        if (!((_b = (_a = window === null || window === void 0 ? void 0 : window.google) === null || _a === void 0 ? void 0 : _a.maps) === null || _b === void 0 ? void 0 : _b.importLibrary)) {
            // tweaked copy of https://developers.google.com/maps/documentation/javascript/load-maps-js-api#dynamic-library-import
            // which also sets the base url, the id, and the nonce
            /* eslint-disable */
            ((g) => {
                // @ts-ignore
                let h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window;
                // @ts-ignore
                b = b[c] || (b[c] = {});
                // @ts-ignore
                const d = b.maps || (b.maps = {}), r = new Set(), e = new URLSearchParams(), u = () => 
                // @ts-ignore
                h || (h = new Promise((f, n) => __awaiter(this, void 0, void 0, function* () {
                    var _a;
                    yield (a = m.createElement("script"));
                    a.id = this.id;
                    e.set("libraries", [...r] + "");
                    // @ts-ignore
                    for (k in g)
                        e.set(k.replace(/[A-Z]/g, (t) => "_" + t[0].toLowerCase()), g[k]);
                    e.set("callback", c + ".maps." + q);
                    a.src = this.url + `?` + e;
                    d[q] = f;
                    a.onerror = () => (h = n(Error(p + " could not load.")));
                    // @ts-ignore
                    a.nonce = this.nonce || ((_a = m.querySelector("script[nonce]")) === null || _a === void 0 ? void 0 : _a.nonce) || "";
                    m.head.append(a);
                })));
                // @ts-ignore
                d[l] ? console.warn(p + " only loads once. Ignoring:", g) : (d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)));
            })(params);
            /* eslint-enable */
        }
        // While most libraries populate the global namespace when loaded via bootstrap params,
        // this is not the case for "marker" when used with the inline bootstrap loader
        // (and maybe others in the future). So ensure there is an importLibrary for each:
        const libraryPromises = this.libraries.map((library) => this.importLibrary(library));
        // ensure at least one library, to kick off loading...
        if (!libraryPromises.length) {
            libraryPromises.push(this.importLibrary("core"));
        }
        Promise.all(libraryPromises).then(() => this.callback(), (error) => {
            const event = new ErrorEvent("error", { error }); // for backwards compat
            this.loadErrorCallback(event);
        });
    }
    /**
     * Reset the loader state.
     */
    reset() {
        this.deleteScript();
        this.done = false;
        this.loading = false;
        this.errors = [];
        this.onerrorEvent = null;
    }
    resetIfRetryingFailed() {
        if (this.failed) {
            this.reset();
        }
    }
    loadErrorCallback(e) {
        this.errors.push(e);
        if (this.errors.length <= this.retries) {
            const delay = this.errors.length * Math.pow(2, this.errors.length);
            console.error(`Failed to load Google Maps script, retrying in ${delay} ms.`);
            setTimeout(() => {
                this.deleteScript();
                this.setScript();
            }, delay);
        }
        else {
            this.onerrorEvent = e;
            this.callback();
        }
    }
    callback() {
        this.done = true;
        this.loading = false;
        this.callbacks.forEach((cb) => {
            cb(this.onerrorEvent);
        });
        this.callbacks = [];
    }
    execute() {
        this.resetIfRetryingFailed();
        if (this.done) {
            this.callback();
        }
        else {
            // short circuit and warn if google.maps is already loaded
            if (window.google && window.google.maps && window.google.maps.version) {
                console.warn("Google Maps already loaded outside @googlemaps/js-api-loader." +
                    "This may result in undesirable behavior as options and script parameters may not match.");
                this.callback();
                return;
            }
            if (this.loading) ;
            else {
                this.loading = true;
                this.setScript();
            }
        }
    }
}

var defaultLibraries = ['maps'];
function useJsApiLoader(_a) {
    var _b = _a.id, id = _b === void 0 ? defaultLoadScriptProps.id : _b, _c = _a.version, version = _c === void 0 ? defaultLoadScriptProps.version : _c, nonce = _a.nonce, googleMapsApiKey = _a.googleMapsApiKey, 
    // googleMapsClientId,
    language = _a.language, region = _a.region, _d = _a.libraries, libraries = _d === void 0 ? defaultLibraries : _d, preventGoogleFontsLoading = _a.preventGoogleFontsLoading, 
    // channel,
    mapIds = _a.mapIds, authReferrerPolicy = _a.authReferrerPolicy;
    var isMounted = react.useRef(false);
    var _e = react.useState(false), isLoaded = _e[0], setLoaded = _e[1];
    var _f = react.useState(undefined), loadError = _f[0], setLoadError = _f[1];
    react.useEffect(function trackMountedState() {
        isMounted.current = true;
        return function () {
            isMounted.current = false;
        };
    }, []);
    var loader = react.useMemo(function () {
        return new Loader({
            id: id,
            apiKey: googleMapsApiKey,
            version: version,
            libraries: libraries,
            language: language || 'en',
            region: region || 'US',
            mapIds: mapIds || [],
            nonce: nonce || '',
            authReferrerPolicy: authReferrerPolicy || 'origin',
        });
    }, [id, googleMapsApiKey, version, libraries, language, region, mapIds, nonce, authReferrerPolicy]);
    react.useEffect(function effect() {
        if (isLoaded) {
            return;
        }
        else {
            loader.load().then(function () {
                if (isMounted.current) {
                    setLoaded(true);
                }
                return;
            })
                .catch(function (error) {
                setLoadError(error);
            });
        }
    }, []);
    react.useEffect(function () {
        if (isBrowser && preventGoogleFontsLoading) {
            preventGoogleFonts();
        }
    }, [preventGoogleFontsLoading]);
    var prevLibraries = react.useRef();
    react.useEffect(function () {
        if (prevLibraries.current && libraries !== prevLibraries.current) {
            console.warn('Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables');
        }
        prevLibraries.current = libraries;
    }, [libraries]);
    return { isLoaded: isLoaded, loadError: loadError };
}

var eventMap$h = {};
var updaterMap$h = {
    options: function (instance, options) {
        instance.setOptions(options);
    },
};
function TrafficLayerFunctional(_a) {
    var options = _a.options, onLoad = _a.onLoad, onUnmount = _a.onUnmount;
    var map = react.useContext(MapContext);
    var _b = react.useState(null), instance = _b[0], setInstance = _b[1];
    // Order does matter
    react.useEffect(function () {
        if (instance !== null) {
            instance.setMap(map);
        }
    }, [map]);
    react.useEffect(function () {
        if (options && instance !== null) {
            instance.setOptions(options);
        }
    }, [instance, options]);
    react.useEffect(function () {
        var trafficLayer = new google.maps.TrafficLayer(__assign(__assign({}, (options || {})), { map: map }));
        setInstance(trafficLayer);
        if (onLoad) {
            onLoad(trafficLayer);
        }
        return function () {
            if (instance !== null) {
                if (onUnmount) {
                    onUnmount(instance);
                }
                instance.setMap(null);
            }
        };
    }, []);
    return null;
}
var TrafficLayerF = react.memo(TrafficLayerFunctional);
var TrafficLayer = /** @class */ (function (_super) {
    __extends(TrafficLayer, _super);
    function TrafficLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            trafficLayer: null,
        };
        _this.setTrafficLayerCallback = function () {
            if (_this.state.trafficLayer !== null && _this.props.onLoad) {
                _this.props.onLoad(_this.state.trafficLayer);
            }
        };
        _this.registeredEvents = [];
        return _this;
    }
    TrafficLayer.prototype.componentDidMount = function () {
        var trafficLayer = new google.maps.TrafficLayer(__assign(__assign({}, (this.props.options || {})), { map: this.context }));
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$h,
            eventMap: eventMap$h,
            prevProps: {},
            nextProps: this.props,
            instance: trafficLayer,
        });
        this.setState(function setTrafficLayer() {
            return {
                trafficLayer: trafficLayer,
            };
        }, this.setTrafficLayerCallback);
    };
    TrafficLayer.prototype.componentDidUpdate = function (prevProps) {
        if (this.state.trafficLayer !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$h,
                eventMap: eventMap$h,
                prevProps: prevProps,
                nextProps: this.props,
                instance: this.state.trafficLayer,
            });
        }
    };
    TrafficLayer.prototype.componentWillUnmount = function () {
        if (this.state.trafficLayer !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.trafficLayer);
            }
            unregisterEvents(this.registeredEvents);
            this.state.trafficLayer.setMap(null);
        }
    };
    TrafficLayer.prototype.render = function () {
        return null;
    };
    TrafficLayer.contextType = MapContext;
    return TrafficLayer;
}(react.PureComponent));

function BicyclingLayerFunctional(_a) {
    var onLoad = _a.onLoad, onUnmount = _a.onUnmount;
    var map = react.useContext(MapContext);
    var _b = react.useState(null), instance = _b[0], setInstance = _b[1];
    // Order does matter
    react.useEffect(function () {
        if (instance !== null) {
            instance.setMap(map);
        }
    }, [map]);
    react.useEffect(function () {
        var bicyclingLayer = new google.maps.BicyclingLayer();
        setInstance(bicyclingLayer);
        bicyclingLayer.setMap(map);
        if (onLoad) {
            onLoad(bicyclingLayer);
        }
        return function () {
            if (bicyclingLayer !== null) {
                if (onUnmount) {
                    onUnmount(bicyclingLayer);
                }
                bicyclingLayer.setMap(null);
            }
        };
    }, []);
    return null;
}
var BicyclingLayerF = react.memo(BicyclingLayerFunctional);
var BicyclingLayer = /** @class */ (function (_super) {
    __extends(BicyclingLayer, _super);
    function BicyclingLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            bicyclingLayer: null,
        };
        _this.setBicyclingLayerCallback = function () {
            if (_this.state.bicyclingLayer !== null) {
                _this.state.bicyclingLayer.setMap(_this.context);
                if (_this.props.onLoad) {
                    _this.props.onLoad(_this.state.bicyclingLayer);
                }
            }
        };
        return _this;
    }
    BicyclingLayer.prototype.componentDidMount = function () {
        var bicyclingLayer = new google.maps.BicyclingLayer();
        this.setState(function () {
            return {
                bicyclingLayer: bicyclingLayer,
            };
        }, this.setBicyclingLayerCallback);
    };
    BicyclingLayer.prototype.componentWillUnmount = function () {
        if (this.state.bicyclingLayer !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.bicyclingLayer);
            }
            this.state.bicyclingLayer.setMap(null);
        }
    };
    BicyclingLayer.prototype.render = function () {
        return null;
    };
    BicyclingLayer.contextType = MapContext;
    return BicyclingLayer;
}(react.PureComponent));

function TransitLayerFunctional(_a) {
    var onLoad = _a.onLoad, onUnmount = _a.onUnmount;
    var map = react.useContext(MapContext);
    var _b = react.useState(null), instance = _b[0], setInstance = _b[1];
    // Order does matter
    react.useEffect(function () {
        if (instance !== null) {
            instance.setMap(map);
        }
    }, [map]);
    react.useEffect(function () {
        var transitLayer = new google.maps.TransitLayer();
        setInstance(transitLayer);
        transitLayer.setMap(map);
        if (onLoad) {
            onLoad(transitLayer);
        }
        return function () {
            if (instance !== null) {
                if (onUnmount) {
                    onUnmount(instance);
                }
                instance.setMap(null);
            }
        };
    }, []);
    return null;
}
var TransitLayerF = react.memo(TransitLayerFunctional);
var TransitLayer = /** @class */ (function (_super) {
    __extends(TransitLayer, _super);
    function TransitLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            transitLayer: null,
        };
        _this.setTransitLayerCallback = function () {
            if (_this.state.transitLayer !== null) {
                _this.state.transitLayer.setMap(_this.context);
                if (_this.props.onLoad) {
                    _this.props.onLoad(_this.state.transitLayer);
                }
            }
        };
        return _this;
    }
    TransitLayer.prototype.componentDidMount = function () {
        var transitLayer = new google.maps.TransitLayer();
        this.setState(function setTransitLayer() {
            return {
                transitLayer: transitLayer,
            };
        }, this.setTransitLayerCallback);
    };
    TransitLayer.prototype.componentWillUnmount = function () {
        if (this.state.transitLayer !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.transitLayer);
            }
            this.state.transitLayer.setMap(null);
        }
    };
    TransitLayer.prototype.render = function () {
        return null;
    };
    TransitLayer.contextType = MapContext;
    return TransitLayer;
}(react.PureComponent));

var eventMap$g = {
    onCircleComplete: 'circlecomplete',
    onMarkerComplete: 'markercomplete',
    onOverlayComplete: 'overlaycomplete',
    onPolygonComplete: 'polygoncomplete',
    onPolylineComplete: 'polylinecomplete',
    onRectangleComplete: 'rectanglecomplete',
};
var updaterMap$g = {
    drawingMode: function (instance, drawingMode) {
        instance.setDrawingMode(drawingMode);
    },
    options: function (instance, options) {
        instance.setOptions(options);
    },
};
function DrawingManagerFunctional(_a) {
    var options = _a.options, drawingMode = _a.drawingMode, onCircleComplete = _a.onCircleComplete, onMarkerComplete = _a.onMarkerComplete, onOverlayComplete = _a.onOverlayComplete, onPolygonComplete = _a.onPolygonComplete, onPolylineComplete = _a.onPolylineComplete, onRectangleComplete = _a.onRectangleComplete, onLoad = _a.onLoad, onUnmount = _a.onUnmount;
    var map = react.useContext(MapContext);
    var _b = react.useState(null), instance = _b[0], setInstance = _b[1];
    var _c = react.useState(null), circlecompleteListener = _c[0], setCircleCompleteListener = _c[1];
    var _d = react.useState(null), markercompleteListener = _d[0], setMarkerCompleteListener = _d[1];
    var _e = react.useState(null), overlaycompleteListener = _e[0], setOverlayCompleteListener = _e[1];
    var _f = react.useState(null), polygoncompleteListener = _f[0], setPolygonCompleteListener = _f[1];
    var _g = react.useState(null), polylinecompleteListener = _g[0], setPolylineCompleteListener = _g[1];
    var _h = react.useState(null), rectanglecompleteListener = _h[0], setRectangleCompleteListener = _h[1];
    // Order does matter
    react.useEffect(function () {
        if (instance !== null) {
            instance.setMap(map);
        }
    }, [map]);
    react.useEffect(function () {
        if (options && instance !== null) {
            instance.setOptions(options);
        }
    }, [instance, options]);
    react.useEffect(function () {
        if (drawingMode && instance !== null) {
            instance.setDrawingMode(drawingMode);
        }
    }, [instance, drawingMode]);
    react.useEffect(function () {
        if (instance && onCircleComplete) {
            if (circlecompleteListener !== null) {
                google.maps.event.removeListener(circlecompleteListener);
            }
            setCircleCompleteListener(google.maps.event.addListener(instance, 'circlecomplete', onCircleComplete));
        }
    }, [instance, onCircleComplete]);
    react.useEffect(function () {
        if (instance && onMarkerComplete) {
            if (markercompleteListener !== null) {
                google.maps.event.removeListener(markercompleteListener);
            }
            setMarkerCompleteListener(google.maps.event.addListener(instance, 'markercomplete', onMarkerComplete));
        }
    }, [instance, onMarkerComplete]);
    react.useEffect(function () {
        if (instance && onOverlayComplete) {
            if (overlaycompleteListener !== null) {
                google.maps.event.removeListener(overlaycompleteListener);
            }
            setOverlayCompleteListener(google.maps.event.addListener(instance, 'overlaycomplete', onOverlayComplete));
        }
    }, [instance, onOverlayComplete]);
    react.useEffect(function () {
        if (instance && onPolygonComplete) {
            if (polygoncompleteListener !== null) {
                google.maps.event.removeListener(polygoncompleteListener);
            }
            setPolygonCompleteListener(google.maps.event.addListener(instance, 'polygoncomplete', onPolygonComplete));
        }
    }, [instance, onPolygonComplete]);
    react.useEffect(function () {
        if (instance && onPolylineComplete) {
            if (polylinecompleteListener !== null) {
                google.maps.event.removeListener(polylinecompleteListener);
            }
            setPolylineCompleteListener(google.maps.event.addListener(instance, 'polylinecomplete', onPolylineComplete));
        }
    }, [instance, onPolylineComplete]);
    react.useEffect(function () {
        if (instance && onRectangleComplete) {
            if (rectanglecompleteListener !== null) {
                google.maps.event.removeListener(rectanglecompleteListener);
            }
            setRectangleCompleteListener(google.maps.event.addListener(instance, 'rectanglecomplete', onRectangleComplete));
        }
    }, [instance, onRectangleComplete]);
    react.useEffect(function () {
        invariant$1(!!google.maps.drawing, "Did you include prop libraries={['drawing']} in the URL? %s", google.maps.drawing);
        var drawingManager = new google.maps.drawing.DrawingManager(__assign(__assign({}, (options || {})), { map: map }));
        if (drawingMode) {
            drawingManager.setDrawingMode(drawingMode);
        }
        if (onCircleComplete) {
            setCircleCompleteListener(google.maps.event.addListener(drawingManager, 'circlecomplete', onCircleComplete));
        }
        if (onMarkerComplete) {
            setMarkerCompleteListener(google.maps.event.addListener(drawingManager, 'markercomplete', onMarkerComplete));
        }
        if (onOverlayComplete) {
            setOverlayCompleteListener(google.maps.event.addListener(drawingManager, 'overlaycomplete', onOverlayComplete));
        }
        if (onPolygonComplete) {
            setPolygonCompleteListener(google.maps.event.addListener(drawingManager, 'polygoncomplete', onPolygonComplete));
        }
        if (onPolylineComplete) {
            setPolylineCompleteListener(google.maps.event.addListener(drawingManager, 'polylinecomplete', onPolylineComplete));
        }
        if (onRectangleComplete) {
            setRectangleCompleteListener(google.maps.event.addListener(drawingManager, 'rectanglecomplete', onRectangleComplete));
        }
        setInstance(drawingManager);
        if (onLoad) {
            onLoad(drawingManager);
        }
        return function () {
            if (instance !== null) {
                if (circlecompleteListener) {
                    google.maps.event.removeListener(circlecompleteListener);
                }
                if (markercompleteListener) {
                    google.maps.event.removeListener(markercompleteListener);
                }
                if (overlaycompleteListener) {
                    google.maps.event.removeListener(overlaycompleteListener);
                }
                if (polygoncompleteListener) {
                    google.maps.event.removeListener(polygoncompleteListener);
                }
                if (polylinecompleteListener) {
                    google.maps.event.removeListener(polylinecompleteListener);
                }
                if (rectanglecompleteListener) {
                    google.maps.event.removeListener(rectanglecompleteListener);
                }
                if (onUnmount) {
                    onUnmount(instance);
                }
                instance.setMap(null);
            }
        };
    }, []);
    return null;
}
var DrawingManagerF = react.memo(DrawingManagerFunctional);
var DrawingManager = /** @class */ (function (_super) {
    __extends(DrawingManager, _super);
    function DrawingManager(props) {
        var _this = _super.call(this, props) || this;
        _this.registeredEvents = [];
        _this.state = {
            drawingManager: null,
        };
        _this.setDrawingManagerCallback = function () {
            if (_this.state.drawingManager !== null && _this.props.onLoad) {
                _this.props.onLoad(_this.state.drawingManager);
            }
        };
        invariant$1(!!google.maps.drawing, "Did you include prop libraries={['drawing']} in the URL? %s", google.maps.drawing);
        return _this;
    }
    DrawingManager.prototype.componentDidMount = function () {
        var drawingManager = new google.maps.drawing.DrawingManager(__assign(__assign({}, (this.props.options || {})), { map: this.context }));
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$g,
            eventMap: eventMap$g,
            prevProps: {},
            nextProps: this.props,
            instance: drawingManager,
        });
        this.setState(function setDrawingManager() {
            return {
                drawingManager: drawingManager,
            };
        }, this.setDrawingManagerCallback);
    };
    DrawingManager.prototype.componentDidUpdate = function (prevProps) {
        if (this.state.drawingManager !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$g,
                eventMap: eventMap$g,
                prevProps: prevProps,
                nextProps: this.props,
                instance: this.state.drawingManager,
            });
        }
    };
    DrawingManager.prototype.componentWillUnmount = function () {
        if (this.state.drawingManager !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.drawingManager);
            }
            unregisterEvents(this.registeredEvents);
            this.state.drawingManager.setMap(null);
        }
    };
    DrawingManager.prototype.render = function () {
        return null;
    };
    DrawingManager.contextType = MapContext;
    return DrawingManager;
}(react.PureComponent));

var eventMap$f = {
    onAnimationChanged: 'animation_changed',
    onClick: 'click',
    onClickableChanged: 'clickable_changed',
    onCursorChanged: 'cursor_changed',
    onDblClick: 'dblclick',
    onDrag: 'drag',
    onDragEnd: 'dragend',
    onDraggableChanged: 'draggable_changed',
    onDragStart: 'dragstart',
    onFlatChanged: 'flat_changed',
    onIconChanged: 'icon_changed',
    onMouseDown: 'mousedown',
    onMouseOut: 'mouseout',
    onMouseOver: 'mouseover',
    onMouseUp: 'mouseup',
    onPositionChanged: 'position_changed',
    onRightClick: 'rightclick',
    onShapeChanged: 'shape_changed',
    onTitleChanged: 'title_changed',
    onVisibleChanged: 'visible_changed',
    onZindexChanged: 'zindex_changed',
};
var updaterMap$f = {
    animation: function (instance, animation) {
        instance.setAnimation(animation);
    },
    clickable: function (instance, clickable) {
        instance.setClickable(clickable);
    },
    cursor: function (instance, cursor) {
        instance.setCursor(cursor);
    },
    draggable: function (instance, draggable) {
        instance.setDraggable(draggable);
    },
    icon: function (instance, icon) {
        instance.setIcon(icon);
    },
    label: function (instance, label) {
        instance.setLabel(label);
    },
    map: function (instance, map) {
        instance.setMap(map);
    },
    opacity: function (instance, opacity) {
        instance.setOpacity(opacity);
    },
    options: function (instance, options) {
        instance.setOptions(options);
    },
    position: function (instance, position) {
        instance.setPosition(position);
    },
    shape: function (instance, shape) {
        instance.setShape(shape);
    },
    title: function (instance, title) {
        instance.setTitle(title);
    },
    visible: function (instance, visible) {
        instance.setVisible(visible);
    },
    zIndex: function (instance, zIndex) {
        instance.setZIndex(zIndex);
    },
};
var defaultOptions$5 = {};
function MarkerFunctional(_a) {
    var position = _a.position, options = _a.options, clusterer = _a.clusterer, noClustererRedraw = _a.noClustererRedraw, children = _a.children, draggable = _a.draggable, visible = _a.visible, animation = _a.animation, clickable = _a.clickable, cursor = _a.cursor, icon = _a.icon, label = _a.label, opacity = _a.opacity, shape = _a.shape, title = _a.title, zIndex = _a.zIndex, onClick = _a.onClick, onDblClick = _a.onDblClick, onDrag = _a.onDrag, onDragEnd = _a.onDragEnd, onDragStart = _a.onDragStart, onMouseOut = _a.onMouseOut, onMouseOver = _a.onMouseOver, onMouseUp = _a.onMouseUp, onMouseDown = _a.onMouseDown, onRightClick = _a.onRightClick, onClickableChanged = _a.onClickableChanged, onCursorChanged = _a.onCursorChanged, onAnimationChanged = _a.onAnimationChanged, onDraggableChanged = _a.onDraggableChanged, onFlatChanged = _a.onFlatChanged, onIconChanged = _a.onIconChanged, onPositionChanged = _a.onPositionChanged, onShapeChanged = _a.onShapeChanged, onTitleChanged = _a.onTitleChanged, onVisibleChanged = _a.onVisibleChanged, onZindexChanged = _a.onZindexChanged, onLoad = _a.onLoad, onUnmount = _a.onUnmount;
    var map = react.useContext(MapContext);
    var _b = react.useState(null), instance = _b[0], setInstance = _b[1];
    var _c = react.useState(null), dblclickListener = _c[0], setDblclickListener = _c[1];
    var _d = react.useState(null), dragendListener = _d[0], setDragendListener = _d[1];
    var _e = react.useState(null), dragstartListener = _e[0], setDragstartListener = _e[1];
    var _f = react.useState(null), mousedownListener = _f[0], setMousedownListener = _f[1];
    var _g = react.useState(null), mouseoutListener = _g[0], setMouseoutListener = _g[1];
    var _h = react.useState(null), mouseoverListener = _h[0], setMouseoverListener = _h[1];
    var _j = react.useState(null), mouseupListener = _j[0], setMouseupListener = _j[1];
    var _k = react.useState(null), rightclickListener = _k[0], setRightclickListener = _k[1];
    var _l = react.useState(null), clickListener = _l[0], setClickListener = _l[1];
    var _m = react.useState(null), dragListener = _m[0], setDragListener = _m[1];
    var _o = react.useState(null), clickableChangedListener = _o[0], setClickableChangedListener = _o[1];
    var _p = react.useState(null), cursorChangedListener = _p[0], setCursorChangedListener = _p[1];
    var _q = react.useState(null), animationChangedListener = _q[0], setAnimationChangedListener = _q[1];
    var _r = react.useState(null), draggableChangedListener = _r[0], setDraggableChangedListener = _r[1];
    var _s = react.useState(null), flatChangedListener = _s[0], setFlatChangedListener = _s[1];
    var _t = react.useState(null), iconChangedListener = _t[0], setIconChangedListener = _t[1];
    var _u = react.useState(null), positionChangedListener = _u[0], setPositionChangedListener = _u[1];
    var _v = react.useState(null), shapeChangedListener = _v[0], setShapeChangedListener = _v[1];
    var _w = react.useState(null), titleChangedListener = _w[0], setTitleChangedListener = _w[1];
    var _x = react.useState(null), visibleChangedListener = _x[0], setVisibleChangedListener = _x[1];
    var _y = react.useState(null), zIndexChangedListener = _y[0], setZindexChangedListener = _y[1];
    // Order does matter
    react.useEffect(function () {
        if (instance !== null) {
            instance.setMap(map);
        }
    }, [map]);
    react.useEffect(function () {
        if (typeof options !== 'undefined' && instance !== null) {
            instance.setOptions(options);
        }
    }, [instance, options]);
    react.useEffect(function () {
        if (typeof draggable !== 'undefined' && instance !== null) {
            instance.setDraggable(draggable);
        }
    }, [instance, draggable]);
    react.useEffect(function () {
        if (position && instance !== null) {
            instance.setPosition(position);
        }
    }, [instance, position]);
    react.useEffect(function () {
        if (typeof visible !== 'undefined' && instance !== null) {
            instance.setVisible(visible);
        }
    }, [instance, visible]);
    react.useEffect(function () {
        instance === null || instance === void 0 ? void 0 : instance.setAnimation(animation);
    }, [instance, animation]);
    react.useEffect(function () {
        if (instance && onDblClick) {
            if (dblclickListener !== null) {
                google.maps.event.removeListener(dblclickListener);
            }
            setDblclickListener(google.maps.event.addListener(instance, 'dblclick', onDblClick));
        }
    }, [onDblClick]);
    react.useEffect(function () {
        if (instance && onDragEnd) {
            if (dragendListener !== null) {
                google.maps.event.removeListener(dragendListener);
            }
            setDragendListener(google.maps.event.addListener(instance, 'dragend', onDragEnd));
        }
    }, [onDragEnd]);
    react.useEffect(function () {
        if (instance && onDragStart) {
            if (dragstartListener !== null) {
                google.maps.event.removeListener(dragstartListener);
            }
            setDragstartListener(google.maps.event.addListener(instance, 'dragstart', onDragStart));
        }
    }, [onDragStart]);
    react.useEffect(function () {
        if (instance && onMouseDown) {
            if (mousedownListener !== null) {
                google.maps.event.removeListener(mousedownListener);
            }
            setMousedownListener(google.maps.event.addListener(instance, 'mousedown', onMouseDown));
        }
    }, [onMouseDown]);
    react.useEffect(function () {
        if (instance && onMouseOut) {
            if (mouseoutListener !== null) {
                google.maps.event.removeListener(mouseoutListener);
            }
            setMouseoutListener(google.maps.event.addListener(instance, 'mouseout', onMouseOut));
        }
    }, [onMouseOut]);
    react.useEffect(function () {
        if (instance && onMouseOver) {
            if (mouseoverListener !== null) {
                google.maps.event.removeListener(mouseoverListener);
            }
            setMouseoverListener(google.maps.event.addListener(instance, 'mouseover', onMouseOver));
        }
    }, [onMouseOver]);
    react.useEffect(function () {
        if (instance && onMouseUp) {
            if (mouseupListener !== null) {
                google.maps.event.removeListener(mouseupListener);
            }
            setMouseupListener(google.maps.event.addListener(instance, 'mouseup', onMouseUp));
        }
    }, [onMouseUp]);
    react.useEffect(function () {
        if (instance && onRightClick) {
            if (rightclickListener !== null) {
                google.maps.event.removeListener(rightclickListener);
            }
            setRightclickListener(google.maps.event.addListener(instance, 'rightclick', onRightClick));
        }
    }, [onRightClick]);
    react.useEffect(function () {
        if (instance && onClick) {
            if (clickListener !== null) {
                google.maps.event.removeListener(clickListener);
            }
            setClickListener(google.maps.event.addListener(instance, 'click', onClick));
        }
    }, [onClick]);
    react.useEffect(function () {
        if (instance && onDrag) {
            if (dragListener !== null) {
                google.maps.event.removeListener(dragListener);
            }
            setDragListener(google.maps.event.addListener(instance, 'drag', onDrag));
        }
    }, [onDrag]);
    react.useEffect(function () {
        if (instance && onClickableChanged) {
            if (clickableChangedListener !== null) {
                google.maps.event.removeListener(clickableChangedListener);
            }
            setClickableChangedListener(google.maps.event.addListener(instance, 'clickable_changed', onClickableChanged));
        }
    }, [onClickableChanged]);
    react.useEffect(function () {
        if (instance && onCursorChanged) {
            if (cursorChangedListener !== null) {
                google.maps.event.removeListener(cursorChangedListener);
            }
            setCursorChangedListener(google.maps.event.addListener(instance, 'cursor_changed', onCursorChanged));
        }
    }, [onCursorChanged]);
    react.useEffect(function () {
        if (instance && onAnimationChanged) {
            if (animationChangedListener !== null) {
                google.maps.event.removeListener(animationChangedListener);
            }
            setAnimationChangedListener(google.maps.event.addListener(instance, 'animation_changed', onAnimationChanged));
        }
    }, [onAnimationChanged]);
    react.useEffect(function () {
        if (instance && onDraggableChanged) {
            if (draggableChangedListener !== null) {
                google.maps.event.removeListener(draggableChangedListener);
            }
            setDraggableChangedListener(google.maps.event.addListener(instance, 'draggable_changed', onDraggableChanged));
        }
    }, [onDraggableChanged]);
    react.useEffect(function () {
        if (instance && onFlatChanged) {
            if (flatChangedListener !== null) {
                google.maps.event.removeListener(flatChangedListener);
            }
            setFlatChangedListener(google.maps.event.addListener(instance, 'flat_changed', onFlatChanged));
        }
    }, [onFlatChanged]);
    react.useEffect(function () {
        if (instance && onIconChanged) {
            if (iconChangedListener !== null) {
                google.maps.event.removeListener(iconChangedListener);
            }
            setIconChangedListener(google.maps.event.addListener(instance, 'icon_changed', onIconChanged));
        }
    }, [onIconChanged]);
    react.useEffect(function () {
        if (instance && onPositionChanged) {
            if (positionChangedListener !== null) {
                google.maps.event.removeListener(positionChangedListener);
            }
            setPositionChangedListener(google.maps.event.addListener(instance, 'position_changed', onPositionChanged));
        }
    }, [onPositionChanged]);
    react.useEffect(function () {
        if (instance && onShapeChanged) {
            if (shapeChangedListener !== null) {
                google.maps.event.removeListener(shapeChangedListener);
            }
            setShapeChangedListener(google.maps.event.addListener(instance, 'shape_changed', onShapeChanged));
        }
    }, [onShapeChanged]);
    react.useEffect(function () {
        if (instance && onTitleChanged) {
            if (titleChangedListener !== null) {
                google.maps.event.removeListener(titleChangedListener);
            }
            setTitleChangedListener(google.maps.event.addListener(instance, 'title_changed', onTitleChanged));
        }
    }, [onTitleChanged]);
    react.useEffect(function () {
        if (instance && onVisibleChanged) {
            if (visibleChangedListener !== null) {
                google.maps.event.removeListener(visibleChangedListener);
            }
            setVisibleChangedListener(google.maps.event.addListener(instance, 'visible_changed', onVisibleChanged));
        }
    }, [onVisibleChanged]);
    react.useEffect(function () {
        if (instance && onZindexChanged) {
            if (zIndexChangedListener !== null) {
                google.maps.event.removeListener(zIndexChangedListener);
            }
            setZindexChangedListener(google.maps.event.addListener(instance, 'zindex_changed', onZindexChanged));
        }
    }, [onZindexChanged]);
    react.useEffect(function () {
        var markerOptions = __assign(__assign(__assign({}, (options || defaultOptions$5)), (clusterer ? defaultOptions$5 : { map: map })), { position: position });
        var marker = new google.maps.Marker(markerOptions);
        if (clusterer) {
            clusterer.addMarker(marker, !!noClustererRedraw);
        }
        else {
            marker.setMap(map);
        }
        if (position) {
            marker.setPosition(position);
        }
        if (typeof visible !== 'undefined') {
            marker.setVisible(visible);
        }
        if (typeof draggable !== 'undefined') {
            marker.setDraggable(draggable);
        }
        if (typeof clickable !== 'undefined') {
            marker.setClickable(clickable);
        }
        if (typeof cursor === 'string') {
            marker.setCursor(cursor);
        }
        if (icon) {
            marker.setIcon(icon);
        }
        if (typeof label !== 'undefined') {
            marker.setLabel(label);
        }
        if (typeof opacity !== 'undefined') {
            marker.setOpacity(opacity);
        }
        if (shape) {
            marker.setShape(shape);
        }
        if (typeof title === 'string') {
            marker.setTitle(title);
        }
        if (typeof zIndex === 'number') {
            marker.setZIndex(zIndex);
        }
        if (onDblClick) {
            setDblclickListener(google.maps.event.addListener(marker, 'dblclick', onDblClick));
        }
        if (onDragEnd) {
            setDragendListener(google.maps.event.addListener(marker, 'dragend', onDragEnd));
        }
        if (onDragStart) {
            setDragstartListener(google.maps.event.addListener(marker, 'dragstart', onDragStart));
        }
        if (onMouseDown) {
            setMousedownListener(google.maps.event.addListener(marker, 'mousedown', onMouseDown));
        }
        if (onMouseOut) {
            setMouseoutListener(google.maps.event.addListener(marker, 'mouseout', onMouseOut));
        }
        if (onMouseOver) {
            setMouseoverListener(google.maps.event.addListener(marker, 'mouseover', onMouseOver));
        }
        if (onMouseUp) {
            setMouseupListener(google.maps.event.addListener(marker, 'mouseup', onMouseUp));
        }
        if (onRightClick) {
            setRightclickListener(google.maps.event.addListener(marker, 'rightclick', onRightClick));
        }
        if (onClick) {
            setClickListener(google.maps.event.addListener(marker, 'click', onClick));
        }
        if (onDrag) {
            setDragListener(google.maps.event.addListener(marker, 'drag', onDrag));
        }
        if (onClickableChanged) {
            setClickableChangedListener(google.maps.event.addListener(marker, 'clickable_changed', onClickableChanged));
        }
        if (onCursorChanged) {
            setCursorChangedListener(google.maps.event.addListener(marker, 'cursor_changed', onCursorChanged));
        }
        if (onAnimationChanged) {
            setAnimationChangedListener(google.maps.event.addListener(marker, 'animation_changed', onAnimationChanged));
        }
        if (onDraggableChanged) {
            setDraggableChangedListener(google.maps.event.addListener(marker, 'draggable_changed', onDraggableChanged));
        }
        if (onFlatChanged) {
            setFlatChangedListener(google.maps.event.addListener(marker, 'flat_changed', onFlatChanged));
        }
        if (onIconChanged) {
            setIconChangedListener(google.maps.event.addListener(marker, 'icon_changed', onIconChanged));
        }
        if (onPositionChanged) {
            setPositionChangedListener(google.maps.event.addListener(marker, 'position_changed', onPositionChanged));
        }
        if (onShapeChanged) {
            setShapeChangedListener(google.maps.event.addListener(marker, 'shape_changed', onShapeChanged));
        }
        if (onTitleChanged) {
            setTitleChangedListener(google.maps.event.addListener(marker, 'title_changed', onTitleChanged));
        }
        if (onVisibleChanged) {
            setVisibleChangedListener(google.maps.event.addListener(marker, 'visible_changed', onVisibleChanged));
        }
        if (onZindexChanged) {
            setZindexChangedListener(google.maps.event.addListener(marker, 'zindex_changed', onZindexChanged));
        }
        setInstance(marker);
        if (onLoad) {
            onLoad(marker);
        }
        return function () {
            if (dblclickListener !== null) {
                google.maps.event.removeListener(dblclickListener);
            }
            if (dragendListener !== null) {
                google.maps.event.removeListener(dragendListener);
            }
            if (dragstartListener !== null) {
                google.maps.event.removeListener(dragstartListener);
            }
            if (mousedownListener !== null) {
                google.maps.event.removeListener(mousedownListener);
            }
            if (mouseoutListener !== null) {
                google.maps.event.removeListener(mouseoutListener);
            }
            if (mouseoverListener !== null) {
                google.maps.event.removeListener(mouseoverListener);
            }
            if (mouseupListener !== null) {
                google.maps.event.removeListener(mouseupListener);
            }
            if (rightclickListener !== null) {
                google.maps.event.removeListener(rightclickListener);
            }
            if (clickListener !== null) {
                google.maps.event.removeListener(clickListener);
            }
            if (clickableChangedListener !== null) {
                google.maps.event.removeListener(clickableChangedListener);
            }
            if (cursorChangedListener !== null) {
                google.maps.event.removeListener(cursorChangedListener);
            }
            if (animationChangedListener !== null) {
                google.maps.event.removeListener(animationChangedListener);
            }
            if (draggableChangedListener !== null) {
                google.maps.event.removeListener(draggableChangedListener);
            }
            if (flatChangedListener !== null) {
                google.maps.event.removeListener(flatChangedListener);
            }
            if (iconChangedListener !== null) {
                google.maps.event.removeListener(iconChangedListener);
            }
            if (positionChangedListener !== null) {
                google.maps.event.removeListener(positionChangedListener);
            }
            if (titleChangedListener !== null) {
                google.maps.event.removeListener(titleChangedListener);
            }
            if (visibleChangedListener !== null) {
                google.maps.event.removeListener(visibleChangedListener);
            }
            if (zIndexChangedListener !== null) {
                google.maps.event.removeListener(zIndexChangedListener);
            }
            if (onUnmount) {
                onUnmount(marker);
            }
            if (clusterer) {
                clusterer.removeMarker(marker, !!noClustererRedraw);
            }
            else if (marker) {
                marker.setMap(null);
            }
        };
    }, []);
    var chx = react.useMemo(function () {
        return children
            ? react.Children.map(children, function (child) {
                if (!react.isValidElement(child)) {
                    return child;
                }
                var elementChild = child;
                return react.cloneElement(elementChild, { anchor: instance });
            })
            : null;
    }, [children, instance]);
    return jsxRuntime.jsx(jsxRuntime.Fragment, { children: chx }) || null;
}
var MarkerF = react.memo(MarkerFunctional);
var Marker = /** @class */ (function (_super) {
    __extends(Marker, _super);
    function Marker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.registeredEvents = [];
        return _this;
    }
    Marker.prototype.componentDidMount = function () {
        var markerOptions = __assign(__assign(__assign({}, (this.props.options || defaultOptions$5)), (this.props.clusterer ? defaultOptions$5 : { map: this.context })), { position: this.props.position });
        // Unfortunately we can't just do this in the contstructor, because the
        // `MapContext` might not be filled in yet.
        this.marker = new google.maps.Marker(markerOptions);
        if (this.props.clusterer) {
            this.props.clusterer.addMarker(this.marker, !!this.props.noClustererRedraw);
        }
        else {
            this.marker.setMap(this.context);
        }
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$f,
            eventMap: eventMap$f,
            prevProps: {},
            nextProps: this.props,
            instance: this.marker,
        });
        if (this.props.onLoad) {
            this.props.onLoad(this.marker);
        }
    };
    Marker.prototype.componentDidUpdate = function (prevProps) {
        if (this.marker) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$f,
                eventMap: eventMap$f,
                prevProps: prevProps,
                nextProps: this.props,
                instance: this.marker,
            });
        }
    };
    Marker.prototype.componentWillUnmount = function () {
        if (this.marker) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.marker);
            }
            unregisterEvents(this.registeredEvents);
            if (this.props.clusterer) {
                this.props.clusterer.removeMarker(this.marker, !!this.props.noClustererRedraw);
            }
            else {
                this.marker && this.marker.setMap(null);
            }
        }
    };
    Marker.prototype.render = function () {
        var _this = this;
        var children = null;
        if (this.props.children) {
            children = react.Children.map(this.props.children, function (child) {
                if (!react.isValidElement(child)) {
                    return child;
                }
                var elementChild = child;
                return react.cloneElement(elementChild, { anchor: _this.marker });
            });
        }
        return children || null;
    };
    Marker.contextType = MapContext;
    return Marker;
}(react.PureComponent));

var ClusterIcon = /** @class */ (function () {
    function ClusterIcon(cluster, styles) {
        cluster.getClusterer().extend(ClusterIcon, google.maps.OverlayView);
        this.cluster = cluster;
        this.clusterClassName = this.cluster.getClusterer().getClusterClass();
        this.className = this.clusterClassName;
        this.styles = styles;
        this.center = undefined;
        this.div = null;
        this.sums = null;
        this.visible = false;
        this.boundsChangedListener = null;
        this.url = '';
        this.height = 0;
        this.width = 0;
        this.anchorText = [0, 0];
        this.anchorIcon = [0, 0];
        this.textColor = 'black';
        this.textSize = 11;
        this.textDecoration = 'none';
        this.fontWeight = 'bold';
        this.fontStyle = 'normal';
        this.fontFamily = 'Arial,sans-serif';
        this.backgroundPosition = '0 0';
        this.cMouseDownInCluster = null;
        this.cDraggingMapByCluster = null;
        this.timeOut = null;
        this.setMap(cluster.getMap()); // Note: this causes onAdd to be called
        this.onBoundsChanged = this.onBoundsChanged.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.draw = this.draw.bind(this);
        this.hide = this.hide.bind(this);
        this.show = this.show.bind(this);
        this.useStyle = this.useStyle.bind(this);
        this.setCenter = this.setCenter.bind(this);
        this.getPosFromLatLng = this.getPosFromLatLng.bind(this);
    }
    ClusterIcon.prototype.onBoundsChanged = function () {
        this.cDraggingMapByCluster = this.cMouseDownInCluster;
    };
    ClusterIcon.prototype.onMouseDown = function () {
        this.cMouseDownInCluster = true;
        this.cDraggingMapByCluster = false;
    };
    ClusterIcon.prototype.onClick = function (event) {
        this.cMouseDownInCluster = false;
        if (!this.cDraggingMapByCluster) {
            var markerClusterer_1 = this.cluster.getClusterer();
            /**
             * This event is fired when a cluster marker is clicked.
             * @name MarkerClusterer#click
             * @param {Cluster} c The cluster that was clicked.
             * @event
             */
            google.maps.event.trigger(markerClusterer_1, 'click', this.cluster);
            google.maps.event.trigger(markerClusterer_1, 'clusterclick', this.cluster); // deprecated name
            // The default click handler follows. Disable it by setting
            // the zoomOnClick property to false.
            if (markerClusterer_1.getZoomOnClick()) {
                // Zoom into the cluster.
                var maxZoom_1 = markerClusterer_1.getMaxZoom();
                var bounds_1 = this.cluster.getBounds();
                var map = markerClusterer_1.getMap();
                if (map !== null && 'fitBounds' in map) {
                    map.fitBounds(bounds_1);
                }
                // There is a fix for Issue 170 here:
                this.timeOut = window.setTimeout(function () {
                    var map = markerClusterer_1.getMap();
                    if (map !== null) {
                        if ('fitBounds' in map) {
                            map.fitBounds(bounds_1);
                        }
                        var zoom = map.getZoom() || 0;
                        // Don't zoom beyond the max zoom level
                        if (maxZoom_1 !== null &&
                            zoom > maxZoom_1) {
                            map.setZoom(maxZoom_1 + 1);
                        }
                    }
                }, 100);
            }
            // Prevent event propagation to the map:
            event.cancelBubble = true;
            if (event.stopPropagation) {
                event.stopPropagation();
            }
        }
    };
    ClusterIcon.prototype.onMouseOver = function () {
        /**
         * This event is fired when the mouse moves over a cluster marker.
         * @name MarkerClusterer#mouseover
         * @param {Cluster} c The cluster that the mouse moved over.
         * @event
         */
        google.maps.event.trigger(this.cluster.getClusterer(), 'mouseover', this.cluster);
    };
    ClusterIcon.prototype.onMouseOut = function () {
        /**
         * This event is fired when the mouse moves out of a cluster marker.
         * @name MarkerClusterer#mouseout
         * @param {Cluster} c The cluster that the mouse moved out of.
         * @event
         */
        google.maps.event.trigger(this.cluster.getClusterer(), 'mouseout', this.cluster);
    };
    ClusterIcon.prototype.onAdd = function () {
        var _a;
        this.div = document.createElement('div');
        this.div.className = this.className;
        if (this.visible) {
            this.show();
        }
        (_a = this.getPanes()) === null || _a === void 0 ? void 0 : _a.overlayMouseTarget.appendChild(this.div);
        var map = this.getMap();
        if (map !== null) {
            // Fix for Issue 157
            this.boundsChangedListener = google.maps.event.addListener(map, 'bounds_changed', this.onBoundsChanged);
            this.div.addEventListener('mousedown', this.onMouseDown);
            this.div.addEventListener('click', this.onClick);
            this.div.addEventListener('mouseover', this.onMouseOver);
            this.div.addEventListener('mouseout', this.onMouseOut);
        }
    };
    ClusterIcon.prototype.onRemove = function () {
        if (this.div && this.div.parentNode) {
            this.hide();
            if (this.boundsChangedListener !== null) {
                google.maps.event.removeListener(this.boundsChangedListener);
            }
            this.div.removeEventListener('mousedown', this.onMouseDown);
            this.div.removeEventListener('click', this.onClick);
            this.div.removeEventListener('mouseover', this.onMouseOver);
            this.div.removeEventListener('mouseout', this.onMouseOut);
            this.div.parentNode.removeChild(this.div);
            if (this.timeOut !== null) {
                window.clearTimeout(this.timeOut);
                this.timeOut = null;
            }
            this.div = null;
        }
    };
    ClusterIcon.prototype.draw = function () {
        if (this.visible && this.div !== null && this.center) {
            var pos = this.getPosFromLatLng(this.center);
            this.div.style.top = pos !== null ? "".concat(pos.y, "px") : '0';
            this.div.style.left = pos !== null ? "".concat(pos.x, "px") : '0';
        }
    };
    ClusterIcon.prototype.hide = function () {
        if (this.div) {
            this.div.style.display = 'none';
        }
        this.visible = false;
    };
    ClusterIcon.prototype.show = function () {
        var _a, _b, _c, _d, _e, _f;
        if (this.div && this.center) {
            var divTitle = this.sums === null ||
                typeof this.sums.title === 'undefined' ||
                this.sums.title === '' ? this.cluster.getClusterer().getTitle() : this.sums.title;
            // NOTE: values must be specified in px units
            var bp = this.backgroundPosition.split(' ');
            var spriteH = parseInt(((_a = bp[0]) === null || _a === void 0 ? void 0 : _a.replace(/^\s+|\s+$/g, '')) || '0', 10);
            var spriteV = parseInt(((_b = bp[1]) === null || _b === void 0 ? void 0 : _b.replace(/^\s+|\s+$/g, '')) || '0', 10);
            var pos = this.getPosFromLatLng(this.center);
            this.div.className = this.className;
            this.div.setAttribute('style', "cursor: pointer; position: absolute; top: ".concat(pos !== null ? "".concat(pos.y, "px") : '0', "; left: ").concat(pos !== null ? "".concat(pos.x, "px") : '0', "; width: ").concat(this.width, "px; height: ").concat(this.height, "px; "));
            var img = document.createElement('img');
            img.alt = divTitle;
            img.src = this.url;
            img.width = this.width;
            img.height = this.height;
            img.setAttribute('style', "position: absolute; top: ".concat(spriteV, "px; left: ").concat(spriteH, "px"));
            if (!this.cluster.getClusterer().enableRetinaIcons) {
                img.style.clip = "rect(-".concat(spriteV, "px, -").concat(spriteH + this.width, "px, -").concat(spriteV + this.height, ", -").concat(spriteH, ")");
            }
            var textElm = document.createElement('div');
            textElm.setAttribute('style', "position: absolute; top: ".concat(this.anchorText[0], "px; left: ").concat(this.anchorText[1], "px; color: ").concat(this.textColor, "; font-size: ").concat(this.textSize, "px; font-family: ").concat(this.fontFamily, "; font-weight: ").concat(this.fontWeight, "; fontStyle: ").concat(this.fontStyle, "; text-decoration: ").concat(this.textDecoration, "; text-align: center; width: ").concat(this.width, "px; line-height: ").concat(this.height, "px"));
            if ((_c = this.sums) === null || _c === void 0 ? void 0 : _c.text)
                textElm.innerText = "".concat((_d = this.sums) === null || _d === void 0 ? void 0 : _d.text);
            if ((_e = this.sums) === null || _e === void 0 ? void 0 : _e.html)
                textElm.innerHTML = "".concat((_f = this.sums) === null || _f === void 0 ? void 0 : _f.html);
            this.div.innerHTML = '';
            this.div.appendChild(img);
            this.div.appendChild(textElm);
            this.div.title = divTitle;
            this.div.style.display = '';
        }
        this.visible = true;
    };
    ClusterIcon.prototype.useStyle = function (sums) {
        this.sums = sums;
        var styles = this.cluster.getClusterer().getStyles();
        var style = styles[Math.min(styles.length - 1, Math.max(0, sums.index - 1))];
        if (style) {
            this.url = style.url;
            this.height = style.height;
            this.width = style.width;
            if (style.className) {
                this.className = "".concat(this.clusterClassName, " ").concat(style.className);
            }
            this.anchorText = style.anchorText || [0, 0];
            this.anchorIcon = style.anchorIcon || [this.height / 2, this.width / 2];
            this.textColor = style.textColor || 'black';
            this.textSize = style.textSize || 11;
            this.textDecoration = style.textDecoration || 'none';
            this.fontWeight = style.fontWeight || 'bold';
            this.fontStyle = style.fontStyle || 'normal';
            this.fontFamily = style.fontFamily || 'Arial,sans-serif';
            this.backgroundPosition = style.backgroundPosition || '0 0';
        }
    };
    ClusterIcon.prototype.setCenter = function (center) {
        this.center = center;
    };
    ClusterIcon.prototype.getPosFromLatLng = function (latlng) {
        var pos = this.getProjection().fromLatLngToDivPixel(latlng);
        if (pos !== null) {
            pos.x -= this.anchorIcon[1];
            pos.y -= this.anchorIcon[0];
        }
        return pos;
    };
    return ClusterIcon;
}());

/* global google */
var Cluster$1 = /** @class */ (function () {
    function Cluster(markerClusterer) {
        this.markerClusterer = markerClusterer;
        this.map = this.markerClusterer.getMap();
        this.gridSize = this.markerClusterer.getGridSize();
        this.minClusterSize = this.markerClusterer.getMinimumClusterSize();
        this.averageCenter = this.markerClusterer.getAverageCenter();
        this.markers = [];
        this.center = undefined;
        this.bounds = null;
        this.clusterIcon = new ClusterIcon(this, this.markerClusterer.getStyles());
        this.getSize = this.getSize.bind(this);
        this.getMarkers = this.getMarkers.bind(this);
        this.getCenter = this.getCenter.bind(this);
        this.getMap = this.getMap.bind(this);
        this.getClusterer = this.getClusterer.bind(this);
        this.getBounds = this.getBounds.bind(this);
        this.remove = this.remove.bind(this);
        this.addMarker = this.addMarker.bind(this);
        this.isMarkerInClusterBounds = this.isMarkerInClusterBounds.bind(this);
        this.calculateBounds = this.calculateBounds.bind(this);
        this.updateIcon = this.updateIcon.bind(this);
        this.isMarkerAlreadyAdded = this.isMarkerAlreadyAdded.bind(this);
    }
    Cluster.prototype.getSize = function () {
        return this.markers.length;
    };
    Cluster.prototype.getMarkers = function () {
        return this.markers;
    };
    Cluster.prototype.getCenter = function () {
        return this.center;
    };
    Cluster.prototype.getMap = function () {
        return this.map;
    };
    Cluster.prototype.getClusterer = function () {
        return this.markerClusterer;
    };
    Cluster.prototype.getBounds = function () {
        var bounds = new google.maps.LatLngBounds(this.center, this.center);
        var markers = this.getMarkers();
        for (var _i = 0, markers_1 = markers; _i < markers_1.length; _i++) {
            var marker = markers_1[_i];
            var position = marker.getPosition();
            if (position) {
                bounds.extend(position);
            }
        }
        return bounds;
    };
    Cluster.prototype.remove = function () {
        this.clusterIcon.setMap(null);
        this.markers = [];
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        delete this.markers;
    };
    Cluster.prototype.addMarker = function (marker) {
        var _a;
        if (this.isMarkerAlreadyAdded(marker)) {
            return false;
        }
        if (!this.center) {
            var position = marker.getPosition();
            if (position) {
                this.center = position;
                this.calculateBounds();
            }
        }
        else {
            if (this.averageCenter) {
                var position = marker.getPosition();
                if (position) {
                    var length_1 = this.markers.length + 1;
                    this.center = new google.maps.LatLng((this.center.lat() * (length_1 - 1) + position.lat()) / length_1, (this.center.lng() * (length_1 - 1) + position.lng()) / length_1);
                    this.calculateBounds();
                }
            }
        }
        marker.isAdded = true;
        this.markers.push(marker);
        var mCount = this.markers.length;
        var maxZoom = this.markerClusterer.getMaxZoom();
        var zoom = (_a = this.map) === null || _a === void 0 ? void 0 : _a.getZoom();
        if (maxZoom !== null && typeof zoom !== 'undefined' && zoom > maxZoom) {
            // Zoomed in past max zoom, so show the marker.
            if (marker.getMap() !== this.map) {
                marker.setMap(this.map);
            }
        }
        else if (mCount < this.minClusterSize) {
            // Min cluster size not reached so show the marker.
            if (marker.getMap() !== this.map) {
                marker.setMap(this.map);
            }
        }
        else if (mCount === this.minClusterSize) {
            // Hide the markers that were showing.
            for (var _i = 0, _b = this.markers; _i < _b.length; _i++) {
                var markerElement = _b[_i];
                markerElement.setMap(null);
            }
        }
        else {
            marker.setMap(null);
        }
        return true;
    };
    Cluster.prototype.isMarkerInClusterBounds = function (marker) {
        if (this.bounds !== null) {
            var position = marker.getPosition();
            if (position) {
                return this.bounds.contains(position);
            }
        }
        return false;
    };
    Cluster.prototype.calculateBounds = function () {
        this.bounds = this.markerClusterer.getExtendedBounds(new google.maps.LatLngBounds(this.center, this.center));
    };
    Cluster.prototype.updateIcon = function () {
        var _a;
        var mCount = this.markers.length;
        var maxZoom = this.markerClusterer.getMaxZoom();
        var zoom = (_a = this.map) === null || _a === void 0 ? void 0 : _a.getZoom();
        if (maxZoom !== null && typeof zoom !== 'undefined' && zoom > maxZoom) {
            this.clusterIcon.hide();
            return;
        }
        if (mCount < this.minClusterSize) {
            // Min cluster size not yet reached.
            this.clusterIcon.hide();
            return;
        }
        if (this.center) {
            this.clusterIcon.setCenter(this.center);
        }
        this.clusterIcon.useStyle(this.markerClusterer.getCalculator()(this.markers, this.markerClusterer.getStyles().length));
        this.clusterIcon.show();
    };
    Cluster.prototype.isMarkerAlreadyAdded = function (marker) {
        if (this.markers.includes) {
            return this.markers.includes(marker);
        }
        for (var i = 0; i < this.markers.length; i++) {
            if (marker === this.markers[i]) {
                return true;
            }
        }
        return false;
    };
    return Cluster;
}());

/* global google */
/**
 * Supports up to 9007199254740991 (Number.MAX_SAFE_INTEGER) markers
 * which is not a problem as max array length is 4294967296 (2**32)
 */
function CALCULATOR(markers, numStyles) {
    var count = markers.length;
    var numberOfDigits = count.toString().length;
    var index = Math.min(numberOfDigits, numStyles);
    return {
        text: count.toString(),
        index: index,
        title: '',
    };
}
var BATCH_SIZE = 2000;
var BATCH_SIZE_IE = 500;
var IMAGE_PATH = 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m';
var IMAGE_EXTENSION = 'png';
var IMAGE_SIZES = [53, 56, 66, 78, 90];
var CLUSTERER_CLASS = 'cluster';
var Clusterer = /** @class */ (function () {
    function Clusterer(map, optMarkers, optOptions) {
        if (optMarkers === void 0) { optMarkers = []; }
        if (optOptions === void 0) { optOptions = {}; }
        this.getMinimumClusterSize = this.getMinimumClusterSize.bind(this);
        this.setMinimumClusterSize = this.setMinimumClusterSize.bind(this);
        this.getEnableRetinaIcons = this.getEnableRetinaIcons.bind(this);
        this.setEnableRetinaIcons = this.setEnableRetinaIcons.bind(this);
        this.addToClosestCluster = this.addToClosestCluster.bind(this);
        this.getImageExtension = this.getImageExtension.bind(this);
        this.setImageExtension = this.setImageExtension.bind(this);
        this.getExtendedBounds = this.getExtendedBounds.bind(this);
        this.getAverageCenter = this.getAverageCenter.bind(this);
        this.setAverageCenter = this.setAverageCenter.bind(this);
        this.getTotalClusters = this.getTotalClusters.bind(this);
        this.fitMapToMarkers = this.fitMapToMarkers.bind(this);
        this.getIgnoreHidden = this.getIgnoreHidden.bind(this);
        this.setIgnoreHidden = this.setIgnoreHidden.bind(this);
        this.getClusterClass = this.getClusterClass.bind(this);
        this.setClusterClass = this.setClusterClass.bind(this);
        this.getTotalMarkers = this.getTotalMarkers.bind(this);
        this.getZoomOnClick = this.getZoomOnClick.bind(this);
        this.setZoomOnClick = this.setZoomOnClick.bind(this);
        this.getBatchSizeIE = this.getBatchSizeIE.bind(this);
        this.setBatchSizeIE = this.setBatchSizeIE.bind(this);
        this.createClusters = this.createClusters.bind(this);
        this.onZoomChanged = this.onZoomChanged.bind(this);
        this.getImageSizes = this.getImageSizes.bind(this);
        this.setImageSizes = this.setImageSizes.bind(this);
        this.getCalculator = this.getCalculator.bind(this);
        this.setCalculator = this.setCalculator.bind(this);
        this.removeMarkers = this.removeMarkers.bind(this);
        this.resetViewport = this.resetViewport.bind(this);
        this.getImagePath = this.getImagePath.bind(this);
        this.setImagePath = this.setImagePath.bind(this);
        this.pushMarkerTo = this.pushMarkerTo.bind(this);
        this.removeMarker = this.removeMarker.bind(this);
        this.clearMarkers = this.clearMarkers.bind(this);
        this.setupStyles = this.setupStyles.bind(this);
        this.getGridSize = this.getGridSize.bind(this);
        this.setGridSize = this.setGridSize.bind(this);
        this.getClusters = this.getClusters.bind(this);
        this.getMaxZoom = this.getMaxZoom.bind(this);
        this.setMaxZoom = this.setMaxZoom.bind(this);
        this.getMarkers = this.getMarkers.bind(this);
        this.addMarkers = this.addMarkers.bind(this);
        this.getStyles = this.getStyles.bind(this);
        this.setStyles = this.setStyles.bind(this);
        this.addMarker = this.addMarker.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.getTitle = this.getTitle.bind(this);
        this.setTitle = this.setTitle.bind(this);
        this.repaint = this.repaint.bind(this);
        this.onIdle = this.onIdle.bind(this);
        this.redraw = this.redraw.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.draw = this.draw.bind(this);
        this.extend = this.extend.bind(this);
        this.extend(Clusterer, google.maps.OverlayView);
        this.markers = [];
        this.clusters = [];
        this.listeners = [];
        this.activeMap = null;
        this.ready = false;
        this.gridSize = optOptions.gridSize || 60;
        this.minClusterSize = optOptions.minimumClusterSize || 2;
        this.maxZoom = optOptions.maxZoom || null;
        this.styles = optOptions.styles || [];
        this.title = optOptions.title || '';
        this.zoomOnClick = true;
        if (optOptions.zoomOnClick !== undefined) {
            this.zoomOnClick = optOptions.zoomOnClick;
        }
        this.averageCenter = false;
        if (optOptions.averageCenter !== undefined) {
            this.averageCenter = optOptions.averageCenter;
        }
        this.ignoreHidden = false;
        if (optOptions.ignoreHidden !== undefined) {
            this.ignoreHidden = optOptions.ignoreHidden;
        }
        this.enableRetinaIcons = false;
        if (optOptions.enableRetinaIcons !== undefined) {
            this.enableRetinaIcons = optOptions.enableRetinaIcons;
        }
        this.imagePath = optOptions.imagePath || IMAGE_PATH;
        this.imageExtension = optOptions.imageExtension || IMAGE_EXTENSION;
        this.imageSizes = optOptions.imageSizes || IMAGE_SIZES;
        this.calculator = optOptions.calculator || CALCULATOR;
        this.batchSize = optOptions.batchSize || BATCH_SIZE;
        this.batchSizeIE = optOptions.batchSizeIE || BATCH_SIZE_IE;
        this.clusterClass = optOptions.clusterClass || CLUSTERER_CLASS;
        if (navigator.userAgent.toLowerCase().indexOf('msie') !== -1) {
            // Try to avoid IE timeout when processing a huge number of markers:
            this.batchSize = this.batchSizeIE;
        }
        this.timerRefStatic = null;
        this.setupStyles();
        this.addMarkers(optMarkers, true);
        this.setMap(map); // Note: this causes onAdd to be called
    }
    Clusterer.prototype.onZoomChanged = function () {
        var _a, _b;
        this.resetViewport(false);
        // Workaround for this Google bug: when map is at level 0 and "-" of
        // zoom slider is clicked, a "zoom_changed" event is fired even though
        // the map doesn't zoom out any further. In this situation, no "idle"
        // event is triggered so the cluster markers that have been removed
        // do not get redrawn. Same goes for a zoom in at maxZoom.
        if (((_a = this.getMap()) === null || _a === void 0 ? void 0 : _a.getZoom()) === (this.get('minZoom') || 0) ||
            ((_b = this.getMap()) === null || _b === void 0 ? void 0 : _b.getZoom()) === this.get('maxZoom')) {
            google.maps.event.trigger(this, 'idle');
        }
    };
    Clusterer.prototype.onIdle = function () {
        this.redraw();
    };
    Clusterer.prototype.onAdd = function () {
        var map = this.getMap();
        this.activeMap = map;
        this.ready = true;
        this.repaint();
        if (map !== null) {
            // Add the map event listeners
            this.listeners = [
                google.maps.event.addListener(map, 'zoom_changed', this.onZoomChanged),
                google.maps.event.addListener(map, 'idle', this.onIdle),
            ];
        }
    };
    Clusterer.prototype.onRemove = function () {
        // Put all the managed markers back on the map:
        for (var _i = 0, _a = this.markers; _i < _a.length; _i++) {
            var marker = _a[_i];
            if (marker.getMap() !== this.activeMap) {
                marker.setMap(this.activeMap);
            }
        }
        // Remove all clusters:
        for (var _b = 0, _c = this.clusters; _b < _c.length; _b++) {
            var cluster = _c[_b];
            cluster.remove();
        }
        this.clusters = [];
        // Remove map event listeners:
        for (var _d = 0, _e = this.listeners; _d < _e.length; _d++) {
            var listener = _e[_d];
            google.maps.event.removeListener(listener);
        }
        this.listeners = [];
        this.activeMap = null;
        this.ready = false;
    };
    Clusterer.prototype.draw = function () { return; };
    Clusterer.prototype.getMap = function () { return null; };
    Clusterer.prototype.getPanes = function () { return null; };
    Clusterer.prototype.getProjection = function () {
        return {
            fromContainerPixelToLatLng: function () { return null; },
            fromDivPixelToLatLng: function () { return null; },
            fromLatLngToContainerPixel: function () { return null; },
            fromLatLngToDivPixel: function () { return null; },
            getVisibleRegion: function () { return null; },
            getWorldWidth: function () { return 0; }
        };
    };
    Clusterer.prototype.setMap = function () { return; };
    Clusterer.prototype.addListener = function () {
        return {
            remove: function () { return; }
        };
    };
    Clusterer.prototype.bindTo = function () { return; };
    Clusterer.prototype.get = function () { return; };
    Clusterer.prototype.notify = function () { return; };
    Clusterer.prototype.set = function () { return; };
    Clusterer.prototype.setValues = function () { return; };
    Clusterer.prototype.unbind = function () { return; };
    Clusterer.prototype.unbindAll = function () { return; };
    Clusterer.prototype.setupStyles = function () {
        if (this.styles.length > 0) {
            return;
        }
        for (var i = 0; i < this.imageSizes.length; i++) {
            this.styles.push({
                url: "".concat(this.imagePath + (i + 1), ".").concat(this.imageExtension),
                height: this.imageSizes[i] || 0,
                width: this.imageSizes[i] || 0,
            });
        }
    };
    Clusterer.prototype.fitMapToMarkers = function () {
        var markers = this.getMarkers();
        var bounds = new google.maps.LatLngBounds();
        for (var _i = 0, markers_1 = markers; _i < markers_1.length; _i++) {
            var marker = markers_1[_i];
            var position = marker.getPosition();
            if (position) {
                bounds.extend(position);
            }
        }
        var map = this.getMap();
        if (map !== null && 'fitBounds' in map) {
            map.fitBounds(bounds);
        }
    };
    Clusterer.prototype.getGridSize = function () {
        return this.gridSize;
    };
    Clusterer.prototype.setGridSize = function (gridSize) {
        this.gridSize = gridSize;
    };
    Clusterer.prototype.getMinimumClusterSize = function () {
        return this.minClusterSize;
    };
    Clusterer.prototype.setMinimumClusterSize = function (minimumClusterSize) {
        this.minClusterSize = minimumClusterSize;
    };
    Clusterer.prototype.getMaxZoom = function () {
        return this.maxZoom;
    };
    Clusterer.prototype.setMaxZoom = function (maxZoom) {
        this.maxZoom = maxZoom;
    };
    Clusterer.prototype.getStyles = function () {
        return this.styles;
    };
    Clusterer.prototype.setStyles = function (styles) {
        this.styles = styles;
    };
    Clusterer.prototype.getTitle = function () {
        return this.title;
    };
    Clusterer.prototype.setTitle = function (title) {
        this.title = title;
    };
    Clusterer.prototype.getZoomOnClick = function () {
        return this.zoomOnClick;
    };
    Clusterer.prototype.setZoomOnClick = function (zoomOnClick) {
        this.zoomOnClick = zoomOnClick;
    };
    Clusterer.prototype.getAverageCenter = function () {
        return this.averageCenter;
    };
    Clusterer.prototype.setAverageCenter = function (averageCenter) {
        this.averageCenter = averageCenter;
    };
    Clusterer.prototype.getIgnoreHidden = function () {
        return this.ignoreHidden;
    };
    Clusterer.prototype.setIgnoreHidden = function (ignoreHidden) {
        this.ignoreHidden = ignoreHidden;
    };
    Clusterer.prototype.getEnableRetinaIcons = function () {
        return this.enableRetinaIcons;
    };
    Clusterer.prototype.setEnableRetinaIcons = function (enableRetinaIcons) {
        this.enableRetinaIcons = enableRetinaIcons;
    };
    Clusterer.prototype.getImageExtension = function () {
        return this.imageExtension;
    };
    Clusterer.prototype.setImageExtension = function (imageExtension) {
        this.imageExtension = imageExtension;
    };
    Clusterer.prototype.getImagePath = function () {
        return this.imagePath;
    };
    Clusterer.prototype.setImagePath = function (imagePath) {
        this.imagePath = imagePath;
    };
    Clusterer.prototype.getImageSizes = function () {
        return this.imageSizes;
    };
    Clusterer.prototype.setImageSizes = function (imageSizes) {
        this.imageSizes = imageSizes;
    };
    Clusterer.prototype.getCalculator = function () {
        return this.calculator;
    };
    Clusterer.prototype.setCalculator = function (calculator) {
        this.calculator = calculator;
    };
    Clusterer.prototype.getBatchSizeIE = function () {
        return this.batchSizeIE;
    };
    Clusterer.prototype.setBatchSizeIE = function (batchSizeIE) {
        this.batchSizeIE = batchSizeIE;
    };
    Clusterer.prototype.getClusterClass = function () {
        return this.clusterClass;
    };
    Clusterer.prototype.setClusterClass = function (clusterClass) {
        this.clusterClass = clusterClass;
    };
    Clusterer.prototype.getMarkers = function () {
        return this.markers;
    };
    Clusterer.prototype.getTotalMarkers = function () {
        return this.markers.length;
    };
    Clusterer.prototype.getClusters = function () {
        return this.clusters;
    };
    Clusterer.prototype.getTotalClusters = function () {
        return this.clusters.length;
    };
    Clusterer.prototype.addMarker = function (marker, optNoDraw) {
        this.pushMarkerTo(marker);
        if (!optNoDraw) {
            this.redraw();
        }
    };
    Clusterer.prototype.addMarkers = function (markers, optNoDraw) {
        for (var key in markers) {
            if (Object.prototype.hasOwnProperty.call(markers, key)) {
                var marker = markers[key];
                if (marker) {
                    this.pushMarkerTo(marker);
                }
            }
        }
        if (!optNoDraw) {
            this.redraw();
        }
    };
    Clusterer.prototype.pushMarkerTo = function (marker) {
        var _this = this;
        // If the marker is draggable add a listener so we can update the clusters on the dragend:
        if (marker.getDraggable()) {
            google.maps.event.addListener(marker, 'dragend', function () {
                if (_this.ready) {
                    marker.isAdded = false;
                    _this.repaint();
                }
            });
        }
        marker.isAdded = false;
        this.markers.push(marker);
    };
    Clusterer.prototype.removeMarker_ = function (marker) {
        var index = -1;
        if (this.markers.indexOf) {
            index = this.markers.indexOf(marker);
        }
        else {
            for (var i = 0; i < this.markers.length; i++) {
                if (marker === this.markers[i]) {
                    index = i;
                    break;
                }
            }
        }
        if (index === -1) {
            // Marker is not in our list of markers, so do nothing:
            return false;
        }
        marker.setMap(null);
        this.markers.splice(index, 1); // Remove the marker from the list of managed markers
        return true;
    };
    Clusterer.prototype.removeMarker = function (marker, optNoDraw) {
        var removed = this.removeMarker_(marker);
        if (!optNoDraw && removed) {
            this.repaint();
        }
        return removed;
    };
    Clusterer.prototype.removeMarkers = function (markers, optNoDraw) {
        var removed = false;
        for (var _i = 0, markers_2 = markers; _i < markers_2.length; _i++) {
            var marker = markers_2[_i];
            removed = removed || this.removeMarker_(marker);
        }
        if (!optNoDraw && removed) {
            this.repaint();
        }
        return removed;
    };
    Clusterer.prototype.clearMarkers = function () {
        this.resetViewport(true);
        this.markers = [];
    };
    Clusterer.prototype.repaint = function () {
        var oldClusters = this.clusters.slice();
        this.clusters = [];
        this.resetViewport(false);
        this.redraw();
        // Remove the old clusters.
        // Do it in a timeout to prevent blinking effect.
        setTimeout(function timeout() {
            for (var _i = 0, oldClusters_1 = oldClusters; _i < oldClusters_1.length; _i++) {
                var oldCluster = oldClusters_1[_i];
                oldCluster.remove();
            }
        }, 0);
    };
    Clusterer.prototype.getExtendedBounds = function (bounds) {
        var projection = this.getProjection();
        // Convert the points to pixels and the extend out by the grid size.
        var trPix = projection.fromLatLngToDivPixel(
        // Turn the bounds into latlng.
        new google.maps.LatLng(bounds.getNorthEast().lat(), bounds.getNorthEast().lng()));
        if (trPix !== null) {
            trPix.x += this.gridSize;
            trPix.y -= this.gridSize;
        }
        var blPix = projection.fromLatLngToDivPixel(
        // Turn the bounds into latlng.
        new google.maps.LatLng(bounds.getSouthWest().lat(), bounds.getSouthWest().lng()));
        if (blPix !== null) {
            blPix.x -= this.gridSize;
            blPix.y += this.gridSize;
        }
        // Extend the bounds to contain the new bounds.
        if (trPix !== null) {
            // Convert the pixel points back to LatLng nw
            var point1 = projection.fromDivPixelToLatLng(trPix);
            if (point1 !== null) {
                bounds.extend(point1);
            }
        }
        if (blPix !== null) {
            // Convert the pixel points back to LatLng sw
            var point2 = projection.fromDivPixelToLatLng(blPix);
            if (point2 !== null) {
                bounds.extend(point2);
            }
        }
        return bounds;
    };
    Clusterer.prototype.redraw = function () {
        // Redraws all the clusters.
        this.createClusters(0);
    };
    Clusterer.prototype.resetViewport = function (optHide) {
        // Remove all the clusters
        for (var _i = 0, _a = this.clusters; _i < _a.length; _i++) {
            var cluster = _a[_i];
            cluster.remove();
        }
        this.clusters = [];
        // Reset the markers to not be added and to be removed from the map.
        for (var _b = 0, _c = this.markers; _b < _c.length; _b++) {
            var marker = _c[_b];
            marker.isAdded = false;
            if (optHide) {
                marker.setMap(null);
            }
        }
    };
    Clusterer.prototype.distanceBetweenPoints = function (p1, p2) {
        var R = 6371; // Radius of the Earth in km
        var dLat = ((p2.lat() - p1.lat()) * Math.PI) / 180;
        var dLon = ((p2.lng() - p1.lng()) * Math.PI) / 180;
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos((p1.lat() * Math.PI) / 180) *
                Math.cos((p2.lat() * Math.PI) / 180) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);
        return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
    };
    Clusterer.prototype.isMarkerInBounds = function (marker, bounds) {
        var position = marker.getPosition();
        if (position) {
            return bounds.contains(position);
        }
        return false;
    };
    Clusterer.prototype.addToClosestCluster = function (marker) {
        var cluster;
        var distance = 40000; // Some large number
        var clusterToAddTo = null;
        for (var _i = 0, _a = this.clusters; _i < _a.length; _i++) {
            var clusterElement = _a[_i];
            cluster = clusterElement;
            var center = cluster.getCenter();
            var position = marker.getPosition();
            if (center && position) {
                var d = this.distanceBetweenPoints(center, position);
                if (d < distance) {
                    distance = d;
                    clusterToAddTo = cluster;
                }
            }
        }
        if (clusterToAddTo && clusterToAddTo.isMarkerInClusterBounds(marker)) {
            clusterToAddTo.addMarker(marker);
        }
        else {
            cluster = new Cluster$1(this);
            cluster.addMarker(marker);
            this.clusters.push(cluster);
        }
    };
    Clusterer.prototype.createClusters = function (iFirst) {
        var _this = this;
        if (!this.ready) {
            return;
        }
        // Cancel previous batch processing if we're working on the first batch:
        if (iFirst === 0) {
            /**
             * This event is fired when the <code>Clusterer</code> begins
             *  clustering markers.
             * @name Clusterer#clusteringbegin
             * @param {Clusterer} mc The Clusterer whose markers are being clustered.
             * @event
             */
            google.maps.event.trigger(this, 'clusteringbegin', this);
            if (this.timerRefStatic !== null) {
                window.clearTimeout(this.timerRefStatic);
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                delete this.timerRefStatic;
            }
        }
        var map = this.getMap();
        var bounds = map !== null && 'getBounds' in map ? map.getBounds() : null;
        var zoom = (map === null || map === void 0 ? void 0 : map.getZoom()) || 0;
        // Get our current map view bounds.
        // Create a new bounds object so we don't affect the map.
        //
        // See Comments 9 & 11 on Issue 3651 relating to this workaround for a Google Maps bug:
        var mapBounds = zoom > 3
            ? new google.maps.LatLngBounds(bounds === null || bounds === void 0 ? void 0 : bounds.getSouthWest(), bounds === null || bounds === void 0 ? void 0 : bounds.getNorthEast())
            : new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472, -178.48388434375), new google.maps.LatLng(-85.08136444384544, 178.00048865625));
        var extendedMapBounds = this.getExtendedBounds(mapBounds);
        var iLast = Math.min(iFirst + this.batchSize, this.markers.length);
        for (var i = iFirst; i < iLast; i++) {
            var marker = this.markers[i];
            if (marker && !marker.isAdded && this.isMarkerInBounds(marker, extendedMapBounds) && (!this.ignoreHidden || (this.ignoreHidden && marker.getVisible()))) {
                this.addToClosestCluster(marker);
            }
        }
        if (iLast < this.markers.length) {
            this.timerRefStatic = window.setTimeout(function () {
                _this.createClusters(iLast);
            }, 0);
        }
        else {
            this.timerRefStatic = null;
            /**
             * This event is fired when the <code>Clusterer</code> stops
             *  clustering markers.
             * @name Clusterer#clusteringend
             * @param {Clusterer} mc The Clusterer whose markers are being clustered.
             * @event
             */
            google.maps.event.trigger(this, 'clusteringend', this);
            for (var _i = 0, _a = this.clusters; _i < _a.length; _i++) {
                var cluster = _a[_i];
                cluster.updateIcon();
            }
        }
    };
    Clusterer.prototype.extend = function (obj1, obj2) {
        return function applyExtend(object) {
            for (var property in object.prototype) {
                // eslint-disable-next-line @typescript-eslint/ban-types
                var prop = property;
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                this.prototype[prop] = object.prototype[prop];
            }
            return this;
        }.apply(obj1, [obj2]);
    };
    return Clusterer;
}());

var eventMap$e = {
    onClick: 'click',
    onClusteringBegin: 'clusteringbegin',
    onClusteringEnd: 'clusteringend',
    onMouseOut: 'mouseout',
    onMouseOver: 'mouseover',
};
var updaterMap$e = {
    averageCenter: function (instance, averageCenter) {
        instance.setAverageCenter(averageCenter);
    },
    batchSizeIE: function (instance, batchSizeIE) {
        instance.setBatchSizeIE(batchSizeIE);
    },
    calculator: function (instance, calculator) {
        instance.setCalculator(calculator);
    },
    clusterClass: function (instance, clusterClass) {
        instance.setClusterClass(clusterClass);
    },
    enableRetinaIcons: function (instance, enableRetinaIcons) {
        instance.setEnableRetinaIcons(enableRetinaIcons);
    },
    gridSize: function (instance, gridSize) {
        instance.setGridSize(gridSize);
    },
    ignoreHidden: function (instance, ignoreHidden) {
        instance.setIgnoreHidden(ignoreHidden);
    },
    imageExtension: function (instance, imageExtension) {
        instance.setImageExtension(imageExtension);
    },
    imagePath: function (instance, imagePath) {
        instance.setImagePath(imagePath);
    },
    imageSizes: function (instance, imageSizes) {
        instance.setImageSizes(imageSizes);
    },
    maxZoom: function (instance, maxZoom) {
        instance.setMaxZoom(maxZoom);
    },
    minimumClusterSize: function (instance, minimumClusterSize) {
        instance.setMinimumClusterSize(minimumClusterSize);
    },
    styles: function (instance, styles) {
        instance.setStyles(styles);
    },
    title: function (instance, title) {
        instance.setTitle(title);
    },
    zoomOnClick: function (instance, zoomOnClick) {
        instance.setZoomOnClick(zoomOnClick);
    },
};
var defaultOptions$4 = {};
function MarkerClustererFunctional(props) {
    var children = props.children, options = props.options, averageCenter = props.averageCenter, batchSizeIE = props.batchSizeIE, calculator = props.calculator, clusterClass = props.clusterClass, enableRetinaIcons = props.enableRetinaIcons, gridSize = props.gridSize, ignoreHidden = props.ignoreHidden, imageExtension = props.imageExtension, imagePath = props.imagePath, imageSizes = props.imageSizes, maxZoom = props.maxZoom, minimumClusterSize = props.minimumClusterSize, styles = props.styles, title = props.title, zoomOnClick = props.zoomOnClick, onClick = props.onClick, onClusteringBegin = props.onClusteringBegin, onClusteringEnd = props.onClusteringEnd, onMouseOver = props.onMouseOver, onMouseOut = props.onMouseOut, onLoad = props.onLoad, onUnmount = props.onUnmount;
    var _a = react.useState(null), instance = _a[0], setInstance = _a[1];
    var map = react.useContext(MapContext);
    var _b = react.useState(null), clickListener = _b[0], setClickListener = _b[1];
    var _c = react.useState(null), clusteringBeginListener = _c[0], setClusteringBeginListener = _c[1];
    var _d = react.useState(null), clusteringEndListener = _d[0], setClusteringEndListener = _d[1];
    var _e = react.useState(null), mouseoutListener = _e[0], setMouseoutListener = _e[1];
    var _f = react.useState(null), mouseoverListener = _f[0], setMouseoverListener = _f[1];
    react.useEffect(function () {
        if (instance && onMouseOut) {
            if (mouseoutListener !== null) {
                google.maps.event.removeListener(mouseoutListener);
            }
            setMouseoutListener(google.maps.event.addListener(instance, eventMap$e.onMouseOut, onMouseOut));
        }
    }, [onMouseOut]);
    react.useEffect(function () {
        if (instance && onMouseOver) {
            if (mouseoverListener !== null) {
                google.maps.event.removeListener(mouseoverListener);
            }
            setMouseoverListener(google.maps.event.addListener(instance, eventMap$e.onMouseOver, onMouseOver));
        }
    }, [onMouseOver]);
    react.useEffect(function () {
        if (instance && onClick) {
            if (clickListener !== null) {
                google.maps.event.removeListener(clickListener);
            }
            setClickListener(google.maps.event.addListener(instance, eventMap$e.onClick, onClick));
        }
    }, [onClick]);
    react.useEffect(function () {
        if (instance && onClusteringBegin) {
            if (clusteringBeginListener !== null) {
                google.maps.event.removeListener(clusteringBeginListener);
            }
            setClusteringBeginListener(google.maps.event.addListener(instance, eventMap$e.onClusteringBegin, onClusteringBegin));
        }
    }, [onClusteringBegin]);
    react.useEffect(function () {
        if (instance && onClusteringEnd) {
            if (clusteringEndListener !== null) {
                google.maps.event.removeListener(clusteringEndListener);
            }
            setClusteringBeginListener(google.maps.event.addListener(instance, eventMap$e.onClusteringEnd, onClusteringEnd));
        }
    }, [onClusteringEnd]);
    react.useEffect(function () {
        if (typeof averageCenter !== 'undefined' && instance !== null) {
            updaterMap$e.averageCenter(instance, averageCenter);
        }
    }, [instance, averageCenter]);
    react.useEffect(function () {
        if (typeof batchSizeIE !== 'undefined' && instance !== null) {
            updaterMap$e.batchSizeIE(instance, batchSizeIE);
        }
    }, [instance, batchSizeIE]);
    react.useEffect(function () {
        if (typeof calculator !== 'undefined' && instance !== null) {
            updaterMap$e.calculator(instance, calculator);
        }
    }, [instance, calculator]);
    react.useEffect(function () {
        if (typeof clusterClass !== 'undefined' && instance !== null) {
            updaterMap$e.clusterClass(instance, clusterClass);
        }
    }, [instance, clusterClass]);
    react.useEffect(function () {
        if (typeof enableRetinaIcons !== 'undefined' && instance !== null) {
            updaterMap$e.enableRetinaIcons(instance, enableRetinaIcons);
        }
    }, [instance, enableRetinaIcons]);
    react.useEffect(function () {
        if (typeof gridSize !== 'undefined' && instance !== null) {
            updaterMap$e.gridSize(instance, gridSize);
        }
    }, [instance, gridSize]);
    react.useEffect(function () {
        if (typeof ignoreHidden !== 'undefined' && instance !== null) {
            updaterMap$e.ignoreHidden(instance, ignoreHidden);
        }
    }, [instance, ignoreHidden]);
    react.useEffect(function () {
        if (typeof imageExtension !== 'undefined' && instance !== null) {
            updaterMap$e.imageExtension(instance, imageExtension);
        }
    }, [instance, imageExtension]);
    react.useEffect(function () {
        if (typeof imagePath !== 'undefined' && instance !== null) {
            updaterMap$e.imagePath(instance, imagePath);
        }
    }, [instance, imagePath]);
    react.useEffect(function () {
        if (typeof imageSizes !== 'undefined' && instance !== null) {
            updaterMap$e.imageSizes(instance, imageSizes);
        }
    }, [instance, imageSizes]);
    react.useEffect(function () {
        if (typeof maxZoom !== 'undefined' && instance !== null) {
            updaterMap$e.maxZoom(instance, maxZoom);
        }
    }, [instance, maxZoom]);
    react.useEffect(function () {
        if (typeof minimumClusterSize !== 'undefined' && instance !== null) {
            updaterMap$e.minimumClusterSize(instance, minimumClusterSize);
        }
    }, [instance, minimumClusterSize]);
    react.useEffect(function () {
        if (typeof styles !== 'undefined' && instance !== null) {
            updaterMap$e.styles(instance, styles);
        }
    }, [instance, styles]);
    react.useEffect(function () {
        if (typeof title !== 'undefined' && instance !== null) {
            updaterMap$e.title(instance, title);
        }
    }, [instance, title]);
    react.useEffect(function () {
        if (typeof zoomOnClick !== 'undefined' && instance !== null) {
            updaterMap$e.zoomOnClick(instance, zoomOnClick);
        }
    }, [instance, zoomOnClick]);
    react.useEffect(function () {
        if (!map)
            return;
        var clustererOptions = __assign({}, (options || defaultOptions$4));
        var clusterer = new Clusterer(map, [], clustererOptions);
        if (averageCenter) {
            updaterMap$e.averageCenter(clusterer, averageCenter);
        }
        if (batchSizeIE) {
            updaterMap$e.batchSizeIE(clusterer, batchSizeIE);
        }
        if (calculator) {
            updaterMap$e.calculator(clusterer, calculator);
        }
        if (clusterClass) {
            updaterMap$e.clusterClass(clusterer, clusterClass);
        }
        if (enableRetinaIcons) {
            updaterMap$e.enableRetinaIcons(clusterer, enableRetinaIcons);
        }
        if (gridSize) {
            updaterMap$e.gridSize(clusterer, gridSize);
        }
        if (ignoreHidden) {
            updaterMap$e.ignoreHidden(clusterer, ignoreHidden);
        }
        if (imageExtension) {
            updaterMap$e.imageExtension(clusterer, imageExtension);
        }
        if (imagePath) {
            updaterMap$e.imagePath(clusterer, imagePath);
        }
        if (imageSizes) {
            updaterMap$e.imageSizes(clusterer, imageSizes);
        }
        if (maxZoom) {
            updaterMap$e.maxZoom(clusterer, maxZoom);
        }
        if (minimumClusterSize) {
            updaterMap$e.minimumClusterSize(clusterer, minimumClusterSize);
        }
        if (styles) {
            updaterMap$e.styles(clusterer, styles);
        }
        if (title) {
            updaterMap$e.title(clusterer, title);
        }
        if (zoomOnClick) {
            updaterMap$e.zoomOnClick(clusterer, zoomOnClick);
        }
        if (onMouseOut) {
            setMouseoutListener(google.maps.event.addListener(clusterer, eventMap$e.onMouseOut, onMouseOut));
        }
        if (onMouseOver) {
            setMouseoverListener(google.maps.event.addListener(clusterer, eventMap$e.onMouseOver, onMouseOver));
        }
        if (onClick) {
            setClickListener(google.maps.event.addListener(clusterer, eventMap$e.onClick, onClick));
        }
        if (onClusteringBegin) {
            setClusteringBeginListener(google.maps.event.addListener(clusterer, eventMap$e.onClusteringBegin, onClusteringBegin));
        }
        if (onClusteringEnd) {
            setClusteringEndListener(google.maps.event.addListener(clusterer, eventMap$e.onClusteringEnd, onClusteringEnd));
        }
        setInstance(clusterer);
        if (onLoad) {
            onLoad(clusterer);
        }
        return function () {
            if (mouseoutListener !== null) {
                google.maps.event.removeListener(mouseoutListener);
            }
            if (mouseoverListener !== null) {
                google.maps.event.removeListener(mouseoverListener);
            }
            if (clickListener !== null) {
                google.maps.event.removeListener(clickListener);
            }
            if (clusteringBeginListener !== null) {
                google.maps.event.removeListener(clusteringBeginListener);
            }
            if (clusteringEndListener !== null) {
                google.maps.event.removeListener(clusteringEndListener);
            }
            if (onUnmount) {
                onUnmount(clusterer);
            }
        };
    }, []);
    return instance !== null ? children(instance) || null : null;
}
var MarkerClustererF = react.memo(MarkerClustererFunctional);
var ClustererComponent = /** @class */ (function (_super) {
    __extends(ClustererComponent, _super);
    function ClustererComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.registeredEvents = [];
        _this.state = {
            markerClusterer: null,
        };
        _this.setClustererCallback = function () {
            if (_this.state.markerClusterer !== null && _this.props.onLoad) {
                _this.props.onLoad(_this.state.markerClusterer);
            }
        };
        return _this;
    }
    ClustererComponent.prototype.componentDidMount = function () {
        if (this.context) {
            var markerClusterer_1 = new Clusterer(this.context, [], this.props.options);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$e,
                eventMap: eventMap$e,
                prevProps: {},
                nextProps: this.props,
                instance: markerClusterer_1,
            });
            this.setState(function () {
                return {
                    markerClusterer: markerClusterer_1,
                };
            }, this.setClustererCallback);
        }
    };
    ClustererComponent.prototype.componentDidUpdate = function (prevProps) {
        if (this.state.markerClusterer) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$e,
                eventMap: eventMap$e,
                prevProps: prevProps,
                nextProps: this.props,
                instance: this.state.markerClusterer,
            });
        }
    };
    ClustererComponent.prototype.componentWillUnmount = function () {
        if (this.state.markerClusterer !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.markerClusterer);
            }
            unregisterEvents(this.registeredEvents);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            this.state.markerClusterer.setMap(null);
        }
    };
    ClustererComponent.prototype.render = function () {
        return this.state.markerClusterer !== null
            ? this.props.children(this.state.markerClusterer)
            : null;
    };
    ClustererComponent.contextType = MapContext;
    return ClustererComponent;
}(react.PureComponent));

// This handler prevents an event in the InfoBox from being passed on to the map.
function cancelHandler(event) {
    event.cancelBubble = true;
    if (event.stopPropagation) {
        event.stopPropagation();
    }
}
var InfoBox = /** @class */ (function () {
    function InfoBox(options) {
        if (options === void 0) { options = {}; }
        this.getCloseClickHandler = this.getCloseClickHandler.bind(this);
        this.closeClickHandler = this.closeClickHandler.bind(this);
        this.createInfoBoxDiv = this.createInfoBoxDiv.bind(this);
        this.addClickHandler = this.addClickHandler.bind(this);
        this.getCloseBoxImg = this.getCloseBoxImg.bind(this);
        this.getBoxWidths = this.getBoxWidths.bind(this);
        this.setBoxStyle = this.setBoxStyle.bind(this);
        this.setPosition = this.setPosition.bind(this);
        this.getPosition = this.getPosition.bind(this);
        this.setOptions = this.setOptions.bind(this);
        this.setContent = this.setContent.bind(this);
        this.setVisible = this.setVisible.bind(this);
        this.getContent = this.getContent.bind(this);
        this.getVisible = this.getVisible.bind(this);
        this.setZIndex = this.setZIndex.bind(this);
        this.getZIndex = this.getZIndex.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.panBox = this.panBox.bind(this);
        this.extend = this.extend.bind(this);
        this.close = this.close.bind(this);
        this.draw = this.draw.bind(this);
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        this.open = this.open.bind(this);
        this.extend(InfoBox, google.maps.OverlayView);
        // Standard options (in common with google.maps.InfoWindow):
        this.content = options.content || '';
        this.disableAutoPan = options.disableAutoPan || false;
        this.maxWidth = options.maxWidth || 0;
        this.pixelOffset = options.pixelOffset || new google.maps.Size(0, 0);
        this.position = options.position || new google.maps.LatLng(0, 0);
        this.zIndex = options.zIndex || null;
        // Additional options (unique to InfoBox):
        this.boxClass = options.boxClass || 'infoBox';
        this.boxStyle = options.boxStyle || {};
        this.closeBoxMargin = options.closeBoxMargin || '2px';
        this.closeBoxURL = options.closeBoxURL || 'http://www.google.com/intl/en_us/mapfiles/close.gif';
        if (options.closeBoxURL === '') {
            this.closeBoxURL = '';
        }
        this.infoBoxClearance = options.infoBoxClearance || new google.maps.Size(1, 1);
        if (typeof options.visible === 'undefined') {
            if (typeof options.isHidden === 'undefined') {
                options.visible = true;
            }
            else {
                options.visible = !options.isHidden;
            }
        }
        this.isHidden = !options.visible;
        this.alignBottom = options.alignBottom || false;
        this.pane = options.pane || 'floatPane';
        this.enableEventPropagation = options.enableEventPropagation || false;
        this.div = null;
        this.closeListener = null;
        this.moveListener = null;
        this.mapListener = null;
        this.contextListener = null;
        this.eventListeners = null;
        this.fixedWidthSet = null;
    }
    InfoBox.prototype.createInfoBoxDiv = function () {
        var _this = this;
        // This handler ignores the current event in the InfoBox and conditionally prevents
        // the event from being passed on to the map. It is used for the contextmenu event.
        var ignoreHandler = function (event) {
            event.returnValue = false;
            if (event.preventDefault) {
                event.preventDefault();
            }
            if (!_this.enableEventPropagation) {
                cancelHandler(event);
            }
        };
        if (!this.div) {
            this.div = document.createElement('div');
            this.setBoxStyle();
            if (typeof this.content === 'string') {
                this.div.innerHTML = this.getCloseBoxImg() + this.content;
            }
            else {
                this.div.innerHTML = this.getCloseBoxImg();
                this.div.appendChild(this.content);
            }
            var panes = this.getPanes();
            if (panes !== null) {
                panes[this.pane].appendChild(this.div); // Add the InfoBox div to the DOM
            }
            this.addClickHandler();
            if (this.div.style.width) {
                this.fixedWidthSet = true;
            }
            else {
                if (this.maxWidth !== 0 && this.div.offsetWidth > this.maxWidth) {
                    this.div.style.width = this.maxWidth + 'px';
                    this.fixedWidthSet = true;
                }
                else {
                    // The following code is needed to overcome problems with MSIE
                    var bw = this.getBoxWidths();
                    this.div.style.width = this.div.offsetWidth - bw.left - bw.right + 'px';
                    this.fixedWidthSet = false;
                }
            }
            this.panBox(this.disableAutoPan);
            if (!this.enableEventPropagation) {
                this.eventListeners = [];
                // Cancel event propagation.
                // Note: mousemove not included (to resolve Issue 152)
                var events = [
                    'mousedown',
                    'mouseover',
                    'mouseout',
                    'mouseup',
                    'click',
                    'dblclick',
                    'touchstart',
                    'touchend',
                    'touchmove',
                ];
                for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
                    var event_1 = events_1[_i];
                    this.eventListeners.push(google.maps.event.addListener(this.div, event_1, cancelHandler));
                }
                // Workaround for Google bug that causes the cursor to change to a pointer
                // when the mouse moves over a marker underneath InfoBox.
                this.eventListeners.push(google.maps.event.addListener(this.div, 'mouseover', function () {
                    if (_this.div) {
                        _this.div.style.cursor = 'default';
                    }
                }));
            }
            this.contextListener = google.maps.event.addListener(this.div, 'contextmenu', ignoreHandler);
            /**
             * This event is fired when the DIV containing the InfoBox's content is attached to the DOM.
             * @name InfoBox#domready
             * @event
             */
            google.maps.event.trigger(this, 'domready');
        }
    };
    InfoBox.prototype.getCloseBoxImg = function () {
        var img = '';
        if (this.closeBoxURL !== '') {
            img = '<img alt=""';
            img += ' aria-hidden="true"';
            img += " src='" + this.closeBoxURL + "'";
            img += ' align=right'; // Do this because Opera chokes on style='float: right;'
            img += " style='";
            img += ' position: relative;'; // Required by MSIE
            img += ' cursor: pointer;';
            img += ' margin: ' + this.closeBoxMargin + ';';
            img += "'>";
        }
        return img;
    };
    InfoBox.prototype.addClickHandler = function () {
        this.closeListener = this.div && this.div.firstChild && this.closeBoxURL !== ''
            ? google.maps.event.addListener(this.div.firstChild, 'click', this.getCloseClickHandler())
            : null;
    };
    InfoBox.prototype.closeClickHandler = function (event) {
        // 1.0.3 fix: Always prevent propagation of a close box click to the map:
        event.cancelBubble = true;
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        /**
         * This event is fired when the InfoBox's close box is clicked.
         * @name InfoBox#closeclick
         * @event
         */
        google.maps.event.trigger(this, 'closeclick');
        this.close();
    };
    InfoBox.prototype.getCloseClickHandler = function () {
        return this.closeClickHandler;
    };
    InfoBox.prototype.panBox = function (disablePan) {
        if (this.div && !disablePan) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            var map = this.getMap();
            // Only pan if attached to map, not panorama
            if (map instanceof google.maps.Map) {
                var xOffset = 0;
                var yOffset = 0;
                var bounds = map.getBounds();
                if (bounds && !bounds.contains(this.position)) {
                    // Marker not in visible area of map, so set center
                    // of map to the marker position first.
                    map.setCenter(this.position);
                }
                var mapDiv = map.getDiv();
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                var mapWidth = mapDiv.offsetWidth;
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                var mapHeight = mapDiv.offsetHeight;
                var iwOffsetX = this.pixelOffset.width;
                var iwOffsetY = this.pixelOffset.height;
                var iwWidth = this.div.offsetWidth;
                var iwHeight = this.div.offsetHeight;
                var padX = this.infoBoxClearance.width;
                var padY = this.infoBoxClearance.height;
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                var projection = this.getProjection();
                var pixPosition = projection.fromLatLngToContainerPixel(this.position);
                if (pixPosition !== null) {
                    if (pixPosition.x < -iwOffsetX + padX) {
                        xOffset = pixPosition.x + iwOffsetX - padX;
                    }
                    else if (pixPosition.x + iwWidth + iwOffsetX + padX > mapWidth) {
                        xOffset = pixPosition.x + iwWidth + iwOffsetX + padX - mapWidth;
                    }
                    if (this.alignBottom) {
                        if (pixPosition.y < -iwOffsetY + padY + iwHeight) {
                            yOffset = pixPosition.y + iwOffsetY - padY - iwHeight;
                        }
                        else if (pixPosition.y + iwOffsetY + padY > mapHeight) {
                            yOffset = pixPosition.y + iwOffsetY + padY - mapHeight;
                        }
                    }
                    else {
                        if (pixPosition.y < -iwOffsetY + padY) {
                            yOffset = pixPosition.y + iwOffsetY - padY;
                        }
                        else if (pixPosition.y + iwHeight + iwOffsetY + padY > mapHeight) {
                            yOffset = pixPosition.y + iwHeight + iwOffsetY + padY - mapHeight;
                        }
                    }
                }
                if (!(xOffset === 0 && yOffset === 0)) {
                    // Move the map to the shifted center.
                    map.panBy(xOffset, yOffset);
                }
            }
        }
    };
    InfoBox.prototype.setBoxStyle = function () {
        if (this.div) {
            // Apply style values from the style sheet defined in the boxClass parameter:
            this.div.className = this.boxClass;
            // Clear existing inline style values:
            this.div.style.cssText = '';
            // Apply style values defined in the boxStyle parameter:
            var boxStyle = this.boxStyle;
            for (var i in boxStyle) {
                if (Object.prototype.hasOwnProperty.call(boxStyle, i)) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    this.div.style[i] = boxStyle[i];
                }
            }
            // Fix for iOS disappearing InfoBox problem
            // See http://stackoverflow.com/questions/9229535/google-maps-markers-disappear-at-certain-zoom-level-only-on-iphone-ipad
            this.div.style.webkitTransform = 'translateZ(0)';
            // Fix up opacity style for benefit of MSIE
            if (typeof this.div.style.opacity !== 'undefined' && this.div.style.opacity !== '') {
                // See http://www.quirksmode.org/css/opacity.html
                var opacity = parseFloat(this.div.style.opacity || '');
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                this.div.style.msFilter =
                    '"progid:DXImageTransform.Microsoft.Alpha(Opacity=' + opacity * 100 + ')"';
                this.div.style.filter = 'alpha(opacity=' + opacity * 100 + ')';
            }
            // Apply required styles
            this.div.style.position = 'absolute';
            this.div.style.visibility = 'hidden';
            if (this.zIndex !== null) {
                this.div.style.zIndex = this.zIndex + '';
            }
            if (!this.div.style.overflow) {
                this.div.style.overflow = 'auto';
            }
        }
    };
    InfoBox.prototype.getBoxWidths = function () {
        var bw = { top: 0, bottom: 0, left: 0, right: 0 };
        if (!this.div) {
            return bw;
        }
        if (document.defaultView) {
            var ownerDocument = this.div.ownerDocument;
            var computedStyle = ownerDocument && ownerDocument.defaultView
                ? ownerDocument.defaultView.getComputedStyle(this.div, '')
                : null;
            if (computedStyle) {
                // The computed styles are always in pixel units (good!)
                bw.top = parseInt(computedStyle.borderTopWidth || '', 10) || 0;
                bw.bottom = parseInt(computedStyle.borderBottomWidth || '', 10) || 0;
                bw.left = parseInt(computedStyle.borderLeftWidth || '', 10) || 0;
                bw.right = parseInt(computedStyle.borderRightWidth || '', 10) || 0;
            }
        }
        else if (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        document.documentElement.currentStyle // MSIE
        ) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            var currentStyle = this.div.currentStyle;
            if (currentStyle) {
                // The current styles may not be in pixel units, but assume they are (bad!)
                bw.top = parseInt(currentStyle.borderTopWidth || '', 10) || 0;
                bw.bottom = parseInt(currentStyle.borderBottomWidth || '', 10) || 0;
                bw.left = parseInt(currentStyle.borderLeftWidth || '', 10) || 0;
                bw.right = parseInt(currentStyle.borderRightWidth || '', 10) || 0;
            }
        }
        return bw;
    };
    InfoBox.prototype.onRemove = function () {
        if (this.div && this.div.parentNode) {
            this.div.parentNode.removeChild(this.div);
            this.div = null;
        }
    };
    InfoBox.prototype.draw = function () {
        this.createInfoBoxDiv();
        if (this.div) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            var projection = this.getProjection();
            var pixPosition = projection.fromLatLngToDivPixel(this.position);
            if (pixPosition !== null) {
                this.div.style.left = pixPosition.x + this.pixelOffset.width + 'px';
                if (this.alignBottom) {
                    this.div.style.bottom = -(pixPosition.y + this.pixelOffset.height) + 'px';
                }
                else {
                    this.div.style.top = pixPosition.y + this.pixelOffset.height + 'px';
                }
            }
            if (this.isHidden) {
                this.div.style.visibility = 'hidden';
            }
            else {
                this.div.style.visibility = 'visible';
            }
        }
    };
    InfoBox.prototype.setOptions = function (options) {
        if (options === void 0) { options = {}; }
        if (typeof options.boxClass !== 'undefined') {
            // Must be first
            this.boxClass = options.boxClass;
            this.setBoxStyle();
        }
        if (typeof options.boxStyle !== 'undefined') {
            // Must be second
            this.boxStyle = options.boxStyle;
            this.setBoxStyle();
        }
        if (typeof options.content !== 'undefined') {
            this.setContent(options.content);
        }
        if (typeof options.disableAutoPan !== 'undefined') {
            this.disableAutoPan = options.disableAutoPan;
        }
        if (typeof options.maxWidth !== 'undefined') {
            this.maxWidth = options.maxWidth;
        }
        if (typeof options.pixelOffset !== 'undefined') {
            this.pixelOffset = options.pixelOffset;
        }
        if (typeof options.alignBottom !== 'undefined') {
            this.alignBottom = options.alignBottom;
        }
        if (typeof options.position !== 'undefined') {
            this.setPosition(options.position);
        }
        if (typeof options.zIndex !== 'undefined') {
            this.setZIndex(options.zIndex);
        }
        if (typeof options.closeBoxMargin !== 'undefined') {
            this.closeBoxMargin = options.closeBoxMargin;
        }
        if (typeof options.closeBoxURL !== 'undefined') {
            this.closeBoxURL = options.closeBoxURL;
        }
        if (typeof options.infoBoxClearance !== 'undefined') {
            this.infoBoxClearance = options.infoBoxClearance;
        }
        if (typeof options.isHidden !== 'undefined') {
            this.isHidden = options.isHidden;
        }
        if (typeof options.visible !== 'undefined') {
            this.isHidden = !options.visible;
        }
        if (typeof options.enableEventPropagation !== 'undefined') {
            this.enableEventPropagation = options.enableEventPropagation;
        }
        if (this.div) {
            this.draw();
        }
    };
    InfoBox.prototype.setContent = function (content) {
        this.content = content;
        if (this.div) {
            if (this.closeListener) {
                google.maps.event.removeListener(this.closeListener);
                this.closeListener = null;
            }
            // Odd code required to make things work with MSIE.
            if (!this.fixedWidthSet) {
                this.div.style.width = '';
            }
            if (typeof content === 'string') {
                this.div.innerHTML = this.getCloseBoxImg() + content;
            }
            else {
                this.div.innerHTML = this.getCloseBoxImg();
                this.div.appendChild(content);
            }
            // Perverse code required to make things work with MSIE.
            // (Ensures the close box does, in fact, float to the right.)
            if (!this.fixedWidthSet) {
                this.div.style.width = this.div.offsetWidth + 'px';
                if (typeof content === 'string') {
                    this.div.innerHTML = this.getCloseBoxImg() + content;
                }
                else {
                    this.div.innerHTML = this.getCloseBoxImg();
                    this.div.appendChild(content);
                }
            }
            this.addClickHandler();
        }
        /**
         * This event is fired when the content of the InfoBox changes.
         * @name InfoBox#content_changed
         * @event
         */
        google.maps.event.trigger(this, 'content_changed');
    };
    InfoBox.prototype.setPosition = function (latLng) {
        this.position = latLng;
        if (this.div) {
            this.draw();
        }
        /**
         * This event is fired when the position of the InfoBox changes.
         * @name InfoBox#position_changed
         * @event
         */
        google.maps.event.trigger(this, 'position_changed');
    };
    InfoBox.prototype.setVisible = function (isVisible) {
        this.isHidden = !isVisible;
        if (this.div) {
            this.div.style.visibility = this.isHidden ? 'hidden' : 'visible';
        }
    };
    InfoBox.prototype.setZIndex = function (index) {
        this.zIndex = index;
        if (this.div) {
            this.div.style.zIndex = index + '';
        }
        /**
         * This event is fired when the zIndex of the InfoBox changes.
         * @name InfoBox#zindex_changed
         * @event
         */
        google.maps.event.trigger(this, 'zindex_changed');
    };
    InfoBox.prototype.getContent = function () {
        return this.content;
    };
    InfoBox.prototype.getPosition = function () {
        return this.position;
    };
    InfoBox.prototype.getZIndex = function () {
        return this.zIndex;
    };
    InfoBox.prototype.getVisible = function () {
        var map = this.getMap();
        return typeof map === 'undefined' || map === null ? false : !this.isHidden;
    };
    InfoBox.prototype.show = function () {
        this.isHidden = false;
        if (this.div) {
            this.div.style.visibility = 'visible';
        }
    };
    InfoBox.prototype.hide = function () {
        this.isHidden = true;
        if (this.div) {
            this.div.style.visibility = 'hidden';
        }
    };
    InfoBox.prototype.open = function (map, anchor) {
        var _this = this;
        if (anchor) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            this.position = anchor.getPosition();
            this.moveListener = google.maps.event.addListener(anchor, 'position_changed', function () {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                var position = anchor.getPosition();
                _this.setPosition(position);
            });
            this.mapListener = google.maps.event.addListener(anchor, 'map_changed', function () {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                _this.setMap(anchor.map);
            });
        }
        this.setMap(map);
        if (this.div) {
            this.panBox();
        }
    };
    InfoBox.prototype.close = function () {
        if (this.closeListener) {
            google.maps.event.removeListener(this.closeListener);
            this.closeListener = null;
        }
        if (this.eventListeners) {
            for (var _i = 0, _a = this.eventListeners; _i < _a.length; _i++) {
                var eventListener = _a[_i];
                google.maps.event.removeListener(eventListener);
            }
            this.eventListeners = null;
        }
        if (this.moveListener) {
            google.maps.event.removeListener(this.moveListener);
            this.moveListener = null;
        }
        if (this.mapListener) {
            google.maps.event.removeListener(this.mapListener);
            this.mapListener = null;
        }
        if (this.contextListener) {
            google.maps.event.removeListener(this.contextListener);
            this.contextListener = null;
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.setMap(null);
    };
    InfoBox.prototype.extend = function (obj1, obj2) {
        return function applyExtend(object) {
            for (var property in object.prototype) {
                if (!Object.prototype.hasOwnProperty.call(this, property)) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    this.prototype[property] = object.prototype[property];
                }
            }
            return this;
        }.apply(obj1, [obj2]);
    };
    return InfoBox;
}());

var eventMap$d = {
    onCloseClick: 'closeclick',
    onContentChanged: 'content_changed',
    onDomReady: 'domready',
    onPositionChanged: 'position_changed',
    onZindexChanged: 'zindex_changed',
};
var updaterMap$d = {
    options: function (instance, options) {
        instance.setOptions(options);
    },
    position: function (instance, position) {
        if (position instanceof google.maps.LatLng) {
            instance.setPosition(position);
        }
        else {
            instance.setPosition(new google.maps.LatLng(position.lat, position.lng));
        }
    },
    visible: function (instance, visible) {
        instance.setVisible(visible);
    },
    zIndex: function (instance, zIndex) {
        instance.setZIndex(zIndex);
    },
};
var defaultOptions$3 = {};
function InfoBoxFunctional(_a) {
    var children = _a.children, anchor = _a.anchor, options = _a.options, position = _a.position, zIndex = _a.zIndex, onCloseClick = _a.onCloseClick, onDomReady = _a.onDomReady, onContentChanged = _a.onContentChanged, onPositionChanged = _a.onPositionChanged, onZindexChanged = _a.onZindexChanged, onLoad = _a.onLoad, onUnmount = _a.onUnmount;
    var map = react.useContext(MapContext);
    var _b = react.useState(null), instance = _b[0], setInstance = _b[1];
    var _c = react.useState(null), closeClickListener = _c[0], setCloseClickListener = _c[1];
    var _d = react.useState(null), domReadyClickListener = _d[0], setDomReadyClickListener = _d[1];
    var _e = react.useState(null), contentChangedClickListener = _e[0], setContentChangedClickListener = _e[1];
    var _f = react.useState(null), positionChangedClickListener = _f[0], setPositionChangedClickListener = _f[1];
    var _g = react.useState(null), zIndexChangedClickListener = _g[0], setZindexChangedClickListener = _g[1];
    var containerElementRef = react.useRef(null);
    // Order does matter
    react.useEffect(function () {
        if (map && instance !== null) {
            instance.close();
            if (anchor) {
                instance.open(map, anchor);
            }
            else if (instance.getPosition()) {
                instance.open(map);
            }
        }
    }, [map, instance, anchor]);
    react.useEffect(function () {
        if (options && instance !== null) {
            instance.setOptions(options);
        }
    }, [instance, options]);
    react.useEffect(function () {
        if (position && instance !== null) {
            var positionLatLng = position instanceof google.maps.LatLng
                ? position
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                : new google.maps.LatLng(position.lat, position.lng);
            instance.setPosition(positionLatLng);
        }
    }, [position]);
    react.useEffect(function () {
        if (typeof zIndex === 'number' && instance !== null) {
            instance.setZIndex(zIndex);
        }
    }, [zIndex]);
    react.useEffect(function () {
        if (instance && onCloseClick) {
            if (closeClickListener !== null) {
                google.maps.event.removeListener(closeClickListener);
            }
            setCloseClickListener(google.maps.event.addListener(instance, 'closeclick', onCloseClick));
        }
    }, [onCloseClick]);
    react.useEffect(function () {
        if (instance && onDomReady) {
            if (domReadyClickListener !== null) {
                google.maps.event.removeListener(domReadyClickListener);
            }
            setDomReadyClickListener(google.maps.event.addListener(instance, 'domready', onDomReady));
        }
    }, [onDomReady]);
    react.useEffect(function () {
        if (instance && onContentChanged) {
            if (contentChangedClickListener !== null) {
                google.maps.event.removeListener(contentChangedClickListener);
            }
            setContentChangedClickListener(google.maps.event.addListener(instance, 'content_changed', onContentChanged));
        }
    }, [onContentChanged]);
    react.useEffect(function () {
        if (instance && onPositionChanged) {
            if (positionChangedClickListener !== null) {
                google.maps.event.removeListener(positionChangedClickListener);
            }
            setPositionChangedClickListener(google.maps.event.addListener(instance, 'position_changed', onPositionChanged));
        }
    }, [onPositionChanged]);
    react.useEffect(function () {
        if (instance && onZindexChanged) {
            if (zIndexChangedClickListener !== null) {
                google.maps.event.removeListener(zIndexChangedClickListener);
            }
            setZindexChangedClickListener(google.maps.event.addListener(instance, 'zindex_changed', onZindexChanged));
        }
    }, [onZindexChanged]);
    react.useEffect(function () {
        if (map) {
            var _a = options || defaultOptions$3, position_1 = _a.position, infoBoxOptions = __rest$1(_a, ["position"]);
            var positionLatLng = void 0;
            if (position_1 && !(position_1 instanceof google.maps.LatLng)) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                positionLatLng = new google.maps.LatLng(position_1.lat, position_1.lng);
            }
            var infoBox = new InfoBox(__assign(__assign({}, infoBoxOptions), (positionLatLng ? { position: positionLatLng } : {})));
            containerElementRef.current = document.createElement('div');
            setInstance(infoBox);
            if (onCloseClick) {
                setCloseClickListener(google.maps.event.addListener(infoBox, 'closeclick', onCloseClick));
            }
            if (onDomReady) {
                setDomReadyClickListener(google.maps.event.addListener(infoBox, 'domready', onDomReady));
            }
            if (onContentChanged) {
                setContentChangedClickListener(google.maps.event.addListener(infoBox, 'content_changed', onContentChanged));
            }
            if (onPositionChanged) {
                setPositionChangedClickListener(google.maps.event.addListener(infoBox, 'position_changed', onPositionChanged));
            }
            if (onZindexChanged) {
                setZindexChangedClickListener(google.maps.event.addListener(infoBox, 'zindex_changed', onZindexChanged));
            }
            infoBox.setContent(containerElementRef.current);
            if (anchor) {
                infoBox.open(map, anchor);
            }
            else if (infoBox.getPosition()) {
                infoBox.open(map);
            }
            else {
                invariant$1(false, 'You must provide either an anchor or a position prop for <InfoBox>.');
            }
            if (onLoad) {
                onLoad(infoBox);
            }
        }
        return function () {
            if (instance !== null) {
                if (closeClickListener) {
                    google.maps.event.removeListener(closeClickListener);
                }
                if (contentChangedClickListener) {
                    google.maps.event.removeListener(contentChangedClickListener);
                }
                if (domReadyClickListener) {
                    google.maps.event.removeListener(domReadyClickListener);
                }
                if (positionChangedClickListener) {
                    google.maps.event.removeListener(positionChangedClickListener);
                }
                if (zIndexChangedClickListener) {
                    google.maps.event.removeListener(zIndexChangedClickListener);
                }
                if (onUnmount) {
                    onUnmount(instance);
                }
                instance.close();
            }
        };
    }, []);
    return containerElementRef.current ? ReactDOM.createPortal(react.Children.only(children), containerElementRef.current) : null;
}
var InfoBoxF = react.memo(InfoBoxFunctional);
var InfoBoxComponent = /** @class */ (function (_super) {
    __extends(InfoBoxComponent, _super);
    function InfoBoxComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.registeredEvents = [];
        _this.containerElement = null;
        _this.state = {
            infoBox: null,
        };
        _this.open = function (infoBox, anchor) {
            if (anchor) {
                if (_this.context !== null) {
                    infoBox.open(_this.context, anchor);
                }
            }
            else if (infoBox.getPosition()) {
                if (_this.context !== null) {
                    infoBox.open(_this.context);
                }
            }
            else {
                invariant$1(false, 'You must provide either an anchor or a position prop for <InfoBox>.');
            }
        };
        _this.setInfoBoxCallback = function () {
            if (_this.state.infoBox !== null && _this.containerElement !== null) {
                _this.state.infoBox.setContent(_this.containerElement);
                _this.open(_this.state.infoBox, _this.props.anchor);
                if (_this.props.onLoad) {
                    _this.props.onLoad(_this.state.infoBox);
                }
            }
        };
        return _this;
    }
    InfoBoxComponent.prototype.componentDidMount = function () {
        var _a = this.props.options || {}, position = _a.position, infoBoxOptions = __rest$1(_a, ["position"]);
        var positionLatLng;
        if (position && !(position instanceof google.maps.LatLng)) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            positionLatLng = new google.maps.LatLng(position.lat, position.lng);
        }
        var infoBox = new InfoBox(__assign(__assign({}, infoBoxOptions), (positionLatLng ? { position: positionLatLng } : {})));
        this.containerElement = document.createElement('div');
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$d,
            eventMap: eventMap$d,
            prevProps: {},
            nextProps: this.props,
            instance: infoBox,
        });
        this.setState({ infoBox: infoBox }, this.setInfoBoxCallback);
    };
    InfoBoxComponent.prototype.componentDidUpdate = function (prevProps) {
        var infoBox = this.state.infoBox;
        if (infoBox !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$d,
                eventMap: eventMap$d,
                prevProps: prevProps,
                nextProps: this.props,
                instance: infoBox,
            });
        }
    };
    InfoBoxComponent.prototype.componentWillUnmount = function () {
        var onUnmount = this.props.onUnmount;
        var infoBox = this.state.infoBox;
        if (infoBox !== null) {
            if (onUnmount) {
                onUnmount(infoBox);
            }
            unregisterEvents(this.registeredEvents);
            infoBox.close();
        }
    };
    InfoBoxComponent.prototype.render = function () {
        return this.containerElement ? ReactDOM.createPortal(react.Children.only(this.props.children), this.containerElement) : null;
    };
    InfoBoxComponent.contextType = MapContext;
    return InfoBoxComponent;
}(react.PureComponent));

// do not edit .js files directly - edit src/index.jst



var fastDeepEqual = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};

var equal = /*@__PURE__*/getDefaultExportFromCjs(fastDeepEqual);

const ARRAY_TYPES = [
    Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array,
    Int32Array, Uint32Array, Float32Array, Float64Array
];

/** @typedef {Int8ArrayConstructor | Uint8ArrayConstructor | Uint8ClampedArrayConstructor | Int16ArrayConstructor | Uint16ArrayConstructor | Int32ArrayConstructor | Uint32ArrayConstructor | Float32ArrayConstructor | Float64ArrayConstructor} TypedArrayConstructor */

const VERSION = 1; // serialized format version
const HEADER_SIZE = 8;

class KDBush {

    /**
     * Creates an index from raw `ArrayBuffer` data.
     * @param {ArrayBuffer} data
     */
    static from(data) {
        if (!(data instanceof ArrayBuffer)) {
            throw new Error('Data must be an instance of ArrayBuffer.');
        }
        const [magic, versionAndType] = new Uint8Array(data, 0, 2);
        if (magic !== 0xdb) {
            throw new Error('Data does not appear to be in a KDBush format.');
        }
        const version = versionAndType >> 4;
        if (version !== VERSION) {
            throw new Error(`Got v${version} data when expected v${VERSION}.`);
        }
        const ArrayType = ARRAY_TYPES[versionAndType & 0x0f];
        if (!ArrayType) {
            throw new Error('Unrecognized array type.');
        }
        const [nodeSize] = new Uint16Array(data, 2, 1);
        const [numItems] = new Uint32Array(data, 4, 1);

        return new KDBush(numItems, nodeSize, ArrayType, data);
    }

    /**
     * Creates an index that will hold a given number of items.
     * @param {number} numItems
     * @param {number} [nodeSize=64] Size of the KD-tree node (64 by default).
     * @param {TypedArrayConstructor} [ArrayType=Float64Array] The array type used for coordinates storage (`Float64Array` by default).
     * @param {ArrayBuffer} [data] (For internal use only)
     */
    constructor(numItems, nodeSize = 64, ArrayType = Float64Array, data) {
        if (isNaN(numItems) || numItems < 0) throw new Error(`Unpexpected numItems value: ${numItems}.`);

        this.numItems = +numItems;
        this.nodeSize = Math.min(Math.max(+nodeSize, 2), 65535);
        this.ArrayType = ArrayType;
        this.IndexArrayType = numItems < 65536 ? Uint16Array : Uint32Array;

        const arrayTypeIndex = ARRAY_TYPES.indexOf(this.ArrayType);
        const coordsByteSize = numItems * 2 * this.ArrayType.BYTES_PER_ELEMENT;
        const idsByteSize = numItems * this.IndexArrayType.BYTES_PER_ELEMENT;
        const padCoords = (8 - idsByteSize % 8) % 8;

        if (arrayTypeIndex < 0) {
            throw new Error(`Unexpected typed array class: ${ArrayType}.`);
        }

        if (data && (data instanceof ArrayBuffer)) { // reconstruct an index from a buffer
            this.data = data;
            this.ids = new this.IndexArrayType(this.data, HEADER_SIZE, numItems);
            this.coords = new this.ArrayType(this.data, HEADER_SIZE + idsByteSize + padCoords, numItems * 2);
            this._pos = numItems * 2;
            this._finished = true;
        } else { // initialize a new index
            this.data = new ArrayBuffer(HEADER_SIZE + coordsByteSize + idsByteSize + padCoords);
            this.ids = new this.IndexArrayType(this.data, HEADER_SIZE, numItems);
            this.coords = new this.ArrayType(this.data, HEADER_SIZE + idsByteSize + padCoords, numItems * 2);
            this._pos = 0;
            this._finished = false;

            // set header
            new Uint8Array(this.data, 0, 2).set([0xdb, (VERSION << 4) + arrayTypeIndex]);
            new Uint16Array(this.data, 2, 1)[0] = nodeSize;
            new Uint32Array(this.data, 4, 1)[0] = numItems;
        }
    }

    /**
     * Add a point to the index.
     * @param {number} x
     * @param {number} y
     * @returns {number} An incremental index associated with the added item (starting from `0`).
     */
    add(x, y) {
        const index = this._pos >> 1;
        this.ids[index] = index;
        this.coords[this._pos++] = x;
        this.coords[this._pos++] = y;
        return index;
    }

    /**
     * Perform indexing of the added points.
     */
    finish() {
        const numAdded = this._pos >> 1;
        if (numAdded !== this.numItems) {
            throw new Error(`Added ${numAdded} items when expected ${this.numItems}.`);
        }
        // kd-sort both arrays for efficient search
        sort(this.ids, this.coords, this.nodeSize, 0, this.numItems - 1, 0);

        this._finished = true;
        return this;
    }

    /**
     * Search the index for items within a given bounding box.
     * @param {number} minX
     * @param {number} minY
     * @param {number} maxX
     * @param {number} maxY
     * @returns {number[]} An array of indices correponding to the found items.
     */
    range(minX, minY, maxX, maxY) {
        if (!this._finished) throw new Error('Data not yet indexed - call index.finish().');

        const {ids, coords, nodeSize} = this;
        const stack = [0, ids.length - 1, 0];
        const result = [];

        // recursively search for items in range in the kd-sorted arrays
        while (stack.length) {
            const axis = stack.pop() || 0;
            const right = stack.pop() || 0;
            const left = stack.pop() || 0;

            // if we reached "tree node", search linearly
            if (right - left <= nodeSize) {
                for (let i = left; i <= right; i++) {
                    const x = coords[2 * i];
                    const y = coords[2 * i + 1];
                    if (x >= minX && x <= maxX && y >= minY && y <= maxY) result.push(ids[i]);
                }
                continue;
            }

            // otherwise find the middle index
            const m = (left + right) >> 1;

            // include the middle item if it's in range
            const x = coords[2 * m];
            const y = coords[2 * m + 1];
            if (x >= minX && x <= maxX && y >= minY && y <= maxY) result.push(ids[m]);

            // queue search in halves that intersect the query
            if (axis === 0 ? minX <= x : minY <= y) {
                stack.push(left);
                stack.push(m - 1);
                stack.push(1 - axis);
            }
            if (axis === 0 ? maxX >= x : maxY >= y) {
                stack.push(m + 1);
                stack.push(right);
                stack.push(1 - axis);
            }
        }

        return result;
    }

    /**
     * Search the index for items within a given radius.
     * @param {number} qx
     * @param {number} qy
     * @param {number} r Query radius.
     * @returns {number[]} An array of indices correponding to the found items.
     */
    within(qx, qy, r) {
        if (!this._finished) throw new Error('Data not yet indexed - call index.finish().');

        const {ids, coords, nodeSize} = this;
        const stack = [0, ids.length - 1, 0];
        const result = [];
        const r2 = r * r;

        // recursively search for items within radius in the kd-sorted arrays
        while (stack.length) {
            const axis = stack.pop() || 0;
            const right = stack.pop() || 0;
            const left = stack.pop() || 0;

            // if we reached "tree node", search linearly
            if (right - left <= nodeSize) {
                for (let i = left; i <= right; i++) {
                    if (sqDist(coords[2 * i], coords[2 * i + 1], qx, qy) <= r2) result.push(ids[i]);
                }
                continue;
            }

            // otherwise find the middle index
            const m = (left + right) >> 1;

            // include the middle item if it's in range
            const x = coords[2 * m];
            const y = coords[2 * m + 1];
            if (sqDist(x, y, qx, qy) <= r2) result.push(ids[m]);

            // queue search in halves that intersect the query
            if (axis === 0 ? qx - r <= x : qy - r <= y) {
                stack.push(left);
                stack.push(m - 1);
                stack.push(1 - axis);
            }
            if (axis === 0 ? qx + r >= x : qy + r >= y) {
                stack.push(m + 1);
                stack.push(right);
                stack.push(1 - axis);
            }
        }

        return result;
    }
}

/**
 * @param {Uint16Array | Uint32Array} ids
 * @param {InstanceType<TypedArrayConstructor>} coords
 * @param {number} nodeSize
 * @param {number} left
 * @param {number} right
 * @param {number} axis
 */
function sort(ids, coords, nodeSize, left, right, axis) {
    if (right - left <= nodeSize) return;

    const m = (left + right) >> 1; // middle index

    // sort ids and coords around the middle index so that the halves lie
    // either left/right or top/bottom correspondingly (taking turns)
    select(ids, coords, m, left, right, axis);

    // recursively kd-sort first half and second half on the opposite axis
    sort(ids, coords, nodeSize, left, m - 1, 1 - axis);
    sort(ids, coords, nodeSize, m + 1, right, 1 - axis);
}

/**
 * Custom Floyd-Rivest selection algorithm: sort ids and coords so that
 * [left..k-1] items are smaller than k-th item (on either x or y axis)
 * @param {Uint16Array | Uint32Array} ids
 * @param {InstanceType<TypedArrayConstructor>} coords
 * @param {number} k
 * @param {number} left
 * @param {number} right
 * @param {number} axis
 */
function select(ids, coords, k, left, right, axis) {

    while (right > left) {
        if (right - left > 600) {
            const n = right - left + 1;
            const m = k - left + 1;
            const z = Math.log(n);
            const s = 0.5 * Math.exp(2 * z / 3);
            const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
            const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
            const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
            select(ids, coords, k, newLeft, newRight, axis);
        }

        const t = coords[2 * k + axis];
        let i = left;
        let j = right;

        swapItem(ids, coords, left, k);
        if (coords[2 * right + axis] > t) swapItem(ids, coords, left, right);

        while (i < j) {
            swapItem(ids, coords, i, j);
            i++;
            j--;
            while (coords[2 * i + axis] < t) i++;
            while (coords[2 * j + axis] > t) j--;
        }

        if (coords[2 * left + axis] === t) swapItem(ids, coords, left, j);
        else {
            j++;
            swapItem(ids, coords, j, right);
        }

        if (j <= k) left = j + 1;
        if (k <= j) right = j - 1;
    }
}

/**
 * @param {Uint16Array | Uint32Array} ids
 * @param {InstanceType<TypedArrayConstructor>} coords
 * @param {number} i
 * @param {number} j
 */
function swapItem(ids, coords, i, j) {
    swap(ids, i, j);
    swap(coords, 2 * i, 2 * j);
    swap(coords, 2 * i + 1, 2 * j + 1);
}

/**
 * @param {InstanceType<TypedArrayConstructor>} arr
 * @param {number} i
 * @param {number} j
 */
function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

/**
 * @param {number} ax
 * @param {number} ay
 * @param {number} bx
 * @param {number} by
 */
function sqDist(ax, ay, bx, by) {
    const dx = ax - bx;
    const dy = ay - by;
    return dx * dx + dy * dy;
}

const defaultOptions$2 = {
    minZoom: 0,   // min zoom to generate clusters on
    maxZoom: 16,  // max zoom level to cluster the points on
    minPoints: 2, // minimum points to form a cluster
    radius: 40,   // cluster radius in pixels
    extent: 512,  // tile extent (radius is calculated relative to it)
    nodeSize: 64, // size of the KD-tree leaf node, affects performance
    log: false,   // whether to log timing info

    // whether to generate numeric ids for input features (in vector tiles)
    generateId: false,

    // a reduce function for calculating custom cluster properties
    reduce: null, // (accumulated, props) => { accumulated.sum += props.sum; }

    // properties to use for individual points when running the reducer
    map: props => props // props => ({sum: props.my_value})
};

const fround = Math.fround || (tmp => ((x) => { tmp[0] = +x; return tmp[0]; }))(new Float32Array(1));

const OFFSET_ZOOM = 2;
const OFFSET_ID = 3;
const OFFSET_PARENT = 4;
const OFFSET_NUM = 5;
const OFFSET_PROP = 6;

class Supercluster {
    constructor(options) {
        this.options = Object.assign(Object.create(defaultOptions$2), options);
        this.trees = new Array(this.options.maxZoom + 1);
        this.stride = this.options.reduce ? 7 : 6;
        this.clusterProps = [];
    }

    load(points) {
        const {log, minZoom, maxZoom} = this.options;

        if (log) console.time('total time');

        const timerId = `prepare ${  points.length  } points`;
        if (log) console.time(timerId);

        this.points = points;

        // generate a cluster object for each point and index input points into a KD-tree
        const data = [];

        for (let i = 0; i < points.length; i++) {
            const p = points[i];
            if (!p.geometry) continue;

            const [lng, lat] = p.geometry.coordinates;
            const x = fround(lngX(lng));
            const y = fround(latY(lat));
            // store internal point/cluster data in flat numeric arrays for performance
            data.push(
                x, y, // projected point coordinates
                Infinity, // the last zoom the point was processed at
                i, // index of the source feature in the original input array
                -1, // parent cluster id
                1 // number of points in a cluster
            );
            if (this.options.reduce) data.push(0); // noop
        }
        let tree = this.trees[maxZoom + 1] = this._createTree(data);

        if (log) console.timeEnd(timerId);

        // cluster points on max zoom, then cluster the results on previous zoom, etc.;
        // results in a cluster hierarchy across zoom levels
        for (let z = maxZoom; z >= minZoom; z--) {
            const now = +Date.now();

            // create a new set of clusters for the zoom and index them with a KD-tree
            tree = this.trees[z] = this._createTree(this._cluster(tree, z));

            if (log) console.log('z%d: %d clusters in %dms', z, tree.numItems, +Date.now() - now);
        }

        if (log) console.timeEnd('total time');

        return this;
    }

    getClusters(bbox, zoom) {
        let minLng = ((bbox[0] + 180) % 360 + 360) % 360 - 180;
        const minLat = Math.max(-90, Math.min(90, bbox[1]));
        let maxLng = bbox[2] === 180 ? 180 : ((bbox[2] + 180) % 360 + 360) % 360 - 180;
        const maxLat = Math.max(-90, Math.min(90, bbox[3]));

        if (bbox[2] - bbox[0] >= 360) {
            minLng = -180;
            maxLng = 180;
        } else if (minLng > maxLng) {
            const easternHem = this.getClusters([minLng, minLat, 180, maxLat], zoom);
            const westernHem = this.getClusters([-180, minLat, maxLng, maxLat], zoom);
            return easternHem.concat(westernHem);
        }

        const tree = this.trees[this._limitZoom(zoom)];
        const ids = tree.range(lngX(minLng), latY(maxLat), lngX(maxLng), latY(minLat));
        const data = tree.data;
        const clusters = [];
        for (const id of ids) {
            const k = this.stride * id;
            clusters.push(data[k + OFFSET_NUM] > 1 ? getClusterJSON(data, k, this.clusterProps) : this.points[data[k + OFFSET_ID]]);
        }
        return clusters;
    }

    getChildren(clusterId) {
        const originId = this._getOriginId(clusterId);
        const originZoom = this._getOriginZoom(clusterId);
        const errorMsg = 'No cluster with the specified id.';

        const tree = this.trees[originZoom];
        if (!tree) throw new Error(errorMsg);

        const data = tree.data;
        if (originId * this.stride >= data.length) throw new Error(errorMsg);

        const r = this.options.radius / (this.options.extent * Math.pow(2, originZoom - 1));
        const x = data[originId * this.stride];
        const y = data[originId * this.stride + 1];
        const ids = tree.within(x, y, r);
        const children = [];
        for (const id of ids) {
            const k = id * this.stride;
            if (data[k + OFFSET_PARENT] === clusterId) {
                children.push(data[k + OFFSET_NUM] > 1 ? getClusterJSON(data, k, this.clusterProps) : this.points[data[k + OFFSET_ID]]);
            }
        }

        if (children.length === 0) throw new Error(errorMsg);

        return children;
    }

    getLeaves(clusterId, limit, offset) {
        limit = limit || 10;
        offset = offset || 0;

        const leaves = [];
        this._appendLeaves(leaves, clusterId, limit, offset, 0);

        return leaves;
    }

    getTile(z, x, y) {
        const tree = this.trees[this._limitZoom(z)];
        const z2 = Math.pow(2, z);
        const {extent, radius} = this.options;
        const p = radius / extent;
        const top = (y - p) / z2;
        const bottom = (y + 1 + p) / z2;

        const tile = {
            features: []
        };

        this._addTileFeatures(
            tree.range((x - p) / z2, top, (x + 1 + p) / z2, bottom),
            tree.data, x, y, z2, tile);

        if (x === 0) {
            this._addTileFeatures(
                tree.range(1 - p / z2, top, 1, bottom),
                tree.data, z2, y, z2, tile);
        }
        if (x === z2 - 1) {
            this._addTileFeatures(
                tree.range(0, top, p / z2, bottom),
                tree.data, -1, y, z2, tile);
        }

        return tile.features.length ? tile : null;
    }

    getClusterExpansionZoom(clusterId) {
        let expansionZoom = this._getOriginZoom(clusterId) - 1;
        while (expansionZoom <= this.options.maxZoom) {
            const children = this.getChildren(clusterId);
            expansionZoom++;
            if (children.length !== 1) break;
            clusterId = children[0].properties.cluster_id;
        }
        return expansionZoom;
    }

    _appendLeaves(result, clusterId, limit, offset, skipped) {
        const children = this.getChildren(clusterId);

        for (const child of children) {
            const props = child.properties;

            if (props && props.cluster) {
                if (skipped + props.point_count <= offset) {
                    // skip the whole cluster
                    skipped += props.point_count;
                } else {
                    // enter the cluster
                    skipped = this._appendLeaves(result, props.cluster_id, limit, offset, skipped);
                    // exit the cluster
                }
            } else if (skipped < offset) {
                // skip a single point
                skipped++;
            } else {
                // add a single point
                result.push(child);
            }
            if (result.length === limit) break;
        }

        return skipped;
    }

    _createTree(data) {
        const tree = new KDBush(data.length / this.stride | 0, this.options.nodeSize, Float32Array);
        for (let i = 0; i < data.length; i += this.stride) tree.add(data[i], data[i + 1]);
        tree.finish();
        tree.data = data;
        return tree;
    }

    _addTileFeatures(ids, data, x, y, z2, tile) {
        for (const i of ids) {
            const k = i * this.stride;
            const isCluster = data[k + OFFSET_NUM] > 1;

            let tags, px, py;
            if (isCluster) {
                tags = getClusterProperties(data, k, this.clusterProps);
                px = data[k];
                py = data[k + 1];
            } else {
                const p = this.points[data[k + OFFSET_ID]];
                tags = p.properties;
                const [lng, lat] = p.geometry.coordinates;
                px = lngX(lng);
                py = latY(lat);
            }

            const f = {
                type: 1,
                geometry: [[
                    Math.round(this.options.extent * (px * z2 - x)),
                    Math.round(this.options.extent * (py * z2 - y))
                ]],
                tags
            };

            // assign id
            let id;
            if (isCluster || this.options.generateId) {
                // optionally generate id for points
                id = data[k + OFFSET_ID];
            } else {
                // keep id if already assigned
                id = this.points[data[k + OFFSET_ID]].id;
            }

            if (id !== undefined) f.id = id;

            tile.features.push(f);
        }
    }

    _limitZoom(z) {
        return Math.max(this.options.minZoom, Math.min(Math.floor(+z), this.options.maxZoom + 1));
    }

    _cluster(tree, zoom) {
        const {radius, extent, reduce, minPoints} = this.options;
        const r = radius / (extent * Math.pow(2, zoom));
        const data = tree.data;
        const nextData = [];
        const stride = this.stride;

        // loop through each point
        for (let i = 0; i < data.length; i += stride) {
            // if we've already visited the point at this zoom level, skip it
            if (data[i + OFFSET_ZOOM] <= zoom) continue;
            data[i + OFFSET_ZOOM] = zoom;

            // find all nearby points
            const x = data[i];
            const y = data[i + 1];
            const neighborIds = tree.within(data[i], data[i + 1], r);

            const numPointsOrigin = data[i + OFFSET_NUM];
            let numPoints = numPointsOrigin;

            // count the number of points in a potential cluster
            for (const neighborId of neighborIds) {
                const k = neighborId * stride;
                // filter out neighbors that are already processed
                if (data[k + OFFSET_ZOOM] > zoom) numPoints += data[k + OFFSET_NUM];
            }

            // if there were neighbors to merge, and there are enough points to form a cluster
            if (numPoints > numPointsOrigin && numPoints >= minPoints) {
                let wx = x * numPointsOrigin;
                let wy = y * numPointsOrigin;

                let clusterProperties;
                let clusterPropIndex = -1;

                // encode both zoom and point index on which the cluster originated -- offset by total length of features
                const id = ((i / stride | 0) << 5) + (zoom + 1) + this.points.length;

                for (const neighborId of neighborIds) {
                    const k = neighborId * stride;

                    if (data[k + OFFSET_ZOOM] <= zoom) continue;
                    data[k + OFFSET_ZOOM] = zoom; // save the zoom (so it doesn't get processed twice)

                    const numPoints2 = data[k + OFFSET_NUM];
                    wx += data[k] * numPoints2; // accumulate coordinates for calculating weighted center
                    wy += data[k + 1] * numPoints2;

                    data[k + OFFSET_PARENT] = id;

                    if (reduce) {
                        if (!clusterProperties) {
                            clusterProperties = this._map(data, i, true);
                            clusterPropIndex = this.clusterProps.length;
                            this.clusterProps.push(clusterProperties);
                        }
                        reduce(clusterProperties, this._map(data, k));
                    }
                }

                data[i + OFFSET_PARENT] = id;
                nextData.push(wx / numPoints, wy / numPoints, Infinity, id, -1, numPoints);
                if (reduce) nextData.push(clusterPropIndex);

            } else { // left points as unclustered
                for (let j = 0; j < stride; j++) nextData.push(data[i + j]);

                if (numPoints > 1) {
                    for (const neighborId of neighborIds) {
                        const k = neighborId * stride;
                        if (data[k + OFFSET_ZOOM] <= zoom) continue;
                        data[k + OFFSET_ZOOM] = zoom;
                        for (let j = 0; j < stride; j++) nextData.push(data[k + j]);
                    }
                }
            }
        }

        return nextData;
    }

    // get index of the point from which the cluster originated
    _getOriginId(clusterId) {
        return (clusterId - this.points.length) >> 5;
    }

    // get zoom of the point from which the cluster originated
    _getOriginZoom(clusterId) {
        return (clusterId - this.points.length) % 32;
    }

    _map(data, i, clone) {
        if (data[i + OFFSET_NUM] > 1) {
            const props = this.clusterProps[data[i + OFFSET_PROP]];
            return clone ? Object.assign({}, props) : props;
        }
        const original = this.points[data[i + OFFSET_ID]].properties;
        const result = this.options.map(original);
        return clone && result === original ? Object.assign({}, result) : result;
    }
}

function getClusterJSON(data, i, clusterProps) {
    return {
        type: 'Feature',
        id: data[i + OFFSET_ID],
        properties: getClusterProperties(data, i, clusterProps),
        geometry: {
            type: 'Point',
            coordinates: [xLng(data[i]), yLat(data[i + 1])]
        }
    };
}

function getClusterProperties(data, i, clusterProps) {
    const count = data[i + OFFSET_NUM];
    const abbrev =
        count >= 10000 ? `${Math.round(count / 1000)  }k` :
        count >= 1000 ? `${Math.round(count / 100) / 10  }k` : count;
    const propIndex = data[i + OFFSET_PROP];
    const properties = propIndex === -1 ? {} : Object.assign({}, clusterProps[propIndex]);
    return Object.assign(properties, {
        cluster: true,
        cluster_id: data[i + OFFSET_ID],
        point_count: count,
        point_count_abbreviated: abbrev
    });
}

// longitude/latitude to spherical mercator in [0..1] range
function lngX(lng) {
    return lng / 360 + 0.5;
}
function latY(lat) {
    const sin = Math.sin(lat * Math.PI / 180);
    const y = (0.5 - 0.25 * Math.log((1 + sin) / (1 - sin)) / Math.PI);
    return y < 0 ? 0 : y > 1 ? 1 : y;
}

// spherical mercator to longitude/latitude
function xLng(x) {
    return (x - 0.5) * 360;
}
function yLat(y) {
    const y2 = (180 - y * 360) * Math.PI / 180;
    return 360 * Math.atan(Math.exp(y2)) / Math.PI - 90;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

/**
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class MarkerUtils {
    static isAdvancedMarkerAvailable(map) {
        return (google.maps.marker &&
            map.getMapCapabilities().isAdvancedMarkersAvailable === true);
    }
    static isAdvancedMarker(marker) {
        return (google.maps.marker &&
            marker instanceof google.maps.marker.AdvancedMarkerElement);
    }
    static setMap(marker, map) {
        if (this.isAdvancedMarker(marker)) {
            marker.map = map;
        }
        else {
            marker.setMap(map);
        }
    }
    static getPosition(marker) {
        // SuperClusterAlgorithm.calculate expects a LatLng instance so we fake it for Adv Markers
        if (this.isAdvancedMarker(marker)) {
            if (marker.position) {
                if (marker.position instanceof google.maps.LatLng) {
                    return marker.position;
                }
                // since we can't cast to LatLngLiteral for reasons =(
                if (marker.position.lat && marker.position.lng) {
                    return new google.maps.LatLng(marker.position.lat, marker.position.lng);
                }
            }
            return new google.maps.LatLng(null);
        }
        return marker.getPosition();
    }
    static getVisible(marker) {
        if (this.isAdvancedMarker(marker)) {
            /**
             * Always return true for Advanced Markers because the clusterer
             * uses getVisible as a way to count legacy markers not as an actual
             * indicator of visibility for some reason. Even when markers are hidden
             * Marker.getVisible returns `true` and this is used to set the marker count
             * on the cluster. See the behavior of Cluster.count
             */
            return true;
        }
        return marker.getVisible();
    }
}

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cluster {
    constructor({ markers, position }) {
        this.markers = markers;
        if (position) {
            if (position instanceof google.maps.LatLng) {
                this._position = position;
            }
            else {
                this._position = new google.maps.LatLng(position);
            }
        }
    }
    get bounds() {
        if (this.markers.length === 0 && !this._position) {
            return;
        }
        const bounds = new google.maps.LatLngBounds(this._position, this._position);
        for (const marker of this.markers) {
            bounds.extend(MarkerUtils.getPosition(marker));
        }
        return bounds;
    }
    get position() {
        return this._position || this.bounds.getCenter();
    }
    /**
     * Get the count of **visible** markers.
     */
    get count() {
        return this.markers.filter((m) => MarkerUtils.getVisible(m)).length;
    }
    /**
     * Add a marker to the cluster.
     */
    push(marker) {
        this.markers.push(marker);
    }
    /**
     * Cleanup references and remove marker from map.
     */
    delete() {
        if (this.marker) {
            MarkerUtils.setMap(this.marker, null);
            this.marker = undefined;
        }
        this.markers.length = 0;
    }
}

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns the markers visible in a padded map viewport
 *
 * @param map
 * @param mapCanvasProjection
 * @param markers The list of marker to filter
 * @param viewportPaddingPixels The padding in pixel
 * @returns The list of markers in the padded viewport
 */
const filterMarkersToPaddedViewport = (map, mapCanvasProjection, markers, viewportPaddingPixels) => {
    const extendedMapBounds = extendBoundsToPaddedViewport(map.getBounds(), mapCanvasProjection, viewportPaddingPixels);
    return markers.filter((marker) => extendedMapBounds.contains(MarkerUtils.getPosition(marker)));
};
/**
 * Extends a bounds by a number of pixels in each direction
 */
const extendBoundsToPaddedViewport = (bounds, projection, numPixels) => {
    const { northEast, southWest } = latLngBoundsToPixelBounds(bounds, projection);
    const extendedPixelBounds = extendPixelBounds({ northEast, southWest }, numPixels);
    return pixelBoundsToLatLngBounds(extendedPixelBounds, projection);
};
/**
 * Returns the distance between 2 positions.
 *
 * @hidden
 */
const distanceBetweenPoints = (p1, p2) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = ((p2.lat - p1.lat) * Math.PI) / 180;
    const dLon = ((p2.lng - p1.lng) * Math.PI) / 180;
    const sinDLat = Math.sin(dLat / 2);
    const sinDLon = Math.sin(dLon / 2);
    const a = sinDLat * sinDLat +
        Math.cos((p1.lat * Math.PI) / 180) *
            Math.cos((p2.lat * Math.PI) / 180) *
            sinDLon *
            sinDLon;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
};
/**
 * Converts a LatLng bound to pixels.
 *
 * @hidden
 */
const latLngBoundsToPixelBounds = (bounds, projection) => {
    return {
        northEast: projection.fromLatLngToDivPixel(bounds.getNorthEast()),
        southWest: projection.fromLatLngToDivPixel(bounds.getSouthWest()),
    };
};
/**
 * Extends a pixel bounds by numPixels in all directions.
 *
 * @hidden
 */
const extendPixelBounds = ({ northEast, southWest }, numPixels) => {
    northEast.x += numPixels;
    northEast.y -= numPixels;
    southWest.x -= numPixels;
    southWest.y += numPixels;
    return { northEast, southWest };
};
/**
 * @hidden
 */
const pixelBoundsToLatLngBounds = ({ northEast, southWest }, projection) => {
    const sw = projection.fromDivPixelToLatLng(southWest);
    const ne = projection.fromDivPixelToLatLng(northEast);
    return new google.maps.LatLngBounds(sw, ne);
};

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @hidden
 */
class AbstractAlgorithm {
    constructor({ maxZoom = 16 }) {
        this.maxZoom = maxZoom;
    }
    /**
     * Helper function to bypass clustering based upon some map state such as
     * zoom, number of markers, etc.
     *
     * ```typescript
     *  cluster({markers, map}: AlgorithmInput): Cluster[] {
     *    if (shouldBypassClustering(map)) {
     *      return this.noop({markers})
     *    }
     * }
     * ```
     */
    noop({ markers, }) {
        return noop$1(markers);
    }
}
/**
 * Abstract viewport algorithm proves a class to filter markers by a padded
 * viewport. This is a common optimization.
 *
 * @hidden
 */
class AbstractViewportAlgorithm extends AbstractAlgorithm {
    constructor(_a) {
        var { viewportPadding = 60 } = _a, options = __rest(_a, ["viewportPadding"]);
        super(options);
        this.viewportPadding = 60;
        this.viewportPadding = viewportPadding;
    }
    calculate({ markers, map, mapCanvasProjection, }) {
        if (map.getZoom() >= this.maxZoom) {
            return {
                clusters: this.noop({
                    markers,
                }),
                changed: false,
            };
        }
        return {
            clusters: this.cluster({
                markers: filterMarkersToPaddedViewport(map, mapCanvasProjection, markers, this.viewportPadding),
                map,
                mapCanvasProjection,
            }),
        };
    }
}
/**
 * @hidden
 */
const noop$1 = (markers) => {
    const clusters = markers.map((marker) => new Cluster({
        position: MarkerUtils.getPosition(marker),
        markers: [marker],
    }));
    return clusters;
};

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The default Grid algorithm historically used in Google Maps marker
 * clustering.
 *
 * The Grid algorithm does not implement caching and markers may flash as the
 * viewport changes. Instead use {@link SuperClusterAlgorithm}.
 */
class GridAlgorithm extends AbstractViewportAlgorithm {
    constructor(_a) {
        var { maxDistance = 40000, gridSize = 40 } = _a, options = __rest(_a, ["maxDistance", "gridSize"]);
        super(options);
        this.clusters = [];
        this.state = { zoom: -1 };
        this.maxDistance = maxDistance;
        this.gridSize = gridSize;
    }
    calculate({ markers, map, mapCanvasProjection, }) {
        const state = { zoom: map.getZoom() };
        let changed = false;
        if (this.state.zoom >= this.maxZoom && state.zoom >= this.maxZoom) ;
        else {
            changed = !equal(this.state, state);
        }
        this.state = state;
        if (map.getZoom() >= this.maxZoom) {
            return {
                clusters: this.noop({
                    markers,
                }),
                changed,
            };
        }
        return {
            clusters: this.cluster({
                markers: filterMarkersToPaddedViewport(map, mapCanvasProjection, markers, this.viewportPadding),
                map,
                mapCanvasProjection,
            }),
        };
    }
    cluster({ markers, map, mapCanvasProjection, }) {
        this.clusters = [];
        markers.forEach((marker) => {
            this.addToClosestCluster(marker, map, mapCanvasProjection);
        });
        return this.clusters;
    }
    addToClosestCluster(marker, map, projection) {
        let maxDistance = this.maxDistance; // Some large number
        let cluster = null;
        for (let i = 0; i < this.clusters.length; i++) {
            const candidate = this.clusters[i];
            const distance = distanceBetweenPoints(candidate.bounds.getCenter().toJSON(), MarkerUtils.getPosition(marker).toJSON());
            if (distance < maxDistance) {
                maxDistance = distance;
                cluster = candidate;
            }
        }
        if (cluster &&
            extendBoundsToPaddedViewport(cluster.bounds, projection, this.gridSize).contains(MarkerUtils.getPosition(marker))) {
            cluster.push(marker);
        }
        else {
            const cluster = new Cluster({ markers: [marker] });
            this.clusters.push(cluster);
        }
    }
}

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Noop algorithm does not generate any clusters or filter markers by the an extended viewport.
 */
class NoopAlgorithm extends AbstractAlgorithm {
    constructor(_a) {
        var options = __rest(_a, []);
        super(options);
    }
    calculate({ markers, map, mapCanvasProjection, }) {
        return {
            clusters: this.cluster({ markers, map, mapCanvasProjection }),
            changed: false,
        };
    }
    cluster(input) {
        return this.noop(input);
    }
}

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A very fast JavaScript algorithm for geospatial point clustering using KD trees.
 *
 * @see https://www.npmjs.com/package/supercluster for more information on options.
 */
class SuperClusterAlgorithm extends AbstractAlgorithm {
    constructor(_a) {
        var { maxZoom, radius = 60 } = _a, options = __rest(_a, ["maxZoom", "radius"]);
        super({ maxZoom });
        this.state = { zoom: -1 };
        this.superCluster = new Supercluster(Object.assign({ maxZoom: this.maxZoom, radius }, options));
    }
    calculate(input) {
        let changed = false;
        const state = { zoom: input.map.getZoom() };
        if (!equal(input.markers, this.markers)) {
            changed = true;
            // TODO use proxy to avoid copy?
            this.markers = [...input.markers];
            const points = this.markers.map((marker) => {
                const position = MarkerUtils.getPosition(marker);
                const coordinates = [position.lng(), position.lat()];
                return {
                    type: "Feature",
                    geometry: {
                        type: "Point",
                        coordinates,
                    },
                    properties: { marker },
                };
            });
            this.superCluster.load(points);
        }
        if (!changed) {
            if (this.state.zoom <= this.maxZoom || state.zoom <= this.maxZoom) {
                changed = !equal(this.state, state);
            }
        }
        this.state = state;
        if (changed) {
            this.clusters = this.cluster(input);
        }
        return { clusters: this.clusters, changed };
    }
    cluster({ map }) {
        return this.superCluster
            .getClusters([-180, -90, 180, 90], Math.round(map.getZoom()))
            .map((feature) => this.transformCluster(feature));
    }
    transformCluster({ geometry: { coordinates: [lng, lat], }, properties, }) {
        if (properties.cluster) {
            return new Cluster({
                markers: this.superCluster
                    .getLeaves(properties.cluster_id, Infinity)
                    .map((leaf) => leaf.properties.marker),
                position: { lat, lng },
            });
        }
        const marker = properties.marker;
        return new Cluster({
            markers: [marker],
            position: MarkerUtils.getPosition(marker),
        });
    }
}

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provides statistics on all clusters in the current render cycle for use in {@link Renderer.render}.
 */
class ClusterStats {
    constructor(markers, clusters) {
        this.markers = { sum: markers.length };
        const clusterMarkerCounts = clusters.map((a) => a.count);
        const clusterMarkerSum = clusterMarkerCounts.reduce((a, b) => a + b, 0);
        this.clusters = {
            count: clusters.length,
            markers: {
                mean: clusterMarkerSum / clusters.length,
                sum: clusterMarkerSum,
                min: Math.min(...clusterMarkerCounts),
                max: Math.max(...clusterMarkerCounts),
            },
        };
    }
}
class DefaultRenderer {
    /**
     * The default render function for the library used by {@link MarkerClusterer}.
     *
     * Currently set to use the following:
     *
     * ```typescript
     * // change color if this cluster has more markers than the mean cluster
     * const color =
     *   count > Math.max(10, stats.clusters.markers.mean)
     *     ? "#ff0000"
     *     : "#0000ff";
     *
     * // create svg url with fill color
     * const svg = window.btoa(`
     * <svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
     *   <circle cx="120" cy="120" opacity=".6" r="70" />
     *   <circle cx="120" cy="120" opacity=".3" r="90" />
     *   <circle cx="120" cy="120" opacity=".2" r="110" />
     *   <circle cx="120" cy="120" opacity=".1" r="130" />
     * </svg>`);
     *
     * // create marker using svg icon
     * return new google.maps.Marker({
     *   position,
     *   icon: {
     *     url: `data:image/svg+xml;base64,${svg}`,
     *     scaledSize: new google.maps.Size(45, 45),
     *   },
     *   label: {
     *     text: String(count),
     *     color: "rgba(255,255,255,0.9)",
     *     fontSize: "12px",
     *   },
     *   // adjust zIndex to be above other markers
     *   zIndex: 1000 + count,
     * });
     * ```
     */
    render({ count, position }, stats, map) {
        // change color if this cluster has more markers than the mean cluster
        const color = count > Math.max(10, stats.clusters.markers.mean) ? "#ff0000" : "#0000ff";
        // create svg literal with fill color
        const svg = `<svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="50" height="50">
<circle cx="120" cy="120" opacity=".6" r="70" />
<circle cx="120" cy="120" opacity=".3" r="90" />
<circle cx="120" cy="120" opacity=".2" r="110" />
<text x="50%" y="50%" style="fill:#fff" text-anchor="middle" font-size="50" dominant-baseline="middle" font-family="roboto,arial,sans-serif">${count}</text>
</svg>`;
        const title = `Cluster of ${count} markers`, 
        // adjust zIndex to be above other markers
        zIndex = Number(google.maps.Marker.MAX_ZINDEX) + count;
        if (MarkerUtils.isAdvancedMarkerAvailable(map)) {
            // create cluster SVG element
            const div = document.createElement("div");
            div.innerHTML = svg;
            const svgEl = div.firstElementChild;
            svgEl.setAttribute("transform", "translate(0 25)");
            const clusterOptions = {
                map,
                position,
                zIndex,
                title,
                content: svgEl,
            };
            return new google.maps.marker.AdvancedMarkerElement(clusterOptions);
        }
        const clusterOptions = {
            position,
            zIndex,
            title,
            icon: {
                url: `data:image/svg+xml;base64,${btoa(svg)}`,
                anchor: new google.maps.Point(25, 25),
            },
        };
        return new google.maps.Marker(clusterOptions);
    }
}

/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Extends an object's prototype by another's.
 *
 * @param type1 The Type to be extended.
 * @param type2 The Type to extend with.
 * @ignore
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extend(type1, type2) {
    /* istanbul ignore next */
    // eslint-disable-next-line prefer-const
    for (let property in type2.prototype) {
        type1.prototype[property] = type2.prototype[property];
    }
}
/**
 * @ignore
 */
class OverlayViewSafe {
    constructor() {
        // MarkerClusterer implements google.maps.OverlayView interface. We use the
        // extend function to extend MarkerClusterer with google.maps.OverlayView
        // because it might not always be available when the code is defined so we
        // look for it at the last possible moment. If it doesn't exist now then
        // there is no point going ahead :)
        extend(OverlayViewSafe, google.maps.OverlayView);
    }
}

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var MarkerClustererEvents;
(function (MarkerClustererEvents) {
    MarkerClustererEvents["CLUSTERING_BEGIN"] = "clusteringbegin";
    MarkerClustererEvents["CLUSTERING_END"] = "clusteringend";
    MarkerClustererEvents["CLUSTER_CLICK"] = "click";
})(MarkerClustererEvents || (MarkerClustererEvents = {}));
const defaultOnClusterClickHandler = (_, cluster, map) => {
    map.fitBounds(cluster.bounds);
};
/**
 * MarkerClusterer creates and manages per-zoom-level clusters for large amounts
 * of markers. See {@link MarkerClustererOptions} for more details.
 *
 */
class MarkerClusterer extends OverlayViewSafe {
    constructor({ map, markers = [], algorithmOptions = {}, algorithm = new SuperClusterAlgorithm(algorithmOptions), renderer = new DefaultRenderer(), onClusterClick = defaultOnClusterClickHandler, }) {
        super();
        this.markers = [...markers];
        this.clusters = [];
        this.algorithm = algorithm;
        this.renderer = renderer;
        this.onClusterClick = onClusterClick;
        if (map) {
            this.setMap(map);
        }
    }
    addMarker(marker, noDraw) {
        if (this.markers.includes(marker)) {
            return;
        }
        this.markers.push(marker);
        if (!noDraw) {
            this.render();
        }
    }
    addMarkers(markers, noDraw) {
        markers.forEach((marker) => {
            this.addMarker(marker, true);
        });
        if (!noDraw) {
            this.render();
        }
    }
    removeMarker(marker, noDraw) {
        const index = this.markers.indexOf(marker);
        if (index === -1) {
            // Marker is not in our list of markers, so do nothing:
            return false;
        }
        MarkerUtils.setMap(marker, null);
        this.markers.splice(index, 1); // Remove the marker from the list of managed markers
        if (!noDraw) {
            this.render();
        }
        return true;
    }
    removeMarkers(markers, noDraw) {
        let removed = false;
        markers.forEach((marker) => {
            removed = this.removeMarker(marker, true) || removed;
        });
        if (removed && !noDraw) {
            this.render();
        }
        return removed;
    }
    clearMarkers(noDraw) {
        this.markers.length = 0;
        if (!noDraw) {
            this.render();
        }
    }
    /**
     * Recalculates and draws all the marker clusters.
     */
    render() {
        const map = this.getMap();
        if (map instanceof google.maps.Map && map.getProjection()) {
            google.maps.event.trigger(this, MarkerClustererEvents.CLUSTERING_BEGIN, this);
            const { clusters, changed } = this.algorithm.calculate({
                markers: this.markers,
                map,
                mapCanvasProjection: this.getProjection(),
            });
            // Allow algorithms to return flag on whether the clusters/markers have changed.
            if (changed || changed == undefined) {
                // Accumulate the markers of the clusters composed of a single marker.
                // Those clusters directly use the marker.
                // Clusters with more than one markers use a group marker generated by a renderer.
                const singleMarker = new Set();
                for (const cluster of clusters) {
                    if (cluster.markers.length == 1) {
                        singleMarker.add(cluster.markers[0]);
                    }
                }
                const groupMarkers = [];
                // Iterate the clusters that are currently rendered.
                for (const cluster of this.clusters) {
                    if (cluster.marker == null) {
                        continue;
                    }
                    if (cluster.markers.length == 1) {
                        if (!singleMarker.has(cluster.marker)) {
                            // The marker:
                            // - was previously rendered because it is from a cluster with 1 marker,
                            // - should no more be rendered as it is not in singleMarker.
                            MarkerUtils.setMap(cluster.marker, null);
                        }
                    }
                    else {
                        // Delay the removal of old group markers to avoid flickering.
                        groupMarkers.push(cluster.marker);
                    }
                }
                this.clusters = clusters;
                this.renderClusters();
                // Delayed removal of the markers of the former groups.
                requestAnimationFrame(() => groupMarkers.forEach((marker) => MarkerUtils.setMap(marker, null)));
            }
            google.maps.event.trigger(this, MarkerClustererEvents.CLUSTERING_END, this);
        }
    }
    onAdd() {
        this.idleListener = this.getMap().addListener("idle", this.render.bind(this));
        this.render();
    }
    onRemove() {
        google.maps.event.removeListener(this.idleListener);
        this.reset();
    }
    reset() {
        this.markers.forEach((marker) => MarkerUtils.setMap(marker, null));
        this.clusters.forEach((cluster) => cluster.delete());
        this.clusters = [];
    }
    renderClusters() {
        // Generate stats to pass to renderers.
        const stats = new ClusterStats(this.markers, this.clusters);
        const map = this.getMap();
        this.clusters.forEach((cluster) => {
            if (cluster.markers.length === 1) {
                cluster.marker = cluster.markers[0];
            }
            else {
                // Generate the marker to represent the group.
                cluster.marker = this.renderer.render(cluster, stats, map);
                // Make sure all individual markers are removed from the map.
                cluster.markers.forEach((marker) => MarkerUtils.setMap(marker, null));
                if (this.onClusterClick) {
                    cluster.marker.addListener("click", 
                    /* istanbul ignore next */
                    (event) => {
                        google.maps.event.trigger(this, MarkerClustererEvents.CLUSTER_CLICK, cluster);
                        this.onClusterClick(event, cluster, map);
                    });
                }
            }
            MarkerUtils.setMap(cluster.marker, map);
        });
    }
}

var index_esm = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AbstractAlgorithm: AbstractAlgorithm,
    AbstractViewportAlgorithm: AbstractViewportAlgorithm,
    Cluster: Cluster,
    ClusterStats: ClusterStats,
    DefaultRenderer: DefaultRenderer,
    GridAlgorithm: GridAlgorithm,
    MarkerClusterer: MarkerClusterer,
    get MarkerClustererEvents () { return MarkerClustererEvents; },
    NoopAlgorithm: NoopAlgorithm,
    SuperClusterAlgorithm: SuperClusterAlgorithm,
    defaultOnClusterClickHandler: defaultOnClusterClickHandler,
    distanceBetweenPoints: distanceBetweenPoints,
    extendBoundsToPaddedViewport: extendBoundsToPaddedViewport,
    extendPixelBounds: extendPixelBounds,
    filterMarkersToPaddedViewport: filterMarkersToPaddedViewport,
    noop: noop$1,
    pixelBoundsToLatLngBounds: pixelBoundsToLatLngBounds
});

function useGoogleMarkerClusterer(options) {
    var map = useGoogleMap();
    var _a = react.useState(null), markerClusterer = _a[0], setMarkerClusterer = _a[1];
    react.useEffect(function () {
        if (map && markerClusterer === null) {
            var markerCluster = new MarkerClusterer(__assign(__assign({}, options), { map: map }));
            setMarkerClusterer(markerCluster);
        }
    }, [map]);
    return markerClusterer;
}
/** Wrapper around [@googlemaps/markerclusterer](https://github.com/googlemaps/js-markerclusterer)
 *
 * Accepts {@link  MarkerClustererOptionsSubset} which is a subset of  {@link MarkerClustererOptions}
 */
function GoogleMarkerClusterer(_a) {
    var children = _a.children, options = _a.options;
    var markerClusterer = useGoogleMarkerClusterer(options);
    return markerClusterer !== null ? children(markerClusterer) : null;
}
var GoogleMarkerClusterer$1 = react.memo(GoogleMarkerClusterer);

var eventMap$c = {
    onCloseClick: 'closeclick',
    onContentChanged: 'content_changed',
    onDomReady: 'domready',
    onPositionChanged: 'position_changed',
    onZindexChanged: 'zindex_changed',
};
var updaterMap$c = {
    options: function (instance, options) {
        instance.setOptions(options);
    },
    position: function (instance, position) {
        instance.setPosition(position);
    },
    zIndex: function (instance, zIndex) {
        instance.setZIndex(zIndex);
    },
};
function InfoWindowFunctional(_a) {
    var children = _a.children, anchor = _a.anchor, options = _a.options, position = _a.position, zIndex = _a.zIndex, onCloseClick = _a.onCloseClick, onDomReady = _a.onDomReady, onContentChanged = _a.onContentChanged, onPositionChanged = _a.onPositionChanged, onZindexChanged = _a.onZindexChanged, onLoad = _a.onLoad, onUnmount = _a.onUnmount;
    var map = react.useContext(MapContext);
    var _b = react.useState(null), instance = _b[0], setInstance = _b[1];
    var _c = react.useState(null), closeclickListener = _c[0], setCloseClickListener = _c[1];
    var _d = react.useState(null), domreadyclickListener = _d[0], setDomReadyClickListener = _d[1];
    var _e = react.useState(null), contentchangedclickListener = _e[0], setContentChangedClickListener = _e[1];
    var _f = react.useState(null), positionchangedclickListener = _f[0], setPositionChangedClickListener = _f[1];
    var _g = react.useState(null), zindexchangedclickListener = _g[0], setZindexChangedClickListener = _g[1];
    var containerElementRef = react.useRef(null);
    // Order does matter
    react.useEffect(function () {
        if (instance !== null) {
            instance.close();
            if (anchor) {
                instance.open(map, anchor);
            }
            else if (instance.getPosition()) {
                instance.open(map);
            }
        }
    }, [map, instance, anchor]);
    react.useEffect(function () {
        if (options && instance !== null) {
            instance.setOptions(options);
        }
    }, [instance, options]);
    react.useEffect(function () {
        if (position && instance !== null) {
            instance.setPosition(position);
        }
    }, [position]);
    react.useEffect(function () {
        if (typeof zIndex === 'number' && instance !== null) {
            instance.setZIndex(zIndex);
        }
    }, [zIndex]);
    react.useEffect(function () {
        if (instance && onCloseClick) {
            if (closeclickListener !== null) {
                google.maps.event.removeListener(closeclickListener);
            }
            setCloseClickListener(google.maps.event.addListener(instance, 'closeclick', onCloseClick));
        }
    }, [onCloseClick]);
    react.useEffect(function () {
        if (instance && onDomReady) {
            if (domreadyclickListener !== null) {
                google.maps.event.removeListener(domreadyclickListener);
            }
            setDomReadyClickListener(google.maps.event.addListener(instance, 'domready', onDomReady));
        }
    }, [onDomReady]);
    react.useEffect(function () {
        if (instance && onContentChanged) {
            if (contentchangedclickListener !== null) {
                google.maps.event.removeListener(contentchangedclickListener);
            }
            setContentChangedClickListener(google.maps.event.addListener(instance, 'content_changed', onContentChanged));
        }
    }, [onContentChanged]);
    react.useEffect(function () {
        if (instance && onPositionChanged) {
            if (positionchangedclickListener !== null) {
                google.maps.event.removeListener(positionchangedclickListener);
            }
            setPositionChangedClickListener(google.maps.event.addListener(instance, 'position_changed', onPositionChanged));
        }
    }, [onPositionChanged]);
    react.useEffect(function () {
        if (instance && onZindexChanged) {
            if (zindexchangedclickListener !== null) {
                google.maps.event.removeListener(zindexchangedclickListener);
            }
            setZindexChangedClickListener(google.maps.event.addListener(instance, 'zindex_changed', onZindexChanged));
        }
    }, [onZindexChanged]);
    react.useEffect(function () {
        var infoWindow = new google.maps.InfoWindow(__assign({}, (options || {})));
        setInstance(infoWindow);
        containerElementRef.current = document.createElement('div');
        if (onCloseClick) {
            setCloseClickListener(google.maps.event.addListener(infoWindow, 'closeclick', onCloseClick));
        }
        if (onDomReady) {
            setDomReadyClickListener(google.maps.event.addListener(infoWindow, 'domready', onDomReady));
        }
        if (onContentChanged) {
            setContentChangedClickListener(google.maps.event.addListener(infoWindow, 'content_changed', onContentChanged));
        }
        if (onPositionChanged) {
            setPositionChangedClickListener(google.maps.event.addListener(infoWindow, 'position_changed', onPositionChanged));
        }
        if (onZindexChanged) {
            setZindexChangedClickListener(google.maps.event.addListener(infoWindow, 'zindex_changed', onZindexChanged));
        }
        infoWindow.setContent(containerElementRef.current);
        if (position) {
            infoWindow.setPosition(position);
        }
        if (zIndex) {
            infoWindow.setZIndex(zIndex);
        }
        if (anchor) {
            infoWindow.open(map, anchor);
        }
        else if (infoWindow.getPosition()) {
            infoWindow.open(map);
        }
        else {
            invariant$1(false, "You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>.");
        }
        if (onLoad) {
            onLoad(infoWindow);
        }
        return function () {
            if (closeclickListener) {
                google.maps.event.removeListener(closeclickListener);
            }
            if (contentchangedclickListener) {
                google.maps.event.removeListener(contentchangedclickListener);
            }
            if (domreadyclickListener) {
                google.maps.event.removeListener(domreadyclickListener);
            }
            if (positionchangedclickListener) {
                google.maps.event.removeListener(positionchangedclickListener);
            }
            if (zindexchangedclickListener) {
                google.maps.event.removeListener(zindexchangedclickListener);
            }
            if (onUnmount) {
                onUnmount(infoWindow);
            }
            infoWindow.close();
        };
    }, []);
    return containerElementRef.current ? (ReactDOM.createPortal(react.Children.only(children), containerElementRef.current)) : (null);
}
var InfoWindowF = react.memo(InfoWindowFunctional);
var InfoWindow = /** @class */ (function (_super) {
    __extends(InfoWindow, _super);
    function InfoWindow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.registeredEvents = [];
        _this.containerElement = null;
        _this.state = {
            infoWindow: null,
        };
        _this.open = function (infoWindow, anchor) {
            if (anchor) {
                infoWindow.open(_this.context, anchor);
            }
            else if (infoWindow.getPosition()) {
                infoWindow.open(_this.context);
            }
            else {
                invariant$1(false, "You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>.");
            }
        };
        _this.setInfoWindowCallback = function () {
            if (_this.state.infoWindow !== null && _this.containerElement !== null) {
                _this.state.infoWindow.setContent(_this.containerElement);
                _this.open(_this.state.infoWindow, _this.props.anchor);
                if (_this.props.onLoad) {
                    _this.props.onLoad(_this.state.infoWindow);
                }
            }
        };
        return _this;
    }
    InfoWindow.prototype.componentDidMount = function () {
        var infoWindow = new google.maps.InfoWindow(__assign({}, (this.props.options || {})));
        this.containerElement = document.createElement('div');
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$c,
            eventMap: eventMap$c,
            prevProps: {},
            nextProps: this.props,
            instance: infoWindow,
        });
        this.setState(function () {
            return {
                infoWindow: infoWindow,
            };
        }, this.setInfoWindowCallback);
    };
    InfoWindow.prototype.componentDidUpdate = function (prevProps) {
        if (this.state.infoWindow !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$c,
                eventMap: eventMap$c,
                prevProps: prevProps,
                nextProps: this.props,
                instance: this.state.infoWindow,
            });
        }
    };
    InfoWindow.prototype.componentWillUnmount = function () {
        if (this.state.infoWindow !== null) {
            unregisterEvents(this.registeredEvents);
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.infoWindow);
            }
            this.state.infoWindow.close();
        }
    };
    InfoWindow.prototype.render = function () {
        return this.containerElement ? (ReactDOM.createPortal(react.Children.only(this.props.children), this.containerElement)) : (null);
    };
    InfoWindow.contextType = MapContext;
    return InfoWindow;
}(react.PureComponent));

var eventMap$b = {
    onClick: 'click',
    onDblClick: 'dblclick',
    onDrag: 'drag',
    onDragEnd: 'dragend',
    onDragStart: 'dragstart',
    onMouseDown: 'mousedown',
    onMouseMove: 'mousemove',
    onMouseOut: 'mouseout',
    onMouseOver: 'mouseover',
    onMouseUp: 'mouseup',
    onRightClick: 'rightclick',
};
var updaterMap$b = {
    draggable: function (instance, draggable) {
        instance.setDraggable(draggable);
    },
    editable: function (instance, editable) {
        instance.setEditable(editable);
    },
    map: function (instance, map) {
        instance.setMap(map);
    },
    options: function (instance, options) {
        instance.setOptions(options);
    },
    path: function (instance, path) {
        instance.setPath(path);
    },
    visible: function (instance, visible) {
        instance.setVisible(visible);
    },
};
var defaultOptions$1 = {};
function PolylineFunctional(_a) {
    var options = _a.options, draggable = _a.draggable, editable = _a.editable, visible = _a.visible, path = _a.path, onDblClick = _a.onDblClick, onDragEnd = _a.onDragEnd, onDragStart = _a.onDragStart, onMouseDown = _a.onMouseDown, onMouseMove = _a.onMouseMove, onMouseOut = _a.onMouseOut, onMouseOver = _a.onMouseOver, onMouseUp = _a.onMouseUp, onRightClick = _a.onRightClick, onClick = _a.onClick, onDrag = _a.onDrag, onLoad = _a.onLoad, onUnmount = _a.onUnmount;
    var map = react.useContext(MapContext);
    var _b = react.useState(null), instance = _b[0], setInstance = _b[1];
    var _c = react.useState(null), dblclickListener = _c[0], setDblclickListener = _c[1];
    var _d = react.useState(null), dragendListener = _d[0], setDragendListener = _d[1];
    var _e = react.useState(null), dragstartListener = _e[0], setDragstartListener = _e[1];
    var _f = react.useState(null), mousedownListener = _f[0], setMousedownListener = _f[1];
    var _g = react.useState(null), mousemoveListener = _g[0], setMousemoveListener = _g[1];
    var _h = react.useState(null), mouseoutListener = _h[0], setMouseoutListener = _h[1];
    var _j = react.useState(null), mouseoverListener = _j[0], setMouseoverListener = _j[1];
    var _k = react.useState(null), mouseupListener = _k[0], setMouseupListener = _k[1];
    var _l = react.useState(null), rightclickListener = _l[0], setRightclickListener = _l[1];
    var _m = react.useState(null), clickListener = _m[0], setClickListener = _m[1];
    var _o = react.useState(null), dragListener = _o[0], setDragListener = _o[1];
    // Order does matter
    react.useEffect(function () {
        if (instance !== null) {
            instance.setMap(map);
        }
    }, [map]);
    react.useEffect(function () {
        if (typeof options !== 'undefined' && instance !== null) {
            instance.setOptions(options);
        }
    }, [instance, options]);
    react.useEffect(function () {
        if (typeof draggable !== 'undefined' && instance !== null) {
            instance.setDraggable(draggable);
        }
    }, [instance, draggable]);
    react.useEffect(function () {
        if (typeof editable !== 'undefined' && instance !== null) {
            instance.setEditable(editable);
        }
    }, [instance, editable]);
    react.useEffect(function () {
        if (typeof visible !== 'undefined' && instance !== null) {
            instance.setVisible(visible);
        }
    }, [instance, visible]);
    react.useEffect(function () {
        if (typeof path !== 'undefined' && instance !== null) {
            instance.setPath(path);
        }
    }, [instance, path]);
    react.useEffect(function () {
        if (instance && onDblClick) {
            if (dblclickListener !== null) {
                google.maps.event.removeListener(dblclickListener);
            }
            setDblclickListener(google.maps.event.addListener(instance, 'dblclick', onDblClick));
        }
    }, [onDblClick]);
    react.useEffect(function () {
        if (instance && onDragEnd) {
            if (dragendListener !== null) {
                google.maps.event.removeListener(dragendListener);
            }
            setDragendListener(google.maps.event.addListener(instance, 'dragend', onDragEnd));
        }
    }, [onDragEnd]);
    react.useEffect(function () {
        if (instance && onDragStart) {
            if (dragstartListener !== null) {
                google.maps.event.removeListener(dragstartListener);
            }
            setDragstartListener(google.maps.event.addListener(instance, 'dragstart', onDragStart));
        }
    }, [onDragStart]);
    react.useEffect(function () {
        if (instance && onMouseDown) {
            if (mousedownListener !== null) {
                google.maps.event.removeListener(mousedownListener);
            }
            setMousedownListener(google.maps.event.addListener(instance, 'mousedown', onMouseDown));
        }
    }, [onMouseDown]);
    react.useEffect(function () {
        if (instance && onMouseMove) {
            if (mousemoveListener !== null) {
                google.maps.event.removeListener(mousemoveListener);
            }
            setMousemoveListener(google.maps.event.addListener(instance, 'mousemove', onMouseMove));
        }
    }, [onMouseMove]);
    react.useEffect(function () {
        if (instance && onMouseOut) {
            if (mouseoutListener !== null) {
                google.maps.event.removeListener(mouseoutListener);
            }
            setMouseoutListener(google.maps.event.addListener(instance, 'mouseout', onMouseOut));
        }
    }, [onMouseOut]);
    react.useEffect(function () {
        if (instance && onMouseOver) {
            if (mouseoverListener !== null) {
                google.maps.event.removeListener(mouseoverListener);
            }
            setMouseoverListener(google.maps.event.addListener(instance, 'mouseover', onMouseOver));
        }
    }, [onMouseOver]);
    react.useEffect(function () {
        if (instance && onMouseUp) {
            if (mouseupListener !== null) {
                google.maps.event.removeListener(mouseupListener);
            }
            setMouseupListener(google.maps.event.addListener(instance, 'mouseup', onMouseUp));
        }
    }, [onMouseUp]);
    react.useEffect(function () {
        if (instance && onRightClick) {
            if (rightclickListener !== null) {
                google.maps.event.removeListener(rightclickListener);
            }
            setRightclickListener(google.maps.event.addListener(instance, 'rightclick', onRightClick));
        }
    }, [onRightClick]);
    react.useEffect(function () {
        if (instance && onClick) {
            if (clickListener !== null) {
                google.maps.event.removeListener(clickListener);
            }
            setClickListener(google.maps.event.addListener(instance, 'click', onClick));
        }
    }, [onClick]);
    react.useEffect(function () {
        if (instance && onDrag) {
            if (dragListener !== null) {
                google.maps.event.removeListener(dragListener);
            }
            setDragListener(google.maps.event.addListener(instance, 'drag', onDrag));
        }
    }, [onDrag]);
    react.useEffect(function () {
        var polyline = new google.maps.Polyline(__assign(__assign({}, (options || defaultOptions$1)), { map: map }));
        if (path) {
            polyline.setPath(path);
        }
        if (typeof visible !== 'undefined') {
            polyline.setVisible(visible);
        }
        if (typeof editable !== 'undefined') {
            polyline.setEditable(editable);
        }
        if (typeof draggable !== 'undefined') {
            polyline.setDraggable(draggable);
        }
        if (onDblClick) {
            setDblclickListener(google.maps.event.addListener(polyline, 'dblclick', onDblClick));
        }
        if (onDragEnd) {
            setDragendListener(google.maps.event.addListener(polyline, 'dragend', onDragEnd));
        }
        if (onDragStart) {
            setDragstartListener(google.maps.event.addListener(polyline, 'dragstart', onDragStart));
        }
        if (onMouseDown) {
            setMousedownListener(google.maps.event.addListener(polyline, 'mousedown', onMouseDown));
        }
        if (onMouseMove) {
            setMousemoveListener(google.maps.event.addListener(polyline, 'mousemove', onMouseMove));
        }
        if (onMouseOut) {
            setMouseoutListener(google.maps.event.addListener(polyline, 'mouseout', onMouseOut));
        }
        if (onMouseOver) {
            setMouseoverListener(google.maps.event.addListener(polyline, 'mouseover', onMouseOver));
        }
        if (onMouseUp) {
            setMouseupListener(google.maps.event.addListener(polyline, 'mouseup', onMouseUp));
        }
        if (onRightClick) {
            setRightclickListener(google.maps.event.addListener(polyline, 'rightclick', onRightClick));
        }
        if (onClick) {
            setClickListener(google.maps.event.addListener(polyline, 'click', onClick));
        }
        if (onDrag) {
            setDragListener(google.maps.event.addListener(polyline, 'drag', onDrag));
        }
        setInstance(polyline);
        if (onLoad) {
            onLoad(polyline);
        }
        return function () {
            if (dblclickListener !== null) {
                google.maps.event.removeListener(dblclickListener);
            }
            if (dragendListener !== null) {
                google.maps.event.removeListener(dragendListener);
            }
            if (dragstartListener !== null) {
                google.maps.event.removeListener(dragstartListener);
            }
            if (mousedownListener !== null) {
                google.maps.event.removeListener(mousedownListener);
            }
            if (mousemoveListener !== null) {
                google.maps.event.removeListener(mousemoveListener);
            }
            if (mouseoutListener !== null) {
                google.maps.event.removeListener(mouseoutListener);
            }
            if (mouseoverListener !== null) {
                google.maps.event.removeListener(mouseoverListener);
            }
            if (mouseupListener !== null) {
                google.maps.event.removeListener(mouseupListener);
            }
            if (rightclickListener !== null) {
                google.maps.event.removeListener(rightclickListener);
            }
            if (clickListener !== null) {
                google.maps.event.removeListener(clickListener);
            }
            if (onUnmount) {
                onUnmount(polyline);
            }
            polyline.setMap(null);
        };
    }, []);
    return null;
}
var PolylineF = react.memo(PolylineFunctional);
var Polyline = /** @class */ (function (_super) {
    __extends(Polyline, _super);
    function Polyline() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.registeredEvents = [];
        _this.state = {
            polyline: null,
        };
        _this.setPolylineCallback = function () {
            if (_this.state.polyline !== null && _this.props.onLoad) {
                _this.props.onLoad(_this.state.polyline);
            }
        };
        return _this;
    }
    Polyline.prototype.componentDidMount = function () {
        var polyline = new google.maps.Polyline(__assign(__assign({}, (this.props.options || {})), { map: this.context }));
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$b,
            eventMap: eventMap$b,
            prevProps: {},
            nextProps: this.props,
            instance: polyline,
        });
        this.setState(function setPolyline() {
            return {
                polyline: polyline,
            };
        }, this.setPolylineCallback);
    };
    Polyline.prototype.componentDidUpdate = function (prevProps) {
        if (this.state.polyline !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$b,
                eventMap: eventMap$b,
                prevProps: prevProps,
                nextProps: this.props,
                instance: this.state.polyline,
            });
        }
    };
    Polyline.prototype.componentWillUnmount = function () {
        if (this.state.polyline !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.polyline);
            }
            unregisterEvents(this.registeredEvents);
            this.state.polyline.setMap(null);
        }
    };
    Polyline.prototype.render = function () {
        return null;
    };
    Polyline.contextType = MapContext;
    return Polyline;
}(react.PureComponent));

var eventMap$a = {
    onClick: 'click',
    onDblClick: 'dblclick',
    onDrag: 'drag',
    onDragEnd: 'dragend',
    onDragStart: 'dragstart',
    onMouseDown: 'mousedown',
    onMouseMove: 'mousemove',
    onMouseOut: 'mouseout',
    onMouseOver: 'mouseover',
    onMouseUp: 'mouseup',
    onRightClick: 'rightclick',
};
var updaterMap$a = {
    draggable: function (instance, draggable) {
        instance.setDraggable(draggable);
    },
    editable: function (instance, editable) {
        instance.setEditable(editable);
    },
    map: function (instance, map) {
        instance.setMap(map);
    },
    options: function (instance, options) {
        instance.setOptions(options);
    },
    path: function (instance, path) {
        instance.setPath(path);
    },
    paths: function (instance, paths) {
        instance.setPaths(paths);
    },
    visible: function (instance, visible) {
        instance.setVisible(visible);
    },
};
function PolygonFunctional(_a) {
    var options = _a.options, draggable = _a.draggable, editable = _a.editable, visible = _a.visible, path = _a.path, paths = _a.paths, onDblClick = _a.onDblClick, onDragEnd = _a.onDragEnd, onDragStart = _a.onDragStart, onMouseDown = _a.onMouseDown, onMouseMove = _a.onMouseMove, onMouseOut = _a.onMouseOut, onMouseOver = _a.onMouseOver, onMouseUp = _a.onMouseUp, onRightClick = _a.onRightClick, onClick = _a.onClick, onDrag = _a.onDrag, onLoad = _a.onLoad, onUnmount = _a.onUnmount;
    var map = react.useContext(MapContext);
    var _b = react.useState(null), instance = _b[0], setInstance = _b[1];
    var _c = react.useState(null), dblclickListener = _c[0], setDblclickListener = _c[1];
    var _d = react.useState(null), dragendListener = _d[0], setDragendListener = _d[1];
    var _e = react.useState(null), dragstartListener = _e[0], setDragstartListener = _e[1];
    var _f = react.useState(null), mousedownListener = _f[0], setMousedownListener = _f[1];
    var _g = react.useState(null), mousemoveListener = _g[0], setMousemoveListener = _g[1];
    var _h = react.useState(null), mouseoutListener = _h[0], setMouseoutListener = _h[1];
    var _j = react.useState(null), mouseoverListener = _j[0], setMouseoverListener = _j[1];
    var _k = react.useState(null), mouseupListener = _k[0], setMouseupListener = _k[1];
    var _l = react.useState(null), rightclickListener = _l[0], setRightclickListener = _l[1];
    var _m = react.useState(null), clickListener = _m[0], setClickListener = _m[1];
    var _o = react.useState(null), dragListener = _o[0], setDragListener = _o[1];
    // Order does matter
    react.useEffect(function () {
        if (instance !== null) {
            instance.setMap(map);
        }
    }, [map]);
    react.useEffect(function () {
        if (typeof options !== 'undefined' && instance !== null) {
            instance.setOptions(options);
        }
    }, [instance, options]);
    react.useEffect(function () {
        if (typeof draggable !== 'undefined' && instance !== null) {
            instance.setDraggable(draggable);
        }
    }, [instance, draggable]);
    react.useEffect(function () {
        if (typeof editable !== 'undefined' && instance !== null) {
            instance.setEditable(editable);
        }
    }, [instance, editable]);
    react.useEffect(function () {
        if (typeof visible !== 'undefined' && instance !== null) {
            instance.setVisible(visible);
        }
    }, [instance, visible]);
    react.useEffect(function () {
        if (typeof path !== 'undefined' && instance !== null) {
            instance.setPath(path);
        }
    }, [instance, path]);
    react.useEffect(function () {
        if (typeof paths !== 'undefined' && instance !== null) {
            instance.setPaths(paths);
        }
    }, [instance, paths]);
    react.useEffect(function () {
        if (instance && onDblClick) {
            if (dblclickListener !== null) {
                google.maps.event.removeListener(dblclickListener);
            }
            setDblclickListener(google.maps.event.addListener(instance, 'dblclick', onDblClick));
        }
    }, [onDblClick]);
    react.useEffect(function () {
        if (instance && onDragEnd) {
            if (dragendListener !== null) {
                google.maps.event.removeListener(dragendListener);
            }
            setDragendListener(google.maps.event.addListener(instance, 'dragend', onDragEnd));
        }
    }, [onDragEnd]);
    react.useEffect(function () {
        if (instance && onDragStart) {
            if (dragstartListener !== null) {
                google.maps.event.removeListener(dragstartListener);
            }
            setDragstartListener(google.maps.event.addListener(instance, 'dragstart', onDragStart));
        }
    }, [onDragStart]);
    react.useEffect(function () {
        if (instance && onMouseDown) {
            if (mousedownListener !== null) {
                google.maps.event.removeListener(mousedownListener);
            }
            setMousedownListener(google.maps.event.addListener(instance, 'mousedown', onMouseDown));
        }
    }, [onMouseDown]);
    react.useEffect(function () {
        if (instance && onMouseMove) {
            if (mousemoveListener !== null) {
                google.maps.event.removeListener(mousemoveListener);
            }
            setMousemoveListener(google.maps.event.addListener(instance, 'mousemove', onMouseMove));
        }
    }, [onMouseMove]);
    react.useEffect(function () {
        if (instance && onMouseOut) {
            if (mouseoutListener !== null) {
                google.maps.event.removeListener(mouseoutListener);
            }
            setMouseoutListener(google.maps.event.addListener(instance, 'mouseout', onMouseOut));
        }
    }, [onMouseOut]);
    react.useEffect(function () {
        if (instance && onMouseOver) {
            if (mouseoverListener !== null) {
                google.maps.event.removeListener(mouseoverListener);
            }
            setMouseoverListener(google.maps.event.addListener(instance, 'mouseover', onMouseOver));
        }
    }, [onMouseOver]);
    react.useEffect(function () {
        if (instance && onMouseUp) {
            if (mouseupListener !== null) {
                google.maps.event.removeListener(mouseupListener);
            }
            setMouseupListener(google.maps.event.addListener(instance, 'mouseup', onMouseUp));
        }
    }, [onMouseUp]);
    react.useEffect(function () {
        if (instance && onRightClick) {
            if (rightclickListener !== null) {
                google.maps.event.removeListener(rightclickListener);
            }
            setRightclickListener(google.maps.event.addListener(instance, 'rightclick', onRightClick));
        }
    }, [onRightClick]);
    react.useEffect(function () {
        if (instance && onClick) {
            if (clickListener !== null) {
                google.maps.event.removeListener(clickListener);
            }
            setClickListener(google.maps.event.addListener(instance, 'click', onClick));
        }
    }, [onClick]);
    react.useEffect(function () {
        if (instance && onDrag) {
            if (dragListener !== null) {
                google.maps.event.removeListener(dragListener);
            }
            setDragListener(google.maps.event.addListener(instance, 'drag', onDrag));
        }
    }, [onDrag]);
    react.useEffect(function () {
        var polygon = new google.maps.Polygon(__assign(__assign({}, (options || {})), { map: map }));
        if (path) {
            polygon.setPath(path);
        }
        if (paths) {
            polygon.setPaths(paths);
        }
        if (typeof visible !== 'undefined') {
            polygon.setVisible(visible);
        }
        if (typeof editable !== 'undefined') {
            polygon.setEditable(editable);
        }
        if (typeof draggable !== 'undefined') {
            polygon.setDraggable(draggable);
        }
        if (onDblClick) {
            setDblclickListener(google.maps.event.addListener(polygon, 'dblclick', onDblClick));
        }
        if (onDragEnd) {
            setDragendListener(google.maps.event.addListener(polygon, 'dragend', onDragEnd));
        }
        if (onDragStart) {
            setDragstartListener(google.maps.event.addListener(polygon, 'dragstart', onDragStart));
        }
        if (onMouseDown) {
            setMousedownListener(google.maps.event.addListener(polygon, 'mousedown', onMouseDown));
        }
        if (onMouseMove) {
            setMousemoveListener(google.maps.event.addListener(polygon, 'mousemove', onMouseMove));
        }
        if (onMouseOut) {
            setMouseoutListener(google.maps.event.addListener(polygon, 'mouseout', onMouseOut));
        }
        if (onMouseOver) {
            setMouseoverListener(google.maps.event.addListener(polygon, 'mouseover', onMouseOver));
        }
        if (onMouseUp) {
            setMouseupListener(google.maps.event.addListener(polygon, 'mouseup', onMouseUp));
        }
        if (onRightClick) {
            setRightclickListener(google.maps.event.addListener(polygon, 'rightclick', onRightClick));
        }
        if (onClick) {
            setClickListener(google.maps.event.addListener(polygon, 'click', onClick));
        }
        if (onDrag) {
            setDragListener(google.maps.event.addListener(polygon, 'drag', onDrag));
        }
        setInstance(polygon);
        if (onLoad) {
            onLoad(polygon);
        }
        return function () {
            if (dblclickListener !== null) {
                google.maps.event.removeListener(dblclickListener);
            }
            if (dragendListener !== null) {
                google.maps.event.removeListener(dragendListener);
            }
            if (dragstartListener !== null) {
                google.maps.event.removeListener(dragstartListener);
            }
            if (mousedownListener !== null) {
                google.maps.event.removeListener(mousedownListener);
            }
            if (mousemoveListener !== null) {
                google.maps.event.removeListener(mousemoveListener);
            }
            if (mouseoutListener !== null) {
                google.maps.event.removeListener(mouseoutListener);
            }
            if (mouseoverListener !== null) {
                google.maps.event.removeListener(mouseoverListener);
            }
            if (mouseupListener !== null) {
                google.maps.event.removeListener(mouseupListener);
            }
            if (rightclickListener !== null) {
                google.maps.event.removeListener(rightclickListener);
            }
            if (clickListener !== null) {
                google.maps.event.removeListener(clickListener);
            }
            if (onUnmount) {
                onUnmount(polygon);
            }
            polygon.setMap(null);
        };
    }, []);
    return null;
}
var PolygonF = react.memo(PolygonFunctional);
var Polygon = /** @class */ (function (_super) {
    __extends(Polygon, _super);
    function Polygon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.registeredEvents = [];
        _this.state = {
            polygon: null,
        };
        _this.setPolygonCallback = function () {
            if (_this.state.polygon !== null && _this.props.onLoad) {
                _this.props.onLoad(_this.state.polygon);
            }
        };
        return _this;
    }
    Polygon.prototype.componentDidMount = function () {
        var polygon = new google.maps.Polygon(__assign(__assign({}, (this.props.options || {})), { map: this.context }));
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$a,
            eventMap: eventMap$a,
            prevProps: {},
            nextProps: this.props,
            instance: polygon,
        });
        this.setState(function setPolygon() {
            return {
                polygon: polygon,
            };
        }, this.setPolygonCallback);
    };
    Polygon.prototype.componentDidUpdate = function (prevProps) {
        if (this.state.polygon !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$a,
                eventMap: eventMap$a,
                prevProps: prevProps,
                nextProps: this.props,
                instance: this.state.polygon,
            });
        }
    };
    Polygon.prototype.componentWillUnmount = function () {
        if (this.state.polygon !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.polygon);
            }
            unregisterEvents(this.registeredEvents);
            this.state.polygon && this.state.polygon.setMap(null);
        }
    };
    Polygon.prototype.render = function () {
        return null;
    };
    Polygon.contextType = MapContext;
    return Polygon;
}(react.PureComponent));

var eventMap$9 = {
    onBoundsChanged: 'bounds_changed',
    onClick: 'click',
    onDblClick: 'dblclick',
    onDrag: 'drag',
    onDragEnd: 'dragend',
    onDragStart: 'dragstart',
    onMouseDown: 'mousedown',
    onMouseMove: 'mousemove',
    onMouseOut: 'mouseout',
    onMouseOver: 'mouseover',
    onMouseUp: 'mouseup',
    onRightClick: 'rightclick',
};
var updaterMap$9 = {
    bounds: function (instance, bounds) {
        instance.setBounds(bounds);
    },
    draggable: function (instance, draggable) {
        instance.setDraggable(draggable);
    },
    editable: function (instance, editable) {
        instance.setEditable(editable);
    },
    map: function (instance, map) {
        instance.setMap(map);
    },
    options: function (instance, options) {
        instance.setOptions(options);
    },
    visible: function (instance, visible) {
        instance.setVisible(visible);
    },
};
function RectangleFunctional(_a) {
    var options = _a.options, bounds = _a.bounds, draggable = _a.draggable, editable = _a.editable, visible = _a.visible, onDblClick = _a.onDblClick, onDragEnd = _a.onDragEnd, onDragStart = _a.onDragStart, onMouseDown = _a.onMouseDown, onMouseMove = _a.onMouseMove, onMouseOut = _a.onMouseOut, onMouseOver = _a.onMouseOver, onMouseUp = _a.onMouseUp, onRightClick = _a.onRightClick, onClick = _a.onClick, onDrag = _a.onDrag, onBoundsChanged = _a.onBoundsChanged, onLoad = _a.onLoad, onUnmount = _a.onUnmount;
    var map = react.useContext(MapContext);
    var _b = react.useState(null), instance = _b[0], setInstance = _b[1];
    var _c = react.useState(null), dblclickListener = _c[0], setDblclickListener = _c[1];
    var _d = react.useState(null), dragendListener = _d[0], setDragendListener = _d[1];
    var _e = react.useState(null), dragstartListener = _e[0], setDragstartListener = _e[1];
    var _f = react.useState(null), mousedownListener = _f[0], setMousedownListener = _f[1];
    var _g = react.useState(null), mousemoveListener = _g[0], setMousemoveListener = _g[1];
    var _h = react.useState(null), mouseoutListener = _h[0], setMouseoutListener = _h[1];
    var _j = react.useState(null), mouseoverListener = _j[0], setMouseoverListener = _j[1];
    var _k = react.useState(null), mouseupListener = _k[0], setMouseupListener = _k[1];
    var _l = react.useState(null), rightClickListener = _l[0], setRightClickListener = _l[1];
    var _m = react.useState(null), clickListener = _m[0], setClickListener = _m[1];
    var _o = react.useState(null), dragListener = _o[0], setDragListener = _o[1];
    var _p = react.useState(null), boundsChangedListener = _p[0], setBoundsChangedListener = _p[1];
    // Order does matter
    react.useEffect(function () {
        if (instance !== null) {
            instance.setMap(map);
        }
    }, [map]);
    react.useEffect(function () {
        if (typeof options !== 'undefined' && instance !== null) {
            instance.setOptions(options);
        }
    }, [instance, options]);
    react.useEffect(function () {
        if (typeof draggable !== 'undefined' && instance !== null) {
            instance.setDraggable(draggable);
        }
    }, [instance, draggable]);
    react.useEffect(function () {
        if (typeof editable !== 'undefined' && instance !== null) {
            instance.setEditable(editable);
        }
    }, [instance, editable]);
    react.useEffect(function () {
        if (typeof visible !== 'undefined' && instance !== null) {
            instance.setVisible(visible);
        }
    }, [instance, visible]);
    react.useEffect(function () {
        if (typeof bounds !== 'undefined' && instance !== null) {
            instance.setBounds(bounds);
        }
    }, [instance, bounds]);
    react.useEffect(function () {
        if (instance && onDblClick) {
            if (dblclickListener !== null) {
                google.maps.event.removeListener(dblclickListener);
            }
            setDblclickListener(google.maps.event.addListener(instance, 'dblclick', onDblClick));
        }
    }, [onDblClick]);
    react.useEffect(function () {
        if (instance && onDragEnd) {
            if (dragendListener !== null) {
                google.maps.event.removeListener(dragendListener);
            }
            setDragendListener(google.maps.event.addListener(instance, 'dragend', onDragEnd));
        }
    }, [onDragEnd]);
    react.useEffect(function () {
        if (instance && onDragStart) {
            if (dragstartListener !== null) {
                google.maps.event.removeListener(dragstartListener);
            }
            setDragstartListener(google.maps.event.addListener(instance, 'dragstart', onDragStart));
        }
    }, [onDragStart]);
    react.useEffect(function () {
        if (instance && onMouseDown) {
            if (mousedownListener !== null) {
                google.maps.event.removeListener(mousedownListener);
            }
            setMousedownListener(google.maps.event.addListener(instance, 'mousedown', onMouseDown));
        }
    }, [onMouseDown]);
    react.useEffect(function () {
        if (instance && onMouseMove) {
            if (mousemoveListener !== null) {
                google.maps.event.removeListener(mousemoveListener);
            }
            setMousemoveListener(google.maps.event.addListener(instance, 'mousemove', onMouseMove));
        }
    }, [onMouseMove]);
    react.useEffect(function () {
        if (instance && onMouseOut) {
            if (mouseoutListener !== null) {
                google.maps.event.removeListener(mouseoutListener);
            }
            setMouseoutListener(google.maps.event.addListener(instance, 'mouseout', onMouseOut));
        }
    }, [onMouseOut]);
    react.useEffect(function () {
        if (instance && onMouseOver) {
            if (mouseoverListener !== null) {
                google.maps.event.removeListener(mouseoverListener);
            }
            setMouseoverListener(google.maps.event.addListener(instance, 'mouseover', onMouseOver));
        }
    }, [onMouseOver]);
    react.useEffect(function () {
        if (instance && onMouseUp) {
            if (mouseupListener !== null) {
                google.maps.event.removeListener(mouseupListener);
            }
            setMouseupListener(google.maps.event.addListener(instance, 'mouseup', onMouseUp));
        }
    }, [onMouseUp]);
    react.useEffect(function () {
        if (instance && onRightClick) {
            if (rightClickListener !== null) {
                google.maps.event.removeListener(rightClickListener);
            }
            setRightClickListener(google.maps.event.addListener(instance, 'rightclick', onRightClick));
        }
    }, [onRightClick]);
    react.useEffect(function () {
        if (instance && onClick) {
            if (clickListener !== null) {
                google.maps.event.removeListener(clickListener);
            }
            setClickListener(google.maps.event.addListener(instance, 'click', onClick));
        }
    }, [onClick]);
    react.useEffect(function () {
        if (instance && onDrag) {
            if (dragListener !== null) {
                google.maps.event.removeListener(dragListener);
            }
            setDragListener(google.maps.event.addListener(instance, 'drag', onDrag));
        }
    }, [onDrag]);
    react.useEffect(function () {
        if (instance && onBoundsChanged) {
            if (boundsChangedListener !== null) {
                google.maps.event.removeListener(boundsChangedListener);
            }
            setBoundsChangedListener(google.maps.event.addListener(instance, 'bounds_changed', onBoundsChanged));
        }
    }, [onBoundsChanged]);
    react.useEffect(function () {
        var rectangle = new google.maps.Rectangle(__assign(__assign({}, (options || {})), { map: map }));
        if (typeof visible !== 'undefined') {
            rectangle.setVisible(visible);
        }
        if (typeof editable !== 'undefined') {
            rectangle.setEditable(editable);
        }
        if (typeof draggable !== 'undefined') {
            rectangle.setDraggable(draggable);
        }
        if (typeof bounds !== 'undefined') {
            rectangle.setBounds(bounds);
        }
        if (onDblClick) {
            setDblclickListener(google.maps.event.addListener(rectangle, 'dblclick', onDblClick));
        }
        if (onDragEnd) {
            setDragendListener(google.maps.event.addListener(rectangle, 'dragend', onDragEnd));
        }
        if (onDragStart) {
            setDragstartListener(google.maps.event.addListener(rectangle, 'dragstart', onDragStart));
        }
        if (onMouseDown) {
            setMousedownListener(google.maps.event.addListener(rectangle, 'mousedown', onMouseDown));
        }
        if (onMouseMove) {
            setMousemoveListener(google.maps.event.addListener(rectangle, 'mousemove', onMouseMove));
        }
        if (onMouseOut) {
            setMouseoutListener(google.maps.event.addListener(rectangle, 'mouseout', onMouseOut));
        }
        if (onMouseOver) {
            setMouseoverListener(google.maps.event.addListener(rectangle, 'mouseover', onMouseOver));
        }
        if (onMouseUp) {
            setMouseupListener(google.maps.event.addListener(rectangle, 'mouseup', onMouseUp));
        }
        if (onRightClick) {
            setRightClickListener(google.maps.event.addListener(rectangle, 'rightclick', onRightClick));
        }
        if (onClick) {
            setClickListener(google.maps.event.addListener(rectangle, 'click', onClick));
        }
        if (onDrag) {
            setDragListener(google.maps.event.addListener(rectangle, 'drag', onDrag));
        }
        if (onBoundsChanged) {
            setBoundsChangedListener(google.maps.event.addListener(rectangle, 'bounds_changed', onBoundsChanged));
        }
        setInstance(rectangle);
        if (onLoad) {
            onLoad(rectangle);
        }
        return function () {
            if (dblclickListener !== null) {
                google.maps.event.removeListener(dblclickListener);
            }
            if (dragendListener !== null) {
                google.maps.event.removeListener(dragendListener);
            }
            if (dragstartListener !== null) {
                google.maps.event.removeListener(dragstartListener);
            }
            if (mousedownListener !== null) {
                google.maps.event.removeListener(mousedownListener);
            }
            if (mousemoveListener !== null) {
                google.maps.event.removeListener(mousemoveListener);
            }
            if (mouseoutListener !== null) {
                google.maps.event.removeListener(mouseoutListener);
            }
            if (mouseoverListener !== null) {
                google.maps.event.removeListener(mouseoverListener);
            }
            if (mouseupListener !== null) {
                google.maps.event.removeListener(mouseupListener);
            }
            if (rightClickListener !== null) {
                google.maps.event.removeListener(rightClickListener);
            }
            if (clickListener !== null) {
                google.maps.event.removeListener(clickListener);
            }
            if (dragListener !== null) {
                google.maps.event.removeListener(dragListener);
            }
            if (boundsChangedListener !== null) {
                google.maps.event.removeListener(boundsChangedListener);
            }
            if (onUnmount) {
                onUnmount(rectangle);
            }
            rectangle.setMap(null);
        };
    }, []);
    return null;
}
var RectangleF = react.memo(RectangleFunctional);
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.registeredEvents = [];
        _this.state = {
            rectangle: null,
        };
        _this.setRectangleCallback = function () {
            if (_this.state.rectangle !== null && _this.props.onLoad) {
                _this.props.onLoad(_this.state.rectangle);
            }
        };
        return _this;
    }
    Rectangle.prototype.componentDidMount = function () {
        var rectangle = new google.maps.Rectangle(__assign(__assign({}, (this.props.options || {})), { map: this.context }));
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$9,
            eventMap: eventMap$9,
            prevProps: {},
            nextProps: this.props,
            instance: rectangle,
        });
        this.setState(function setRectangle() {
            return {
                rectangle: rectangle,
            };
        }, this.setRectangleCallback);
    };
    Rectangle.prototype.componentDidUpdate = function (prevProps) {
        if (this.state.rectangle !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$9,
                eventMap: eventMap$9,
                prevProps: prevProps,
                nextProps: this.props,
                instance: this.state.rectangle,
            });
        }
    };
    Rectangle.prototype.componentWillUnmount = function () {
        if (this.state.rectangle !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.rectangle);
            }
            unregisterEvents(this.registeredEvents);
            this.state.rectangle.setMap(null);
        }
    };
    Rectangle.prototype.render = function () {
        return null;
    };
    Rectangle.contextType = MapContext;
    return Rectangle;
}(react.PureComponent));

var eventMap$8 = {
    onCenterChanged: 'center_changed',
    onRadiusChanged: 'radius_changed',
    onClick: 'click',
    onDblClick: 'dblclick',
    onDrag: 'drag',
    onDragEnd: 'dragend',
    onDragStart: 'dragstart',
    onMouseDown: 'mousedown',
    onMouseMove: 'mousemove',
    onMouseOut: 'mouseout',
    onMouseOver: 'mouseover',
    onMouseUp: 'mouseup',
    onRightClick: 'rightclick',
};
var updaterMap$8 = {
    center: function (instance, center) {
        instance.setCenter(center);
    },
    draggable: function (instance, draggable) {
        instance.setDraggable(draggable);
    },
    editable: function (instance, editable) {
        instance.setEditable(editable);
    },
    map: function (instance, map) {
        instance.setMap(map);
    },
    options: function (instance, options) {
        instance.setOptions(options);
    },
    radius: function (instance, radius) {
        instance.setRadius(radius);
    },
    visible: function (instance, visible) {
        instance.setVisible(visible);
    },
};
var defaultOptions = {};
function CircleFunctional(_a) {
    var options = _a.options, center = _a.center, radius = _a.radius, draggable = _a.draggable, editable = _a.editable, visible = _a.visible, onDblClick = _a.onDblClick, onDragEnd = _a.onDragEnd, onDragStart = _a.onDragStart, onMouseDown = _a.onMouseDown, onMouseMove = _a.onMouseMove, onMouseOut = _a.onMouseOut, onMouseOver = _a.onMouseOver, onMouseUp = _a.onMouseUp, onRightClick = _a.onRightClick, onClick = _a.onClick, onDrag = _a.onDrag, onCenterChanged = _a.onCenterChanged, onRadiusChanged = _a.onRadiusChanged, onLoad = _a.onLoad, onUnmount = _a.onUnmount;
    var map = react.useContext(MapContext);
    var _b = react.useState(null), instance = _b[0], setInstance = _b[1];
    var _c = react.useState(null), dblclickListener = _c[0], setDblclickListener = _c[1];
    var _d = react.useState(null), dragendListener = _d[0], setDragendListener = _d[1];
    var _e = react.useState(null), dragstartListener = _e[0], setDragstartListener = _e[1];
    var _f = react.useState(null), mousedownListener = _f[0], setMousedownListener = _f[1];
    var _g = react.useState(null), mousemoveListener = _g[0], setMousemoveListener = _g[1];
    var _h = react.useState(null), mouseoutListener = _h[0], setMouseoutListener = _h[1];
    var _j = react.useState(null), mouseoverListener = _j[0], setMouseoverListener = _j[1];
    var _k = react.useState(null), mouseupListener = _k[0], setMouseupListener = _k[1];
    var _l = react.useState(null), rightclickListener = _l[0], setRightclickListener = _l[1];
    var _m = react.useState(null), clickListener = _m[0], setClickListener = _m[1];
    var _o = react.useState(null), dragListener = _o[0], setDragListener = _o[1];
    var _p = react.useState(null), centerChangedListener = _p[0], setCenterChangedListener = _p[1];
    var _q = react.useState(null), radiusChangedListener = _q[0], setRadiusChangedListener = _q[1];
    // Order does matter
    react.useEffect(function () {
        if (instance !== null) {
            instance.setMap(map);
        }
    }, [map]);
    react.useEffect(function () {
        if (typeof options !== 'undefined' && instance !== null) {
            instance.setOptions(options);
        }
    }, [instance, options]);
    react.useEffect(function () {
        if (typeof draggable !== 'undefined' && instance !== null) {
            instance.setDraggable(draggable);
        }
    }, [instance, draggable]);
    react.useEffect(function () {
        if (typeof editable !== 'undefined' && instance !== null) {
            instance.setEditable(editable);
        }
    }, [instance, editable]);
    react.useEffect(function () {
        if (typeof visible !== 'undefined' && instance !== null) {
            instance.setVisible(visible);
        }
    }, [instance, visible]);
    react.useEffect(function () {
        if (typeof radius === 'number' && instance !== null) {
            instance.setRadius(radius);
        }
    }, [instance, radius]);
    react.useEffect(function () {
        if (typeof center !== 'undefined' && instance !== null) {
            instance.setCenter(center);
        }
    }, [instance, center]);
    react.useEffect(function () {
        if (instance && onDblClick) {
            if (dblclickListener !== null) {
                google.maps.event.removeListener(dblclickListener);
            }
            setDblclickListener(google.maps.event.addListener(instance, 'dblclick', onDblClick));
        }
    }, [onDblClick]);
    react.useEffect(function () {
        if (instance && onDragEnd) {
            if (dragendListener !== null) {
                google.maps.event.removeListener(dragendListener);
            }
            setDragendListener(google.maps.event.addListener(instance, 'dragend', onDragEnd));
        }
    }, [onDragEnd]);
    react.useEffect(function () {
        if (instance && onDragStart) {
            if (dragstartListener !== null) {
                google.maps.event.removeListener(dragstartListener);
            }
            setDragstartListener(google.maps.event.addListener(instance, 'dragstart', onDragStart));
        }
    }, [onDragStart]);
    react.useEffect(function () {
        if (instance && onMouseDown) {
            if (mousedownListener !== null) {
                google.maps.event.removeListener(mousedownListener);
            }
            setMousedownListener(google.maps.event.addListener(instance, 'mousedown', onMouseDown));
        }
    }, [onMouseDown]);
    react.useEffect(function () {
        if (instance && onMouseMove) {
            if (mousemoveListener !== null) {
                google.maps.event.removeListener(mousemoveListener);
            }
            setMousemoveListener(google.maps.event.addListener(instance, 'mousemove', onMouseMove));
        }
    }, [onMouseMove]);
    react.useEffect(function () {
        if (instance && onMouseOut) {
            if (mouseoutListener !== null) {
                google.maps.event.removeListener(mouseoutListener);
            }
            setMouseoutListener(google.maps.event.addListener(instance, 'mouseout', onMouseOut));
        }
    }, [onMouseOut]);
    react.useEffect(function () {
        if (instance && onMouseOver) {
            if (mouseoverListener !== null) {
                google.maps.event.removeListener(mouseoverListener);
            }
            setMouseoverListener(google.maps.event.addListener(instance, 'mouseover', onMouseOver));
        }
    }, [onMouseOver]);
    react.useEffect(function () {
        if (instance && onMouseUp) {
            if (mouseupListener !== null) {
                google.maps.event.removeListener(mouseupListener);
            }
            setMouseupListener(google.maps.event.addListener(instance, 'mouseup', onMouseUp));
        }
    }, [onMouseUp]);
    react.useEffect(function () {
        if (instance && onRightClick) {
            if (rightclickListener !== null) {
                google.maps.event.removeListener(rightclickListener);
            }
            setRightclickListener(google.maps.event.addListener(instance, 'rightclick', onRightClick));
        }
    }, [onRightClick]);
    react.useEffect(function () {
        if (instance && onClick) {
            if (clickListener !== null) {
                google.maps.event.removeListener(clickListener);
            }
            setClickListener(google.maps.event.addListener(instance, 'click', onClick));
        }
    }, [onClick]);
    react.useEffect(function () {
        if (instance && onDrag) {
            if (dragListener !== null) {
                google.maps.event.removeListener(dragListener);
            }
            setDragListener(google.maps.event.addListener(instance, 'drag', onDrag));
        }
    }, [onDrag]);
    react.useEffect(function () {
        if (instance && onCenterChanged) {
            if (centerChangedListener !== null) {
                google.maps.event.removeListener(centerChangedListener);
            }
            setCenterChangedListener(google.maps.event.addListener(instance, 'center_changed', onCenterChanged));
        }
    }, [onClick]);
    react.useEffect(function () {
        if (instance && onRadiusChanged) {
            if (radiusChangedListener !== null) {
                google.maps.event.removeListener(radiusChangedListener);
            }
            setRadiusChangedListener(google.maps.event.addListener(instance, 'radius_changed', onRadiusChanged));
        }
    }, [onRadiusChanged]);
    react.useEffect(function () {
        var circle = new google.maps.Circle(__assign(__assign({}, (options || defaultOptions)), { map: map }));
        if (typeof radius === 'number') {
            circle.setRadius(radius);
        }
        if (typeof center !== 'undefined') {
            circle.setCenter(center);
        }
        if (typeof radius === 'number') {
            circle.setRadius(radius);
        }
        if (typeof visible !== 'undefined') {
            circle.setVisible(visible);
        }
        if (typeof editable !== 'undefined') {
            circle.setEditable(editable);
        }
        if (typeof draggable !== 'undefined') {
            circle.setDraggable(draggable);
        }
        if (onDblClick) {
            setDblclickListener(google.maps.event.addListener(circle, 'dblclick', onDblClick));
        }
        if (onDragEnd) {
            setDragendListener(google.maps.event.addListener(circle, 'dragend', onDragEnd));
        }
        if (onDragStart) {
            setDragstartListener(google.maps.event.addListener(circle, 'dragstart', onDragStart));
        }
        if (onMouseDown) {
            setMousedownListener(google.maps.event.addListener(circle, 'mousedown', onMouseDown));
        }
        if (onMouseMove) {
            setMousemoveListener(google.maps.event.addListener(circle, 'mousemove', onMouseMove));
        }
        if (onMouseOut) {
            setMouseoutListener(google.maps.event.addListener(circle, 'mouseout', onMouseOut));
        }
        if (onMouseOver) {
            setMouseoverListener(google.maps.event.addListener(circle, 'mouseover', onMouseOver));
        }
        if (onMouseUp) {
            setMouseupListener(google.maps.event.addListener(circle, 'mouseup', onMouseUp));
        }
        if (onRightClick) {
            setRightclickListener(google.maps.event.addListener(circle, 'rightclick', onRightClick));
        }
        if (onClick) {
            setClickListener(google.maps.event.addListener(circle, 'click', onClick));
        }
        if (onDrag) {
            setDragListener(google.maps.event.addListener(circle, 'drag', onDrag));
        }
        if (onCenterChanged) {
            setCenterChangedListener(google.maps.event.addListener(circle, 'center_changed', onCenterChanged));
        }
        if (onRadiusChanged) {
            setRadiusChangedListener(google.maps.event.addListener(circle, 'radius_changed', onRadiusChanged));
        }
        setInstance(circle);
        if (onLoad) {
            onLoad(circle);
        }
        return function () {
            if (dblclickListener !== null) {
                google.maps.event.removeListener(dblclickListener);
            }
            if (dragendListener !== null) {
                google.maps.event.removeListener(dragendListener);
            }
            if (dragstartListener !== null) {
                google.maps.event.removeListener(dragstartListener);
            }
            if (mousedownListener !== null) {
                google.maps.event.removeListener(mousedownListener);
            }
            if (mousemoveListener !== null) {
                google.maps.event.removeListener(mousemoveListener);
            }
            if (mouseoutListener !== null) {
                google.maps.event.removeListener(mouseoutListener);
            }
            if (mouseoverListener !== null) {
                google.maps.event.removeListener(mouseoverListener);
            }
            if (mouseupListener !== null) {
                google.maps.event.removeListener(mouseupListener);
            }
            if (rightclickListener !== null) {
                google.maps.event.removeListener(rightclickListener);
            }
            if (clickListener !== null) {
                google.maps.event.removeListener(clickListener);
            }
            if (centerChangedListener !== null) {
                google.maps.event.removeListener(centerChangedListener);
            }
            if (radiusChangedListener !== null) {
                google.maps.event.removeListener(radiusChangedListener);
            }
            if (onUnmount) {
                onUnmount(circle);
            }
            circle.setMap(null);
        };
    }, []);
    return null;
}
var CircleF = react.memo(CircleFunctional);
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.registeredEvents = [];
        _this.state = {
            circle: null,
        };
        _this.setCircleCallback = function () {
            if (_this.state.circle !== null && _this.props.onLoad) {
                _this.props.onLoad(_this.state.circle);
            }
        };
        return _this;
    }
    Circle.prototype.componentDidMount = function () {
        var circle = new google.maps.Circle(__assign(__assign({}, (this.props.options || {})), { map: this.context }));
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$8,
            eventMap: eventMap$8,
            prevProps: {},
            nextProps: this.props,
            instance: circle,
        });
        this.setState(function setCircle() {
            return {
                circle: circle,
            };
        }, this.setCircleCallback);
    };
    Circle.prototype.componentDidUpdate = function (prevProps) {
        if (this.state.circle !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$8,
                eventMap: eventMap$8,
                prevProps: prevProps,
                nextProps: this.props,
                instance: this.state.circle,
            });
        }
    };
    Circle.prototype.componentWillUnmount = function () {
        var _a;
        if (this.state.circle !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.circle);
            }
            unregisterEvents(this.registeredEvents);
            (_a = this.state.circle) === null || _a === void 0 ? void 0 : _a.setMap(null);
        }
    };
    Circle.prototype.render = function () {
        return null;
    };
    Circle.contextType = MapContext;
    return Circle;
}(react.PureComponent));

var eventMap$7 = {
    onClick: 'click',
    onDblClick: 'dblclick',
    onMouseDown: 'mousedown',
    onMouseOut: 'mouseout',
    onMouseOver: 'mouseover',
    onMouseUp: 'mouseup',
    onRightClick: 'rightclick',
    onAddFeature: 'addfeature',
    onRemoveFeature: 'removefeature',
    onRemoveProperty: 'removeproperty',
    onSetGeometry: 'setgeometry',
    onSetProperty: 'setproperty',
};
var updaterMap$7 = {
    add: function (instance, feature) {
        instance.add(feature);
    },
    addgeojson: function (instance, geojson, options) {
        instance.addGeoJson(geojson, options);
    },
    contains: function (instance, feature) {
        instance.contains(feature);
    },
    foreach: function (instance, callback) {
        instance.forEach(callback);
    },
    loadgeojson: function (instance, url, options, callback) {
        instance.loadGeoJson(url, options, callback);
    },
    overridestyle: function (instance, feature, style) {
        instance.overrideStyle(feature, style);
    },
    remove: function (instance, feature) {
        instance.remove(feature);
    },
    revertstyle: function (instance, feature) {
        instance.revertStyle(feature);
    },
    controlposition: function (instance, controlPosition) {
        instance.setControlPosition(controlPosition);
    },
    controls: function (instance, controls) {
        instance.setControls(controls);
    },
    drawingmode: function (instance, mode) {
        instance.setDrawingMode(mode);
    },
    map: function (instance, map) {
        instance.setMap(map);
    },
    style: function (instance, style) {
        instance.setStyle(style);
    },
    togeojson: function (instance, callback) {
        instance.toGeoJson(callback);
    },
};
function DataFunctional(_a) {
    var options = _a.options, onClick = _a.onClick, onDblClick = _a.onDblClick, onMouseDown = _a.onMouseDown, onMouseMove = _a.onMouseMove, onMouseOut = _a.onMouseOut, onMouseOver = _a.onMouseOver, onMouseUp = _a.onMouseUp, onRightClick = _a.onRightClick, onAddFeature = _a.onAddFeature, onRemoveFeature = _a.onRemoveFeature, onRemoveProperty = _a.onRemoveProperty, onSetGeometry = _a.onSetGeometry, onSetProperty = _a.onSetProperty, onLoad = _a.onLoad, onUnmount = _a.onUnmount;
    var map = react.useContext(MapContext);
    var _b = react.useState(null), instance = _b[0], setInstance = _b[1];
    var _c = react.useState(null), dblclickListener = _c[0], setDblclickListener = _c[1];
    var _d = react.useState(null), mousedownListener = _d[0], setMousedownListener = _d[1];
    var _e = react.useState(null), mousemoveListener = _e[0], setMousemoveListener = _e[1];
    var _f = react.useState(null), mouseoutListener = _f[0], setMouseoutListener = _f[1];
    var _g = react.useState(null), mouseoverListener = _g[0], setMouseoverListener = _g[1];
    var _h = react.useState(null), mouseupListener = _h[0], setMouseupListener = _h[1];
    var _j = react.useState(null), rightclickListener = _j[0], setRightclickListener = _j[1];
    var _k = react.useState(null), clickListener = _k[0], setClickListener = _k[1];
    var _l = react.useState(null), addFeatureListener = _l[0], setAddFeatureListener = _l[1];
    var _m = react.useState(null), removeFeatureListener = _m[0], setRemoveFeatureListener = _m[1];
    var _o = react.useState(null), removePropertyListener = _o[0], setRemovePropertyListener = _o[1];
    var _p = react.useState(null), setGeometryListener = _p[0], setSetGeometryListener = _p[1];
    var _q = react.useState(null), setPropertyListener = _q[0], setSetPropertyListener = _q[1];
    // Order does matter
    react.useEffect(function () {
        if (instance !== null) {
            instance.setMap(map);
        }
    }, [map]);
    react.useEffect(function () {
        if (instance && onDblClick) {
            if (dblclickListener !== null) {
                google.maps.event.removeListener(dblclickListener);
            }
            setDblclickListener(google.maps.event.addListener(instance, 'dblclick', onDblClick));
        }
    }, [onDblClick]);
    react.useEffect(function () {
        if (instance && onMouseDown) {
            if (mousedownListener !== null) {
                google.maps.event.removeListener(mousedownListener);
            }
            setMousedownListener(google.maps.event.addListener(instance, 'mousedown', onMouseDown));
        }
    }, [onMouseDown]);
    react.useEffect(function () {
        if (instance && onMouseMove) {
            if (mousemoveListener !== null) {
                google.maps.event.removeListener(mousemoveListener);
            }
            setMousemoveListener(google.maps.event.addListener(instance, 'mousemove', onMouseMove));
        }
    }, [onMouseMove]);
    react.useEffect(function () {
        if (instance && onMouseOut) {
            if (mouseoutListener !== null) {
                google.maps.event.removeListener(mouseoutListener);
            }
            setMouseoutListener(google.maps.event.addListener(instance, 'mouseout', onMouseOut));
        }
    }, [onMouseOut]);
    react.useEffect(function () {
        if (instance && onMouseOver) {
            if (mouseoverListener !== null) {
                google.maps.event.removeListener(mouseoverListener);
            }
            setMouseoverListener(google.maps.event.addListener(instance, 'mouseover', onMouseOver));
        }
    }, [onMouseOver]);
    react.useEffect(function () {
        if (instance && onMouseUp) {
            if (mouseupListener !== null) {
                google.maps.event.removeListener(mouseupListener);
            }
            setMouseupListener(google.maps.event.addListener(instance, 'mouseup', onMouseUp));
        }
    }, [onMouseUp]);
    react.useEffect(function () {
        if (instance && onRightClick) {
            if (rightclickListener !== null) {
                google.maps.event.removeListener(rightclickListener);
            }
            setRightclickListener(google.maps.event.addListener(instance, 'rightclick', onRightClick));
        }
    }, [onRightClick]);
    react.useEffect(function () {
        if (instance && onClick) {
            if (clickListener !== null) {
                google.maps.event.removeListener(clickListener);
            }
            setClickListener(google.maps.event.addListener(instance, 'click', onClick));
        }
    }, [onClick]);
    react.useEffect(function () {
        if (instance && onAddFeature) {
            if (addFeatureListener !== null) {
                google.maps.event.removeListener(addFeatureListener);
            }
            setAddFeatureListener(google.maps.event.addListener(instance, 'addfeature', onAddFeature));
        }
    }, [onAddFeature]);
    react.useEffect(function () {
        if (instance && onRemoveFeature) {
            if (removeFeatureListener !== null) {
                google.maps.event.removeListener(removeFeatureListener);
            }
            setRemoveFeatureListener(google.maps.event.addListener(instance, 'removefeature', onRemoveFeature));
        }
    }, [onRemoveFeature]);
    react.useEffect(function () {
        if (instance && onRemoveProperty) {
            if (removePropertyListener !== null) {
                google.maps.event.removeListener(removePropertyListener);
            }
            setRemovePropertyListener(google.maps.event.addListener(instance, 'removeproperty', onRemoveProperty));
        }
    }, [onRemoveProperty]);
    react.useEffect(function () {
        if (instance && onSetGeometry) {
            if (setGeometryListener !== null) {
                google.maps.event.removeListener(setGeometryListener);
            }
            setSetGeometryListener(google.maps.event.addListener(instance, 'setgeometry', onSetGeometry));
        }
    }, [onSetGeometry]);
    react.useEffect(function () {
        if (instance && onSetProperty) {
            if (setPropertyListener !== null) {
                google.maps.event.removeListener(setPropertyListener);
            }
            setSetPropertyListener(google.maps.event.addListener(instance, 'setproperty', onSetProperty));
        }
    }, [onSetProperty]);
    react.useEffect(function () {
        if (map !== null) {
            var data = new google.maps.Data(__assign(__assign({}, (options || {})), { map: map }));
            if (onDblClick) {
                setDblclickListener(google.maps.event.addListener(data, 'dblclick', onDblClick));
            }
            if (onMouseDown) {
                setMousedownListener(google.maps.event.addListener(data, 'mousedown', onMouseDown));
            }
            if (onMouseMove) {
                setMousemoveListener(google.maps.event.addListener(data, 'mousemove', onMouseMove));
            }
            if (onMouseOut) {
                setMouseoutListener(google.maps.event.addListener(data, 'mouseout', onMouseOut));
            }
            if (onMouseOver) {
                setMouseoverListener(google.maps.event.addListener(data, 'mouseover', onMouseOver));
            }
            if (onMouseUp) {
                setMouseupListener(google.maps.event.addListener(data, 'mouseup', onMouseUp));
            }
            if (onRightClick) {
                setRightclickListener(google.maps.event.addListener(data, 'rightclick', onRightClick));
            }
            if (onClick) {
                setClickListener(google.maps.event.addListener(data, 'click', onClick));
            }
            if (onAddFeature) {
                setAddFeatureListener(google.maps.event.addListener(data, 'addfeature', onAddFeature));
            }
            if (onRemoveFeature) {
                setRemoveFeatureListener(google.maps.event.addListener(data, 'removefeature', onRemoveFeature));
            }
            if (onRemoveProperty) {
                setRemovePropertyListener(google.maps.event.addListener(data, 'removeproperty', onRemoveProperty));
            }
            if (onSetGeometry) {
                setSetGeometryListener(google.maps.event.addListener(data, 'setgeometry', onSetGeometry));
            }
            if (onSetProperty) {
                setSetPropertyListener(google.maps.event.addListener(data, 'setproperty', onSetProperty));
            }
            setInstance(data);
            if (onLoad) {
                onLoad(data);
            }
        }
        return function () {
            if (instance) {
                if (dblclickListener !== null) {
                    google.maps.event.removeListener(dblclickListener);
                }
                if (mousedownListener !== null) {
                    google.maps.event.removeListener(mousedownListener);
                }
                if (mousemoveListener !== null) {
                    google.maps.event.removeListener(mousemoveListener);
                }
                if (mouseoutListener !== null) {
                    google.maps.event.removeListener(mouseoutListener);
                }
                if (mouseoverListener !== null) {
                    google.maps.event.removeListener(mouseoverListener);
                }
                if (mouseupListener !== null) {
                    google.maps.event.removeListener(mouseupListener);
                }
                if (rightclickListener !== null) {
                    google.maps.event.removeListener(rightclickListener);
                }
                if (clickListener !== null) {
                    google.maps.event.removeListener(clickListener);
                }
                if (addFeatureListener !== null) {
                    google.maps.event.removeListener(addFeatureListener);
                }
                if (removeFeatureListener !== null) {
                    google.maps.event.removeListener(removeFeatureListener);
                }
                if (removePropertyListener !== null) {
                    google.maps.event.removeListener(removePropertyListener);
                }
                if (setGeometryListener !== null) {
                    google.maps.event.removeListener(setGeometryListener);
                }
                if (setPropertyListener !== null) {
                    google.maps.event.removeListener(setPropertyListener);
                }
                if (onUnmount) {
                    onUnmount(instance);
                }
                instance.setMap(null);
            }
        };
    }, []);
    return null;
}
var DataF = react.memo(DataFunctional);
var Data = /** @class */ (function (_super) {
    __extends(Data, _super);
    function Data() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.registeredEvents = [];
        _this.state = {
            data: null,
        };
        _this.setDataCallback = function () {
            if (_this.state.data !== null && _this.props.onLoad) {
                _this.props.onLoad(_this.state.data);
            }
        };
        return _this;
    }
    Data.prototype.componentDidMount = function () {
        if (this.context !== null) {
            var data_1 = new google.maps.Data(__assign(__assign({}, (this.props.options || {})), { map: this.context }));
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$7,
                eventMap: eventMap$7,
                prevProps: {},
                nextProps: this.props,
                instance: data_1,
            });
            this.setState(function () {
                return {
                    data: data_1,
                };
            }, this.setDataCallback);
        }
    };
    Data.prototype.componentDidUpdate = function (prevProps) {
        if (this.state.data !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$7,
                eventMap: eventMap$7,
                prevProps: prevProps,
                nextProps: this.props,
                instance: this.state.data,
            });
        }
    };
    Data.prototype.componentWillUnmount = function () {
        if (this.state.data !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.data);
            }
            unregisterEvents(this.registeredEvents);
            if (this.state.data) {
                this.state.data.setMap(null);
            }
        }
    };
    Data.prototype.render = function () {
        return null;
    };
    Data.contextType = MapContext;
    return Data;
}(react.PureComponent));

var eventMap$6 = {
    onClick: 'click',
    onDefaultViewportChanged: 'defaultviewport_changed',
    onStatusChanged: 'status_changed',
};
var updaterMap$6 = {
    options: function (instance, options) {
        instance.setOptions(options);
    },
    url: function (instance, url) {
        instance.setUrl(url);
    },
    zIndex: function (instance, zIndex) {
        instance.setZIndex(zIndex);
    },
};
var KmlLayer = /** @class */ (function (_super) {
    __extends(KmlLayer, _super);
    function KmlLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.registeredEvents = [];
        _this.state = {
            kmlLayer: null,
        };
        _this.setKmlLayerCallback = function () {
            if (_this.state.kmlLayer !== null && _this.props.onLoad) {
                _this.props.onLoad(_this.state.kmlLayer);
            }
        };
        return _this;
    }
    KmlLayer.prototype.componentDidMount = function () {
        var kmlLayer = new google.maps.KmlLayer(__assign(__assign({}, this.props.options), { map: this.context }));
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$6,
            eventMap: eventMap$6,
            prevProps: {},
            nextProps: this.props,
            instance: kmlLayer,
        });
        this.setState(function setLmlLayer() {
            return {
                kmlLayer: kmlLayer,
            };
        }, this.setKmlLayerCallback);
    };
    KmlLayer.prototype.componentDidUpdate = function (prevProps) {
        if (this.state.kmlLayer !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$6,
                eventMap: eventMap$6,
                prevProps: prevProps,
                nextProps: this.props,
                instance: this.state.kmlLayer,
            });
        }
    };
    KmlLayer.prototype.componentWillUnmount = function () {
        if (this.state.kmlLayer !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.kmlLayer);
            }
            unregisterEvents(this.registeredEvents);
            this.state.kmlLayer.setMap(null);
        }
    };
    KmlLayer.prototype.render = function () {
        return null;
    };
    KmlLayer.contextType = MapContext;
    return KmlLayer;
}(react.PureComponent));

function getOffsetOverride(containerElement, getPixelPositionOffset) {
    return typeof getPixelPositionOffset === 'function'
        ? getPixelPositionOffset(containerElement.offsetWidth, containerElement.offsetHeight)
        : {
            x: 0,
            y: 0,
        };
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createLatLng(inst, Type) { return new Type(inst.lat, inst.lng); }
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createLatLngBounds(inst, Type) {
    return new Type(new google.maps.LatLng(inst.ne.lat, inst.ne.lng), new google.maps.LatLng(inst.sw.lat, inst.sw.lng));
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ensureOfType(inst, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
factory
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) {
    return inst instanceof type ? inst : factory(inst, type);
}
function ensureOfTypeBounds(inst, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
factory
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) {
    return inst instanceof type ? inst : factory(inst, type);
}
function getLayoutStylesByBounds(mapCanvasProjection, offset, bounds) {
    var ne = mapCanvasProjection && mapCanvasProjection.fromLatLngToDivPixel(bounds.getNorthEast());
    var sw = mapCanvasProjection && mapCanvasProjection.fromLatLngToDivPixel(bounds.getSouthWest());
    if (ne && sw) {
        return {
            left: "".concat(sw.x + offset.x, "px"),
            top: "".concat(ne.y + offset.y, "px"),
            width: "".concat(ne.x - sw.x - offset.x, "px"),
            height: "".concat(sw.y - ne.y - offset.y, "px"),
        };
    }
    return {
        left: '-9999px',
        top: '-9999px',
    };
}
function getLayoutStylesByPosition(mapCanvasProjection, offset, position) {
    var point = mapCanvasProjection && mapCanvasProjection.fromLatLngToDivPixel(position);
    if (point) {
        var x = point.x, y = point.y;
        return {
            left: "".concat(x + offset.x, "px"),
            top: "".concat(y + offset.y, "px"),
        };
    }
    return {
        left: '-9999px',
        top: '-9999px',
    };
}
function getLayoutStyles(mapCanvasProjection, offset, bounds, position) {
    return bounds !== undefined
        ? getLayoutStylesByBounds(mapCanvasProjection, offset, ensureOfTypeBounds(bounds, google.maps.LatLngBounds, createLatLngBounds))
        : getLayoutStylesByPosition(mapCanvasProjection, offset, ensureOfType(position, google.maps.LatLng, createLatLng));
}
function arePositionsEqual(currentPosition, previousPosition) {
    return currentPosition.left === previousPosition.left
        && currentPosition.top === previousPosition.top
        && currentPosition.width === previousPosition.height
        && currentPosition.height === previousPosition.height;
}

function createOverlay(container, pane, position, bounds, getPixelPositionOffset) {
    var Overlay = /** @class */ (function (_super) {
        __extends(Overlay, _super);
        function Overlay(container, pane, position, bounds) {
            var _this = _super.call(this) || this;
            _this.container = container;
            _this.pane = pane;
            _this.position = position;
            _this.bounds = bounds;
            return _this;
        }
        Overlay.prototype.onAdd = function () {
            var _a;
            var pane = (_a = this.getPanes()) === null || _a === void 0 ? void 0 : _a[this.pane];
            pane === null || pane === void 0 ? void 0 : pane.appendChild(this.container);
        };
        Overlay.prototype.draw = function () {
            var projection = this.getProjection();
            var offset = __assign({}, (this.container
                ? getOffsetOverride(this.container, getPixelPositionOffset)
                : {
                    x: 0,
                    y: 0,
                }));
            var layoutStyles = getLayoutStyles(projection, offset, this.bounds, this.position);
            for (var _i = 0, _a = Object.entries(layoutStyles); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                this.container.style[key] = value;
            }
        };
        Overlay.prototype.onRemove = function () {
            if (this.container.parentNode !== null) {
                this.container.parentNode.removeChild(this.container);
            }
        };
        return Overlay;
    }(google.maps.OverlayView));
    return new Overlay(container, pane, position, bounds);
}

function convertToLatLngString(latLngLike) {
    if (!latLngLike) {
        return '';
    }
    var latLng = latLngLike instanceof google.maps.LatLng
        ? latLngLike
        : new google.maps.LatLng(latLngLike.lat, latLngLike.lng);
    return latLng + '';
}
function convertToLatLngBoundsString(latLngBoundsLike) {
    if (!latLngBoundsLike) {
        return '';
    }
    var latLngBounds = latLngBoundsLike instanceof google.maps.LatLngBounds
        ? latLngBoundsLike
        : new google.maps.LatLngBounds(new google.maps.LatLng(latLngBoundsLike.south, latLngBoundsLike.east), new google.maps.LatLng(latLngBoundsLike.north, latLngBoundsLike.west));
    return latLngBounds + '';
}
var FLOAT_PANE = "floatPane";
var MAP_PANE = "mapPane";
var MARKER_LAYER = "markerLayer";
var OVERLAY_LAYER = "overlayLayer";
var OVERLAY_MOUSE_TARGET = "overlayMouseTarget";
function OverlayViewFunctional(_a) {
    var position = _a.position, bounds = _a.bounds, mapPaneName = _a.mapPaneName, zIndex = _a.zIndex, onLoad = _a.onLoad, onUnmount = _a.onUnmount, getPixelPositionOffset = _a.getPixelPositionOffset, children = _a.children;
    var map = react.useContext(MapContext);
    var container = react.useMemo(function () {
        var div = document.createElement('div');
        div.style.position = 'absolute';
        return div;
    }, []);
    var overlay = react.useMemo(function () {
        return createOverlay(container, mapPaneName, position, bounds, getPixelPositionOffset);
    }, [container, mapPaneName, position, bounds]);
    react.useEffect(function () {
        onLoad === null || onLoad === void 0 ? void 0 : onLoad(overlay);
        overlay === null || overlay === void 0 ? void 0 : overlay.setMap(map);
        return function () {
            onUnmount === null || onUnmount === void 0 ? void 0 : onUnmount(overlay);
            overlay === null || overlay === void 0 ? void 0 : overlay.setMap(null);
        };
    }, [map, overlay]);
    // to move the container to the foreground and background
    react.useEffect(function () {
        container.style.zIndex = "".concat(zIndex);
    }, [zIndex, container]);
    return ReactDOM__namespace.createPortal(children, container);
}
var OverlayViewF = react.memo(OverlayViewFunctional);
var OverlayView = /** @class */ (function (_super) {
    __extends(OverlayView, _super);
    function OverlayView(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            paneEl: null,
            containerStyle: {
                // set initial position
                position: 'absolute',
            },
        };
        _this.updatePane = function () {
            var mapPaneName = _this.props.mapPaneName;
            // https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapPanes
            var mapPanes = _this.overlayView.getPanes();
            invariant$1(!!mapPaneName, "OverlayView requires props.mapPaneName but got %s", mapPaneName);
            if (mapPanes) {
                _this.setState({
                    paneEl: mapPanes[mapPaneName],
                });
            }
            else {
                _this.setState({
                    paneEl: null,
                });
            }
        };
        _this.onAdd = function () {
            var _a, _b;
            _this.updatePane();
            (_b = (_a = _this.props).onLoad) === null || _b === void 0 ? void 0 : _b.call(_a, _this.overlayView);
        };
        _this.onPositionElement = function () {
            var _a;
            var mapCanvasProjection = _this.overlayView.getProjection();
            var offset = __assign({ x: 0, y: 0 }, (_this.containerRef.current
                ? getOffsetOverride(_this.containerRef.current, _this.props.getPixelPositionOffset)
                : {}));
            var layoutStyles = getLayoutStyles(mapCanvasProjection, offset, _this.props.bounds, _this.props.position);
            var left = (_a = _this.state.containerStyle, _a.left), top = _a.top, width = _a.width, height = _a.height;
            if (!arePositionsEqual(layoutStyles, { left: left, top: top, width: width, height: height })) {
                _this.setState({
                    containerStyle: {
                        top: layoutStyles.top || 0,
                        left: layoutStyles.left || 0,
                        width: layoutStyles.width || 0,
                        height: layoutStyles.height || 0,
                        position: 'absolute',
                    },
                });
            }
        };
        _this.draw = function () {
            _this.onPositionElement();
        };
        _this.onRemove = function () {
            var _a, _b;
            _this.setState(function () { return ({
                paneEl: null,
            }); });
            (_b = (_a = _this.props).onUnmount) === null || _b === void 0 ? void 0 : _b.call(_a, _this.overlayView);
        };
        _this.containerRef = react.createRef();
        // You must implement three methods: onAdd(), draw(), and onRemove().
        var overlayView = new google.maps.OverlayView();
        overlayView.onAdd = _this.onAdd;
        overlayView.draw = _this.draw;
        overlayView.onRemove = _this.onRemove;
        _this.overlayView = overlayView;
        return _this;
    }
    OverlayView.prototype.componentDidMount = function () {
        this.overlayView.setMap(this.context);
    };
    OverlayView.prototype.componentDidUpdate = function (prevProps) {
        var prevPositionString = convertToLatLngString(prevProps.position);
        var positionString = convertToLatLngString(this.props.position);
        var prevBoundsString = convertToLatLngBoundsString(prevProps.bounds);
        var boundsString = convertToLatLngBoundsString(this.props.bounds);
        if (prevPositionString !== positionString ||
            prevBoundsString !== boundsString) {
            this.overlayView.draw();
        }
        if (prevProps.mapPaneName !== this.props.mapPaneName) {
            this.updatePane();
        }
    };
    OverlayView.prototype.componentWillUnmount = function () {
        this.overlayView.setMap(null);
    };
    OverlayView.prototype.render = function () {
        var paneEl = this.state.paneEl;
        if (paneEl) {
            return ReactDOM__namespace.createPortal(jsxRuntime.jsx("div", { ref: this.containerRef, style: this.state.containerStyle, children: react.Children.only(this.props.children) }), paneEl);
        }
        else {
            return null;
        }
    };
    OverlayView.FLOAT_PANE = "floatPane";
    OverlayView.MAP_PANE = "mapPane";
    OverlayView.MARKER_LAYER = "markerLayer";
    OverlayView.OVERLAY_LAYER = "overlayLayer";
    OverlayView.OVERLAY_MOUSE_TARGET = "overlayMouseTarget";
    OverlayView.contextType = MapContext;
    return OverlayView;
}(react.PureComponent));

function noop() { return; }

var eventMap$5 = {
    onDblClick: 'dblclick',
    onClick: 'click',
};
var updaterMap$5 = {
    opacity: function (instance, opacity) {
        instance.setOpacity(opacity);
    },
};
function GroundOverlayFunctional(_a) {
    var url = _a.url, bounds = _a.bounds, options = _a.options, visible = _a.visible;
    var map = react.useContext(MapContext);
    var imageBounds = new google.maps.LatLngBounds(new google.maps.LatLng(bounds.south, bounds.west), new google.maps.LatLng(bounds.north, bounds.east));
    var groundOverlay = react.useMemo(function () {
        var overlay = new google.maps.GroundOverlay(url, imageBounds, __assign({}, options));
        return overlay;
    }, []);
    react.useEffect(function () {
        if (groundOverlay !== null) {
            groundOverlay.setMap(map);
        }
    }, [map]);
    react.useEffect(function () {
        if (typeof url !== 'undefined' && groundOverlay !== null) {
            groundOverlay.set("url", url);
            groundOverlay.setMap(map);
        }
    }, [groundOverlay, url]);
    react.useEffect(function () {
        if (typeof visible !== 'undefined' && groundOverlay !== null) {
            groundOverlay.setOpacity(visible ? 1 : 0);
        }
    }, [groundOverlay, visible]);
    react.useEffect(function () {
        var newBounds = new google.maps.LatLngBounds(new google.maps.LatLng(bounds.south, bounds.west), new google.maps.LatLng(bounds.north, bounds.east));
        if (typeof bounds !== 'undefined' && groundOverlay !== null) {
            groundOverlay.set("bounds", newBounds);
            groundOverlay.setMap(map);
        }
    }, [groundOverlay, bounds]);
    return null;
}
var GroundOverlayF = react.memo(GroundOverlayFunctional);
var GroundOverlay = /** @class */ (function (_super) {
    __extends(GroundOverlay, _super);
    function GroundOverlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.registeredEvents = [];
        _this.state = {
            groundOverlay: null,
        };
        _this.setGroundOverlayCallback = function () {
            if (_this.state.groundOverlay !== null && _this.props.onLoad) {
                _this.props.onLoad(_this.state.groundOverlay);
            }
        };
        return _this;
    }
    GroundOverlay.prototype.componentDidMount = function () {
        invariant$1(!!this.props.url || !!this.props.bounds, "For GroundOverlay, url and bounds are passed in to constructor and are immutable after instantiated. This is the behavior of Google Maps JavaScript API v3 ( See https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay) Hence, use the corresponding two props provided by `react-google-maps-api`, url and bounds. In some cases, you'll need the GroundOverlay component to reflect the changes of url and bounds. You can leverage the React's key property to remount the component. Typically, just `key={url}` would serve your need. See https://github.com/tomchentw/react-google-maps/issues/655");
        var groundOverlay = new google.maps.GroundOverlay(this.props.url, this.props.bounds, __assign(__assign({}, this.props.options), { map: this.context }));
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$5,
            eventMap: eventMap$5,
            prevProps: {},
            nextProps: this.props,
            instance: groundOverlay,
        });
        this.setState(function setGroundOverlay() {
            return {
                groundOverlay: groundOverlay,
            };
        }, this.setGroundOverlayCallback);
    };
    GroundOverlay.prototype.componentDidUpdate = function (prevProps) {
        if (this.state.groundOverlay !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$5,
                eventMap: eventMap$5,
                prevProps: prevProps,
                nextProps: this.props,
                instance: this.state.groundOverlay,
            });
        }
    };
    GroundOverlay.prototype.componentWillUnmount = function () {
        if (this.state.groundOverlay) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.groundOverlay);
            }
            this.state.groundOverlay.setMap(null);
        }
    };
    GroundOverlay.prototype.render = function () {
        return null;
    };
    GroundOverlay.defaultProps = {
        onLoad: noop,
    };
    GroundOverlay.contextType = MapContext;
    return GroundOverlay;
}(react.PureComponent));

var eventMap$4 = {};
var updaterMap$4 = {
    data: function (instance, data) {
        instance.setData(data);
    },
    map: function (instance, map) {
        instance.setMap(map);
    },
    options: function (instance, options) {
        instance.setOptions(options);
    },
};
function HeatmapLayerFunctional(_a) {
    var data = _a.data, onLoad = _a.onLoad, onUnmount = _a.onUnmount, options = _a.options;
    var map = react.useContext(MapContext);
    var _b = react.useState(null), instance = _b[0], setInstance = _b[1];
    react.useEffect(function () {
        if (!google.maps.visualization) {
            invariant$1(!!google.maps.visualization, 'Did you include prop libraries={["visualization"]} in useJsApiScript? %s', google.maps.visualization);
        }
    }, []);
    react.useEffect(function () {
        invariant$1(!!data, 'data property is required in HeatmapLayer %s', data);
    }, [data]);
    // Order does matter
    react.useEffect(function () {
        if (instance !== null) {
            instance.setMap(map);
        }
    }, [map]);
    react.useEffect(function () {
        if (options && instance !== null) {
            instance.setOptions(options);
        }
    }, [instance, options]);
    react.useEffect(function () {
        var heatmapLayer = new google.maps.visualization.HeatmapLayer(__assign(__assign({}, (options || {})), { data: data, map: map }));
        setInstance(heatmapLayer);
        if (onLoad) {
            onLoad(heatmapLayer);
        }
        return function () {
            if (instance !== null) {
                if (onUnmount) {
                    onUnmount(instance);
                }
                instance.setMap(null);
            }
        };
    }, []);
    return null;
}
var HeatmapLayerF = react.memo(HeatmapLayerFunctional);
var HeatmapLayer = /** @class */ (function (_super) {
    __extends(HeatmapLayer, _super);
    function HeatmapLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.registeredEvents = [];
        _this.state = {
            heatmapLayer: null,
        };
        _this.setHeatmapLayerCallback = function () {
            if (_this.state.heatmapLayer !== null && _this.props.onLoad) {
                _this.props.onLoad(_this.state.heatmapLayer);
            }
        };
        return _this;
    }
    HeatmapLayer.prototype.componentDidMount = function () {
        invariant$1(!!google.maps.visualization, 'Did you include prop libraries={["visualization"]} to <LoadScript />? %s', google.maps.visualization);
        invariant$1(!!this.props.data, 'data property is required in HeatmapLayer %s', this.props.data);
        var heatmapLayer = new google.maps.visualization.HeatmapLayer(__assign(__assign({}, (this.props.options || {})), { data: this.props.data, map: this.context }));
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$4,
            eventMap: eventMap$4,
            prevProps: {},
            nextProps: this.props,
            instance: heatmapLayer,
        });
        this.setState(function setHeatmapLayer() {
            return {
                heatmapLayer: heatmapLayer,
            };
        }, this.setHeatmapLayerCallback);
    };
    HeatmapLayer.prototype.componentDidUpdate = function (prevProps) {
        unregisterEvents(this.registeredEvents);
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$4,
            eventMap: eventMap$4,
            prevProps: prevProps,
            nextProps: this.props,
            instance: this.state.heatmapLayer,
        });
    };
    HeatmapLayer.prototype.componentWillUnmount = function () {
        if (this.state.heatmapLayer !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.heatmapLayer);
            }
            unregisterEvents(this.registeredEvents);
            this.state.heatmapLayer.setMap(null);
        }
    };
    HeatmapLayer.prototype.render = function () {
        return null;
    };
    HeatmapLayer.contextType = MapContext;
    return HeatmapLayer;
}(react.PureComponent));

var eventMap$3 = {
    onCloseClick: 'closeclick',
    onPanoChanged: 'pano_changed',
    onPositionChanged: 'position_changed',
    onPovChanged: 'pov_changed',
    onResize: 'resize',
    onStatusChanged: 'status_changed',
    onVisibleChanged: 'visible_changed',
    onZoomChanged: 'zoom_changed',
};
var updaterMap$3 = {
    register: function (instance, provider, options) {
        instance.registerPanoProvider(provider, options);
    },
    links: function (instance, links) {
        instance.setLinks(links);
    },
    motionTracking: function (instance, motionTracking) {
        instance.setMotionTracking(motionTracking);
    },
    options: function (instance, options) {
        instance.setOptions(options);
    },
    pano: function (instance, pano) {
        instance.setPano(pano);
    },
    position: function (instance, position) {
        instance.setPosition(position);
    },
    pov: function (instance, pov) {
        instance.setPov(pov);
    },
    visible: function (instance, visible) {
        instance.setVisible(visible);
    },
    zoom: function (instance, zoom) {
        instance.setZoom(zoom);
    },
};
var StreetViewPanorama = /** @class */ (function (_super) {
    __extends(StreetViewPanorama, _super);
    function StreetViewPanorama() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.registeredEvents = [];
        _this.state = {
            streetViewPanorama: null,
        };
        _this.setStreetViewPanoramaCallback = function () {
            if (_this.state.streetViewPanorama !== null && _this.props.onLoad) {
                _this.props.onLoad(_this.state.streetViewPanorama);
            }
        };
        return _this;
    }
    StreetViewPanorama.prototype.componentDidMount = function () {
        var _a, _b;
        var streetViewPanorama = (_b = (_a = this.context) === null || _a === void 0 ? void 0 : _a.getStreetView()) !== null && _b !== void 0 ? _b : null;
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$3,
            eventMap: eventMap$3,
            prevProps: {},
            nextProps: this.props,
            instance: streetViewPanorama,
        });
        this.setState(function () {
            return {
                streetViewPanorama: streetViewPanorama,
            };
        }, this.setStreetViewPanoramaCallback);
    };
    StreetViewPanorama.prototype.componentDidUpdate = function (prevProps) {
        if (this.state.streetViewPanorama !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$3,
                eventMap: eventMap$3,
                prevProps: prevProps,
                nextProps: this.props,
                instance: this.state.streetViewPanorama,
            });
        }
    };
    StreetViewPanorama.prototype.componentWillUnmount = function () {
        if (this.state.streetViewPanorama !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.streetViewPanorama);
            }
            unregisterEvents(this.registeredEvents);
            this.state.streetViewPanorama.setVisible(false);
        }
    };
    StreetViewPanorama.prototype.render = function () {
        return null;
    };
    StreetViewPanorama.contextType = MapContext;
    return StreetViewPanorama;
}(react.PureComponent));

var StreetViewService = /** @class */ (function (_super) {
    __extends(StreetViewService, _super);
    function StreetViewService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            streetViewService: null,
        };
        _this.setStreetViewServiceCallback = function () {
            if (_this.state.streetViewService !== null && _this.props.onLoad) {
                _this.props.onLoad(_this.state.streetViewService);
            }
        };
        return _this;
    }
    StreetViewService.prototype.componentDidMount = function () {
        var streetViewService = new google.maps.StreetViewService();
        this.setState(function setStreetViewService() {
            return {
                streetViewService: streetViewService,
            };
        }, this.setStreetViewServiceCallback);
    };
    StreetViewService.prototype.componentWillUnmount = function () {
        if (this.state.streetViewService !== null && this.props.onUnmount) {
            this.props.onUnmount(this.state.streetViewService);
        }
    };
    StreetViewService.prototype.render = function () {
        return null;
    };
    StreetViewService.contextType = MapContext;
    return StreetViewService;
}(react.PureComponent));

var DirectionsService = /** @class */ (function (_super) {
    __extends(DirectionsService, _super);
    function DirectionsService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            directionsService: null,
        };
        _this.setDirectionsServiceCallback = function () {
            if (_this.state.directionsService !== null && _this.props.onLoad) {
                _this.props.onLoad(_this.state.directionsService);
            }
        };
        return _this;
    }
    DirectionsService.prototype.componentDidMount = function () {
        invariant$1(!!this.props.options, 'DirectionsService expected options object as parameter, but got %s', this.props.options);
        var directionsService = new google.maps.DirectionsService();
        this.setState(function setDirectionsService() {
            return {
                directionsService: directionsService,
            };
        }, this.setDirectionsServiceCallback);
    };
    DirectionsService.prototype.componentDidUpdate = function () {
        if (this.state.directionsService !== null) {
            this.state.directionsService.route(this.props.options, this.props.callback);
        }
    };
    DirectionsService.prototype.componentWillUnmount = function () {
        if (this.state.directionsService !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.directionsService);
            }
        }
    };
    DirectionsService.prototype.render = function () {
        return null;
    };
    return DirectionsService;
}(react.PureComponent));

var eventMap$2 = {
    onDirectionsChanged: 'directions_changed',
};
var updaterMap$2 = {
    directions: function (instance, directions) {
        instance.setDirections(directions);
    },
    map: function (instance, map) {
        instance.setMap(map);
    },
    options: function (instance, options) {
        instance.setOptions(options);
    },
    panel: function (instance, panel) {
        instance.setPanel(panel);
    },
    routeIndex: function (instance, routeIndex) {
        instance.setRouteIndex(routeIndex);
    },
};
var DirectionsRenderer = /** @class */ (function (_super) {
    __extends(DirectionsRenderer, _super);
    function DirectionsRenderer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.registeredEvents = [];
        _this.state = {
            directionsRenderer: null,
        };
        _this.setDirectionsRendererCallback = function () {
            if (_this.state.directionsRenderer !== null) {
                _this.state.directionsRenderer.setMap(_this.context);
                if (_this.props.onLoad) {
                    _this.props.onLoad(_this.state.directionsRenderer);
                }
            }
        };
        return _this;
    }
    DirectionsRenderer.prototype.componentDidMount = function () {
        var directionsRenderer = new google.maps.DirectionsRenderer(this.props.options);
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap$2,
            eventMap: eventMap$2,
            prevProps: {},
            nextProps: this.props,
            instance: directionsRenderer,
        });
        this.setState(function setDirectionsRenderer() {
            return {
                directionsRenderer: directionsRenderer,
            };
        }, this.setDirectionsRendererCallback);
    };
    DirectionsRenderer.prototype.componentDidUpdate = function (prevProps) {
        if (this.state.directionsRenderer !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$2,
                eventMap: eventMap$2,
                prevProps: prevProps,
                nextProps: this.props,
                instance: this.state.directionsRenderer,
            });
        }
    };
    DirectionsRenderer.prototype.componentWillUnmount = function () {
        if (this.state.directionsRenderer !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.directionsRenderer);
            }
            unregisterEvents(this.registeredEvents);
            if (this.state.directionsRenderer) {
                this.state.directionsRenderer.setMap(null);
            }
        }
    };
    DirectionsRenderer.prototype.render = function () {
        return jsxRuntime.jsx(jsxRuntime.Fragment, {});
    };
    DirectionsRenderer.contextType = MapContext;
    return DirectionsRenderer;
}(react.PureComponent));

var DistanceMatrixService = /** @class */ (function (_super) {
    __extends(DistanceMatrixService, _super);
    function DistanceMatrixService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            distanceMatrixService: null,
        };
        _this.setDistanceMatrixServiceCallback = function () {
            if (_this.state.distanceMatrixService !== null && _this.props.onLoad) {
                _this.props.onLoad(_this.state.distanceMatrixService);
            }
        };
        return _this;
    }
    DistanceMatrixService.prototype.componentDidMount = function () {
        invariant$1(!!this.props.options, 'DistanceMatrixService expected options object as parameter, but go %s', this.props.options);
        var distanceMatrixService = new google.maps.DistanceMatrixService();
        this.setState(function setDistanceMatrixService() {
            return {
                distanceMatrixService: distanceMatrixService,
            };
        }, this.setDistanceMatrixServiceCallback);
    };
    DistanceMatrixService.prototype.componentDidUpdate = function () {
        if (this.state.distanceMatrixService !== null) {
            this.state.distanceMatrixService.getDistanceMatrix(this.props.options, this.props.callback);
        }
    };
    DistanceMatrixService.prototype.componentWillUnmount = function () {
        if (this.state.distanceMatrixService !== null && this.props.onUnmount) {
            this.props.onUnmount(this.state.distanceMatrixService);
        }
    };
    DistanceMatrixService.prototype.render = function () {
        return null;
    };
    return DistanceMatrixService;
}(react.PureComponent));

var eventMap$1 = {
    onPlacesChanged: 'places_changed',
};
var updaterMap$1 = {
    bounds: function (instance, bounds) {
        instance.setBounds(bounds);
    },
};
var StandaloneSearchBox = /** @class */ (function (_super) {
    __extends(StandaloneSearchBox, _super);
    function StandaloneSearchBox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.registeredEvents = [];
        _this.containerElement = react.createRef();
        _this.state = {
            searchBox: null,
        };
        _this.setSearchBoxCallback = function () {
            if (_this.state.searchBox !== null && _this.props.onLoad) {
                _this.props.onLoad(_this.state.searchBox);
            }
        };
        return _this;
    }
    StandaloneSearchBox.prototype.componentDidMount = function () {
        invariant$1(!!google.maps.places, 'You need to provide libraries={["places"]} prop to <LoadScript /> component %s', google.maps.places);
        if (this.containerElement !== null && this.containerElement.current !== null) {
            var input = this.containerElement.current.querySelector('input');
            if (input !== null) {
                var searchBox_1 = new google.maps.places.SearchBox(input, this.props.options);
                this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                    updaterMap: updaterMap$1,
                    eventMap: eventMap$1,
                    prevProps: {},
                    nextProps: this.props,
                    instance: searchBox_1,
                });
                this.setState(function setSearchBox() {
                    return {
                        searchBox: searchBox_1,
                    };
                }, this.setSearchBoxCallback);
            }
        }
    };
    StandaloneSearchBox.prototype.componentDidUpdate = function (prevProps) {
        if (this.state.searchBox !== null) {
            unregisterEvents(this.registeredEvents);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap$1,
                eventMap: eventMap$1,
                prevProps: prevProps,
                nextProps: this.props,
                instance: this.state.searchBox,
            });
        }
    };
    StandaloneSearchBox.prototype.componentWillUnmount = function () {
        if (this.state.searchBox !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.searchBox);
            }
            unregisterEvents(this.registeredEvents);
        }
    };
    StandaloneSearchBox.prototype.render = function () {
        return jsxRuntime.jsx("div", { ref: this.containerElement, children: react.Children.only(this.props.children) });
    };
    StandaloneSearchBox.contextType = MapContext;
    return StandaloneSearchBox;
}(react.PureComponent));

var eventMap = {
    onPlaceChanged: 'place_changed',
};
var updaterMap = {
    bounds: function (instance, bounds) {
        instance.setBounds(bounds);
    },
    restrictions: function (instance, restrictions) {
        instance.setComponentRestrictions(restrictions);
    },
    fields: function (instance, fields) {
        instance.setFields(fields);
    },
    options: function (instance, options) {
        instance.setOptions(options);
    },
    types: function (instance, types) {
        instance.setTypes(types);
    },
};
var Autocomplete = /** @class */ (function (_super) {
    __extends(Autocomplete, _super);
    function Autocomplete() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.registeredEvents = [];
        _this.containerElement = react.createRef();
        _this.state = {
            autocomplete: null,
        };
        _this.setAutocompleteCallback = function () {
            if (_this.state.autocomplete !== null && _this.props.onLoad) {
                _this.props.onLoad(_this.state.autocomplete);
            }
        };
        return _this;
    }
    Autocomplete.prototype.componentDidMount = function () {
        var _a;
        invariant$1(!!google.maps.places, 'You need to provide libraries={["places"]} prop to <LoadScript /> component %s', google.maps.places);
        // TODO: why current could be equal null?
        var input = (_a = this.containerElement.current) === null || _a === void 0 ? void 0 : _a.querySelector('input');
        if (input) {
            var autocomplete_1 = new google.maps.places.Autocomplete(input, this.props.options);
            this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
                updaterMap: updaterMap,
                eventMap: eventMap,
                prevProps: {},
                nextProps: this.props,
                instance: autocomplete_1,
            });
            this.setState(function () {
                return {
                    autocomplete: autocomplete_1,
                };
            }, this.setAutocompleteCallback);
        }
    };
    Autocomplete.prototype.componentDidUpdate = function (prevProps) {
        unregisterEvents(this.registeredEvents);
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
            updaterMap: updaterMap,
            eventMap: eventMap,
            prevProps: prevProps,
            nextProps: this.props,
            instance: this.state.autocomplete,
        });
    };
    Autocomplete.prototype.componentWillUnmount = function () {
        if (this.state.autocomplete !== null) {
            unregisterEvents(this.registeredEvents);
        }
    };
    Autocomplete.prototype.render = function () {
        return jsxRuntime.jsx("div", { ref: this.containerElement, className: this.props.className, children: react.Children.only(this.props.children) });
    };
    Autocomplete.defaultProps = {
        className: ''
    };
    Autocomplete.contextType = MapContext;
    return Autocomplete;
}(react.PureComponent));

__webpack_unused_export__ = Autocomplete;
__webpack_unused_export__ = BicyclingLayer;
__webpack_unused_export__ = BicyclingLayerF;
__webpack_unused_export__ = Circle;
__webpack_unused_export__ = CircleF;
__webpack_unused_export__ = Data;
__webpack_unused_export__ = DataF;
__webpack_unused_export__ = DirectionsRenderer;
__webpack_unused_export__ = DirectionsService;
__webpack_unused_export__ = DistanceMatrixService;
__webpack_unused_export__ = DrawingManager;
__webpack_unused_export__ = DrawingManagerF;
__webpack_unused_export__ = FLOAT_PANE;
exports.b6 = GoogleMap;
__webpack_unused_export__ = index_esm;
__webpack_unused_export__ = GoogleMarkerClusterer$1;
__webpack_unused_export__ = GroundOverlay;
__webpack_unused_export__ = GroundOverlayF;
__webpack_unused_export__ = HeatmapLayer;
__webpack_unused_export__ = HeatmapLayerF;
__webpack_unused_export__ = InfoBoxComponent;
__webpack_unused_export__ = InfoBoxF;
__webpack_unused_export__ = InfoWindow;
__webpack_unused_export__ = InfoWindowF;
__webpack_unused_export__ = KmlLayer;
__webpack_unused_export__ = LoadScript;
__webpack_unused_export__ = LoadScriptNext$1;
__webpack_unused_export__ = MAP_PANE;
__webpack_unused_export__ = MARKER_LAYER;
__webpack_unused_export__ = MapContext;
exports.Jx = Marker;
__webpack_unused_export__ = ClustererComponent;
__webpack_unused_export__ = MarkerClustererF;
__webpack_unused_export__ = MarkerF;
__webpack_unused_export__ = OVERLAY_LAYER;
__webpack_unused_export__ = OVERLAY_MOUSE_TARGET;
__webpack_unused_export__ = OverlayView;
__webpack_unused_export__ = OverlayViewF;
__webpack_unused_export__ = Polygon;
__webpack_unused_export__ = PolygonF;
__webpack_unused_export__ = Polyline;
__webpack_unused_export__ = PolylineF;
__webpack_unused_export__ = Rectangle;
__webpack_unused_export__ = RectangleF;
__webpack_unused_export__ = StandaloneSearchBox;
__webpack_unused_export__ = StreetViewPanorama;
__webpack_unused_export__ = StreetViewService;
__webpack_unused_export__ = TrafficLayer;
__webpack_unused_export__ = TrafficLayerF;
__webpack_unused_export__ = TransitLayer;
__webpack_unused_export__ = TransitLayerF;
__webpack_unused_export__ = useGoogleMap;
__webpack_unused_export__ = useJsApiLoader;
__webpack_unused_export__ = useLoadScript;
//# sourceMappingURL=cjs.js.map


/***/ })

};
;