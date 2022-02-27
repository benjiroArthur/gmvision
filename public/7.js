<<<<<<< Updated upstream
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{26:function(t,e,o){var i,n;function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}void 0===(n="function"==typeof(i=function(t,e,o){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t){var e=t.getBoundingClientRect(),o={};for(var i in e)o[i]=e[i];if(t.ownerDocument!==document){var r=t.ownerDocument.defaultView.frameElement;if(r){var s=n(r);o.top+=s.top,o.bottom+=s.top,o.left+=s.left,o.right+=s.left}}return o}function s(t){var e=(getComputedStyle(t)||{}).position,o=[];if("fixed"===e)return[t];for(var i=t;(i=i.parentNode)&&i&&1===i.nodeType;){var n=void 0;try{n=getComputedStyle(i)}catch(t){}if(null==n)return o.push(i),o;var r=n,s=r.overflow,a=r.overflowX,l=r.overflowY;/(auto|scroll)/.test(s+l+a)&&("absolute"!==e||["relative","absolute","fixed"].indexOf(n.position)>=0)&&o.push(i)}return o.push(t.ownerDocument.body),t.ownerDocument!==document&&o.push(t.ownerDocument.defaultView),o}function a(){A&&document.body.removeChild(A),A=null}function l(t){var e=void 0;t===document?(e=document,t=document.documentElement):e=t.ownerDocument;var o=e.documentElement,i=n(t),r=P();return i.top-=r.top,i.left-=r.left,void 0===i.width&&(i.width=document.body.scrollWidth-i.left-i.right),void 0===i.height&&(i.height=document.body.scrollHeight-i.top-i.bottom),i.top=i.top-o.clientTop,i.left=i.left-o.clientLeft,i.right=e.body.clientWidth-i.width-i.left,i.bottom=e.body.clientHeight-i.height-i.top,i}function h(t){return t.offsetParent||document.documentElement}function f(){var t=document.createElement("div");t.style.width="100%",t.style.height="200px";var e=document.createElement("div");d(e.style,{position:"absolute",top:0,left:0,pointerEvents:"none",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(t),document.body.appendChild(e);var o=t.offsetWidth;e.style.overflow="scroll";var i=t.offsetWidth;o===i&&(i=e.clientWidth),document.body.removeChild(e);var n=o-i;return{width:n,height:n}}function d(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=[];return Array.prototype.push.apply(e,arguments),e.slice(1).forEach((function(e){if(e)for(var o in e)({}).hasOwnProperty.call(e,o)&&(t[o]=e[o])})),t}function p(t,e){if(void 0!==t.classList)e.split(" ").forEach((function(e){e.trim()&&t.classList.remove(e)}));else{var o=new RegExp("(^| )"+e.split(" ").join("|")+"( |$)","gi"),i=g(t).replace(o," ");v(t,i)}}function u(t,e){if(void 0!==t.classList)e.split(" ").forEach((function(e){e.trim()&&t.classList.add(e)}));else{p(t,e);var o=g(t)+" "+e;v(t,o)}}function c(t,e){if(void 0!==t.classList)return t.classList.contains(e);var o=g(t);return new RegExp("(^| )"+e+"( |$)","gi").test(o)}function g(t){return t.className instanceof t.ownerDocument.defaultView.SVGAnimatedString?t.className.baseVal:t.className}function v(t,e){t.setAttribute("class",e)}function m(t,e,o){o.forEach((function(o){-1===e.indexOf(o)&&c(t,o)&&p(t,o)})),e.forEach((function(e){c(t,e)||u(t,e)}))}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function b(t,e){var o=arguments.length<=2||void 0===arguments[2]?1:arguments[2];return t+o>=e&&e>=t-o}function y(){return"undefined"!=typeof performance&&void 0!==performance.now?performance.now():+new Date}function w(){for(var t={top:0,left:0},e=arguments.length,o=Array(e),i=0;e>i;i++)o[i]=arguments[i];return o.forEach((function(e){var o=e.top,i=e.left;"string"==typeof o&&(o=parseFloat(o,10)),"string"==typeof i&&(i=parseFloat(i,10)),t.top+=o,t.left+=i})),t}function C(t,e){return"string"==typeof t.left&&-1!==t.left.indexOf("%")&&(t.left=parseFloat(t.left,10)/100*e.width),"string"==typeof t.top&&-1!==t.top.indexOf("%")&&(t.top=parseFloat(t.top,10)/100*e.height),t}function O(t,e){return"scrollParent"===e?e=t.scrollParents[0]:"window"===e&&(e=[pageXOffset,pageYOffset,innerWidth+pageXOffset,innerHeight+pageYOffset]),e===document&&(e=e.documentElement),void 0!==e.nodeType&&function(){var t=e,o=l(e),i=o,n=getComputedStyle(e);if(e=[i.left,i.top,o.width+i.left,o.height+i.top],t.ownerDocument!==document){var r=t.ownerDocument.defaultView;e[0]+=r.pageXOffset,e[1]+=r.pageYOffset,e[2]+=r.pageXOffset,e[3]+=r.pageYOffset}I.forEach((function(t,o){"Top"===(t=t[0].toUpperCase()+t.substr(1))||"Left"===t?e[o]+=parseFloat(n["border"+t+"Width"]):e[o]-=parseFloat(n["border"+t+"Width"])}))}(),e}var E=function(){function t(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}}(),x=void 0;void 0===x&&(x={modules:[]});var A=null,T=function(){var t=0;return function(){return++t}}(),S={},P=function(){var t=A;t||((t=document.createElement("div")).setAttribute("data-tether-id",T()),d(t.style,{top:0,left:0,position:"absolute"}),document.body.appendChild(t),A=t);var e=t.getAttribute("data-tether-id");return void 0===S[e]&&(S[e]=n(t),k((function(){delete S[e]}))),S[e]},W=[],k=function(t){W.push(t)},M=function(){for(var t=void 0;t=W.pop();)t()},_=function(){function t(){i(this,t)}return E(t,[{key:"on",value:function(t,e,o){var i=!(arguments.length<=3||void 0===arguments[3])&&arguments[3];void 0===this.bindings&&(this.bindings={}),void 0===this.bindings[t]&&(this.bindings[t]=[]),this.bindings[t].push({handler:e,ctx:o,once:i})}},{key:"once",value:function(t,e,o){this.on(t,e,o,!0)}},{key:"off",value:function(t,e){if(void 0!==this.bindings&&void 0!==this.bindings[t])if(void 0===e)delete this.bindings[t];else for(var o=0;o<this.bindings[t].length;)this.bindings[t][o].handler===e?this.bindings[t].splice(o,1):++o}},{key:"trigger",value:function(t){if(void 0!==this.bindings&&this.bindings[t]){for(var e=0,o=arguments.length,i=Array(o>1?o-1:0),n=1;o>n;n++)i[n-1]=arguments[n];for(;e<this.bindings[t].length;){var r=this.bindings[t][e],s=r.handler,a=r.ctx,l=r.once,h=a;void 0===h&&(h=this),s.apply(h,i),l?this.bindings[t].splice(e,1):++e}}}}]),t}();x.Utils={getActualBoundingClientRect:n,getScrollParents:s,getBounds:l,getOffsetParent:h,extend:d,addClass:u,removeClass:p,hasClass:c,updateClasses:m,defer:k,flush:M,uniqueId:T,Evented:_,getScrollBarSize:f,removeUtilElements:a};var B=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var o=[],i=!0,n=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);i=!0);}catch(t){n=!0,r=t}finally{try{!i&&a.return&&a.return()}finally{if(n)throw r}}return o}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")};if(E=function(){function t(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}}(),void 0===x)throw new Error("You must include the utils.js file before tether.js");var s=(q=x.Utils).getScrollParents,h=(l=q.getBounds,q.getOffsetParent),u=(d=q.extend,q.addClass),p=q.removeClass,f=(m=q.updateClasses,k=q.defer,M=q.flush,q.getScrollBarSize),a=q.removeUtilElements,z=function(){if("undefined"==typeof document)return"";for(var t=document.createElement("div"),e=["transform","WebkitTransform","OTransform","MozTransform","msTransform"],o=0;o<e.length;++o){var i=e[o];if(void 0!==t.style[i])return i}}(),Y=[],j=function(){Y.forEach((function(t){t.position(!1)})),M()};!function(){var t=null,e=null,o=null,i=function i(){return void 0!==e&&e>16?(e=Math.min(e-16,250),void(o=setTimeout(i,250))):void(void 0!==t&&y()-t<10||(null!=o&&(clearTimeout(o),o=null),t=y(),j(),e=y()-t))};"undefined"!=typeof window&&void 0!==window.addEventListener&&["resize","scroll","touchmove"].forEach((function(t){window.addEventListener(t,i)}))}();var L={center:"center",left:"right",right:"left"},D={middle:"middle",top:"bottom",bottom:"top"},X={top:0,left:0,middle:"50%",center:"50%",bottom:"100%",right:"100%"},F=function(t,e){var o=t.left,i=t.top;return"auto"===o&&(o=L[e.left]),"auto"===i&&(i=D[e.top]),{left:o,top:i}},H=function(t){var e=t.left,o=t.top;return void 0!==X[t.left]&&(e=X[t.left]),void 0!==X[t.top]&&(o=X[t.top]),{left:e,top:o}},N=function(t){var e=t.split(" "),o=B(e,2);return{top:o[0],left:o[1]}},U=N,V=function(t){function e(t){var o=this;i(this,e),function(t,e,o){for(var i=!0;i;){var n=t,r=e,s=o;i=!1,null===n&&(n=Function.prototype);var a=Object.getOwnPropertyDescriptor(n,r);if(void 0!==a){if("value"in a)return a.value;var l=a.get;if(void 0===l)return;return l.call(s)}var h=Object.getPrototypeOf(n);if(null===h)return;t=h,e=r,o=s,i=!0,a=h=void 0}}(Object.getPrototypeOf(e.prototype),"constructor",this).call(this),this.position=this.position.bind(this),Y.push(this),this.history=[],this.setOptions(t,!1),x.modules.forEach((function(t){void 0!==t.initialize&&t.initialize.call(o)})),this.position()}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+r(e));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),E(e,[{key:"getClass",value:function(){var t=arguments.length<=0||void 0===arguments[0]?"":arguments[0],e=this.options.classes;return void 0!==e&&e[t]?this.options.classes[t]:this.options.classPrefix?this.options.classPrefix+"-"+t:t}},{key:"setOptions",value:function(t){var e=this,o=arguments.length<=1||void 0===arguments[1]||arguments[1],i={offset:"0 0",targetOffset:"0 0",targetAttachment:"auto auto",classPrefix:"tether"};this.options=d(i,t);var n=this.options,r=n.element,a=n.target,l=n.targetModifier;if(this.element=r,this.target=a,this.targetModifier=l,"viewport"===this.target?(this.target=document.body,this.targetModifier="visible"):"scroll-handle"===this.target&&(this.target=document.body,this.targetModifier="scroll-handle"),["element","target"].forEach((function(t){if(void 0===e[t])throw new Error("Tether Error: Both element and target must be defined");void 0!==e[t].jquery?e[t]=e[t][0]:"string"==typeof e[t]&&(e[t]=document.querySelector(e[t]))})),u(this.element,this.getClass("element")),!1!==this.options.addTargetClasses&&u(this.target,this.getClass("target")),!this.options.attachment)throw new Error("Tether Error: You must provide an attachment");this.targetAttachment=U(this.options.targetAttachment),this.attachment=U(this.options.attachment),this.offset=N(this.options.offset),this.targetOffset=N(this.options.targetOffset),void 0!==this.scrollParents&&this.disable(),"scroll-handle"===this.targetModifier?this.scrollParents=[this.target]:this.scrollParents=s(this.target),!1!==this.options.enabled&&this.enable(o)}},{key:"getTargetBounds",value:function(){if(void 0===this.targetModifier)return l(this.target);if("visible"===this.targetModifier)return this.target===document.body?{top:pageYOffset,left:pageXOffset,height:innerHeight,width:innerWidth}:((r={height:(t=l(this.target)).height,width:t.width,top:t.top,left:t.left}).height=Math.min(r.height,t.height-(pageYOffset-t.top)),r.height=Math.min(r.height,t.height-(t.top+t.height-(pageYOffset+innerHeight))),r.height=Math.min(innerHeight,r.height),r.height-=2,r.width=Math.min(r.width,t.width-(pageXOffset-t.left)),r.width=Math.min(r.width,t.width-(t.left+t.width-(pageXOffset+innerWidth))),r.width=Math.min(innerWidth,r.width),r.width-=2,r.top<pageYOffset&&(r.top=pageYOffset),r.left<pageXOffset&&(r.left=pageXOffset),r);if("scroll-handle"===this.targetModifier){var t=void 0,e=this.target;e===document.body?(e=document.documentElement,t={left:pageXOffset,top:pageYOffset,height:innerHeight,width:innerWidth}):t=l(e);var o=getComputedStyle(e),i=0;(e.scrollWidth>e.clientWidth||[o.overflow,o.overflowX].indexOf("scroll")>=0||this.target!==document.body)&&(i=15);var n=t.height-parseFloat(o.borderTopWidth)-parseFloat(o.borderBottomWidth)-i,r={width:15,height:.975*n*(n/e.scrollHeight),left:t.left+t.width-parseFloat(o.borderLeftWidth)-15},s=0;408>n&&this.target===document.body&&(s=-11e-5*Math.pow(n,2)-.00727*n+22.58),this.target!==document.body&&(r.height=Math.max(r.height,24));var a=this.target.scrollTop/(e.scrollHeight-n);return r.top=a*(n-r.height-s)+t.top+parseFloat(o.borderTopWidth),this.target===document.body&&(r.height=Math.max(r.height,24)),r}}},{key:"clearCache",value:function(){this._cache={}}},{key:"cache",value:function(t,e){return void 0===this._cache&&(this._cache={}),void 0===this._cache[t]&&(this._cache[t]=e.call(this)),this._cache[t]}},{key:"enable",value:function(){var t=this,e=arguments.length<=0||void 0===arguments[0]||arguments[0];!1!==this.options.addTargetClasses&&u(this.target,this.getClass("enabled")),u(this.element,this.getClass("enabled")),this.enabled=!0,this.scrollParents.forEach((function(e){e!==t.target.ownerDocument&&e.addEventListener("scroll",t.position)})),e&&this.position()}},{key:"disable",value:function(){var t=this;p(this.target,this.getClass("enabled")),p(this.element,this.getClass("enabled")),this.enabled=!1,void 0!==this.scrollParents&&this.scrollParents.forEach((function(e){e.removeEventListener("scroll",t.position)}))}},{key:"destroy",value:function(){var t=this;this.disable(),Y.forEach((function(e,o){e===t&&Y.splice(o,1)})),0===Y.length&&a()}},{key:"updateAttachClasses",value:function(t,e){var o=this;t=t||this.attachment,e=e||this.targetAttachment,void 0!==this._addAttachClasses&&this._addAttachClasses.length&&this._addAttachClasses.splice(0,this._addAttachClasses.length),void 0===this._addAttachClasses&&(this._addAttachClasses=[]);var i=this._addAttachClasses;t.top&&i.push(this.getClass("element-attached")+"-"+t.top),t.left&&i.push(this.getClass("element-attached")+"-"+t.left),e.top&&i.push(this.getClass("target-attached")+"-"+e.top),e.left&&i.push(this.getClass("target-attached")+"-"+e.left);var n=[];["left","top","bottom","right","middle","center"].forEach((function(t){n.push(o.getClass("element-attached")+"-"+t),n.push(o.getClass("target-attached")+"-"+t)})),k((function(){void 0!==o._addAttachClasses&&(m(o.element,o._addAttachClasses,n),!1!==o.options.addTargetClasses&&m(o.target,o._addAttachClasses,n),delete o._addAttachClasses)}))}},{key:"position",value:function(){var t=this,e=arguments.length<=0||void 0===arguments[0]||arguments[0];if(this.enabled){this.clearCache();var o=F(this.targetAttachment,this.attachment);this.updateAttachClasses(this.attachment,o);var i=this.cache("element-bounds",(function(){return l(t.element)})),n=i.width,s=i.height;if(0===n&&0===s&&void 0!==this.lastSize){var a=this.lastSize;n=a.width,s=a.height}else this.lastSize={width:n,height:s};var d=this.cache("target-bounds",(function(){return t.getTargetBounds()})),p=d,u=C(H(this.attachment),{width:n,height:s}),c=C(H(o),p),g=C(this.offset,{width:n,height:s}),v=C(this.targetOffset,p);u=w(u,g),c=w(c,v);for(var m=d.left+c.left-u.left,b=d.top+c.top-u.top,y=0;y<x.modules.length;++y){var O=x.modules[y],E=O.position.call(this,{left:m,top:b,targetAttachment:o,targetPos:d,elementPos:i,offset:u,targetOffset:c,manualOffset:g,manualTargetOffset:v,scrollbarSize:P,attachment:this.attachment});if(!1===E)return!1;void 0!==E&&"object"==r(E)&&(b=E.top,m=E.left)}var A={page:{top:b,left:m},viewport:{top:b-pageYOffset,bottom:pageYOffset-b-s+innerHeight,left:m-pageXOffset,right:pageXOffset-m-n+innerWidth}},T=this.target.ownerDocument,S=T.defaultView,P=void 0;return T.body.scrollWidth>S.innerWidth&&(P=this.cache("scrollbar-size",f),A.viewport.bottom-=P.height),T.body.scrollHeight>S.innerHeight&&(P=this.cache("scrollbar-size",f),A.viewport.right-=P.width),(-1===["","static"].indexOf(T.body.style.position)||-1===["","static"].indexOf(T.body.parentElement.style.position))&&(A.page.bottom=T.body.scrollHeight-b-s,A.page.right=T.body.scrollWidth-m-n),void 0!==this.options.optimizations&&!1!==this.options.optimizations.moveElement&&void 0===this.targetModifier&&function(){var e=t.cache("target-offsetparent",(function(){return h(t.target)})),o=t.cache("target-offsetparent-bounds",(function(){return l(e)})),i=getComputedStyle(e),n=o,r={};if(["Top","Left","Bottom","Right"].forEach((function(t){r[t.toLowerCase()]=parseFloat(i["border"+t+"Width"])})),o.right=T.body.scrollWidth-o.left-n.width+r.right,o.bottom=T.body.scrollHeight-o.top-n.height+r.bottom,A.page.top>=o.top+r.top&&A.page.bottom>=o.bottom&&A.page.left>=o.left+r.left&&A.page.right>=o.right){var s=e.scrollTop,a=e.scrollLeft;A.offset={top:A.page.top-o.top+s-r.top,left:A.page.left-o.left+a-r.left}}}(),this.move(A),this.history.unshift(A),this.history.length>3&&this.history.pop(),e&&M(),!0}}},{key:"move",value:function(t){var e=this;if(void 0!==this.element.parentNode){var o={};for(var i in t)for(var n in o[i]={},t[i]){for(var r=!1,s=0;s<this.history.length;++s){var a=this.history[s];if(void 0!==a[i]&&!b(a[i][n],t[i][n])){r=!0;break}}r||(o[i][n]=!0)}var l={top:"",left:"",right:"",bottom:""},f=function(t,o){if(!1!==(void 0!==e.options.optimizations?e.options.optimizations.gpu:null)){var i=void 0,n=void 0;t.top?(l.top=0,i=o.top):(l.bottom=0,i=-o.bottom),t.left?(l.left=0,n=o.left):(l.right=0,n=-o.right),l[z]="translateX("+Math.round(n)+"px) translateY("+Math.round(i)+"px)","msTransform"!==z&&(l[z]+=" translateZ(0)")}else t.top?l.top=o.top+"px":l.bottom=o.bottom+"px",t.left?l.left=o.left+"px":l.right=o.right+"px"},p=!1;if((o.page.top||o.page.bottom)&&(o.page.left||o.page.right)?(l.position="absolute",f(o.page,t.page)):(o.viewport.top||o.viewport.bottom)&&(o.viewport.left||o.viewport.right)?(l.position="fixed",f(o.viewport,t.viewport)):void 0!==o.offset&&o.offset.top&&o.offset.left?function(){l.position="absolute";var i=e.cache("target-offsetparent",(function(){return h(e.target)}));h(e.element)!==i&&k((function(){e.element.parentNode.removeChild(e.element),i.appendChild(e.element)})),f(o.offset,t.offset),p=!0}():(l.position="absolute",f({top:!0,left:!0},t.page)),!p){for(var u=!0,c=this.element.parentNode;c&&1===c.nodeType&&"BODY"!==c.tagName;){if("static"!==getComputedStyle(c).position){u=!1;break}c=c.parentNode}u||(this.element.parentNode.removeChild(this.element),this.element.ownerDocument.body.appendChild(this.element))}var g={},v=!1;for(var n in l){var m=l[n];this.element.style[n]!==m&&(v=!0,g[n]=m)}v&&k((function(){d(e.element.style,g)}))}}}]),e}(_);V.modules=[],x.position=j;var R=d(V,x),d=(B=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var o=[],i=!0,n=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);i=!0);}catch(t){n=!0,r=t}finally{try{!i&&a.return&&a.return()}finally{if(n)throw r}}return o}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},l=(q=x.Utils).getBounds,q.extend),I=(m=q.updateClasses,k=q.defer,["left","top","right","bottom"]);x.modules.push({position:function(t){var e=this,o=t.top,i=t.left,n=t.targetAttachment;if(!this.options.constraints)return!0;var r=this.cache("element-bounds",(function(){return l(e.element)})),s=r.height,a=r.width;if(0===a&&0===s&&void 0!==this.lastSize){var h=this.lastSize;a=h.width,s=h.height}var f=this.cache("target-bounds",(function(){return e.getTargetBounds()})),p=f.height,u=f.width,c=[this.getClass("pinned"),this.getClass("out-of-bounds")];this.options.constraints.forEach((function(t){var e=t.outOfBoundsClass,o=t.pinnedClass;e&&c.push(e),o&&c.push(o)})),c.forEach((function(t){["left","top","right","bottom"].forEach((function(e){c.push(t+"-"+e)}))}));var g=[],v=d({},n),b=d({},this.attachment);return this.options.constraints.forEach((function(t){var r=t.to,l=t.attachment,h=t.pin;void 0===l&&(l="");var f=void 0,d=void 0;if(l.indexOf(" ")>=0){var c=l.split(" "),m=B(c,2);d=m[0],f=m[1]}else f=d=l;var y=O(e,r);("target"===d||"both"===d)&&(o<y[1]&&"top"===v.top&&(o+=p,v.top="bottom"),o+s>y[3]&&"bottom"===v.top&&(o-=p,v.top="top")),"together"===d&&("top"===v.top&&("bottom"===b.top&&o<y[1]?(o+=p,v.top="bottom",o+=s,b.top="top"):"top"===b.top&&o+s>y[3]&&o-(s-p)>=y[1]&&(o-=s-p,v.top="bottom",b.top="bottom")),"bottom"===v.top&&("top"===b.top&&o+s>y[3]?(o-=p,v.top="top",o-=s,b.top="bottom"):"bottom"===b.top&&o<y[1]&&o+(2*s-p)<=y[3]&&(o+=s-p,v.top="top",b.top="top")),"middle"===v.top&&(o+s>y[3]&&"top"===b.top?(o-=s,b.top="bottom"):o<y[1]&&"bottom"===b.top&&(o+=s,b.top="top"))),("target"===f||"both"===f)&&(i<y[0]&&"left"===v.left&&(i+=u,v.left="right"),i+a>y[2]&&"right"===v.left&&(i-=u,v.left="left")),"together"===f&&(i<y[0]&&"left"===v.left?"right"===b.left?(i+=u,v.left="right",i+=a,b.left="left"):"left"===b.left&&(i+=u,v.left="right",i-=a,b.left="right"):i+a>y[2]&&"right"===v.left?"left"===b.left?(i-=u,v.left="left",i-=a,b.left="right"):"right"===b.left&&(i-=u,v.left="left",i+=a,b.left="left"):"center"===v.left&&(i+a>y[2]&&"left"===b.left?(i-=a,b.left="right"):i<y[0]&&"right"===b.left&&(i+=a,b.left="left"))),("element"===d||"both"===d)&&(o<y[1]&&"bottom"===b.top&&(o+=s,b.top="top"),o+s>y[3]&&"top"===b.top&&(o-=s,b.top="bottom")),("element"===f||"both"===f)&&(i<y[0]&&("right"===b.left?(i+=a,b.left="left"):"center"===b.left&&(i+=a/2,b.left="left")),i+a>y[2]&&("left"===b.left?(i-=a,b.left="right"):"center"===b.left&&(i-=a/2,b.left="right"))),"string"==typeof h?h=h.split(",").map((function(t){return t.trim()})):!0===h&&(h=["top","left","right","bottom"]),h=h||[];var w=[],C=[];o<y[1]&&(h.indexOf("top")>=0?(o=y[1],w.push("top")):C.push("top")),o+s>y[3]&&(h.indexOf("bottom")>=0?(o=y[3]-s,w.push("bottom")):C.push("bottom")),i<y[0]&&(h.indexOf("left")>=0?(i=y[0],w.push("left")):C.push("left")),i+a>y[2]&&(h.indexOf("right")>=0?(i=y[2]-a,w.push("right")):C.push("right")),w.length&&function(){var t;t=void 0!==e.options.pinnedClass?e.options.pinnedClass:e.getClass("pinned"),g.push(t),w.forEach((function(e){g.push(t+"-"+e)}))}(),C.length&&function(){var t;t=void 0!==e.options.outOfBoundsClass?e.options.outOfBoundsClass:e.getClass("out-of-bounds"),g.push(t),C.forEach((function(e){g.push(t+"-"+e)}))}(),(w.indexOf("left")>=0||w.indexOf("right")>=0)&&(b.left=v.left=!1),(w.indexOf("top")>=0||w.indexOf("bottom")>=0)&&(b.top=v.top=!1),(v.top!==n.top||v.left!==n.left||b.top!==e.attachment.top||b.left!==e.attachment.left)&&(e.updateAttachClasses(b,v),e.trigger("update",{attachment:b,targetAttachment:v}))})),k((function(){!1!==e.options.addTargetClasses&&m(e.target,g,c),m(e.element,g,c)})),{top:o,left:i}}});var q,l=(q=x.Utils).getBounds,m=q.updateClasses;return k=q.defer,x.modules.push({position:function(t){var e=this,o=t.top,i=t.left,n=this.cache("element-bounds",(function(){return l(e.element)})),r=n.height,s=n.width,a=this.getTargetBounds(),h=o+r,f=i+s,d=[];o<=a.bottom&&h>=a.top&&["left","right"].forEach((function(t){var e=a[t];(e===i||e===f)&&d.push(t)})),i<=a.right&&f>=a.left&&["top","bottom"].forEach((function(t){var e=a[t];(e===o||e===h)&&d.push(t)}));var p=[],u=[];return p.push(this.getClass("abutted")),["left","top","right","bottom"].forEach((function(t){p.push(e.getClass("abutted")+"-"+t)})),d.length&&u.push(this.getClass("abutted")),d.forEach((function(t){u.push(e.getClass("abutted")+"-"+t)})),k((function(){!1!==e.options.addTargetClasses&&m(e.target,u,p),m(e.element,u,p)})),!0}}),B=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var o=[],i=!0,n=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);i=!0);}catch(t){n=!0,r=t}finally{try{!i&&a.return&&a.return()}finally{if(n)throw r}}return o}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},x.modules.push({position:function(t){var e=t.top,o=t.left;if(this.options.shift){var i=this.options.shift;"function"==typeof this.options.shift&&(i=this.options.shift.call(this,{top:e,left:o}));var n=void 0,r=void 0;if("string"==typeof i){(i=i.split(" "))[1]=i[1]||i[0];var s=B(i,2);n=s[0],r=s[1],n=parseFloat(n,10),r=parseFloat(r,10)}else n=i.top,r=i.left;return{top:e+=n,left:o+=r}}}}),R})?i.call(e,o,e,t):i)||(t.exports=n)}}]);
=======
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./resources/js/vendor/venobox.min.js":
/*!********************************************!*\
  !*** ./resources/js/vendor/venobox.min.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * VenoBox - jQuery Plugin
 * version: 1.8.3
 * @requires jQuery >= 1.7.0
 *
 * Examples at http://veno.es/venobox/
 * License: MIT License
 * License URI: https://github.com/nicolafranchini/VenoBox/blob/master/LICENSE
 * Copyright 2013-2017 Nicola Franchini - @nicolafranchini
 *
 */
!function (e) {
  "use strict";

  var s, i, c, a, o, t, d, l, r, n, v, u, b, k, p, m, h, f, g, x, y, w, C, _, B, P, E, O, D, M, N, U, V, I, z, R, X, Y, j, W, q;

  e.fn.extend({
    venobox: function venobox($) {
      var A = this,
          H = e.extend({
        arrowsColor: "#B6B6B6",
        autoplay: !1,
        bgcolor: "#fff",
        border: "0",
        closeBackground: "#161617",
        closeColor: "#d2d2d2",
        framewidth: "",
        frameheight: "",
        gallItems: !1,
        infinigall: !1,
        htmlClose: "&times;",
        htmlNext: "<span>Next</span>",
        htmlPrev: "<span>Prev</span>",
        numeratio: !1,
        numerationBackground: "#161617",
        numerationColor: "#d2d2d2",
        numerationPosition: "top",
        overlayClose: !0,
        overlayColor: "rgba(23,23,23,0.85)",
        spinner: "double-bounce",
        spinColor: "#d2d2d2",
        titleattr: "title",
        titleBackground: "#161617",
        titleColor: "#d2d2d2",
        titlePosition: "top",
        cb_pre_open: function cb_pre_open() {
          return !0;
        },
        cb_post_open: function cb_post_open() {},
        cb_pre_close: function cb_pre_close() {
          return !0;
        },
        cb_post_close: function cb_post_close() {},
        cb_post_resize: function cb_post_resize() {},
        cb_after_nav: function cb_after_nav() {},
        cb_init: function cb_init() {}
      }, $);
      return H.cb_init(A), this.each(function () {
        if ((D = e(this)).data("venobox")) return !0;

        function $() {
          y = D.data("gall"), h = D.data("numeratio"), u = D.data("gallItems"), b = D.data("infinigall"), k = u || e('.vbox-item[data-gall="' + y + '"]'), w = k.eq(k.index(D) + 1), C = k.eq(k.index(D) - 1), w.length || !0 !== b || (w = k.eq(0)), k.length > 1 ? (M = k.index(D) + 1, c.html(M + " / " + k.length)) : M = 1, !0 === h ? c.show() : c.hide(), "" !== x ? a.show() : a.hide(), w.length || !0 === b ? (e(".vbox-next").css("display", "block"), _ = !0) : (e(".vbox-next").css("display", "none"), _ = !1), k.index(D) > 0 || !0 === b ? (e(".vbox-prev").css("display", "block"), B = !0) : (e(".vbox-prev").css("display", "none"), B = !1), !0 !== B && !0 !== _ || (d.on(K.DOWN, F), d.on(K.MOVE, G), d.on(K.UP, J));
        }

        function Q(e) {
          return !(e.length < 1) && !p && (p = !0, f = e.data("overlay") || e.data("overlaycolor"), n = e.data("framewidth"), v = e.data("frameheight"), o = e.data("border"), i = e.data("bgcolor"), l = e.data("href") || e.attr("href"), s = e.data("autoplay"), x = e.attr(e.data("titleattr")) || "", e === C && d.addClass("animated").addClass("swipe-right"), e === w && d.addClass("animated").addClass("swipe-left"), E.show(), void d.animate({
            opacity: 0
          }, 500, function () {
            g.css("background", f), d.removeClass("animated").removeClass("swipe-left").removeClass("swipe-right").css({
              "margin-left": 0,
              "margin-right": 0
            }), "iframe" == e.data("vbtype") ? ce() : "inline" == e.data("vbtype") ? oe() : "ajax" == e.data("vbtype") ? ie() : "video" == e.data("vbtype") ? ae(s) : (d.html('<img src="' + l + '">'), te()), D = e, $(), p = !1, H.cb_after_nav(D, M, w, C);
          }));
        }

        function S(e) {
          27 === e.keyCode && T(), 37 == e.keyCode && !0 === B && Q(C), 39 == e.keyCode && !0 === _ && Q(w);
        }

        function T() {
          if (!1 === H.cb_pre_close(D, M, w, C)) return !1;
          e("body").off("keydown", S).removeClass("vbox-open"), D.focus(), g.animate({
            opacity: 0
          }, 500, function () {
            g.remove(), p = !1, H.cb_post_close();
          });
        }

        A.VBclose = function () {
          T();
        }, D.addClass("vbox-item"), D.data("framewidth", H.framewidth), D.data("frameheight", H.frameheight), D.data("border", H.border), D.data("bgcolor", H.bgcolor), D.data("numeratio", H.numeratio), D.data("gallItems", H.gallItems), D.data("infinigall", H.infinigall), D.data("overlaycolor", H.overlayColor), D.data("titleattr", H.titleattr), D.data("venobox", !0), D.on("click", function (u) {
          if (u.preventDefault(), D = e(this), !1 === H.cb_pre_open(D)) return !1;

          switch (A.VBnext = function () {
            Q(w);
          }, A.VBprev = function () {
            Q(C);
          }, f = D.data("overlay") || D.data("overlaycolor"), n = D.data("framewidth"), v = D.data("frameheight"), s = D.data("autoplay") || H.autoplay, o = D.data("border"), i = D.data("bgcolor"), _ = !1, B = !1, p = !1, l = D.data("href") || D.attr("href"), r = D.data("css") || "", x = D.attr(D.data("titleattr")) || "", P = '<div class="vbox-preloader">', H.spinner) {
            case "rotating-plane":
              P += '<div class="sk-rotating-plane"></div>';
              break;

            case "double-bounce":
              P += '<div class="sk-double-bounce"><div class="sk-child sk-double-bounce1"></div><div class="sk-child sk-double-bounce2"></div></div>';
              break;

            case "wave":
              P += '<div class="sk-wave"><div class="sk-rect sk-rect1"></div><div class="sk-rect sk-rect2"></div><div class="sk-rect sk-rect3"></div><div class="sk-rect sk-rect4"></div><div class="sk-rect sk-rect5"></div></div>';
              break;

            case "wandering-cubes":
              P += '<div class="sk-wandering-cubes"><div class="sk-cube sk-cube1"></div><div class="sk-cube sk-cube2"></div></div>';
              break;

            case "spinner-pulse":
              P += '<div class="sk-spinner sk-spinner-pulse"></div>';
              break;

            case "chasing-dots":
              P += '<div class="sk-chasing-dots"><div class="sk-child sk-dot1"></div><div class="sk-child sk-dot2"></div></div>';
              break;

            case "three-bounce":
              P += '<div class="sk-three-bounce"><div class="sk-child sk-bounce1"></div><div class="sk-child sk-bounce2"></div><div class="sk-child sk-bounce3"></div></div>';
              break;

            case "circle":
              P += '<div class="sk-circle"><div class="sk-circle1 sk-child"></div><div class="sk-circle2 sk-child"></div><div class="sk-circle3 sk-child"></div><div class="sk-circle4 sk-child"></div><div class="sk-circle5 sk-child"></div><div class="sk-circle6 sk-child"></div><div class="sk-circle7 sk-child"></div><div class="sk-circle8 sk-child"></div><div class="sk-circle9 sk-child"></div><div class="sk-circle10 sk-child"></div><div class="sk-circle11 sk-child"></div><div class="sk-circle12 sk-child"></div></div>';
              break;

            case "cube-grid":
              P += '<div class="sk-cube-grid"><div class="sk-cube sk-cube1"></div><div class="sk-cube sk-cube2"></div><div class="sk-cube sk-cube3"></div><div class="sk-cube sk-cube4"></div><div class="sk-cube sk-cube5"></div><div class="sk-cube sk-cube6"></div><div class="sk-cube sk-cube7"></div><div class="sk-cube sk-cube8"></div><div class="sk-cube sk-cube9"></div></div>';
              break;

            case "fading-circle":
              P += '<div class="sk-fading-circle"><div class="sk-circle1 sk-circle"></div><div class="sk-circle2 sk-circle"></div><div class="sk-circle3 sk-circle"></div><div class="sk-circle4 sk-circle"></div><div class="sk-circle5 sk-circle"></div><div class="sk-circle6 sk-circle"></div><div class="sk-circle7 sk-circle"></div><div class="sk-circle8 sk-circle"></div><div class="sk-circle9 sk-circle"></div><div class="sk-circle10 sk-circle"></div><div class="sk-circle11 sk-circle"></div><div class="sk-circle12 sk-circle"></div></div>';
              break;

            case "folding-cube":
              P += '<div class="sk-folding-cube"><div class="sk-cube1 sk-cube"></div><div class="sk-cube2 sk-cube"></div><div class="sk-cube4 sk-cube"></div><div class="sk-cube3 sk-cube"></div></div>';
          }

          return P += "</div>", O = '<a class="vbox-next">' + H.htmlNext + '</a><a class="vbox-prev">' + H.htmlPrev + "</a>", U = '<div class="vbox-title"></div><div class="vbox-num">0/0</div><div class="vbox-close">' + H.htmlClose + "</div>", t = '<div class="vbox-overlay ' + r + '" style="background:' + f + '">' + P + '<div class="vbox-container"><div class="vbox-content"></div></div>' + U + O + "</div>", e("body").append(t).addClass("vbox-open"), e(".vbox-preloader div:not(.sk-circle) .sk-child, .vbox-preloader .sk-rotating-plane, .vbox-preloader .sk-rect, .vbox-preloader div:not(.sk-folding-cube) .sk-cube, .vbox-preloader .sk-spinner-pulse").css("background-color", H.spinColor), g = e(".vbox-overlay"), e(".vbox-container"), d = e(".vbox-content"), c = e(".vbox-num"), a = e(".vbox-title"), (E = e(".vbox-preloader")).show(), a.css(H.titlePosition, "-1px"), a.css({
            color: H.titleColor,
            "background-color": H.titleBackground
          }), e(".vbox-close").css({
            color: H.closeColor,
            "background-color": H.closeBackground
          }), e(".vbox-num").css(H.numerationPosition, "-1px"), e(".vbox-num").css({
            color: H.numerationColor,
            "background-color": H.numerationBackground
          }), e(".vbox-next span, .vbox-prev span").css({
            "border-top-color": H.arrowsColor,
            "border-right-color": H.arrowsColor
          }), d.html(""), d.css("opacity", "0"), g.css("opacity", "0"), $(), g.animate({
            opacity: 1
          }, 250, function () {
            "iframe" == D.data("vbtype") ? ce() : "inline" == D.data("vbtype") ? oe() : "ajax" == D.data("vbtype") ? ie() : "video" == D.data("vbtype") ? ae(s) : (d.html('<img src="' + l + '">'), te()), H.cb_post_open(D, M, w, C);
          }), e("body").keydown(S), e(".vbox-prev").on("click", function () {
            Q(C);
          }), e(".vbox-next").on("click", function () {
            Q(w);
          }), !1;
        });
        var Z = ".vbox-overlay";

        function F(e) {
          d.addClass("animated"), I = R = e.pageY, z = X = e.pageX, N = !0;
        }

        function G(e) {
          if (!0 === N) {
            X = e.pageX, R = e.pageY, j = X - z, W = R - I;
            var s = Math.abs(j);
            s > Math.abs(W) && s <= 100 && (e.preventDefault(), d.css("margin-left", j));
          }
        }

        function J(e) {
          if (!0 === N) {
            N = !1;
            var s = D,
                i = !1;
            (Y = X - z) < 0 && !0 === _ && (s = w, i = !0), Y > 0 && !0 === B && (s = C, i = !0), Math.abs(Y) >= q && !0 === i ? Q(s) : d.css({
              "margin-left": 0,
              "margin-right": 0
            });
          }
        }

        H.overlayClose || (Z = ".vbox-close"), e("body").on("click", Z, function (s) {
          (e(s.target).is(".vbox-overlay") || e(s.target).is(".vbox-content") || e(s.target).is(".vbox-close") || e(s.target).is(".vbox-preloader")) && T();
        }), z = 0, X = 0, Y = 0, q = 50, N = !1;

        var K = {
          DOWN: "touchmousedown",
          UP: "touchmouseup",
          MOVE: "touchmousemove"
        },
            L = function L(s) {
          var i;

          switch (s.type) {
            case "mousedown":
              i = K.DOWN;
              break;

            case "mouseup":
            case "mouseout":
              i = K.UP;
              break;

            case "mousemove":
              i = K.MOVE;
              break;

            default:
              return;
          }

          var c = se(i, s, s.pageX, s.pageY);
          e(s.target).trigger(c);
        },
            ee = function ee(s) {
          var i;

          switch (s.type) {
            case "touchstart":
              i = K.DOWN;
              break;

            case "touchend":
              i = K.UP;
              break;

            case "touchmove":
              i = K.MOVE;
              break;

            default:
              return;
          }

          var c,
              a = s.originalEvent.touches[0];
          c = i == K.UP ? se(i, s, null, null) : se(i, s, a.pageX, a.pageY), e(s.target).trigger(c);
        },
            se = function se(s, i, c, a) {
          return e.Event(s, {
            pageX: c,
            pageY: a,
            originalEvent: i
          });
        };

        function ie() {
          e.ajax({
            url: l,
            cache: !1
          }).done(function (e) {
            d.html('<div class="vbox-inline">' + e + "</div>"), te();
          }).fail(function () {
            d.html('<div class="vbox-inline"><p>Error retrieving contents, please retry</div>'), de();
          });
        }

        function ce() {
          d.html('<iframe class="venoframe" src="' + l + '"></iframe>'), de();
        }

        function ae(e) {
          var s,
              i = function (e) {
            var s;
            e.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), RegExp.$3.indexOf("youtu") > -1 ? s = "youtube" : RegExp.$3.indexOf("vimeo") > -1 && (s = "vimeo");
            return {
              type: s,
              id: RegExp.$6
            };
          }(l),
              c = (e ? "?rel=0&autoplay=1" : "?rel=0") + function (e) {
            var s = "",
                i = decodeURIComponent(e).split("?");

            if (void 0 !== i[1]) {
              var c,
                  a,
                  o = i[1].split("&");

              for (a = 0; a < o.length; a++) {
                c = o[a].split("="), s = s + "&" + c[0] + "=" + c[1];
              }
            }

            return encodeURI(s);
          }(l);

          "vimeo" == i.type ? s = "https://player.vimeo.com/video/" : "youtube" == i.type && (s = "https://www.youtube.com/embed/"), d.html('<iframe class="venoframe vbvid" webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder="0" src="' + s + i.id + c + '"></iframe>'), de();
        }

        function oe() {
          d.html('<div class="vbox-inline">' + e(l).html() + "</div>"), de();
        }

        function te() {
          (V = d.find("img")).length ? V.each(function () {
            e(this).one("load", function () {
              de();
            });
          }) : de();
        }

        function de() {
          a.html(x), d.find(">:first-child").addClass("figlio").css({
            width: n,
            height: v,
            padding: o,
            background: i
          }), e("img.figlio").on("dragstart", function (e) {
            e.preventDefault();
          }), le(), d.animate({
            opacity: "1"
          }, "slow", function () {
            E.hide();
          });
        }

        function le() {
          var s = d.outerHeight(),
              i = e(window).height();
          m = s + 60 < i ? (i - s) / 2 : "30px", d.css("margin-top", m), d.css("margin-bottom", m), H.cb_post_resize();
        }

        "ontouchstart" in window ? (e(document).on("touchstart", ee), e(document).on("touchmove", ee), e(document).on("touchend", ee)) : (e(document).on("mousedown", L), e(document).on("mouseup", L), e(document).on("mouseout", L), e(document).on("mousemove", L)), e(window).resize(function () {
          e(".vbox-content").length && setTimeout(le(), 800);
        });
      });
    }
  });
}(jQuery);

/***/ })

}]);
>>>>>>> Stashed changes
