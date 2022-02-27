<<<<<<< Updated upstream
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{27:function(e,s){!function(e){"use strict";var s,i,c,a,o,t,d,l,n,r,v,u,b,k,p,m,h,f,g,x,y,w,C,_,B,P,E,O,D,M,N,U,V,I,z,R,X,Y,j,W,q;e.fn.extend({venobox:function($){var J=this,A=e.extend({arrowsColor:"#B6B6B6",autoplay:!1,bgcolor:"#fff",border:"0",closeBackground:"#161617",closeColor:"#d2d2d2",framewidth:"",frameheight:"",gallItems:!1,infinigall:!1,htmlClose:"&times;",htmlNext:"<span>Next</span>",htmlPrev:"<span>Prev</span>",numeratio:!1,numerationBackground:"#161617",numerationColor:"#d2d2d2",numerationPosition:"top",overlayClose:!0,overlayColor:"rgba(23,23,23,0.85)",spinner:"double-bounce",spinColor:"#d2d2d2",titleattr:"title",titleBackground:"#161617",titleColor:"#d2d2d2",titlePosition:"top",cb_pre_open:function(){return!0},cb_post_open:function(){},cb_pre_close:function(){return!0},cb_post_close:function(){},cb_post_resize:function(){},cb_after_nav:function(){},cb_init:function(){}},$);return A.cb_init(J),this.each((function(){if((D=e(this)).data("venobox"))return!0;function $(){y=D.data("gall"),h=D.data("numeratio"),u=D.data("gallItems"),b=D.data("infinigall"),k=u||e('.vbox-item[data-gall="'+y+'"]'),w=k.eq(k.index(D)+1),C=k.eq(k.index(D)-1),w.length||!0!==b||(w=k.eq(0)),k.length>1?(M=k.index(D)+1,c.html(M+" / "+k.length)):M=1,!0===h?c.show():c.hide(),""!==x?a.show():a.hide(),w.length||!0===b?(e(".vbox-next").css("display","block"),_=!0):(e(".vbox-next").css("display","none"),_=!1),k.index(D)>0||!0===b?(e(".vbox-prev").css("display","block"),B=!0):(e(".vbox-prev").css("display","none"),B=!1),!0!==B&&!0!==_||(d.on(K.DOWN,Z),d.on(K.MOVE,F),d.on(K.UP,G))}function H(e){return!(e.length<1)&&!p&&(p=!0,f=e.data("overlay")||e.data("overlaycolor"),r=e.data("framewidth"),v=e.data("frameheight"),o=e.data("border"),i=e.data("bgcolor"),l=e.data("href")||e.attr("href"),s=e.data("autoplay"),x=e.attr(e.data("titleattr"))||"",e===C&&d.addClass("animated").addClass("swipe-right"),e===w&&d.addClass("animated").addClass("swipe-left"),E.show(),void d.animate({opacity:0},500,(function(){g.css("background",f),d.removeClass("animated").removeClass("swipe-left").removeClass("swipe-right").css({"margin-left":0,"margin-right":0}),"iframe"==e.data("vbtype")?ce():"inline"==e.data("vbtype")?oe():"ajax"==e.data("vbtype")?ie():"video"==e.data("vbtype")?ae(s):(d.html('<img src="'+l+'">'),te()),D=e,$(),p=!1,A.cb_after_nav(D,M,w,C)})))}function Q(e){27===e.keyCode&&S(),37==e.keyCode&&!0===B&&H(C),39==e.keyCode&&!0===_&&H(w)}function S(){if(!1===A.cb_pre_close(D,M,w,C))return!1;e("body").off("keydown",Q).removeClass("vbox-open"),D.focus(),g.animate({opacity:0},500,(function(){g.remove(),p=!1,A.cb_post_close()}))}J.VBclose=function(){S()},D.addClass("vbox-item"),D.data("framewidth",A.framewidth),D.data("frameheight",A.frameheight),D.data("border",A.border),D.data("bgcolor",A.bgcolor),D.data("numeratio",A.numeratio),D.data("gallItems",A.gallItems),D.data("infinigall",A.infinigall),D.data("overlaycolor",A.overlayColor),D.data("titleattr",A.titleattr),D.data("venobox",!0),D.on("click",(function(u){if(u.preventDefault(),D=e(this),!1===A.cb_pre_open(D))return!1;switch(J.VBnext=function(){H(w)},J.VBprev=function(){H(C)},f=D.data("overlay")||D.data("overlaycolor"),r=D.data("framewidth"),v=D.data("frameheight"),s=D.data("autoplay")||A.autoplay,o=D.data("border"),i=D.data("bgcolor"),_=!1,B=!1,p=!1,l=D.data("href")||D.attr("href"),n=D.data("css")||"",x=D.attr(D.data("titleattr"))||"",P='<div class="vbox-preloader">',A.spinner){case"rotating-plane":P+='<div class="sk-rotating-plane"></div>';break;case"double-bounce":P+='<div class="sk-double-bounce"><div class="sk-child sk-double-bounce1"></div><div class="sk-child sk-double-bounce2"></div></div>';break;case"wave":P+='<div class="sk-wave"><div class="sk-rect sk-rect1"></div><div class="sk-rect sk-rect2"></div><div class="sk-rect sk-rect3"></div><div class="sk-rect sk-rect4"></div><div class="sk-rect sk-rect5"></div></div>';break;case"wandering-cubes":P+='<div class="sk-wandering-cubes"><div class="sk-cube sk-cube1"></div><div class="sk-cube sk-cube2"></div></div>';break;case"spinner-pulse":P+='<div class="sk-spinner sk-spinner-pulse"></div>';break;case"chasing-dots":P+='<div class="sk-chasing-dots"><div class="sk-child sk-dot1"></div><div class="sk-child sk-dot2"></div></div>';break;case"three-bounce":P+='<div class="sk-three-bounce"><div class="sk-child sk-bounce1"></div><div class="sk-child sk-bounce2"></div><div class="sk-child sk-bounce3"></div></div>';break;case"circle":P+='<div class="sk-circle"><div class="sk-circle1 sk-child"></div><div class="sk-circle2 sk-child"></div><div class="sk-circle3 sk-child"></div><div class="sk-circle4 sk-child"></div><div class="sk-circle5 sk-child"></div><div class="sk-circle6 sk-child"></div><div class="sk-circle7 sk-child"></div><div class="sk-circle8 sk-child"></div><div class="sk-circle9 sk-child"></div><div class="sk-circle10 sk-child"></div><div class="sk-circle11 sk-child"></div><div class="sk-circle12 sk-child"></div></div>';break;case"cube-grid":P+='<div class="sk-cube-grid"><div class="sk-cube sk-cube1"></div><div class="sk-cube sk-cube2"></div><div class="sk-cube sk-cube3"></div><div class="sk-cube sk-cube4"></div><div class="sk-cube sk-cube5"></div><div class="sk-cube sk-cube6"></div><div class="sk-cube sk-cube7"></div><div class="sk-cube sk-cube8"></div><div class="sk-cube sk-cube9"></div></div>';break;case"fading-circle":P+='<div class="sk-fading-circle"><div class="sk-circle1 sk-circle"></div><div class="sk-circle2 sk-circle"></div><div class="sk-circle3 sk-circle"></div><div class="sk-circle4 sk-circle"></div><div class="sk-circle5 sk-circle"></div><div class="sk-circle6 sk-circle"></div><div class="sk-circle7 sk-circle"></div><div class="sk-circle8 sk-circle"></div><div class="sk-circle9 sk-circle"></div><div class="sk-circle10 sk-circle"></div><div class="sk-circle11 sk-circle"></div><div class="sk-circle12 sk-circle"></div></div>';break;case"folding-cube":P+='<div class="sk-folding-cube"><div class="sk-cube1 sk-cube"></div><div class="sk-cube2 sk-cube"></div><div class="sk-cube4 sk-cube"></div><div class="sk-cube3 sk-cube"></div></div>'}return P+="</div>",O='<a class="vbox-next">'+A.htmlNext+'</a><a class="vbox-prev">'+A.htmlPrev+"</a>",U='<div class="vbox-title"></div><div class="vbox-num">0/0</div><div class="vbox-close">'+A.htmlClose+"</div>",t='<div class="vbox-overlay '+n+'" style="background:'+f+'">'+P+'<div class="vbox-container"><div class="vbox-content"></div></div>'+U+O+"</div>",e("body").append(t).addClass("vbox-open"),e(".vbox-preloader div:not(.sk-circle) .sk-child, .vbox-preloader .sk-rotating-plane, .vbox-preloader .sk-rect, .vbox-preloader div:not(.sk-folding-cube) .sk-cube, .vbox-preloader .sk-spinner-pulse").css("background-color",A.spinColor),g=e(".vbox-overlay"),e(".vbox-container"),d=e(".vbox-content"),c=e(".vbox-num"),a=e(".vbox-title"),(E=e(".vbox-preloader")).show(),a.css(A.titlePosition,"-1px"),a.css({color:A.titleColor,"background-color":A.titleBackground}),e(".vbox-close").css({color:A.closeColor,"background-color":A.closeBackground}),e(".vbox-num").css(A.numerationPosition,"-1px"),e(".vbox-num").css({color:A.numerationColor,"background-color":A.numerationBackground}),e(".vbox-next span, .vbox-prev span").css({"border-top-color":A.arrowsColor,"border-right-color":A.arrowsColor}),d.html(""),d.css("opacity","0"),g.css("opacity","0"),$(),g.animate({opacity:1},250,(function(){"iframe"==D.data("vbtype")?ce():"inline"==D.data("vbtype")?oe():"ajax"==D.data("vbtype")?ie():"video"==D.data("vbtype")?ae(s):(d.html('<img src="'+l+'">'),te()),A.cb_post_open(D,M,w,C)})),e("body").keydown(Q),e(".vbox-prev").on("click",(function(){H(C)})),e(".vbox-next").on("click",(function(){H(w)})),!1}));var T=".vbox-overlay";function Z(e){d.addClass("animated"),I=R=e.pageY,z=X=e.pageX,N=!0}function F(e){if(!0===N){X=e.pageX,R=e.pageY,j=X-z,W=R-I;var s=Math.abs(j);s>Math.abs(W)&&s<=100&&(e.preventDefault(),d.css("margin-left",j))}}function G(e){if(!0===N){N=!1;var s=D,i=!1;(Y=X-z)<0&&!0===_&&(s=w,i=!0),Y>0&&!0===B&&(s=C,i=!0),Math.abs(Y)>=q&&!0===i?H(s):d.css({"margin-left":0,"margin-right":0})}}A.overlayClose||(T=".vbox-close"),e("body").on("click",T,(function(s){(e(s.target).is(".vbox-overlay")||e(s.target).is(".vbox-content")||e(s.target).is(".vbox-close")||e(s.target).is(".vbox-preloader"))&&S()})),z=0,X=0,Y=0,q=50,N=!1;var K={DOWN:"touchmousedown",UP:"touchmouseup",MOVE:"touchmousemove"},L=function(s){var i;switch(s.type){case"mousedown":i=K.DOWN;break;case"mouseup":case"mouseout":i=K.UP;break;case"mousemove":i=K.MOVE;break;default:return}var c=se(i,s,s.pageX,s.pageY);e(s.target).trigger(c)},ee=function(s){var i;switch(s.type){case"touchstart":i=K.DOWN;break;case"touchend":i=K.UP;break;case"touchmove":i=K.MOVE;break;default:return}var c,a=s.originalEvent.touches[0];c=i==K.UP?se(i,s,null,null):se(i,s,a.pageX,a.pageY),e(s.target).trigger(c)},se=function(s,i,c,a){return e.Event(s,{pageX:c,pageY:a,originalEvent:i})};function ie(){e.ajax({url:l,cache:!1}).done((function(e){d.html('<div class="vbox-inline">'+e+"</div>"),te()})).fail((function(){d.html('<div class="vbox-inline"><p>Error retrieving contents, please retry</div>'),de()}))}function ce(){d.html('<iframe class="venoframe" src="'+l+'"></iframe>'),de()}function ae(e){var s,i=function(e){var s;return e.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),RegExp.$3.indexOf("youtu")>-1?s="youtube":RegExp.$3.indexOf("vimeo")>-1&&(s="vimeo"),{type:s,id:RegExp.$6}}(l),c=(e?"?rel=0&autoplay=1":"?rel=0")+function(e){var s="",i=decodeURIComponent(e).split("?");if(void 0!==i[1]){var c,a,o=i[1].split("&");for(a=0;a<o.length;a++)s=s+"&"+(c=o[a].split("="))[0]+"="+c[1]}return encodeURI(s)}(l);"vimeo"==i.type?s="https://player.vimeo.com/video/":"youtube"==i.type&&(s="https://www.youtube.com/embed/"),d.html('<iframe class="venoframe vbvid" webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder="0" src="'+s+i.id+c+'"></iframe>'),de()}function oe(){d.html('<div class="vbox-inline">'+e(l).html()+"</div>"),de()}function te(){(V=d.find("img")).length?V.each((function(){e(this).one("load",(function(){de()}))})):de()}function de(){a.html(x),d.find(">:first-child").addClass("figlio").css({width:r,height:v,padding:o,background:i}),e("img.figlio").on("dragstart",(function(e){e.preventDefault()})),le(),d.animate({opacity:"1"},"slow",(function(){E.hide()}))}function le(){var s=d.outerHeight(),i=e(window).height();m=s+60<i?(i-s)/2:"30px",d.css("margin-top",m),d.css("margin-bottom",m),A.cb_post_resize()}"ontouchstart"in window?(e(document).on("touchstart",ee),e(document).on("touchmove",ee),e(document).on("touchend",ee)):(e(document).on("mousedown",L),e(document).on("mouseup",L),e(document).on("mouseout",L),e(document).on("mousemove",L)),e(window).resize((function(){e(".vbox-content").length&&setTimeout(le(),800)}))}))}})}(jQuery)}}]);
=======
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./resources/js/vendor/wow.min.js":
/*!****************************************!*\
  !*** ./resources/js/vendor/wow.min.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! WOW wow.js - v1.3.0 - 2016-10-04
* https://wowjs.uk
* Copyright (c) 2016 Thomas Grainger; Licensed MIT */
!function (a, b) {
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var c; }
}(this, function (a, b) {
  "use strict";

  function c(a, b) {
    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
  }

  function d(a, b) {
    return b.indexOf(a) >= 0;
  }

  function e(a, b) {
    for (var c in b) {
      if (null == a[c]) {
        var d = b[c];
        a[c] = d;
      }
    }

    return a;
  }

  function f(a) {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a);
  }

  function g(a) {
    var b = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
        c = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2],
        d = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3],
        e = void 0;
    return null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e;
  }

  function h(a, b) {
    null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) && a["on" + b]();
  }

  function i(a, b, c) {
    null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c;
  }

  function j(a, b, c) {
    null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b];
  }

  function k() {
    return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight;
  }

  Object.defineProperty(b, "__esModule", {
    value: !0
  });

  var l,
      m,
      n = function () {
    function a(a, b) {
      for (var c = 0; c < b.length; c++) {
        var d = b[c];
        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d);
      }
    }

    return function (b, c, d) {
      return c && a(b.prototype, c), d && a(b, d), b;
    };
  }(),
      o = window.WeakMap || window.MozWeakMap || function () {
    function a() {
      c(this, a), this.keys = [], this.values = [];
    }

    return n(a, [{
      key: "get",
      value: function value(a) {
        for (var b = 0; b < this.keys.length; b++) {
          var c = this.keys[b];
          if (c === a) return this.values[b];
        }
      }
    }, {
      key: "set",
      value: function value(a, b) {
        for (var c = 0; c < this.keys.length; c++) {
          var d = this.keys[c];
          if (d === a) return this.values[c] = b, this;
        }

        return this.keys.push(a), this.values.push(b), this;
      }
    }]), a;
  }(),
      p = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (m = l = function () {
    function a() {
      c(this, a), "undefined" != typeof console && null !== console && (console.warn("MutationObserver is not supported by your browser."), console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."));
    }

    return n(a, [{
      key: "observe",
      value: function value() {}
    }]), a;
  }(), l.notSupported = !0, m),
      q = window.getComputedStyle || function (a) {
    var b = /(\-([a-z]){1})/g;
    return {
      getPropertyValue: function getPropertyValue(c) {
        "float" === c && (c = "styleFloat"), b.test(c) && c.replace(b, function (a, b) {
          return b.toUpperCase();
        });
        var d = a.currentStyle;
        return (null != d ? d[c] : void 0) || null;
      }
    };
  },
      r = function () {
    function a() {
      var b = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
      c(this, a), this.defaults = {
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: !0,
        live: !0,
        callback: null,
        scrollContainer: null,
        resetAnimation: !0
      }, this.animate = function () {
        return "requestAnimationFrame" in window ? function (a) {
          return window.requestAnimationFrame(a);
        } : function (a) {
          return a();
        };
      }(), this.vendors = ["moz", "webkit"], this.start = this.start.bind(this), this.resetAnimation = this.resetAnimation.bind(this), this.scrollHandler = this.scrollHandler.bind(this), this.scrollCallback = this.scrollCallback.bind(this), this.scrolled = !0, this.config = e(b, this.defaults), null != b.scrollContainer && (this.config.scrollContainer = document.querySelector(b.scrollContainer)), this.animationNameCache = new o(), this.wowEvent = g(this.config.boxClass);
    }

    return n(a, [{
      key: "init",
      value: function value() {
        this.element = window.document.documentElement, d(document.readyState, ["interactive", "complete"]) ? this.start() : i(document, "DOMContentLoaded", this.start), this.finished = [];
      }
    }, {
      key: "start",
      value: function value() {
        var a = this;
        if (this.stopped = !1, this.boxes = [].slice.call(this.element.querySelectorAll("." + this.config.boxClass)), this.all = this.boxes.slice(0), this.boxes.length) if (this.disabled()) this.resetStyle();else for (var b = 0; b < this.boxes.length; b++) {
          var c = this.boxes[b];
          this.applyStyle(c, !0);
        }

        if (this.disabled() || (i(this.config.scrollContainer || window, "scroll", this.scrollHandler), i(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live) {
          var d = new p(function (b) {
            for (var c = 0; c < b.length; c++) {
              for (var d = b[c], e = 0; e < d.addedNodes.length; e++) {
                var f = d.addedNodes[e];
                a.doSync(f);
              }
            }
          });
          d.observe(document.body, {
            childList: !0,
            subtree: !0
          });
        }
      }
    }, {
      key: "stop",
      value: function value() {
        this.stopped = !0, j(this.config.scrollContainer || window, "scroll", this.scrollHandler), j(window, "resize", this.scrollHandler), null != this.interval && clearInterval(this.interval);
      }
    }, {
      key: "sync",
      value: function value() {
        p.notSupported && this.doSync(this.element);
      }
    }, {
      key: "doSync",
      value: function value(a) {
        if ("undefined" != typeof a && null !== a || (a = this.element), 1 === a.nodeType) {
          a = a.parentNode || a;

          for (var b = a.querySelectorAll("." + this.config.boxClass), c = 0; c < b.length; c++) {
            var e = b[c];
            d(e, this.all) || (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), this.scrolled = !0);
          }
        }
      }
    }, {
      key: "show",
      value: function value(a) {
        return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), h(a, this.wowEvent), this.config.resetAnimation && (i(a, "animationend", this.resetAnimation), i(a, "oanimationend", this.resetAnimation), i(a, "webkitAnimationEnd", this.resetAnimation), i(a, "MSAnimationEnd", this.resetAnimation)), a;
      }
    }, {
      key: "applyStyle",
      value: function value(a, b) {
        var c = this,
            d = a.getAttribute("data-wow-duration"),
            e = a.getAttribute("data-wow-delay"),
            f = a.getAttribute("data-wow-iteration");
        return this.animate(function () {
          return c.customStyle(a, b, d, e, f);
        });
      }
    }, {
      key: "resetStyle",
      value: function value() {
        for (var a = 0; a < this.boxes.length; a++) {
          var b = this.boxes[a];
          b.style.visibility = "visible";
        }
      }
    }, {
      key: "resetAnimation",
      value: function value(a) {
        if (a.type.toLowerCase().indexOf("animationend") >= 0) {
          var b = a.target || a.srcElement;
          b.className = b.className.replace(this.config.animateClass, "").trim();
        }
      }
    }, {
      key: "customStyle",
      value: function value(a, b, c, d, e) {
        return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {
          animationDuration: c
        }), d && this.vendorSet(a.style, {
          animationDelay: d
        }), e && this.vendorSet(a.style, {
          animationIterationCount: e
        }), this.vendorSet(a.style, {
          animationName: b ? "none" : this.cachedAnimationName(a)
        }), a;
      }
    }, {
      key: "vendorSet",
      value: function value(a, b) {
        for (var c in b) {
          if (b.hasOwnProperty(c)) {
            var d = b[c];
            a["" + c] = d;

            for (var e = 0; e < this.vendors.length; e++) {
              var f = this.vendors[e];
              a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = d;
            }
          }
        }
      }
    }, {
      key: "vendorCSS",
      value: function value(a, b) {
        for (var c = q(a), d = c.getPropertyCSSValue(b), e = 0; e < this.vendors.length; e++) {
          var f = this.vendors[e];
          d = d || c.getPropertyCSSValue("-" + f + "-" + b);
        }

        return d;
      }
    }, {
      key: "animationName",
      value: function value(a) {
        var b = void 0;

        try {
          b = this.vendorCSS(a, "animation-name").cssText;
        } catch (c) {
          b = q(a).getPropertyValue("animation-name");
        }

        return "none" === b ? "" : b;
      }
    }, {
      key: "cacheAnimationName",
      value: function value(a) {
        return this.animationNameCache.set(a, this.animationName(a));
      }
    }, {
      key: "cachedAnimationName",
      value: function value(a) {
        return this.animationNameCache.get(a);
      }
    }, {
      key: "scrollHandler",
      value: function value() {
        this.scrolled = !0;
      }
    }, {
      key: "scrollCallback",
      value: function value() {
        if (this.scrolled) {
          this.scrolled = !1;

          for (var a = [], b = 0; b < this.boxes.length; b++) {
            var c = this.boxes[b];

            if (c) {
              if (this.isVisible(c)) {
                this.show(c);
                continue;
              }

              a.push(c);
            }
          }

          this.boxes = a, this.boxes.length || this.config.live || this.stop();
        }
      }
    }, {
      key: "offsetTop",
      value: function value(a) {
        for (; void 0 === a.offsetTop;) {
          a = a.parentNode;
        }

        for (var b = a.offsetTop; a.offsetParent;) {
          a = a.offsetParent, b += a.offsetTop;
        }

        return b;
      }
    }, {
      key: "isVisible",
      value: function value(a) {
        var b = a.getAttribute("data-wow-offset") || this.config.offset,
            c = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset,
            d = c + Math.min(this.element.clientHeight, k()) - b,
            e = this.offsetTop(a),
            f = e + a.clientHeight;
        return d >= e && f >= c;
      }
    }, {
      key: "disabled",
      value: function value() {
        return !this.config.mobile && f(navigator.userAgent);
      }
    }]), a;
  }();

  b["default"] = r, a.exports = b["default"];
});

/***/ })

}]);
>>>>>>> Stashed changes
