(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

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