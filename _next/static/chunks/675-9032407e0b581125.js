(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[675],{8045:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(u){c=!0,i=u}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return o}}(t,e)||c(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||c(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}e.default=function(t){var e=t.src,n=t.sizes,r=t.unoptimized,c=void 0!==r&&r,u=t.priority,p=void 0!==u&&u,v=t.loading,O=t.lazyRoot,z=void 0===O?null:O,k=t.lazyBoundary,x=void 0===k?"200px":k,E=t.className,I=t.quality,P=t.width,R=t.height,_=t.objectFit,M=t.objectPosition,q=t.onLoadingComplete,C=t.loader,N=void 0===C?j:C,D=t.placeholder,L=void 0===D?"empty":D,W=t.blurDataURL,U=function(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}(t,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),B=l.useRef(null),H=l.useContext(g.ImageConfigContext),T=l.useMemo((function(){var t=y||H||d.imageConfigDefault,e=a(t.deviceSizes).concat(a(t.imageSizes)).sort((function(t,e){return t-e})),n=t.deviceSizes.sort((function(t,e){return t-e}));return m({},t,{allSizes:e,deviceSizes:n})}),[H]),F=U,G=n?"responsive":"intrinsic";"layout"in F&&(F.layout&&(G=F.layout),delete F.layout);var J="";if(function(t){return"object"===typeof t&&(w(t)||function(t){return void 0!==t.src}(t))}(e)){var V=w(e)?e.default:e;if(!V.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(V)));if(W=W||V.blurDataURL,J=V.src,(!G||"fill"!==G)&&(R=R||V.height,P=P||V.width,!V.height||!V.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(V)))}e="string"===typeof e?e:J;var $=S(P),Q=S(R),K=S(I),X=!p&&("lazy"===v||"undefined"===typeof v);(e.startsWith("data:")||e.startsWith("blob:"))&&(c=!0,X=!1);h.has(e)&&(X=!1);0;var Y,Z=o(f.useIntersection({rootRef:z,rootMargin:x,disabled:!X}),2),tt=Z[0],et=Z[1],nt=!X||et,rt={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},it={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ot=!1,at={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:_,objectPosition:M},ct="blur"===L?{filter:"blur(20px)",backgroundSize:_||"cover",backgroundImage:'url("'.concat(W,'")'),backgroundPosition:M||"0% 0%"}:{};if("fill"===G)rt.display="block",rt.position="absolute",rt.top=0,rt.left=0,rt.bottom=0,rt.right=0;else if("undefined"!==typeof $&&"undefined"!==typeof Q){var ut=Q/$,lt=isNaN(ut)?"100%":"".concat(100*ut,"%");"responsive"===G?(rt.display="block",rt.position="relative",ot=!0,it.paddingTop=lt):"intrinsic"===G?(rt.display="inline-block",rt.position="relative",rt.maxWidth="100%",ot=!0,it.maxWidth="100%",Y="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat($,"%27%20height=%27").concat(Q,"%27/%3e")):"fixed"===G&&(rt.display="inline-block",rt.position="relative",rt.width=$,rt.height=Q)}else 0;var st={src:b,srcSet:void 0,sizes:void 0};nt&&(st=A({config:T,src:e,unoptimized:c,layout:G,width:$,quality:K,sizes:n,loader:N}));var dt=e;0;var ft;0;var gt=(i(ft={},"imagesrcset",st.srcSet),i(ft,"imagesizes",st.sizes),ft),pt=l.default.useLayoutEffect,mt=l.useRef(q);return l.useEffect((function(){mt.current=q}),[q]),pt((function(){tt(B.current)}),[tt]),l.useEffect((function(){!function(t,e,n,r,i){var o=function(){var n=t.current;n&&(n.src!==b&&("decode"in n?n.decode():Promise.resolve()).catch((function(){})).then((function(){if(t.current&&(h.add(e),"blur"===r&&(n.style.filter="",n.style.backgroundSize="",n.style.backgroundImage="",n.style.backgroundPosition=""),i.current)){var o=n.naturalWidth,a=n.naturalHeight;i.current({naturalWidth:o,naturalHeight:a})}})))};t.current&&(t.current.complete?o():t.current.onload=o)}(B,dt,0,L,mt)}),[dt,G,L,nt]),l.default.createElement("span",{style:rt},ot?l.default.createElement("span",{style:it},Y?l.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:Y}):null):null,l.default.createElement("img",Object.assign({},F,st,{decoding:"async","data-nimg":G,className:E,ref:B,style:m({},at,ct)})),X&&l.default.createElement("noscript",null,l.default.createElement("img",Object.assign({},F,A({config:T,src:e,unoptimized:c,layout:G,width:$,quality:K,sizes:n,loader:N}),{decoding:"async","data-nimg":G,style:at,className:E,loading:v||"lazy"}))),p?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+st.src+st.srcSet+st.sizes,rel:"preload",as:"image",href:st.srcSet?void 0:st.src},gt))):null)};var u,l=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};r.get||r.set?Object.defineProperty(e,n,r):e[n]=t[n]}return e.default=t,e}(n(7294)),s=(u=n(5443))&&u.__esModule?u:{default:u},d=n(5809),f=n(7190),g=n(9977);function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m(t){for(var e=arguments,n=function(n){var r=null!=e[n]?e[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),i.forEach((function(e){p(t,e,r[e])}))},r=1;r<arguments.length;r++)n(r);return t}var y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/",loader:"akamai"},h=new Set,b=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var v=new Map([["default",function(t){var e=t.config,n=t.src,r=t.width,i=t.quality;0;if(n.endsWith(".svg")&&!e.dangerouslyAllowSVG)return n;return"".concat(e.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(t){var e=t.config,n=t.src,r=t.width,i=t.quality,o=new URL("".concat(e.path).concat(O(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(t){var e=t.config,n=t.src,r=t.width,i=t.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(e.path).concat(o).concat(O(n))}],["akamai",function(t){var e=t.config,n=t.src,r=t.width;return"".concat(e.path).concat(O(n),"?imwidth=").concat(r)}],["custom",function(t){var e=t.src;throw new Error('Image with src "'.concat(e,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function w(t){return void 0!==t.default}function A(t){var e=t.config,n=t.src,r=t.unoptimized,i=t.layout,o=t.width,c=t.quality,u=t.sizes,l=t.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var s=function(t,e,n,r){var i=t.deviceSizes,o=t.allSizes;if(r&&("fill"===n||"responsive"===n)){for(var c,u=/(^|\s)(1?\d?\d)vw/g,l=[];c=u.exec(r);c)l.push(parseInt(c[2]));if(l.length){var s,d=.01*(s=Math).min.apply(s,a(l));return{widths:o.filter((function(t){return t>=i[0]*d})),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof e||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:a(new Set([e,2*e].map((function(t){return o.find((function(e){return e>=t}))||o[o.length-1]})))),kind:"x"}}(e,o,i,u),d=s.widths,f=s.kind,g=d.length-1;return{sizes:u||"w"!==f?u:"100vw",srcSet:d.map((function(t,r){return"".concat(l({config:e,src:n,quality:c,width:t})," ").concat("w"===f?t:r+1).concat(f)})).join(", "),src:l({config:e,src:n,quality:c,width:d[g]})}}function S(t){return"number"===typeof t?t:"string"===typeof t?parseInt(t,10):void 0}function j(t){var e,n=(null===(e=t.config)||void 0===e?void 0:e.loader)||"default",r=v.get(n);if(r)return r(t);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(n))}function O(t){return"/"===t[0]?t.slice(1):t}},7190:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(u){c=!0,i=u}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return o}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(e,"__esModule",{value:!0}),e.useIntersection=function(t){var e=t.rootRef,n=t.rootMargin,r=t.disabled||!c,s=o.useRef(),d=i(o.useState(!1),2),f=d[0],g=d[1],p=i(o.useState(e?e.current:null),2),m=p[0],y=p[1],h=o.useCallback((function(t){s.current&&(s.current(),s.current=void 0),r||f||t&&t.tagName&&(s.current=function(t,e,n){var r=function(t){var e,n={root:t.root||null,margin:t.rootMargin||""},r=l.find((function(t){return t.root===n.root&&t.margin===n.margin}));r?e=u.get(r):(e=u.get(n),l.push(n));if(e)return e;var i=new Map,o=new IntersectionObserver((function(t){t.forEach((function(t){var e=i.get(t.target),n=t.isIntersecting||t.intersectionRatio>0;e&&n&&e(n)}))}),t);return u.set(n,e={id:n,observer:o,elements:i}),e}(n),i=r.id,o=r.observer,a=r.elements;return a.set(t,e),o.observe(t),function(){if(a.delete(t),o.unobserve(t),0===a.size){o.disconnect(),u.delete(i);var e=l.findIndex((function(t){return t.root===i.root&&t.margin===i.margin}));e>-1&&l.splice(e,1)}}}(t,(function(t){return t&&g(t)}),{root:m,rootMargin:n}))}),[r,m,n,f]);return o.useEffect((function(){if(!c&&!f){var t=a.requestIdleCallback((function(){return g(!0)}));return function(){return a.cancelIdleCallback(t)}}}),[f]),o.useEffect((function(){e&&y(e.current)}),[e]),[h,f]};var o=n(7294),a=n(9311),c="undefined"!==typeof IntersectionObserver;var u=new Map,l=[]},5675:function(t,e,n){t.exports=n(8045)}}]);