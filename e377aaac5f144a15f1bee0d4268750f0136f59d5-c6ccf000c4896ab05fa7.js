(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+JPL":function(e,t,n){e.exports={default:n("zm1A"),__esModule:!0}},"/Tce":function(e,t,n){e.exports=n("Le5H")},"/zyV":function(e,t,n){var i=n("iCrl"),r=n("nSLw");n("5/Py")("getPrototypeOf",(function(){return function(e){return r(i(e))}}))},"4dSY":function(e,t,n){"use strict";var i=n("Y/9K"),r=n("dm8t"),o=n("sRS9"),a=n("F4aP"),s=n("/Tce"),u=n("Z4Tv").KEY,c=n("u0Xy"),l=n("nDvl"),f=n("zPSX"),d=n("aMdT"),p=n("ndpP"),m=n("Ajmr"),y=n("CqTK"),h=n("XVt8"),v=n("z6pq"),b=n("rG/R"),g=n("1jxG"),x=n("iCrl"),k=n("if9F"),S=n("TNq5"),w=n("DyfM"),_=n("vTvG"),A=n("y2Ca"),E=n("ShI3"),F=n("2meR"),O=n("jahY"),P=n("BREl"),j=E.f,C=O.f,D=A.f,L=i.Symbol,T=i.JSON,N=T&&T.stringify,M=p("_hidden"),R=p("toPrimitive"),I={}.propertyIsEnumerable,z=l("symbol-registry"),G=l("symbols"),V=l("op-symbols"),B=Object.prototype,Y="function"==typeof L&&!!F.f,q=i.QObject,K=!q||!q.prototype||!q.prototype.findChild,J=o&&c((function(){return 7!=_(C({},"a",{get:function(){return C(this,"a",{value:7}).a}})).a}))?function(e,t,n){var i=j(B,t);i&&delete B[t],C(e,t,n),i&&e!==B&&C(B,t,i)}:C,W=function(e){var t=G[e]=_(L.prototype);return t._k=e,t},H=Y&&"symbol"==typeof L.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof L},Z=function(e,t,n){return e===B&&Z(V,t,n),b(e),t=S(t,!0),b(n),r(G,t)?(n.enumerable?(r(e,M)&&e[M][t]&&(e[M][t]=!1),n=_(n,{enumerable:w(0,!1)})):(r(e,M)||C(e,M,w(1,{})),e[M][t]=!0),J(e,t,n)):C(e,t,n)},X=function(e,t){b(e);for(var n,i=h(t=k(t)),r=0,o=i.length;o>r;)Z(e,n=i[r++],t[n]);return e},U=function(e){var t=I.call(this,e=S(e,!0));return!(this===B&&r(G,e)&&!r(V,e))&&(!(t||!r(this,e)||!r(G,e)||r(this,M)&&this[M][e])||t)},Q=function(e,t){if(e=k(e),t=S(t,!0),e!==B||!r(G,t)||r(V,t)){var n=j(e,t);return!n||!r(G,t)||r(e,M)&&e[M][t]||(n.enumerable=!0),n}},$=function(e){for(var t,n=D(k(e)),i=[],o=0;n.length>o;)r(G,t=n[o++])||t==M||t==u||i.push(t);return i},ee=function(e){for(var t,n=e===B,i=D(n?V:k(e)),o=[],a=0;i.length>a;)!r(G,t=i[a++])||n&&!r(B,t)||o.push(G[t]);return o};Y||(s((L=function(){if(this instanceof L)throw TypeError("Symbol is not a constructor!");var e=d(arguments.length>0?arguments[0]:void 0),t=function(n){this===B&&t.call(V,n),r(this,M)&&r(this[M],e)&&(this[M][e]=!1),J(this,e,w(1,n))};return o&&K&&J(B,e,{configurable:!0,set:t}),W(e)}).prototype,"toString",(function(){return this._k})),E.f=Q,O.f=Z,n("kdJO").f=A.f=$,n("+wWG").f=U,F.f=ee,o&&!n("yfM/")&&s(B,"propertyIsEnumerable",U,!0),m.f=function(e){return W(p(e))}),a(a.G+a.W+a.F*!Y,{Symbol:L});for(var te="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ne=0;te.length>ne;)p(te[ne++]);for(var ie=P(p.store),re=0;ie.length>re;)y(ie[re++]);a(a.S+a.F*!Y,"Symbol",{for:function(e){return r(z,e+="")?z[e]:z[e]=L(e)},keyFor:function(e){if(!H(e))throw TypeError(e+" is not a symbol!");for(var t in z)if(z[t]===e)return t},useSetter:function(){K=!0},useSimple:function(){K=!1}}),a(a.S+a.F*!Y,"Object",{create:function(e,t){return void 0===t?_(e):X(_(e),t)},defineProperty:Z,defineProperties:X,getOwnPropertyDescriptor:Q,getOwnPropertyNames:$,getOwnPropertySymbols:ee});var oe=c((function(){F.f(1)}));a(a.S+a.F*oe,"Object",{getOwnPropertySymbols:function(e){return F.f(x(e))}}),T&&a(a.S+a.F*(!Y||c((function(){var e=L();return"[null]"!=N([e])||"{}"!=N({a:e})||"{}"!=N(Object(e))}))),"JSON",{stringify:function(e){for(var t,n,i=[e],r=1;arguments.length>r;)i.push(arguments[r++]);if(n=t=i[1],(g(t)||void 0!==e)&&!H(e))return v(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!H(t))return t}),i[1]=t,N.apply(T,i)}}),L.prototype[R]||n("Le5H")(L.prototype,R,L.prototype.valueOf),f(L,"Symbol"),f(Math,"Math",!0),f(i.JSON,"JSON",!0)},"5/Py":function(e,t,n){var i=n("F4aP"),r=n("KTCR"),o=n("u0Xy");e.exports=function(e,t){var n=(r.Object||{})[e]||Object[e],a={};a[e]=t(n),i(i.S+i.F*o((function(){n(1)})),"Object",a)}},"69MA":function(e,t,n){"use strict";t.a={white:"#fff",green:"#299B1A",red:"#D92241",grey:"#F3F3F3",grey_dark:"#A9A9A9",grey_blended_blue:"#012F5733",grey_darker:"#757575",grey_shadow:"#012f571a",grey_29_percent:"#4A4A4A",grey_light:"#F3F3F3",blue:"#E2F1F8",blue_dark:"#052948",blue_darker:"#00AFD9",blue_17_percent:"#012F57",blue_15_percent:"#052948",tooltip_icon:"#FF6820",orange_darker:"#F2560B",grey_92_percent:"#E6EAEE",grey_95_percent:"#f0f2f5a1",grey_79_percent:"#c9c9c9"}},"7q5F":function(e,t){},"9Lv+":function(e,t,n){n("Ahdu");var i=n("KTCR").Object;e.exports=function(e,t){return i.create(e,t)}},Ahdu:function(e,t,n){var i=n("F4aP");i(i.S,"Object",{create:n("vTvG")})},Ajmr:function(e,t,n){t.f=n("ndpP")},Asss:function(e,t,n){n("k4A5"),n("fCt8"),e.exports=n("Ajmr").f("iterator")},AyUB:function(e,t,n){e.exports={default:n("9Lv+"),__esModule:!0}},CqTK:function(e,t,n){var i=n("Y/9K"),r=n("KTCR"),o=n("yfM/"),a=n("Ajmr"),s=n("jahY").f;e.exports=function(e){var t=r.Symbol||(r.Symbol=o?{}:i.Symbol||{});"_"==e.charAt(0)||e in t||s(t,e,{value:a.f(e)})}},EJiy:function(e,t,n){"use strict";t.__esModule=!0;var i=a(n("F+2o")),r=a(n("+JPL")),o="function"==typeof r.default&&"symbol"==typeof i.default?function(e){return typeof e}:function(e){return e&&"function"==typeof r.default&&e.constructor===r.default&&e!==r.default.prototype?"symbol":typeof e};function a(e){return e&&e.__esModule?e:{default:e}}t.default="function"==typeof r.default&&"symbol"===o(i.default)?function(e){return void 0===e?"undefined":o(e)}:function(e){return e&&"function"==typeof r.default&&e.constructor===r.default&&e!==r.default.prototype?"symbol":void 0===e?"undefined":o(e)}},"F+2o":function(e,t,n){e.exports={default:n("Asss"),__esModule:!0}},FYw3:function(e,t,n){"use strict";t.__esModule=!0;var i,r=n("EJiy"),o=(i=r)&&i.__esModule?i:{default:i};t.default=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":(0,o.default)(t))&&"function"!=typeof t?e:t}},I2TJ:function(e,t,n){"use strict";var i=n("rgW1"),r=n("wCfy"),o=n("n5Sa"),a=n("if9F");e.exports=n("rE5t")(Array,"Array",(function(e,t){this._t=a(e),this._i=0,this._k=t}),(function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,r(1)):r(0,"keys"==t?n:"values"==t?e[n]:[n,e[n]])}),"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},L1j2:function(e,t,n){var i=n("F4aP");i(i.S+i.F*!n("sRS9"),"Object",{defineProperty:n("jahY").f})},LLWg:function(e,t,n){var i=n("1jxG"),r=n("rG/R"),o=function(e,t){if(r(e),!i(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,i){try{(i=n("dRaS")(Function.call,n("ShI3").f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(r){t=!0}return function(e,n){return o(e,n),t?e.__proto__=n:i(e,n),e}}({},!1):void 0),check:o}},PsZR:function(e,t,n){"use strict";n("E5k/");var i=n("q1tI"),r=n.n(i),o=n("vOnD"),a=n("qpJq"),s=n("hxQi"),u=n.n(s),c=function(e){return e?"cursor: pointer;\ncolor: #00AFD9 !important;\nopacity: 1 !important":"cursor: not-allowed;\npointer-events: none;"},l=o.default.button.withConfig({displayName:"itemStep__StepIndexWrapper",componentId:"sc-1l6chys-0"})(["width:",";margin:auto 0;display:flex;justify-content:space-between;align-items:center;cursor:pointer;padding:0;",";background:none;border-color:transparent;transition:all 0.5s ease-in-out;outline:none;@media screen and (max-width:870px){border:0;width:1.875rem;}pointer-events:",";&:active{transition:all 0.5s ease-in-out;}"],(function(e){return e.widthSize?e.widthSize:"7.5rem"}),(function(e){var t=e.isClickable;return c(t)}),(function(e){return e.isDisable?"":"none"})),f=o.default.div.withConfig({displayName:"itemStep__StyledNum",componentId:"sc-1l6chys-1"})(["width:1.75rem;"]),d=o.default.span.withConfig({displayName:"itemStep__StyledNumSpan",componentId:"sc-1l6chys-2"})(["width:",";height:",";line-height:",";font-size:1rem;text-align:center;",";color:",";background:",";border-radius:0.875rem;border:1px solid #e2f1f8;display:block;font-weight:500;font-size:1rem;font-family:Intro,museo-sans,sans-serif;opacity:",";&:focus{outline:blue;transition:all 0.5s ease-in-out;color:",";background:",";}@media screen and (max-width:870px){line-height:1.625rem;width:1.75rem;height:1.75rem;color:",";}"],(function(e){return e.idNumber<=e.idActive?"1.875rem":"1.75rem"}),(function(e){return e.idNumber<=e.idActive?"1.875rem":"1.75rem"}),(function(e){return e.idNumber<=e.idActive?"1.875rem":"1.625rem"}),(function(e){var t=e.isClickable;return c(t)}),(function(e){return e.idNumber<=e.idActive||e.hover?"#00AFD9":"#757575"}),(function(e){return e.idNumber<=e.idActive||e.hover?"#E2F1F8":"#F3F3F3"}),(function(e){return e.idNumber<=e.idActive?"1":"0.5"}),(function(e){return e.idNumber<=e.idActive||e.hover?"#00AFD9":"#757575"}),(function(e){return e.idNumber<=e.idActive||e.hover?"#E2F1F8":"#F3F3F3"}),(function(e){return e.idNumber<=e.idActive?"#012F57":e.hover?"#00AFD9":"#757575"})),p=Object(o.keyframes)(["from{transform:scale(.25);opacity:0;}to{transform:scale(1);opacity:1;}"]),m=Object(o.keyframes)(["from{transform:scale(1);opacity:1;}to{transform:scale(.25);opacity:0;}"]),y=o.default.span.withConfig({displayName:"itemStep__StyledNumSpan2",componentId:"sc-1l6chys-3"})(["width:",";height:",";line-height:",";font-size:1rem;text-align:center;color:",";background:",";border-radius:0.875rem;border:1px solid #e2f1f8;display:block;font-weight:800;font-size:1rem;font-family:Intro,museo-sans,sans-serif;visibility:",";animation:"," 0.2s linear;transition:visibility 0.2s linear;&:focus{outline:blue;transition:all 0.5s ease-in-out;color:",";background:",";}@media screen and (max-width:870px){line-height:1.625rem;width:1.75rem;height:1.75rem;color:",";}"],(function(e){return e.idNumber<=e.idActive?"1.875rem":"1.75rem"}),(function(e){return e.idNumber<=e.idActive?"1.875rem":"1.75rem"}),(function(e){return e.idNumber<=e.idActive?"1.875rem":"1.625rem"}),(function(e){return e.idNumber<=e.idActive||e.hover?"#00AFD9":"#757575"}),(function(e){return e.idNumber<=e.idActive||e.hover?"#E2F1F8":"#F3F3F3"}),(function(e){return e.idNumber>=e.idActive?"hidden":e.hover?"visible":"hidden"}),(function(e){return e.hover?p:m}),(function(e){return e.idNumber<=e.idActive||e.hover?"#00AFD9":"#757575"}),(function(e){return e.idNumber<=e.idActive||e.hover?"#E2F1F8":"#F3F3F3"}),(function(e){return e.idNumber<=e.idActive?"#012F57":e.hover?"#00AFD9":"#757575"})),h=o.default.div.withConfig({displayName:"itemStep__StyledDesc",componentId:"sc-1l6chys-4"})(["width:11.5625rem;margin-left:0.4375rem;line-height:1.75rem;color:#012e56;"]),v=o.default.span.withConfig({displayName:"itemStep__StyledTitle",componentId:"sc-1l6chys-5"})(["text-align:left;font-size:1rem;font-family:museo-sans,sans-serif;font-weight:",";letter-spacing:-0.05px;color:","};opacity:",";display:inline;@media screen and (max-width:870px){display:none;}"],(function(e){return e.idNumber<=e.idActive?"900":"500"}),(function(e){return e.idNumber<=e.idActive||e.hover?"#012F57":"#757575"}),(function(e){return e.idNumber<=e.idActive?"1":"0.5"})),b={loop:!1,autoplay:!0,animationData:a},g=function(e){var t=e.idActive,n=e.id,o=e.changeIdActive,a=e.title,s=e.widthSize,c=e.clickableProp,p=e.isDisable,m=r.a.useState(!1),g=m[0],x=m[1],k=r.a.useState(!1),S=k[0],w=k[1],_=r.a.useState(!1),A=_[0];_[1];return Object(i.useEffect)((function(){return w("undefined"!=typeof window&&window.innerWidth<768),window.addEventListener("resize",w("undefined"!=typeof window&&window.innerWidth<768)),window.removeEventListener("resize",w("undefined"!=typeof window&&window.innerWidth<768))}),[]),r.a.createElement(l,{onClick:function(){!0===p&&o()},onFocus:function(){return!0===c&&x(!0)},onBlur:function(){return!0===c&&x(!1)},onMouseEnter:function(){return x(!0)},onMouseLeave:function(){return x(!1)},onKeyDown:function(e){"Enter"===e.key&&!0===p&&o()},widthSize:s,hover:g,isClickable:c,isDisable:p},r.a.createElement(f,null,r.a.createElement("div",{style:{position:"relative"}},t>n?r.a.createElement(u.a,{options:b,height:30,width:30,isStopped:A,speed:.75}):r.a.createElement(d,{isClickable:c,idActive:t,idNumber:n,hover:g},n+1),r.a.createElement("div",{style:{position:"absolute",top:"1px",left:"1px"}},r.a.createElement(y,{isClickable:c,idActive:t,idNumber:n,hover:g},n+1)))),r.a.createElement(h,null,r.a.createElement(v,{idActive:t,idNumber:n,hover:g,isMobile:S},a)))},x=o.default.div.withConfig({displayName:"FormStep__FormStepContainer",componentId:"h4fy92-0"})(["display:flex;justify-content:space-between;width:46.0625rem;height:100%;box-sizing:border-box;border-radius:0.625rem;border:1px solid #fff;@media screen and (max-width:870px){width:10.8125rem;height:2.8125rem;padding:0 1rem;}"]),k=function(e,t){switch(t.type){case"itemAt0":return Object.assign(Object.assign({},e),{},{0:t.payload[0]});case"itemAt1":return Object.assign(Object.assign({},e),{},{1:t.payload[1]});case"itemAt2":return Object.assign(Object.assign({},e),{},{2:t.payload[2]});case"itemAt3":return Object.assign(Object.assign({},e),{},{3:t.payload[3]});case"setFalse":return Object.assign(Object.assign({},e),{},{0:t.payload[0],1:t.payload[1],2:t.payload[2],3:t.payload[3]});default:return Object.assign({},e)}};t.a=function(e){var t=e.onItemStepClickedListenerProp,n=e.activateItemProp,o=e.isDisableItemClick,a=e.isResetIndex,s=r.a.useState(0),u=s[0],c=s[1],l=Object(i.useReducer)(k,{0:!0,1:!1,2:!1,3:!1}),f=l[0],d=l[1];return Object(i.useEffect)((function(){var e;!a||d({type:"setFalse",payload:(e={},e[0]=!0,e[1]=!1,e[2]=!1,e[3]=!1,e)})}),[a]),Object(i.useEffect)((function(){var e,t;c(e=n),d({type:"itemAt"+e,payload:(t={},t[e]=!0,t)})}),[n]),r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null,r.a.createElement(g,{idActive:u,id:0,title:"Your work",changeIdActive:function(){c(0),!t||t(0)},clickableProp:f[0],isDisable:o}),r.a.createElement(g,{idActive:u,id:1,title:"About you",changeIdActive:function(){c(1),!t||t(1)},clickableProp:f[1],isDisable:o}),r.a.createElement(g,{widthSize:"14rem",idActive:u,id:2,title:"Membership agreement",changeIdActive:function(){c(2),!t||t(2)},clickableProp:f[2],isDisable:o}),r.a.createElement(g,{widthSize:"11.1875rem",idActive:u,id:3,title:"Your contribution",changeIdActive:function(){c(3),!t||t(3)},clickableProp:f[3],isDisable:o})))}},Q6Rf:function(e,t,n){var i=n("jahY"),r=n("rG/R"),o=n("BREl");e.exports=n("sRS9")?Object.defineProperties:function(e,t){r(e);for(var n,a=o(t),s=a.length,u=0;s>u;)i.f(e,n=a[u++],t[n]);return e}},SEkw:function(e,t,n){e.exports={default:n("zOLt"),__esModule:!0}},ShI3:function(e,t,n){var i=n("+wWG"),r=n("DyfM"),o=n("if9F"),a=n("TNq5"),s=n("dm8t"),u=n("Pjkx"),c=Object.getOwnPropertyDescriptor;t.f=n("sRS9")?c:function(e,t){if(e=o(e),t=a(t,!0),u)try{return c(e,t)}catch(n){}if(s(e,t))return r(!i.f.call(e,t),e[t])}},Utvv:function(e,t,n){var i=n("AbHY"),r=n("Iugk");e.exports=function(e){return function(t,n){var o,a,s=String(r(t)),u=i(n),c=s.length;return u<0||u>=c?e?"":void 0:(o=s.charCodeAt(u))<55296||o>56319||u+1===c||(a=s.charCodeAt(u+1))<56320||a>57343?e?s.charAt(u):o:e?s.slice(u,u+2):a-56320+(o-55296<<10)+65536}}},V7oC:function(e,t,n){"use strict";t.__esModule=!0;var i,r=n("SEkw"),o=(i=r)&&i.__esModule?i:{default:i};t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,o.default)(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}()},XVt8:function(e,t,n){var i=n("BREl"),r=n("2meR"),o=n("+wWG");e.exports=function(e){var t=i(e),n=r.f;if(n)for(var a,s=n(e),u=o.f,c=0;s.length>c;)u.call(e,a=s[c++])&&t.push(a);return t}},"Yz+Y":function(e,t,n){e.exports={default:n("hDBf"),__esModule:!0}},Z4Tv:function(e,t,n){var i=n("aMdT")("meta"),r=n("1jxG"),o=n("dm8t"),a=n("jahY").f,s=0,u=Object.isExtensible||function(){return!0},c=!n("u0Xy")((function(){return u(Object.preventExtensions({}))})),l=function(e){a(e,i,{value:{i:"O"+ ++s,w:{}}})},f=e.exports={KEY:i,NEED:!1,fastKey:function(e,t){if(!r(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,i)){if(!u(e))return"F";if(!t)return"E";l(e)}return e[i].i},getWeak:function(e,t){if(!o(e,i)){if(!u(e))return!0;if(!t)return!1;l(e)}return e[i].w},onFreeze:function(e){return c&&f.NEED&&u(e)&&!o(e,i)&&l(e),e}}},cBwD:function(e,t,n){n("CqTK")("asyncIterator")},d4ji:function(e,t,n){var i=n("Y/9K").document;e.exports=i&&i.documentElement},eHLZ:function(e,t,n){n("CqTK")("observable")},fCt8:function(e,t,n){n("I2TJ");for(var i=n("Y/9K"),r=n("Le5H"),o=n("n5Sa"),a=n("ndpP")("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),u=0;u<s.length;u++){var c=s[u],l=i[c],f=l&&l.prototype;f&&!f[a]&&r(f,a,c),o[c]=o.Array}},gZMg:function(e,t,n){var i=n("F4aP");i(i.S,"Object",{setPrototypeOf:n("LLWg").set})},hDBf:function(e,t,n){n("/zyV"),e.exports=n("KTCR").Object.getPrototypeOf},hxQi:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=d(n("QbLZ")),r=d(n("Yz+Y")),o=d(n("iCc5")),a=d(n("V7oC")),s=d(n("FYw3")),u=d(n("mRg0")),c=d(n("q1tI")),l=d(n("17x9")),f=d(n("lPHp"));function d(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(){var e,n,i,a;(0,o.default)(this,t);for(var u=arguments.length,c=Array(u),l=0;l<u;l++)c[l]=arguments[l];return n=i=(0,s.default)(this,(e=t.__proto__||(0,r.default)(t)).call.apply(e,[this].concat(c))),i.handleClickToPause=function(){i.anim.isPaused?i.anim.play():i.anim.pause()},a=n,(0,s.default)(i,a)}return(0,u.default)(t,e),(0,a.default)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.options,n=e.eventListeners,r=t.loop,o=t.autoplay,a=t.animationData,s=t.rendererSettings,u=t.segments;this.options={container:this.el,renderer:"svg",loop:!1!==r,autoplay:!1!==o,segments:!1!==u,animationData:a,rendererSettings:s},this.options=(0,i.default)({},this.options,t),this.anim=f.default.loadAnimation(this.options),this.registerEvents(n)}},{key:"componentWillUpdate",value:function(e){this.options.animationData!==e.options.animationData&&(this.deRegisterEvents(this.props.eventListeners),this.destroy(),this.options=(0,i.default)({},this.options,e.options),this.anim=f.default.loadAnimation(this.options),this.registerEvents(e.eventListeners))}},{key:"componentDidUpdate",value:function(){this.props.isStopped?this.stop():this.props.segments?this.playSegments():this.play(),this.pause(),this.setSpeed(),this.setDirection()}},{key:"componentWillUnmount",value:function(){this.deRegisterEvents(this.props.eventListeners),this.destroy(),this.options.animationData=null,this.anim=null}},{key:"setSpeed",value:function(){this.anim.setSpeed(this.props.speed)}},{key:"setDirection",value:function(){this.anim.setDirection(this.props.direction)}},{key:"play",value:function(){this.anim.play()}},{key:"playSegments",value:function(){this.anim.playSegments(this.props.segments)}},{key:"stop",value:function(){this.anim.stop()}},{key:"pause",value:function(){(this.props.isPaused&&!this.anim.isPaused||!this.props.isPaused&&this.anim.isPaused)&&this.anim.pause()}},{key:"destroy",value:function(){this.anim.destroy()}},{key:"registerEvents",value:function(e){var t=this;e.forEach((function(e){t.anim.addEventListener(e.eventName,e.callback)}))}},{key:"deRegisterEvents",value:function(e){var t=this;e.forEach((function(e){t.anim.removeEventListener(e.eventName,e.callback)}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.width,r=t.height,o=t.ariaRole,a=t.ariaLabel,s=t.isClickToPauseDisabled,u=t.title,l=function(e){return"number"==typeof e?e+"px":e||"100%"},f=(0,i.default)({width:l(n),height:l(r),overflow:"hidden",margin:"0 auto",outline:"none"},this.props.style),d=s?function(){return null}:this.handleClickToPause;return c.default.createElement("div",{ref:function(t){e.el=t},style:f,onClick:d,title:u,role:o,"aria-label":a,tabIndex:"0"})}}]),t}(c.default.Component);t.default=p,p.propTypes={eventListeners:l.default.arrayOf(l.default.object),options:l.default.object.isRequired,height:l.default.oneOfType([l.default.string,l.default.number]),width:l.default.oneOfType([l.default.string,l.default.number]),isStopped:l.default.bool,isPaused:l.default.bool,speed:l.default.number,segments:l.default.arrayOf(l.default.number),direction:l.default.number,ariaRole:l.default.string,ariaLabel:l.default.string,isClickToPauseDisabled:l.default.bool,title:l.default.string},p.defaultProps={eventListeners:[],isStopped:!1,isPaused:!1,speed:1,ariaRole:"button",ariaLabel:"animation",isClickToPauseDisabled:!1,title:""}},iCc5:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},k4A5:function(e,t,n){"use strict";var i=n("Utvv")(!0);n("rE5t")(String,"String",(function(e){this._t=String(e),this._i=0}),(function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=i(t,n),this._i+=e.length,{value:e,done:!1})}))},kdJO:function(e,t,n){var i=n("5ZMJ"),r=n("5g8u").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return i(e,r)}},lmCZ:function(e,t,n){"use strict";var i=n("vTvG"),r=n("DyfM"),o=n("zPSX"),a={};n("Le5H")(a,n("ndpP")("iterator"),(function(){return this})),e.exports=function(e,t,n){e.prototype=i(a,{next:r(1,n)}),o(e,t+" Iterator")}},mRg0:function(e,t,n){"use strict";t.__esModule=!0;var i=a(n("s3Ml")),r=a(n("AyUB")),o=a(n("EJiy"));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":(0,o.default)(t)));e.prototype=(0,r.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(i.default?(0,i.default)(e,t):e.__proto__=t)}},n5Sa:function(e,t){e.exports={}},nSLw:function(e,t,n){var i=n("dm8t"),r=n("iCrl"),o=n("Wlk5")("IE_PROTO"),a=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=r(e),i(e,o)?e[o]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?a:null}},ndpP:function(e,t,n){var i=n("nDvl")("wks"),r=n("aMdT"),o=n("Y/9K").Symbol,a="function"==typeof o;(e.exports=function(e){return i[e]||(i[e]=a&&o[e]||(a?o:r)("Symbol."+e))}).store=i},qDAq:function(e,t,n){n("gZMg"),e.exports=n("KTCR").Object.setPrototypeOf},qpJq:function(e){e.exports=JSON.parse('{"v":"5.7.1","fr":30,"ip":0,"op":40,"w":80,"h":80,"nm":"Success Checkmark","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Check Mark","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[40,40,0],"ix":2},"a":{"a":0,"k":[-1.312,6,0],"ix":1},"s":{"a":0,"k":[108,108,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-15.75,8],[-8,16],[13.125,-4]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":25,"s":[0]},{"t":33,"s":[100]}],"ix":1},"e":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":40,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Circle Flash","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":25,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":30,"s":[98]},{"t":38,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[40,40,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":25,"s":[0,0,100]},{"t":30,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"a":0,"k":[64,64],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.003921568859,0.686274528503,0.850980401039,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false}],"ip":0,"op":40,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Circle Stroke","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[39.022,39.022,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":16,"s":[100,100,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":22,"s":[80,80,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":25,"s":[120,120,100]},{"t":29,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[60,60],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"t":16,"s":[100]}],"ix":1},"e":{"a":0,"k":0,"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[0.003921568859,0.686274528503,0.850980401039,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":3,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0.978,0.978],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":40,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Circle Green Fill","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":21,"s":[0]},{"t":28,"s":[98]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[40,40,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":21,"s":[0,0,100]},{"t":28,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"a":0,"k":[64,64],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.003921568859,0.686274528503,0.850980401039,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false}],"ip":0,"op":40,"st":0,"bm":0}],"markers":[]}')},rE5t:function(e,t,n){"use strict";var i=n("yfM/"),r=n("F4aP"),o=n("/Tce"),a=n("Le5H"),s=n("n5Sa"),u=n("lmCZ"),c=n("zPSX"),l=n("nSLw"),f=n("ndpP")("iterator"),d=!([].keys&&"next"in[].keys()),p=function(){return this};e.exports=function(e,t,n,m,y,h,v){u(n,t,m);var b,g,x,k=function(e){if(!d&&e in A)return A[e];switch(e){case"keys":case"values":return function(){return new n(this,e)}}return function(){return new n(this,e)}},S=t+" Iterator",w="values"==y,_=!1,A=e.prototype,E=A[f]||A["@@iterator"]||y&&A[y],F=E||k(y),O=y?w?k("entries"):F:void 0,P="Array"==t&&A.entries||E;if(P&&(x=l(P.call(new e)))!==Object.prototype&&x.next&&(c(x,S,!0),i||"function"==typeof x[f]||a(x,f,p)),w&&E&&"values"!==E.name&&(_=!0,F=function(){return E.call(this)}),i&&!v||!d&&!_&&A[f]||a(A,f,F),s[t]=F,s[S]=p,y)if(b={values:w?F:k("values"),keys:h?F:k("keys"),entries:O},v)for(g in b)g in A||o(A,g,b[g]);else r(r.P+r.F*(d||_),t,b);return b}},rgW1:function(e,t){e.exports=function(){}},s3Ml:function(e,t,n){e.exports={default:n("qDAq"),__esModule:!0}},vTvG:function(e,t,n){var i=n("rG/R"),r=n("Q6Rf"),o=n("5g8u"),a=n("Wlk5")("IE_PROTO"),s=function(){},u=function(){var e,t=n("KyCV")("iframe"),i=o.length;for(t.style.display="none",n("d4ji").appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),u=e.F;i--;)delete u.prototype[o[i]];return u()};e.exports=Object.create||function(e,t){var n;return null!==e?(s.prototype=i(e),n=new s,s.prototype=null,n[a]=e):n=u(),void 0===t?n:r(n,t)}},wCfy:function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},y2Ca:function(e,t,n){var i=n("if9F"),r=n("kdJO").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return a&&"[object Window]"==o.call(e)?function(e){try{return r(e)}catch(t){return a.slice()}}(e):r(i(e))}},z6pq:function(e,t,n){var i=n("VC5+");e.exports=Array.isArray||function(e){return"Array"==i(e)}},zOLt:function(e,t,n){n("L1j2");var i=n("KTCR").Object;e.exports=function(e,t,n){return i.defineProperty(e,t,n)}},zPSX:function(e,t,n){var i=n("jahY").f,r=n("dm8t"),o=n("ndpP")("toStringTag");e.exports=function(e,t,n){e&&!r(e=n?e:e.prototype,o)&&i(e,o,{configurable:!0,value:t})}},zm1A:function(e,t,n){n("4dSY"),n("7q5F"),n("cBwD"),n("eHLZ"),e.exports=n("KTCR").Symbol}}]);
//# sourceMappingURL=e377aaac5f144a15f1bee0d4268750f0136f59d5-c6ccf000c4896ab05fa7.js.map