(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"76ZC":function(e,t,i){var o=i("GkXj"),r=i("qpZ2"),n=i("QIE6"),a={decodeEntities:!0,lowerCaseAttributeNames:!1};function l(e,t){if("string"!=typeof e)throw new TypeError("First argument must be a string");return""===e?[]:o(n(e,(t=t||{}).htmlparser2||a),t)}l.domToReact=o,l.htmlToDOM=n,l.attributesToProps=r,e.exports=l,e.exports.default=l},"7MhH":function(e,t,i){i("Ll4R"),i("sC2a");var o=i("wJvl"),r=/<([a-zA-Z]+[0-9]?)/,n=/<head.*>/i,a=/<body.*>/i,l=/<(area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)(.*?)\/?>/gi,s=o.isIE(9),c=s||o.isIE(),u=function(){throw new Error("This browser does not support `document.implementation.createHTMLDocument`")},d=function(){throw new Error("This browser does not support `DOMParser.prototype.parseFromString`")};if("function"==typeof window.DOMParser){var m=new window.DOMParser,p=s?"text/xml":"text/html";u=d=function(e,t){return t&&(e="<"+t+">"+e+"</"+t+">"),s&&(e=e.replace(l,"<$1$2$3/>")),m.parseFromString(e,p)}}if(document.implementation){var h=document.implementation.createHTMLDocument(c?"html-dom-parser":void 0);u=function(e,t){if(t)return h.documentElement.getElementsByTagName(t)[0].innerHTML=e,h;try{return h.documentElement.innerHTML=e,h}catch(i){if(d)return d(e)}}}var f,y=document.createElement("template");y.content&&(f=function(e){return y.innerHTML=e,y.content.childNodes}),e.exports=function(e){var t,i,o,l,s=e.match(r);switch(s&&s[1]&&(t=s[1].toLowerCase()),t){case"html":return i=d(e),n.test(e)||(o=i.getElementsByTagName("head")[0])&&o.parentNode.removeChild(o),a.test(e)||(o=i.getElementsByTagName("body")[0])&&o.parentNode.removeChild(o),i.getElementsByTagName("html");case"head":case"body":return l=u(e).getElementsByTagName(t),a.test(e)&&n.test(e)?l[0].parentNode.childNodes:l;default:return f?f(e):u(e,"body").getElementsByTagName("body")[0].childNodes}}},CC3I:function(e,t,i){var o=i("Lc7W");e.exports=function(e,t){var i,r=null;if(!e||"string"!=typeof e)return r;for(var n,a,l=o(e),s="function"==typeof t,c=0,u=l.length;c<u;c++)n=(i=l[c]).property,a=i.value,s?t(n,a,i):a&&(r||(r={}),r[n]=a);return r}},F3Dj:function(e,t){e.exports={CASE_SENSITIVE_TAG_NAMES:["animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussainBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","linearGradient","radialGradient","textPath"]}},GkXj:function(e,t,i){i("pJf4"),i("sC2a");var o=i("qpZ2"),r=i("MHQ9");function n(e){return r.PRESERVE_CUSTOM_ATTRIBUTES&&"tag"===e.type&&r.isCustomComponent(e.name,e.attribs)}e.exports=function e(t,r){for(var a,l,s,c,u=(r=r||{}).library||i("q1tI"),d=u.cloneElement,m=u.createElement,p=u.isValidElement,h=[],f="function"==typeof r.replace,y=r.trim,g=0,v=t.length;g<v;g++)if(a=t[g],f&&p(l=r.replace(a)))v>1&&(l=d(l,{key:l.key||g})),h.push(l);else if("text"!==a.type){switch(s=a.attribs,n(a)||(s=o(a.attribs)),c=null,a.type){case"script":case"style":a.children[0]&&(s.dangerouslySetInnerHTML={__html:a.children[0].data});break;case"tag":"textarea"===a.name&&a.children[0]?s.defaultValue=a.children[0].data:a.children&&a.children.length&&(c=e(a.children,r));break;default:continue}v>1&&(s.key=g),h.push(m(a.name,s,c))}else y?a.data.trim()&&h.push(a.data):h.push(a.data);return 1===h.length?h[0]:h}},Lc7W:function(e,t,i){i("sC2a"),i("Ll4R");var o=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,n=/^\s*/,a=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,l=/^:\s*/,s=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,c=/^[;\s]*/,u=/^\s+|\s+$/g;function d(e){return e?e.replace(u,""):""}e.exports=function(e,t){if("string"!=typeof e)throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var i=1,u=1;function m(e){var t=e.match(r);t&&(i+=t.length);var o=e.lastIndexOf("\n");u=~o?e.length-o:u+e.length}function p(){var e={line:i,column:u};return function(t){return t.position=new h(e),v(),t}}function h(e){this.start=e,this.end={line:i,column:u},this.source=t.source}h.prototype.content=e;var f=[];function y(o){var r=new Error(t.source+":"+i+":"+u+": "+o);if(r.reason=o,r.filename=t.source,r.line=i,r.column=u,r.source=e,!t.silent)throw r;f.push(r)}function g(t){var i=t.exec(e);if(i){var o=i[0];return m(o),e=e.slice(o.length),i}}function v(){g(n)}function w(e){var t;for(e=e||[];t=b();)!1!==t&&e.push(t);return e}function b(){var t=p();if("/"==e.charAt(0)&&"*"==e.charAt(1)){for(var i=2;""!=e.charAt(i)&&("*"!=e.charAt(i)||"/"!=e.charAt(i+1));)++i;if(i+=2,""===e.charAt(i-1))return y("End of comment missing");var o=e.slice(2,i-2);return u+=2,m(o),e=e.slice(i),u+=2,t({type:"comment",comment:o})}}function x(){var e=p(),t=g(a);if(t){if(b(),!g(l))return y("property missing ':'");var i=g(s),r=e({type:"declaration",property:d(t[0].replace(o,"")),value:i?d(i[0].replace(o,"")):""});return g(c),r}}return v(),function(){var e,t=[];for(w(t);e=x();)!1!==e&&(t.push(e),w(t));return t}()}},MHQ9:function(e,t,i){i("HQhv"),i("sC2a");var o=i("q1tI"),r=/-([a-z])/g,n=/^--[a-zA-Z0-9-]+$|^[^-]+$/;var a=o.version.split(".")[0]>=16;e.exports={PRESERVE_CUSTOM_ATTRIBUTES:a,camelCase:function(e){if("string"!=typeof e)throw new TypeError("First argument must be a string");return n.test(e)?e:e.toLowerCase().replace(r,(function(e,t){return t.toUpperCase()}))},invertObject:function(e,t){if(!e||"object"!=typeof e)throw new TypeError("First argument must be an object");var i,o,r="function"==typeof t,n={},a={};for(i in e)o=e[i],r&&(n=t(i,o))&&2===n.length?a[n[0]]=n[1]:"string"==typeof o&&(a[o]=i);return a},isCustomComponent:function(e,t){if(-1===e.indexOf("-"))return t&&"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}}},"N3/Y":function(e,t){e.exports={MUST_USE_PROPERTY:1,HAS_BOOLEAN_VALUE:4,HAS_NUMERIC_VALUE:8,HAS_POSITIVE_NUMERIC_VALUE:24,HAS_OVERLOADED_BOOLEAN_VALUE:32}},QIE6:function(e,t,i){i("sC2a"),i("Ll4R");var o=i("7MhH"),r=i("wJvl"),n=r.formatDOM,a=r.isIE(9),l=/<(![a-zA-Z\s]+)>/;e.exports=function(e){if("string"!=typeof e)throw new TypeError("First argument must be a string");if(!e)return[];var t,i=e.match(l);return i&&i[1]&&(t=i[1],a&&(e=e.replace(i[0],""))),n(o(e),null,t)}},Xtjs:function(e,t,i){"use strict";i.d(t,"a",(function(){return A}));var o=i("q1tI"),r=i.n(o),n=i("vOnD"),a=i("69MA"),l=i("rzzf"),s=i("PsZR"),c=i("76ZC"),u=i.n(c),d=(i("xmJs"),n.default.div.withConfig({displayName:"FormStepSuccess__FlexContainer",componentId:"bpqi8q-0"})(["display:flex;max-width:77.5rem;flex-wrap:wrap;"])),m=n.default.div.withConfig({displayName:"FormStepSuccess__FormSuccess",componentId:"bpqi8q-1"})(["font-family:museo-sans,sans-serif;display:flex;flex-direction:column;margin-top:10.5rem;margin-bottom:6.25rem;@media only screen and (max-width:870px){margin-top:3.935rem;margin-bottom:3.125rem;}@media only screen and (max-width:1299px){margin-left:0.938rem;margin-right:0.938rem;}"]),p=n.default.div.withConfig({displayName:"FormStepSuccess__HeaderWrapper",componentId:"bpqi8q-2"})(["text-align:center;@media only screen and (max-width:768px){text-align:left;}"]),h=n.default.p.withConfig({displayName:"FormStepSuccess__FormSuccessHeader",componentId:"bpqi8q-3"})(["font-family:Intro,sans-serif;font-size:1.125rem;color:",";margin-bottom:0.9375rem;@media only screen and (max-width:870px){font-size:0.9375rem;line-height:1.375rem;margin-bottom:0.9375rem;}"],a.a.blue_darker),f=n.default.h1.withConfig({displayName:"FormStepSuccess__FormSuccessTitle",componentId:"bpqi8q-4"})(["font-size:1.875rem;font-weight:900;line-height:2.5rem;margin:0;color:",";@media only screen and (max-width:870px){margin-bottom:1.875rem;font-size:1.25rem;line-height:1.75rem;}"],a.a.blue_17_percent),y=n.default.div.withConfig({displayName:"FormStepSuccess__FormSuccessContent",componentId:"bpqi8q-5"})(["display:grid;grid-template-columns:auto auto;justify-content:center;grid-column-gap:0.625rem;grid-row-gap:3.5rem;margin-top:4.25rem;@media only screen and (min-width:1300px){grid-row-gap:7.5rem;}@media only screen and (max-width:870px){display:flex;flex-direction:column;grid-row-gap:0;margin-top:0;}"]),g=n.default.div.withConfig({displayName:"FormStepSuccess__FlexRow",componentId:"bpqi8q-6"})(["display:flex;flex-wrap:wrap;flex-basis:100%;justify-content:space-between;margin-bottom:0;@media only screen and (min-width:871px){order:unset !important;margin-bottom:",";}"],(function(e){return e.paragraphSpacing?"3.125rem":e.lastRow?"0":"7.5rem"})),v=n.default.div.withConfig({displayName:"FormStepSuccess__FormSuccessParaWrapper",componentId:"bpqi8q-7"})(["display:flex;justify-content:center;align-items:center;flex-basis:",";@media only screen and (min-width:871px){order:unset !important;}@media only screen and (max-width:870px){flex-basis:100%;}"],(function(e){return e.singleColInRow?"100%":"47.5%"})),w=n.default.div.withConfig({displayName:"FormStepSuccess__FormSuccessPara",componentId:"bpqi8q-8"})(["font-size:1rem;line-height:1.75rem;@media only screen and (min-width:992px){max-width:",";}@media only screen and (max-width:1299px){margin-bottom:",";font-size:0.9375rem;line-height:1.375rem;}"],(function(e){return e.fullWidthColumn?"55.563rem":"27.563rem"}),(function(e){return e.fullWidthColumn?0:"3.125rem"})),b=n.default.div.withConfig({displayName:"FormStepSuccess__StyledImage",componentId:"bpqi8q-9"})(["max-width:38.75rem;@media only screen and (max-width:1300px){max-width:32.5rem;}@media only screen and (max-width:870px){max-width:100%;}"]),x=(Object(n.default)(b).withConfig({displayName:"FormStepSuccess__StyledImage2",componentId:"bpqi8q-10"})(["@media only screen and (max-width:870px){order:4;}"]),n.default.div.withConfig({displayName:"FormStepSuccess__ContainerFormStep",componentId:"bpqi8q-11"})(["display:",";position:absolute;margin:auto;left:0;right:0;top:21.5625rem;align-items:'center';width:52.3125rem;@media screen and (max-width:870px){width:10.8125rem;top:11.25rem;}"],(function(e){return e.isFormStepVisible?"block":"none"}))),S=n.default.div.withConfig({displayName:"FormStepSuccess__FormStepIndicatorPositioningDiv",componentId:"bpqi8q-12"})(["display:flex;justify-content:center;height:5.9375rem;border-radius:0.625rem;box-shadow:0 1.25rem 3.125rem #012F571A;box-sizing:border-box;background-color:",";@media screen and (max-width:870px){height:2.8125rem;width:10.8125rem;box-shadow:0 1.25rem 3.125rem #012F571A;box-sizing:border-box;}"],a.a.white),A=function(e){var t,i,o=e.isFormStepVisible;return r.a.createElement(m,null,r.a.createElement(p,null,r.a.createElement(h,null,e.data.sectionHeading),r.a.createElement(f,null,e.data.sectionTitle)),r.a.createElement(y,null,r.a.createElement(x,{isFormStepVisible:o},r.a.createElement(S,null,r.a.createElement(s.a,{activateItemProp:4}))),r.a.createElement(d,null,null==e||null===(t=e.data)||void 0===t||null===(i=t.rows)||void 0===i?void 0:i.map((function(t,i){var o,n,a=e.data.rows.length-1===i;if((null==t?void 0:t.col1)&&(null==t?void 0:t.col2)){var l,s,c,d,m=(null===(l=t.col1)||void 0===l?void 0:l.fullWidth)&&!(null===(s=t.col2)||void 0===s?void 0:s.fullWidth)?2:0;return r.a.createElement(g,{lastRow:a},r.a.createElement(v,{style:{order:m}},r.a.createElement(w,{className:"content-data-css",fullWidthColumn:null===(c=t.col1)||void 0===c?void 0:c.fullWidth},u()(""+t.col1.html))),r.a.createElement(v,{style:{order:1}},r.a.createElement(w,{className:"content-data-css",fullWidthColumn:null===(d=t.col2)||void 0===d?void 0:d.fullWidth},u()(""+t.col2.html))))}return(null==t?void 0:t.col1)?r.a.createElement(g,{paragraphSpacing:!0,lastRow:a},r.a.createElement(v,{singleColInRow:!0,style:{order:0}},r.a.createElement(w,{className:"content-data-css",fullWidthColumn:null===(o=t.col1)||void 0===o?void 0:o.fullWidth},u()(""+t.col1.html)))):(null==t?void 0:t.col2)?r.a.createElement(g,{paragraphSpacing:!0,lastRow:a},r.a.createElement(v,{singleColInRow:!0,style:{order:0}},r.a.createElement(w,{className:"content-data-css",fullWidthColumn:null===(n=t.col2)||void 0===n?void 0:n.fullWidth},u()(""+t.col2.html)))):void 0})))))};t.b=function(){return r.a.createElement(A,{isFormStepVisible:!0,data:l.formStepSuccessData})}},"eKC+":function(e,t,i){i("klQ5");var o=i("nYr6"),r=i("xp0l"),n=i("N3/Y"),a=n.MUST_USE_PROPERTY,l=n.HAS_BOOLEAN_VALUE,s=n.HAS_NUMERIC_VALUE,c=n.HAS_POSITIVE_NUMERIC_VALUE,u=n.HAS_OVERLOADED_BOOLEAN_VALUE;function d(e,t){return(e&t)===t}function m(e,t,i){var o,r,n,m=e.Properties,p=e.DOMAttributeNames;for(r in m)o=p[r]||(i?r:r.toLowerCase()),n=m[r],t[o]={attributeName:o,propertyName:r,mustUseProperty:d(n,a),hasBooleanValue:d(n,l),hasNumericValue:d(n,s),hasPositiveNumericValue:d(n,c),hasOverloadedBooleanValue:d(n,u)}}var p={};m(o,p);var h={};m(r,h,!0);var f={};m(o,f),m(r,f,!0);e.exports={html:p,svg:h,properties:f,isCustomAttribute:RegExp.prototype.test.bind(new RegExp("^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"))}},nYr6:function(e,t){e.exports={Properties:{autoFocus:4,accept:0,acceptCharset:0,accessKey:0,action:0,allowFullScreen:4,allowTransparency:0,alt:0,as:0,async:4,autoComplete:0,autoPlay:4,capture:4,cellPadding:0,cellSpacing:0,charSet:0,challenge:0,checked:5,cite:0,classID:0,className:0,cols:24,colSpan:0,content:0,contentEditable:0,contextMenu:0,controls:4,controlsList:0,coords:0,crossOrigin:0,data:0,dateTime:0,default:4,defer:4,dir:0,disabled:4,download:32,draggable:0,encType:0,form:0,formAction:0,formEncType:0,formMethod:0,formNoValidate:4,formTarget:0,frameBorder:0,headers:0,height:0,hidden:4,high:0,href:0,hrefLang:0,htmlFor:0,httpEquiv:0,icon:0,id:0,inputMode:0,integrity:0,is:0,keyParams:0,keyType:0,kind:0,label:0,lang:0,list:0,loop:4,low:0,manifest:0,marginHeight:0,marginWidth:0,max:0,maxLength:0,media:0,mediaGroup:0,method:0,min:0,minLength:0,multiple:5,muted:5,name:0,nonce:0,noValidate:4,open:4,optimum:0,pattern:0,placeholder:0,playsInline:4,poster:0,preload:0,profile:0,radioGroup:0,readOnly:4,referrerPolicy:0,rel:0,required:4,reversed:4,role:0,rows:24,rowSpan:8,sandbox:0,scope:0,scoped:4,scrolling:0,seamless:4,selected:5,shape:0,size:24,sizes:0,span:24,spellCheck:0,src:0,srcDoc:0,srcLang:0,srcSet:0,start:8,step:0,style:0,summary:0,tabIndex:0,target:0,title:0,type:0,useMap:0,value:0,width:0,wmode:0,wrap:0,about:0,datatype:0,inlist:0,prefix:0,property:0,resource:0,typeof:0,vocab:0,autoCapitalize:0,autoCorrect:0,autoSave:0,color:0,itemProp:0,itemScope:4,itemType:0,itemID:0,itemRef:0,results:0,security:0,unselectable:0},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"}}},qpZ2:function(e,t,i){var o=i("eKC+"),r=i("CC3I"),n=i("MHQ9"),a=n.camelCase,l=o.html,s=o.svg,c=o.isCustomAttribute,u=Object.prototype.hasOwnProperty;e.exports=function(e){var t,i,o,d;e=e||{};var m={};for(t in e)o=e[t],c(t)?m[t]=o:(i=t.toLowerCase(),u.call(l,i)?m[(d=l[i]).propertyName]=!!(d.hasBooleanValue||d.hasOverloadedBooleanValue&&!o)||o:u.call(s,t)?m[(d=s[t]).propertyName]=o:n.PRESERVE_CUSTOM_ATTRIBUTES&&(m[t]=o));return null!=e.style&&(m.style=function(e){var t={};e&&r(e,(function(e,i){e&&i&&(t[a(e)]=i)}));return t}(e.style)),m}},rzzf:function(e){e.exports=JSON.parse('{"formStepSuccessData":{"sectionHeading":"WHAT\'S NEXT","sectionTitle":"Your membership application is complete!","rows":[{"col1":{"html":"<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquia. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint.</p>"},"col2":{"html":"<img src=\'https://cdn.gamer-network.net/2019/usgamer/Pokemon-Sword-and-Shield-Pikachu-Screenshot.jpg/EG11/thumbnail/1920x1080/format/jpg/quality/65/pokemon-sword-and-shield-gives-you-an-up-close-look-at-a-pikachu-squirming-against-its-inevitable-end.jpg\'/>","fullWidth":true}},{"col1":{"html":"<img src=\'https://i.ytimg.com/vi/X6AhCmgcxoY/maxresdefault.jpg\'/>","fullWidth":true},"col2":{"html":"<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquia. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint.</p>"}}]},"disclaimerData":{"sectionHeading":"Disclaimer Page","sectionTitle":"Your membership application is complete!","rows":[{"col1":{"html":"<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquia. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint.</p>"}}]},"privacyPage":{"sectionHeading":false,"sectionTitle":"Privacy Policy","rows":[{"col1":{"html":"<h2>Introduction</h2><p>The SDA collects personal information in order to conduct its business. The SDA operates in the political, legal, industrial and social spheres.</p><p>The SDA is committed to protecting your privacy and providing you with information and services relevant to you. The SDA complies with the Privacy Act 1988 (Cth) (Privacy Act) and the Australian Privacy Principles (APPs). This Privacy Policy (Policy) should be read in conjunction with the Privacy Act and the APPs.</p>","fullWidth":true}},{"col1":{"html":"<h2>How this Policy applies</h2><p>This Policy applies to personal information the SDA collects from you:</p><ul><li>via one of our websites;</li><li>via social media;</li><li>via any computer or mobile application or program developed or promoted by the SDA;</li><li>via telephone;</li><li>via email;</li><li>via fax;</li><li>in person; and/or</li><li>in writing.</li><li>This Policy also applies to personal information the SDA collects from the Australian Council of Trade Unions (ACTU) or any other third party, about you.</li></ul>","fullWidth":true}},{"col1":{"html":"<h2>SDA websites</h2><p>The SDA national websites collect various types of information. The first type is anonymous information. The web server makes a record of your visit and logs the following information for statistical purposes:</p><ul><li>the user’s server address;</li><li>the user’s top level domain name (e.g. com, .gov, .net, .au, etc.);</li><li>the date and time of the visit to the site;</li><li>the pages accessed and documents downloaded;</li><li>the previous site visited; and</li><li>the type of browser used.</li><li>No attempt will be made to identify users or their browsing activities except, in the unlikely event of an investigation, where a law enforcement agency may exercise a warrant to inspect the internet service provider’s logs.</li></ul><p>Cookies may be used on the SDA’s website.</p><p>Our websites may contain links to other websites and social media pages including Facebook, Twitter and LinkedIn. We are not responsible for the privacy policies of the entities responsible for those websites and we recommend that you review the privacy policies applicable to any other websites you visit.</p>","fullWidth":true}},{"col1":{"html":"<h2>The kinds of information the SDA may collect</h2><p>From time to time you may voluntarily supply your personal information to the SDA. The SDA will record your e-mail address if you send us a message, subscribe to an email newsletter, or complete a form if this information is requested.</p><p>When you provide your personal information, it allows us, for example, assist you with industrial relations and employment queries, inform you about industrial, social and political campaigns, and accept you application for membership. You may supply personal information to the SDA by, for example, responding to a survey, filling in a meeting attendance sheet, taking part in a competition,  completing a membership form, discussing your issues with a delegate, or signing up to a campaign. The SDA only collects personal information that is necessary for the SDA to perform its functions and/or activities.</p><p>Depending upon the circumstances you may provide to the SDA, and the SDA may collect, information such as, but not limited to:</p><ul><li>your name;</li><li>your contact details;</li><li>your social media details (e.g. blogs, twitter, Facebook, LinkedIn);</li><li>your gender;</li><li>your marital status;</li><li>your employment details;</li><li>your educational qualifications; and</li><li>your inquiry or complaint details.</li></ul><p>Some personal information is considered sensitive information and includes:</p><ul><li>your political opinions;</li><li>your political party membership (if any);</li><li>your SDA membership (if any);</li><li>your racial or ethnic origin;</li><li>your sexual orientation;</li><li>any disabilities, illnesses or injuries you may have; and/or</li><li>any other health information.</li><li>The Privacy Act allows the SDA to collect sensitive information which relates solely to SDA members or people who have regular contact with the SDA if the sensitive information relates to the SDA’s activities.</li></ul><p>Where you provide information to the SDA in relation to a job application the personal information you provide will only be collected, held, used and disclosed for the purposes of considering your potential employment with the SDA. Where you provide the details of referees, you confirm that you have informed the referees that you are providing their contact information to the SDA and they have consented to the SDA contacting them and discussing the personal information you have provided in relation to the job application.</p><p>We will collect personal information directly from you unless:</p><ul><li>you have consented to the SDA’s collection of your personal information from third parties – for example, from the ACTU, or your representatives; or</li><li>when we are legally required to do so; or</li><li>it is unreasonable or impractical to do so.</li></ul><p>You can choose to interact with us anonymously or by using a pseudonym where it is lawful and practicable. For example, you may wish to participate in a blog or enquire about a particular campaign anonymously or under a pseudonym. Your decision to interact anonymously or by using a pseudonym may affect the level of services we can offer you. For example, we may not be able to assist you with a specific industrial enquiry or investigate a privacy complaint on an anonymous or pseudonymous basis. We will inform you if this is the case and let you know the options available to you.</p><p>If we receive unsolicited personal information about or relating to you and we determine that such information could have been collected in the same manner if we had solicited the information, then we will treat it in the same way as solicited personal information and in accordance with the APPs. Otherwise if we determine that such information could not have been collected in the same manner as solicited personal information, and that information is not contained in a Commonwealth record, we will, if it is lawful and reasonable to do so, destroy the information or de-identify the information.</p>","fullWidth":true}},{"col1":{"html":"<h2>The purposes for which personal information is collected, held, used and disclosed</h2><p>The SDA collects, holds, uses and discloses your personal information to:</p><ul><li>assist you with industrial relations and employment queries;</li><li>inform you about industrial, social and political campaigns;</li><li>inform you about your rights at work;</li><li>inform you about changes to legislation;</li><li>refer you to a legal practitioner, accountant or other professional;</li><li>improve our service delivery;</li><li>manage our relationship with you;</li><li>conduct surveys and research;</li><li>provide educational services and professional development;</li><li>conduct Union elections.</li><li>Using your information for direct marketing</li><li>You consent to our use and disclosure of your personal information for the purposes of direct marketing which may include providing you with information about events, products or services which may be of interest to you;</li></ul><p>If you do not want us to use your personal information for direct marketing purposes, you may elect not to receive direct marketing at the time of providing your personal information.</p>","fullWidth":true}},{"col1":{"html":"<h2>Unsubscribing and opting out</h2><p>If you no longer wish to receive direct marketing or other communications, you may request at any time to cancel your consent to such communications as follows:</p><ul><li>If subscribing to an email newsletter you may “unsubscribe” at any time from the newsletter mailing list;</li><li>The SDA may, from time to time, send you text messages about issues of importance such as events or campaigns. You may “opt out” by texting STOP in reply to a text message from the SDA; or</li><li>You may contact us at any time by mail or email directed to our Privacy Officer.</li></ul>","fullWidth":true}},{"col1":{"html":"<h2>Disclosure of your personal information</h2><p>The SDA may disclose your personal information, in connection with or to further the purposes outlined above, to:</p><ul><li>the ACTU;</li><li>other Australian trade unions;</li><li>affiliated trades halls or labour councils;</li><li>political parties;</li><li>government bodies or agencies (including the Fair Work Commission, the Fair Work Ombudsman, the Australian Tax Office, an anti-discrimination body, a work/occupational health and safety regulator);</li><li>organisations to whom we outsource functions (including information technology providers, print service providers, mail houses);</li><li>otherwise as you have consented; and/or</li><li>otherwise as required by law.</li><li>If any of these organisations are located outside Australia, you expressly consent to us disclosing your personal information to those organisations.</li></ul><p>We take reasonable steps to ensure that each organisation that we disclose your personal information to is committed to protecting your privacy and complies with the Australian Privacy Principles, or is subject to a law or scheme that is at least substantially similar to the way in which the Australian Privacy Principles protect information.</p><p>By providing your personal information to the SDA, you consent to us transferring your personal information to such other organisations.</p>","fullWidth":true}},{"col1":{"html":"<h2>How the SDA holds personal information</h2><p>Wherever reasonably practicable the SDA holds electronic personal information on data servers that are owned and controlled by the SDA in Australia. The data servers are password protected and login secured. However, by providing personal information to the SDA you consent to your information being stored and processed on a data server or data servers (e.g. cloud services) owned by a third party or third parties that may be located outside of Australia. The SDA will take reasonable steps to ensure that any third party providers comply with the APPs.  If personal information is only routed through servers located outside of Australia – this not regarded as a disclosure.</p><p>Wherever reasonably practicable the SDA holds physical personal information in access controlled premises.</p>","fullWidth":true}},{"col1":{"html":"<h2>Government Identifiers</h2><p>We will not adopt as our own identifier a government related identifier of an individual, such as a tax file number or Medicare card number and will only use or disclose a government related identifier where the use or disclosure:</p><ul><li>is reasonably necessary for the SDA to verify your identity for the purposes of our activities or functions;</li><li>is reasonably necessary for the SDA to fulfil its obligations to an agency or a State or Territory authority;</li><li>is required or authorised by or under an Australian law; or</li><li>is reasonably necessary for one or more enforcement related activities conducted by, or on behalf of, an enforcement body.</li></ul>","fullWidth":true}},{"col1":{"html":"<h2>How you may seek access and/or correction to personal information held by the SDA</h2><p>You have the right to request access to your personal information and request that it be updated or corrected. To request access to, correction of, or updating of any personal information held about you, please write to the National Office SDA Branch Secretary at the following address:</p><p>Level 6</br>53 Queen Street</br>Melbourne 3000</p><p>General enquiries can be made via telephone by calling the following number:</p><p>03 8611 7000</p><p>The SDA requires that you provide proof of identity in order to seek access to your personal information. The SDA may charge a reasonable fee where access is provided. The SDA may refuse to provide access if permitted to do so by law or under the APPs. The SDA will seek to provide you with access to your personal information within 30 days of receipt of a valid request and may charge you a reasonable fee for doing so.</p><p>You should contact the SDA when your personal information details change. It is important that we keep our membership details up to date. Please contact your relevant SDA Branch Secretary to update any personal information. The SDA may also take steps to update your personal information by reference to publicly available sources such as telephone directories or electoral rolls.</p>","fullWidth":true}},{"col1":{"html":"<h2>How you may complain about a breach of the APPs</h2><p>To make a complaint about an alleged breach of the APPs please write to or email the relevant SDA Branch Secretary  at one of the following addresses:</p><p>All complaints must be written. Please provide all details about your complaint as well as any supporting documentation to the Privacy Officer.</p>","fullWidth":true}},{"col1":{"html":"<h2>How the SDA will deal with complaints</h2><p>The SDA will seek to deal with privacy complaints as follows:</p><ul><li>complaints will be treated seriously;</li><li>complaints will be dealt with promptly;</li><li>complaints will be dealt with confidentially;</li><li>complaints will be investigated by the Privacy Officer;</li></ul><p>The outcome of an investigation will be provided to the complainant where the complainant has provided proof of identity. The SDA will seek to respond within 30 days of receipt of a valid complaint.</p>","fullWidth":true}},{"col1":{"html":"<h2>Variations to the Policy</h2><p>This Policy may be varied from time to time and an updated version will be posted on the SDA’s websites. Please check our websites regularly to ensure that you have the most recent version of the Policy.</p><p>Last Updated 25 May 2017.<p>","fullWidth":true}}]}}')},wJvl:function(e,t,i){i("pJf4");for(var o,r=i("F3Dj").CASE_SENSITIVE_TAG_NAMES,n={},a=0,l=r.length;a<l;a++)o=r[a],n[o.toLowerCase()]=o;function s(e){for(var t,i={},o=0,r=e.length;o<r;o++)i[(t=e[o]).name]=t.value;return i}function c(e){var t=function(e){return n[e]}(e=e.toLowerCase());return t||e}e.exports={formatAttributes:s,formatDOM:function e(t,i,o){i=i||null;for(var r,n,a,l=[],u=0,d=t.length;u<d;u++){switch(r=t[u],a={next:null,prev:l[u-1]||null,parent:i},(n=l[u-1])&&(n.next=a),"#"!==r.nodeName[0]&&(a.name=c(r.nodeName),a.attribs={},r.attributes&&r.attributes.length&&(a.attribs=s(r.attributes))),r.nodeType){case 1:"script"===a.name||"style"===a.name?a.type=a.name:a.type="tag",a.children=e(r.childNodes,a);break;case 3:a.type="text",a.data=r.nodeValue;break;case 8:a.type="comment",a.data=r.nodeValue}l.push(a)}return o&&(l.unshift({name:o.substring(0,o.indexOf(" ")).toLowerCase(),data:o,type:"directive",next:l[0]?l[0]:null,prev:null,parent:i}),l[1]&&(l[1].prev=l[0])),l},isIE:function(e){return e?document.documentMode===e:/(MSIE |Trident\/|Edge\/)/.test(navigator.userAgent)}}},xmJs:function(e,t,i){},xp0l:function(e,t){e.exports={Properties:{accentHeight:0,accumulate:0,additive:0,alignmentBaseline:0,allowReorder:0,alphabetic:0,amplitude:0,arabicForm:0,ascent:0,attributeName:0,attributeType:0,autoReverse:0,azimuth:0,baseFrequency:0,baseProfile:0,baselineShift:0,bbox:0,begin:0,bias:0,by:0,calcMode:0,capHeight:0,clip:0,clipPath:0,clipRule:0,clipPathUnits:0,colorInterpolation:0,colorInterpolationFilters:0,colorProfile:0,colorRendering:0,contentScriptType:0,contentStyleType:0,cursor:0,cx:0,cy:0,d:0,decelerate:0,descent:0,diffuseConstant:0,direction:0,display:0,divisor:0,dominantBaseline:0,dur:0,dx:0,dy:0,edgeMode:0,elevation:0,enableBackground:0,end:0,exponent:0,externalResourcesRequired:0,fill:0,fillOpacity:0,fillRule:0,filter:0,filterRes:0,filterUnits:0,floodColor:0,floodOpacity:0,focusable:0,fontFamily:0,fontSize:0,fontSizeAdjust:0,fontStretch:0,fontStyle:0,fontVariant:0,fontWeight:0,format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:0,glyphOrientationHorizontal:0,glyphOrientationVertical:0,glyphRef:0,gradientTransform:0,gradientUnits:0,hanging:0,horizAdvX:0,horizOriginX:0,ideographic:0,imageRendering:0,in:0,in2:0,intercept:0,k:0,k1:0,k2:0,k3:0,k4:0,kernelMatrix:0,kernelUnitLength:0,kerning:0,keyPoints:0,keySplines:0,keyTimes:0,lengthAdjust:0,letterSpacing:0,lightingColor:0,limitingConeAngle:0,local:0,markerEnd:0,markerMid:0,markerStart:0,markerHeight:0,markerUnits:0,markerWidth:0,mask:0,maskContentUnits:0,maskUnits:0,mathematical:0,mode:0,numOctaves:0,offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:0,overlineThickness:0,paintOrder:0,panose1:0,pathLength:0,patternContentUnits:0,patternTransform:0,patternUnits:0,pointerEvents:0,points:0,pointsAtX:0,pointsAtY:0,pointsAtZ:0,preserveAlpha:0,preserveAspectRatio:0,primitiveUnits:0,r:0,radius:0,refX:0,refY:0,renderingIntent:0,repeatCount:0,repeatDur:0,requiredExtensions:0,requiredFeatures:0,restart:0,result:0,rotate:0,rx:0,ry:0,scale:0,seed:0,shapeRendering:0,slope:0,spacing:0,specularConstant:0,specularExponent:0,speed:0,spreadMethod:0,startOffset:0,stdDeviation:0,stemh:0,stemv:0,stitchTiles:0,stopColor:0,stopOpacity:0,strikethroughPosition:0,strikethroughThickness:0,string:0,stroke:0,strokeDasharray:0,strokeDashoffset:0,strokeLinecap:0,strokeLinejoin:0,strokeMiterlimit:0,strokeOpacity:0,strokeWidth:0,surfaceScale:0,systemLanguage:0,tableValues:0,targetX:0,targetY:0,textAnchor:0,textDecoration:0,textRendering:0,textLength:0,to:0,transform:0,u1:0,u2:0,underlinePosition:0,underlineThickness:0,unicode:0,unicodeBidi:0,unicodeRange:0,unitsPerEm:0,vAlphabetic:0,vHanging:0,vIdeographic:0,vMathematical:0,values:0,vectorEffect:0,version:0,vertAdvY:0,vertOriginX:0,vertOriginY:0,viewBox:0,viewTarget:0,visibility:0,widths:0,wordSpacing:0,writingMode:0,x:0,xHeight:0,x1:0,x2:0,xChannelSelector:0,xlinkActuate:0,xlinkArcrole:0,xlinkHref:0,xlinkRole:0,xlinkShow:0,xlinkTitle:0,xlinkType:0,xmlBase:0,xmlns:0,xmlnsXlink:0,xmlLang:0,xmlSpace:0,y:0,y1:0,y2:0,yChannelSelector:0,z:0,zoomAndPan:0},DOMAttributeNames:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDasharray:"stroke-dasharray",strokeDashoffset:"stroke-dashoffset",strokeLinecap:"stroke-linecap",strokeLinejoin:"stroke-linejoin",strokeMiterlimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",xlinkActuate:"xlink:actuate",xlinkArcrole:"xlink:arcrole",xlinkHref:"xlink:href",xlinkRole:"xlink:role",xlinkShow:"xlink:show",xlinkTitle:"xlink:title",xlinkType:"xlink:type",xmlBase:"xml:base",xmlnsXlink:"xmlns:xlink",xmlLang:"xml:lang",xmlSpace:"xml:space"}}}}]);
//# sourceMappingURL=3fe456e1b9e9037e282ecf85b1eb7635941e79bd-48a722bbbbced599570a.js.map