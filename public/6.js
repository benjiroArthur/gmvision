<<<<<<< Updated upstream
/*! For license information please see 6.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{25:function(t,e,n){(function(n){var o,r,a,i;function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}i=void 0!==n?n:this.window||this.global,r=[],o=function(t){"use strict";var e,n,o,r,a,i,c,l={},s="querySelector"in document&&"addEventListener"in t,f={selector:"[data-scroll]",selectorHeader:null,speed:500,easing:"easeInOutCubic",offset:0,callback:function(){}},d=function t(){var e={},n=!1,o=0,r=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(n=arguments[0],o++);for(var a=function(o){for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(n&&"[object Object]"===Object.prototype.toString.call(o[r])?e[r]=t(!0,e[r],o[r]):e[r]=o[r])};o<r;o++){var i=arguments[o];a(i)}return e},h=function(t,e,n){var o=0;if(t.offsetParent)do{o+=t.offsetTop,t=t.offsetParent}while(t);return o=Math.max(o-e-n,0),Math.min(o,p()-m())},m=function(){return Math.max(document.documentElement.clientHeight,t.innerHeight||0)},p=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},b=function(t){return t?function(t){return Math.max(t.scrollHeight,t.offsetHeight,t.clientHeight)}(t)+t.offsetTop:0};l.animateScroll=function(n,o,i){var l=function(t){return t&&"object"==("undefined"==typeof JSON?"undefined":u(JSON))&&"function"==typeof JSON.parse?JSON.parse(t):{}}(o?o.getAttribute("data-options"):null),s=d(e||f,i||{},l),m="[object Number]"===Object.prototype.toString.call(n),g=m||!n.tagName?null:n;if(m||g){var v=t.pageYOffset;s.selectorHeader&&!r&&(r=document.querySelector(s.selectorHeader)),a||(a=b(r));var y,O,S=m?n:h(g,a,parseInt(s.offset,10)),H=S-v,I=p(),w=0,E=function(e,r,a){var i=t.pageYOffset;(e==r||i==r||t.innerHeight+i>=I)&&(clearInterval(a),function(e,n,o){o||(e.focus(),document.activeElement.id!==e.id&&(e.setAttribute("tabindex","-1"),e.focus(),e.style.outline="none"),t.scrollTo(0,n))}(n,r,m),s.callback(n,o))},A=function(){y=(y=(w+=16)/parseInt(s.speed,10))>1?1:y,O=v+H*function(t,e){var n;return"easeInQuad"===t&&(n=e*e),"easeOutQuad"===t&&(n=e*(2-e)),"easeInOutQuad"===t&&(n=e<.5?2*e*e:(4-2*e)*e-1),"easeInCubic"===t&&(n=e*e*e),"easeOutCubic"===t&&(n=--e*e*e+1),"easeInOutCubic"===t&&(n=e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1),"easeInQuart"===t&&(n=e*e*e*e),"easeOutQuart"===t&&(n=1- --e*e*e*e),"easeInOutQuart"===t&&(n=e<.5?8*e*e*e*e:1-8*--e*e*e*e),"easeInQuint"===t&&(n=e*e*e*e*e),"easeOutQuint"===t&&(n=1+--e*e*e*e*e),"easeInOutQuint"===t&&(n=e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e),n||e}(s.easing,y),t.scrollTo(0,Math.floor(O)),E(O,S,c)};0===t.pageYOffset&&t.scrollTo(0,0),clearInterval(c),c=setInterval(A,16)}};var g=function(e){t.location.hash,n&&(n.id=n.getAttribute("data-scroll-id"),l.animateScroll(n,o),n=null,o=null)},v=function(r){if(0===r.button&&!r.metaKey&&!r.ctrlKey&&(o=function(t,e){var n,o,r=e.charAt(0),a="classList"in document.documentElement;for("["===r&&(n=(e=e.substr(1,e.length-2)).split("=")).length>1&&(o=!0,n[1]=n[1].replace(/"/g,"").replace(/'/g,""));t&&t!==document&&1===t.nodeType;t=t.parentNode){if("."===r)if(a){if(t.classList.contains(e.substr(1)))return t}else if(new RegExp("(^|\\s)"+e.substr(1)+"(\\s|$)").test(t.className))return t;if("#"===r&&t.id===e.substr(1))return t;if("["===r&&t.hasAttribute(n[0])){if(!o)return t;if(t.getAttribute(n[0])===n[1])return t}if(t.tagName.toLowerCase()===e)return t}return null}(r.target,e.selector))&&"a"===o.tagName.toLowerCase()&&o.hostname===t.location.hostname&&o.pathname===t.location.pathname&&/#/.test(o.href)){var a=function(t){"#"===t.charAt(0)&&(t=t.substr(1));for(var e,n=String(t),o=n.length,r=-1,a="",i=n.charCodeAt(0);++r<o;){if(0===(e=n.charCodeAt(r)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");a+=e>=1&&e<=31||127==e||0===r&&e>=48&&e<=57||1===r&&e>=48&&e<=57&&45===i?"\\"+e.toString(16)+" ":e>=128||45===e||95===e||e>=48&&e<=57||e>=65&&e<=90||e>=97&&e<=122?n.charAt(r):"\\"+n.charAt(r)}return"#"+a}(o.hash);if("#"===a){r.preventDefault();var i=(n=document.body).id?n.id:"smooth-scroll-top";return n.setAttribute("data-scroll-id",i),n.id="",void(t.location.hash.substring(1)===i?g():t.location.hash=i)}(n=document.querySelector(a))&&(n.setAttribute("data-scroll-id",n.id),n.id="",o.hash===t.location.hash&&(r.preventDefault(),g()))}},y=function(t){i||(i=setTimeout((function(){i=null,a=b(r)}),66))};return l.destroy=function(){e&&(document.removeEventListener("click",v,!1),t.removeEventListener("resize",y,!1),e=null,n=null,o=null,r=null,a=null,i=null,c=null)},l.init=function(n){s&&(l.destroy(),e=d(f,n||{}),r=e.selectorHeader?document.querySelector(e.selectorHeader):null,a=b(r),document.addEventListener("click",v,!1),t.addEventListener("hashchange",g,!1),r&&t.addEventListener("resize",y,!1))},l}(i),void 0===(a="function"==typeof o?o.apply(e,r):o)||(t.exports=a)}).call(this,n(2))}}]);
=======
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./resources/js/vendor/tether.min.js":
/*!*******************************************!*\
  !*** ./resources/js/vendor/tether.min.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t, e) {
   true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function (t, e, o) {
  "use strict";

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function i(t) {
    var e = t.getBoundingClientRect(),
        o = {};

    for (var n in e) {
      o[n] = e[n];
    }

    if (t.ownerDocument !== document) {
      var r = t.ownerDocument.defaultView.frameElement;

      if (r) {
        var s = i(r);
        o.top += s.top, o.bottom += s.top, o.left += s.left, o.right += s.left;
      }
    }

    return o;
  }

  function r(t) {
    var e = getComputedStyle(t) || {},
        o = e.position,
        n = [];
    if ("fixed" === o) return [t];

    for (var i = t; (i = i.parentNode) && i && 1 === i.nodeType;) {
      var r = void 0;

      try {
        r = getComputedStyle(i);
      } catch (s) {}

      if ("undefined" == typeof r || null === r) return n.push(i), n;
      var a = r,
          f = a.overflow,
          l = a.overflowX,
          h = a.overflowY;
      /(auto|scroll)/.test(f + h + l) && ("absolute" !== o || ["relative", "absolute", "fixed"].indexOf(r.position) >= 0) && n.push(i);
    }

    return n.push(t.ownerDocument.body), t.ownerDocument !== document && n.push(t.ownerDocument.defaultView), n;
  }

  function s() {
    A && document.body.removeChild(A), A = null;
  }

  function a(t) {
    var e = void 0;
    t === document ? (e = document, t = document.documentElement) : e = t.ownerDocument;
    var o = e.documentElement,
        n = i(t),
        r = P();
    return n.top -= r.top, n.left -= r.left, "undefined" == typeof n.width && (n.width = document.body.scrollWidth - n.left - n.right), "undefined" == typeof n.height && (n.height = document.body.scrollHeight - n.top - n.bottom), n.top = n.top - o.clientTop, n.left = n.left - o.clientLeft, n.right = e.body.clientWidth - n.width - n.left, n.bottom = e.body.clientHeight - n.height - n.top, n;
  }

  function f(t) {
    return t.offsetParent || document.documentElement;
  }

  function l() {
    var t = document.createElement("div");
    t.style.width = "100%", t.style.height = "200px";
    var e = document.createElement("div");
    h(e.style, {
      position: "absolute",
      top: 0,
      left: 0,
      pointerEvents: "none",
      visibility: "hidden",
      width: "200px",
      height: "150px",
      overflow: "hidden"
    }), e.appendChild(t), document.body.appendChild(e);
    var o = t.offsetWidth;
    e.style.overflow = "scroll";
    var n = t.offsetWidth;
    o === n && (n = e.clientWidth), document.body.removeChild(e);
    var i = o - n;
    return {
      width: i,
      height: i
    };
  }

  function h() {
    var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
        e = [];
    return Array.prototype.push.apply(e, arguments), e.slice(1).forEach(function (e) {
      if (e) for (var o in e) {
        ({}).hasOwnProperty.call(e, o) && (t[o] = e[o]);
      }
    }), t;
  }

  function u(t, e) {
    if ("undefined" != typeof t.classList) e.split(" ").forEach(function (e) {
      e.trim() && t.classList.remove(e);
    });else {
      var o = new RegExp("(^| )" + e.split(" ").join("|") + "( |$)", "gi"),
          n = c(t).replace(o, " ");
      g(t, n);
    }
  }

  function d(t, e) {
    if ("undefined" != typeof t.classList) e.split(" ").forEach(function (e) {
      e.trim() && t.classList.add(e);
    });else {
      u(t, e);
      var o = c(t) + (" " + e);
      g(t, o);
    }
  }

  function p(t, e) {
    if ("undefined" != typeof t.classList) return t.classList.contains(e);
    var o = c(t);
    return new RegExp("(^| )" + e + "( |$)", "gi").test(o);
  }

  function c(t) {
    return t.className instanceof t.ownerDocument.defaultView.SVGAnimatedString ? t.className.baseVal : t.className;
  }

  function g(t, e) {
    t.setAttribute("class", e);
  }

  function m(t, e, o) {
    o.forEach(function (o) {
      -1 === e.indexOf(o) && p(t, o) && u(t, o);
    }), e.forEach(function (e) {
      p(t, e) || d(t, e);
    });
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function v(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
  }

  function y(t, e) {
    var o = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
    return t + o >= e && e >= t - o;
  }

  function b() {
    return "undefined" != typeof performance && "undefined" != typeof performance.now ? performance.now() : +new Date();
  }

  function w() {
    for (var t = {
      top: 0,
      left: 0
    }, e = arguments.length, o = Array(e), n = 0; e > n; n++) {
      o[n] = arguments[n];
    }

    return o.forEach(function (e) {
      var o = e.top,
          n = e.left;
      "string" == typeof o && (o = parseFloat(o, 10)), "string" == typeof n && (n = parseFloat(n, 10)), t.top += o, t.left += n;
    }), t;
  }

  function C(t, e) {
    return "string" == typeof t.left && -1 !== t.left.indexOf("%") && (t.left = parseFloat(t.left, 10) / 100 * e.width), "string" == typeof t.top && -1 !== t.top.indexOf("%") && (t.top = parseFloat(t.top, 10) / 100 * e.height), t;
  }

  function O(t, e) {
    return "scrollParent" === e ? e = t.scrollParents[0] : "window" === e && (e = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]), e === document && (e = e.documentElement), "undefined" != typeof e.nodeType && !function () {
      var t = e,
          o = a(e),
          n = o,
          i = getComputedStyle(e);

      if (e = [n.left, n.top, o.width + n.left, o.height + n.top], t.ownerDocument !== document) {
        var r = t.ownerDocument.defaultView;
        e[0] += r.pageXOffset, e[1] += r.pageYOffset, e[2] += r.pageXOffset, e[3] += r.pageYOffset;
      }

      $.forEach(function (t, o) {
        t = t[0].toUpperCase() + t.substr(1), "Top" === t || "Left" === t ? e[o] += parseFloat(i["border" + t + "Width"]) : e[o] -= parseFloat(i["border" + t + "Width"]);
      });
    }(), e;
  }

  var E = function () {
    function t(t, e) {
      for (var o = 0; o < e.length; o++) {
        var n = e[o];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
      }
    }

    return function (e, o, n) {
      return o && t(e.prototype, o), n && t(e, n), e;
    };
  }(),
      x = void 0;

  "undefined" == typeof x && (x = {
    modules: []
  });

  var A = null,
      T = function () {
    var t = 0;
    return function () {
      return ++t;
    };
  }(),
      S = {},
      P = function P() {
    var t = A;
    t || (t = document.createElement("div"), t.setAttribute("data-tether-id", T()), h(t.style, {
      top: 0,
      left: 0,
      position: "absolute"
    }), document.body.appendChild(t), A = t);
    var e = t.getAttribute("data-tether-id");
    return "undefined" == typeof S[e] && (S[e] = i(t), M(function () {
      delete S[e];
    })), S[e];
  },
      W = [],
      M = function M(t) {
    W.push(t);
  },
      _ = function _() {
    for (var t = void 0; t = W.pop();) {
      t();
    }
  },
      k = function () {
    function t() {
      n(this, t);
    }

    return E(t, [{
      key: "on",
      value: function value(t, e, o) {
        var n = arguments.length <= 3 || void 0 === arguments[3] ? !1 : arguments[3];
        "undefined" == typeof this.bindings && (this.bindings = {}), "undefined" == typeof this.bindings[t] && (this.bindings[t] = []), this.bindings[t].push({
          handler: e,
          ctx: o,
          once: n
        });
      }
    }, {
      key: "once",
      value: function value(t, e, o) {
        this.on(t, e, o, !0);
      }
    }, {
      key: "off",
      value: function value(t, e) {
        if ("undefined" != typeof this.bindings && "undefined" != typeof this.bindings[t]) if ("undefined" == typeof e) delete this.bindings[t];else for (var o = 0; o < this.bindings[t].length;) {
          this.bindings[t][o].handler === e ? this.bindings[t].splice(o, 1) : ++o;
        }
      }
    }, {
      key: "trigger",
      value: function value(t) {
        if ("undefined" != typeof this.bindings && this.bindings[t]) {
          for (var e = 0, o = arguments.length, n = Array(o > 1 ? o - 1 : 0), i = 1; o > i; i++) {
            n[i - 1] = arguments[i];
          }

          for (; e < this.bindings[t].length;) {
            var r = this.bindings[t][e],
                s = r.handler,
                a = r.ctx,
                f = r.once,
                l = a;
            "undefined" == typeof l && (l = this), s.apply(l, n), f ? this.bindings[t].splice(e, 1) : ++e;
          }
        }
      }
    }]), t;
  }();

  x.Utils = {
    getActualBoundingClientRect: i,
    getScrollParents: r,
    getBounds: a,
    getOffsetParent: f,
    extend: h,
    addClass: d,
    removeClass: u,
    hasClass: p,
    updateClasses: m,
    defer: M,
    flush: _,
    uniqueId: T,
    Evented: k,
    getScrollBarSize: l,
    removeUtilElements: s
  };

  var B = function () {
    function t(t, e) {
      var o = [],
          n = !0,
          i = !1,
          r = void 0;

      try {
        for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); n = !0) {
          ;
        }
      } catch (f) {
        i = !0, r = f;
      } finally {
        try {
          !n && a["return"] && a["return"]();
        } finally {
          if (i) throw r;
        }
      }

      return o;
    }

    return function (e, o) {
      if (Array.isArray(e)) return e;
      if (Symbol.iterator in Object(e)) return t(e, o);
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }(),
      E = function () {
    function t(t, e) {
      for (var o = 0; o < e.length; o++) {
        var n = e[o];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
      }
    }

    return function (e, o, n) {
      return o && t(e.prototype, o), n && t(e, n), e;
    };
  }(),
      z = function z(t, e, o) {
    for (var n = !0; n;) {
      var i = t,
          r = e,
          s = o;
      n = !1, null === i && (i = Function.prototype);
      var a = Object.getOwnPropertyDescriptor(i, r);

      if (void 0 !== a) {
        if ("value" in a) return a.value;
        var f = a.get;
        if (void 0 === f) return;
        return f.call(s);
      }

      var l = Object.getPrototypeOf(i);
      if (null === l) return;
      t = l, e = r, o = s, n = !0, a = l = void 0;
    }
  };

  if ("undefined" == typeof x) throw new Error("You must include the utils.js file before tether.js");

  var j = x.Utils,
      r = j.getScrollParents,
      a = j.getBounds,
      f = j.getOffsetParent,
      h = j.extend,
      d = j.addClass,
      u = j.removeClass,
      m = j.updateClasses,
      M = j.defer,
      _ = j.flush,
      l = j.getScrollBarSize,
      s = j.removeUtilElements,
      Y = function () {
    if ("undefined" == typeof document) return "";

    for (var t = document.createElement("div"), e = ["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"], o = 0; o < e.length; ++o) {
      var n = e[o];
      if (void 0 !== t.style[n]) return n;
    }
  }(),
      L = [],
      D = function D() {
    L.forEach(function (t) {
      t.position(!1);
    }), _();
  };

  !function () {
    var t = null,
        e = null,
        o = null,
        n = function i() {
      return "undefined" != typeof e && e > 16 ? (e = Math.min(e - 16, 250), void (o = setTimeout(i, 250))) : void ("undefined" != typeof t && b() - t < 10 || (null != o && (clearTimeout(o), o = null), t = b(), D(), e = b() - t));
    };

    "undefined" != typeof window && "undefined" != typeof window.addEventListener && ["resize", "scroll", "touchmove"].forEach(function (t) {
      window.addEventListener(t, n);
    });
  }();

  var X = {
    center: "center",
    left: "right",
    right: "left"
  },
      F = {
    middle: "middle",
    top: "bottom",
    bottom: "top"
  },
      H = {
    top: 0,
    left: 0,
    middle: "50%",
    center: "50%",
    bottom: "100%",
    right: "100%"
  },
      N = function N(t, e) {
    var o = t.left,
        n = t.top;
    return "auto" === o && (o = X[e.left]), "auto" === n && (n = F[e.top]), {
      left: o,
      top: n
    };
  },
      U = function U(t) {
    var e = t.left,
        o = t.top;
    return "undefined" != typeof H[t.left] && (e = H[t.left]), "undefined" != typeof H[t.top] && (o = H[t.top]), {
      left: e,
      top: o
    };
  },
      V = function V(t) {
    var e = t.split(" "),
        o = B(e, 2),
        n = o[0],
        i = o[1];
    return {
      top: n,
      left: i
    };
  },
      R = V,
      q = function (t) {
    function e(t) {
      var o = this;
      n(this, e), z(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), this.position = this.position.bind(this), L.push(this), this.history = [], this.setOptions(t, !1), x.modules.forEach(function (t) {
        "undefined" != typeof t.initialize && t.initialize.call(o);
      }), this.position();
    }

    return v(e, t), E(e, [{
      key: "getClass",
      value: function value() {
        var t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
            e = this.options.classes;
        return "undefined" != typeof e && e[t] ? this.options.classes[t] : this.options.classPrefix ? this.options.classPrefix + "-" + t : t;
      }
    }, {
      key: "setOptions",
      value: function value(t) {
        var e = this,
            o = arguments.length <= 1 || void 0 === arguments[1] ? !0 : arguments[1],
            n = {
          offset: "0 0",
          targetOffset: "0 0",
          targetAttachment: "auto auto",
          classPrefix: "tether"
        };
        this.options = h(n, t);
        var i = this.options,
            s = i.element,
            a = i.target,
            f = i.targetModifier;
        if (this.element = s, this.target = a, this.targetModifier = f, "viewport" === this.target ? (this.target = document.body, this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body, this.targetModifier = "scroll-handle"), ["element", "target"].forEach(function (t) {
          if ("undefined" == typeof e[t]) throw new Error("Tether Error: Both element and target must be defined");
          "undefined" != typeof e[t].jquery ? e[t] = e[t][0] : "string" == typeof e[t] && (e[t] = document.querySelector(e[t]));
        }), d(this.element, this.getClass("element")), this.options.addTargetClasses !== !1 && d(this.target, this.getClass("target")), !this.options.attachment) throw new Error("Tether Error: You must provide an attachment");
        this.targetAttachment = R(this.options.targetAttachment), this.attachment = R(this.options.attachment), this.offset = V(this.options.offset), this.targetOffset = V(this.options.targetOffset), "undefined" != typeof this.scrollParents && this.disable(), "scroll-handle" === this.targetModifier ? this.scrollParents = [this.target] : this.scrollParents = r(this.target), this.options.enabled !== !1 && this.enable(o);
      }
    }, {
      key: "getTargetBounds",
      value: function value() {
        if ("undefined" == typeof this.targetModifier) return a(this.target);

        if ("visible" === this.targetModifier) {
          if (this.target === document.body) return {
            top: pageYOffset,
            left: pageXOffset,
            height: innerHeight,
            width: innerWidth
          };
          var t = a(this.target),
              e = {
            height: t.height,
            width: t.width,
            top: t.top,
            left: t.left
          };
          return e.height = Math.min(e.height, t.height - (pageYOffset - t.top)), e.height = Math.min(e.height, t.height - (t.top + t.height - (pageYOffset + innerHeight))), e.height = Math.min(innerHeight, e.height), e.height -= 2, e.width = Math.min(e.width, t.width - (pageXOffset - t.left)), e.width = Math.min(e.width, t.width - (t.left + t.width - (pageXOffset + innerWidth))), e.width = Math.min(innerWidth, e.width), e.width -= 2, e.top < pageYOffset && (e.top = pageYOffset), e.left < pageXOffset && (e.left = pageXOffset), e;
        }

        if ("scroll-handle" === this.targetModifier) {
          var t = void 0,
              o = this.target;
          o === document.body ? (o = document.documentElement, t = {
            left: pageXOffset,
            top: pageYOffset,
            height: innerHeight,
            width: innerWidth
          }) : t = a(o);
          var n = getComputedStyle(o),
              i = o.scrollWidth > o.clientWidth || [n.overflow, n.overflowX].indexOf("scroll") >= 0 || this.target !== document.body,
              r = 0;
          i && (r = 15);
          var s = t.height - parseFloat(n.borderTopWidth) - parseFloat(n.borderBottomWidth) - r,
              e = {
            width: 15,
            height: .975 * s * (s / o.scrollHeight),
            left: t.left + t.width - parseFloat(n.borderLeftWidth) - 15
          },
              f = 0;
          408 > s && this.target === document.body && (f = -11e-5 * Math.pow(s, 2) - .00727 * s + 22.58), this.target !== document.body && (e.height = Math.max(e.height, 24));
          var l = this.target.scrollTop / (o.scrollHeight - s);
          return e.top = l * (s - e.height - f) + t.top + parseFloat(n.borderTopWidth), this.target === document.body && (e.height = Math.max(e.height, 24)), e;
        }
      }
    }, {
      key: "clearCache",
      value: function value() {
        this._cache = {};
      }
    }, {
      key: "cache",
      value: function value(t, e) {
        return "undefined" == typeof this._cache && (this._cache = {}), "undefined" == typeof this._cache[t] && (this._cache[t] = e.call(this)), this._cache[t];
      }
    }, {
      key: "enable",
      value: function value() {
        var t = this,
            e = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
        this.options.addTargetClasses !== !1 && d(this.target, this.getClass("enabled")), d(this.element, this.getClass("enabled")), this.enabled = !0, this.scrollParents.forEach(function (e) {
          e !== t.target.ownerDocument && e.addEventListener("scroll", t.position);
        }), e && this.position();
      }
    }, {
      key: "disable",
      value: function value() {
        var t = this;
        u(this.target, this.getClass("enabled")), u(this.element, this.getClass("enabled")), this.enabled = !1, "undefined" != typeof this.scrollParents && this.scrollParents.forEach(function (e) {
          e.removeEventListener("scroll", t.position);
        });
      }
    }, {
      key: "destroy",
      value: function value() {
        var t = this;
        this.disable(), L.forEach(function (e, o) {
          e === t && L.splice(o, 1);
        }), 0 === L.length && s();
      }
    }, {
      key: "updateAttachClasses",
      value: function value(t, e) {
        var o = this;
        t = t || this.attachment, e = e || this.targetAttachment;
        var n = ["left", "top", "bottom", "right", "middle", "center"];
        "undefined" != typeof this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length), "undefined" == typeof this._addAttachClasses && (this._addAttachClasses = []);
        var i = this._addAttachClasses;
        t.top && i.push(this.getClass("element-attached") + "-" + t.top), t.left && i.push(this.getClass("element-attached") + "-" + t.left), e.top && i.push(this.getClass("target-attached") + "-" + e.top), e.left && i.push(this.getClass("target-attached") + "-" + e.left);
        var r = [];
        n.forEach(function (t) {
          r.push(o.getClass("element-attached") + "-" + t), r.push(o.getClass("target-attached") + "-" + t);
        }), M(function () {
          "undefined" != typeof o._addAttachClasses && (m(o.element, o._addAttachClasses, r), o.options.addTargetClasses !== !1 && m(o.target, o._addAttachClasses, r), delete o._addAttachClasses);
        });
      }
    }, {
      key: "position",
      value: function value() {
        var t = this,
            e = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];

        if (this.enabled) {
          this.clearCache();
          var o = N(this.targetAttachment, this.attachment);
          this.updateAttachClasses(this.attachment, o);
          var n = this.cache("element-bounds", function () {
            return a(t.element);
          }),
              i = n.width,
              r = n.height;

          if (0 === i && 0 === r && "undefined" != typeof this.lastSize) {
            var s = this.lastSize;
            i = s.width, r = s.height;
          } else this.lastSize = {
            width: i,
            height: r
          };

          var h = this.cache("target-bounds", function () {
            return t.getTargetBounds();
          }),
              u = h,
              d = C(U(this.attachment), {
            width: i,
            height: r
          }),
              p = C(U(o), u),
              c = C(this.offset, {
            width: i,
            height: r
          }),
              g = C(this.targetOffset, u);
          d = w(d, c), p = w(p, g);

          for (var m = h.left + p.left - d.left, v = h.top + p.top - d.top, y = 0; y < x.modules.length; ++y) {
            var b = x.modules[y],
                O = b.position.call(this, {
              left: m,
              top: v,
              targetAttachment: o,
              targetPos: h,
              elementPos: n,
              offset: d,
              targetOffset: p,
              manualOffset: c,
              manualTargetOffset: g,
              scrollbarSize: S,
              attachment: this.attachment
            });
            if (O === !1) return !1;
            "undefined" != typeof O && "object" == _typeof(O) && (v = O.top, m = O.left);
          }

          var E = {
            page: {
              top: v,
              left: m
            },
            viewport: {
              top: v - pageYOffset,
              bottom: pageYOffset - v - r + innerHeight,
              left: m - pageXOffset,
              right: pageXOffset - m - i + innerWidth
            }
          },
              A = this.target.ownerDocument,
              T = A.defaultView,
              S = void 0;
          return A.body.scrollWidth > T.innerWidth && (S = this.cache("scrollbar-size", l), E.viewport.bottom -= S.height), A.body.scrollHeight > T.innerHeight && (S = this.cache("scrollbar-size", l), E.viewport.right -= S.width), (-1 === ["", "static"].indexOf(A.body.style.position) || -1 === ["", "static"].indexOf(A.body.parentElement.style.position)) && (E.page.bottom = A.body.scrollHeight - v - r, E.page.right = A.body.scrollWidth - m - i), "undefined" != typeof this.options.optimizations && this.options.optimizations.moveElement !== !1 && "undefined" == typeof this.targetModifier && !function () {
            var e = t.cache("target-offsetparent", function () {
              return f(t.target);
            }),
                o = t.cache("target-offsetparent-bounds", function () {
              return a(e);
            }),
                n = getComputedStyle(e),
                i = o,
                r = {};

            if (["Top", "Left", "Bottom", "Right"].forEach(function (t) {
              r[t.toLowerCase()] = parseFloat(n["border" + t + "Width"]);
            }), o.right = A.body.scrollWidth - o.left - i.width + r.right, o.bottom = A.body.scrollHeight - o.top - i.height + r.bottom, E.page.top >= o.top + r.top && E.page.bottom >= o.bottom && E.page.left >= o.left + r.left && E.page.right >= o.right) {
              var s = e.scrollTop,
                  l = e.scrollLeft;
              E.offset = {
                top: E.page.top - o.top + s - r.top,
                left: E.page.left - o.left + l - r.left
              };
            }
          }(), this.move(E), this.history.unshift(E), this.history.length > 3 && this.history.pop(), e && _(), !0;
        }
      }
    }, {
      key: "move",
      value: function value(t) {
        var e = this;

        if ("undefined" != typeof this.element.parentNode) {
          var o = {};

          for (var n in t) {
            o[n] = {};

            for (var i in t[n]) {
              for (var r = !1, s = 0; s < this.history.length; ++s) {
                var a = this.history[s];

                if ("undefined" != typeof a[n] && !y(a[n][i], t[n][i])) {
                  r = !0;
                  break;
                }
              }

              r || (o[n][i] = !0);
            }
          }

          var l = {
            top: "",
            left: "",
            right: "",
            bottom: ""
          },
              u = function u(t, o) {
            var n = "undefined" != typeof e.options.optimizations,
                i = n ? e.options.optimizations.gpu : null;

            if (i !== !1) {
              var r = void 0,
                  s = void 0;
              t.top ? (l.top = 0, r = o.top) : (l.bottom = 0, r = -o.bottom), t.left ? (l.left = 0, s = o.left) : (l.right = 0, s = -o.right), l[Y] = "translateX(" + Math.round(s) + "px) translateY(" + Math.round(r) + "px)", "msTransform" !== Y && (l[Y] += " translateZ(0)");
            } else t.top ? l.top = o.top + "px" : l.bottom = o.bottom + "px", t.left ? l.left = o.left + "px" : l.right = o.right + "px";
          },
              d = !1;

          if ((o.page.top || o.page.bottom) && (o.page.left || o.page.right) ? (l.position = "absolute", u(o.page, t.page)) : (o.viewport.top || o.viewport.bottom) && (o.viewport.left || o.viewport.right) ? (l.position = "fixed", u(o.viewport, t.viewport)) : "undefined" != typeof o.offset && o.offset.top && o.offset.left ? !function () {
            l.position = "absolute";
            var n = e.cache("target-offsetparent", function () {
              return f(e.target);
            });
            f(e.element) !== n && M(function () {
              e.element.parentNode.removeChild(e.element), n.appendChild(e.element);
            }), u(o.offset, t.offset), d = !0;
          }() : (l.position = "absolute", u({
            top: !0,
            left: !0
          }, t.page)), !d) {
            for (var p = !0, c = this.element.parentNode; c && 1 === c.nodeType && "BODY" !== c.tagName;) {
              if ("static" !== getComputedStyle(c).position) {
                p = !1;
                break;
              }

              c = c.parentNode;
            }

            p || (this.element.parentNode.removeChild(this.element), this.element.ownerDocument.body.appendChild(this.element));
          }

          var g = {},
              m = !1;

          for (var i in l) {
            var v = l[i],
                b = this.element.style[i];
            b !== v && (m = !0, g[i] = v);
          }

          m && M(function () {
            h(e.element.style, g);
          });
        }
      }
    }]), e;
  }(k);

  q.modules = [], x.position = D;

  var I = h(q, x),
      B = function () {
    function t(t, e) {
      var o = [],
          n = !0,
          i = !1,
          r = void 0;

      try {
        for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); n = !0) {
          ;
        }
      } catch (f) {
        i = !0, r = f;
      } finally {
        try {
          !n && a["return"] && a["return"]();
        } finally {
          if (i) throw r;
        }
      }

      return o;
    }

    return function (e, o) {
      if (Array.isArray(e)) return e;
      if (Symbol.iterator in Object(e)) return t(e, o);
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }(),
      j = x.Utils,
      a = j.getBounds,
      h = j.extend,
      m = j.updateClasses,
      M = j.defer,
      $ = ["left", "top", "right", "bottom"];

  x.modules.push({
    position: function position(t) {
      var e = this,
          o = t.top,
          n = t.left,
          i = t.targetAttachment;
      if (!this.options.constraints) return !0;
      var r = this.cache("element-bounds", function () {
        return a(e.element);
      }),
          s = r.height,
          f = r.width;

      if (0 === f && 0 === s && "undefined" != typeof this.lastSize) {
        var l = this.lastSize;
        f = l.width, s = l.height;
      }

      var u = this.cache("target-bounds", function () {
        return e.getTargetBounds();
      }),
          d = u.height,
          p = u.width,
          c = [this.getClass("pinned"), this.getClass("out-of-bounds")];
      this.options.constraints.forEach(function (t) {
        var e = t.outOfBoundsClass,
            o = t.pinnedClass;
        e && c.push(e), o && c.push(o);
      }), c.forEach(function (t) {
        ["left", "top", "right", "bottom"].forEach(function (e) {
          c.push(t + "-" + e);
        });
      });
      var g = [],
          v = h({}, i),
          y = h({}, this.attachment);
      return this.options.constraints.forEach(function (t) {
        var r = t.to,
            a = t.attachment,
            l = t.pin;
        "undefined" == typeof a && (a = "");
        var h = void 0,
            u = void 0;

        if (a.indexOf(" ") >= 0) {
          var c = a.split(" "),
              m = B(c, 2);
          u = m[0], h = m[1];
        } else h = u = a;

        var b = O(e, r);
        ("target" === u || "both" === u) && (o < b[1] && "top" === v.top && (o += d, v.top = "bottom"), o + s > b[3] && "bottom" === v.top && (o -= d, v.top = "top")), "together" === u && ("top" === v.top && ("bottom" === y.top && o < b[1] ? (o += d, v.top = "bottom", o += s, y.top = "top") : "top" === y.top && o + s > b[3] && o - (s - d) >= b[1] && (o -= s - d, v.top = "bottom", y.top = "bottom")), "bottom" === v.top && ("top" === y.top && o + s > b[3] ? (o -= d, v.top = "top", o -= s, y.top = "bottom") : "bottom" === y.top && o < b[1] && o + (2 * s - d) <= b[3] && (o += s - d, v.top = "top", y.top = "top")), "middle" === v.top && (o + s > b[3] && "top" === y.top ? (o -= s, y.top = "bottom") : o < b[1] && "bottom" === y.top && (o += s, y.top = "top"))), ("target" === h || "both" === h) && (n < b[0] && "left" === v.left && (n += p, v.left = "right"), n + f > b[2] && "right" === v.left && (n -= p, v.left = "left")), "together" === h && (n < b[0] && "left" === v.left ? "right" === y.left ? (n += p, v.left = "right", n += f, y.left = "left") : "left" === y.left && (n += p, v.left = "right", n -= f, y.left = "right") : n + f > b[2] && "right" === v.left ? "left" === y.left ? (n -= p, v.left = "left", n -= f, y.left = "right") : "right" === y.left && (n -= p, v.left = "left", n += f, y.left = "left") : "center" === v.left && (n + f > b[2] && "left" === y.left ? (n -= f, y.left = "right") : n < b[0] && "right" === y.left && (n += f, y.left = "left"))), ("element" === u || "both" === u) && (o < b[1] && "bottom" === y.top && (o += s, y.top = "top"), o + s > b[3] && "top" === y.top && (o -= s, y.top = "bottom")), ("element" === h || "both" === h) && (n < b[0] && ("right" === y.left ? (n += f, y.left = "left") : "center" === y.left && (n += f / 2, y.left = "left")), n + f > b[2] && ("left" === y.left ? (n -= f, y.left = "right") : "center" === y.left && (n -= f / 2, y.left = "right"))), "string" == typeof l ? l = l.split(",").map(function (t) {
          return t.trim();
        }) : l === !0 && (l = ["top", "left", "right", "bottom"]), l = l || [];
        var w = [],
            C = [];
        o < b[1] && (l.indexOf("top") >= 0 ? (o = b[1], w.push("top")) : C.push("top")), o + s > b[3] && (l.indexOf("bottom") >= 0 ? (o = b[3] - s, w.push("bottom")) : C.push("bottom")), n < b[0] && (l.indexOf("left") >= 0 ? (n = b[0], w.push("left")) : C.push("left")), n + f > b[2] && (l.indexOf("right") >= 0 ? (n = b[2] - f, w.push("right")) : C.push("right")), w.length && !function () {
          var t = void 0;
          t = "undefined" != typeof e.options.pinnedClass ? e.options.pinnedClass : e.getClass("pinned"), g.push(t), w.forEach(function (e) {
            g.push(t + "-" + e);
          });
        }(), C.length && !function () {
          var t = void 0;
          t = "undefined" != typeof e.options.outOfBoundsClass ? e.options.outOfBoundsClass : e.getClass("out-of-bounds"), g.push(t), C.forEach(function (e) {
            g.push(t + "-" + e);
          });
        }(), (w.indexOf("left") >= 0 || w.indexOf("right") >= 0) && (y.left = v.left = !1), (w.indexOf("top") >= 0 || w.indexOf("bottom") >= 0) && (y.top = v.top = !1), (v.top !== i.top || v.left !== i.left || y.top !== e.attachment.top || y.left !== e.attachment.left) && (e.updateAttachClasses(y, v), e.trigger("update", {
          attachment: y,
          targetAttachment: v
        }));
      }), M(function () {
        e.options.addTargetClasses !== !1 && m(e.target, g, c), m(e.element, g, c);
      }), {
        top: o,
        left: n
      };
    }
  });
  var j = x.Utils,
      a = j.getBounds,
      m = j.updateClasses,
      M = j.defer;
  x.modules.push({
    position: function position(t) {
      var e = this,
          o = t.top,
          n = t.left,
          i = this.cache("element-bounds", function () {
        return a(e.element);
      }),
          r = i.height,
          s = i.width,
          f = this.getTargetBounds(),
          l = o + r,
          h = n + s,
          u = [];
      o <= f.bottom && l >= f.top && ["left", "right"].forEach(function (t) {
        var e = f[t];
        (e === n || e === h) && u.push(t);
      }), n <= f.right && h >= f.left && ["top", "bottom"].forEach(function (t) {
        var e = f[t];
        (e === o || e === l) && u.push(t);
      });
      var d = [],
          p = [],
          c = ["left", "top", "right", "bottom"];
      return d.push(this.getClass("abutted")), c.forEach(function (t) {
        d.push(e.getClass("abutted") + "-" + t);
      }), u.length && p.push(this.getClass("abutted")), u.forEach(function (t) {
        p.push(e.getClass("abutted") + "-" + t);
      }), M(function () {
        e.options.addTargetClasses !== !1 && m(e.target, p, d), m(e.element, p, d);
      }), !0;
    }
  });

  var B = function () {
    function t(t, e) {
      var o = [],
          n = !0,
          i = !1,
          r = void 0;

      try {
        for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); n = !0) {
          ;
        }
      } catch (f) {
        i = !0, r = f;
      } finally {
        try {
          !n && a["return"] && a["return"]();
        } finally {
          if (i) throw r;
        }
      }

      return o;
    }

    return function (e, o) {
      if (Array.isArray(e)) return e;
      if (Symbol.iterator in Object(e)) return t(e, o);
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }();

  return x.modules.push({
    position: function position(t) {
      var e = t.top,
          o = t.left;

      if (this.options.shift) {
        var n = this.options.shift;
        "function" == typeof this.options.shift && (n = this.options.shift.call(this, {
          top: e,
          left: o
        }));
        var i = void 0,
            r = void 0;

        if ("string" == typeof n) {
          n = n.split(" "), n[1] = n[1] || n[0];
          var s = n,
              a = B(s, 2);
          i = a[0], r = a[1], i = parseFloat(i, 10), r = parseFloat(r, 10);
        } else i = n.top, r = n.left;

        return e += i, o += r, {
          top: e,
          left: o
        };
      }
    }
  }), I;
});

/***/ })

}]);
>>>>>>> Stashed changes
