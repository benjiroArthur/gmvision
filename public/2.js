<<<<<<< Updated upstream
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{21:function(i,t){var e,n;e=jQuery,n=function(i,t){var n=e.extend({},e.fn.nivoSlider.defaults,t),a={currentSlide:0,currentImage:"",totalSlides:0,running:!1,paused:!1,stop:!1,controlNavEl:!1},o=e(i);o.data("nivo:vars",a).addClass("nivoSlider");var r=o.children();r.each((function(){var i=e(this),t="";i.is("img")||(i.is("a")&&(i.addClass("nivo-imageLink"),t=i),i=i.find("img:first"));var n=0===n?i.attr("width"):i.width(),o=0===o?i.attr("height"):i.height();""!==t&&t.css("display","none"),i.css("display","none"),a.totalSlides++})),n.randomStart&&(n.startSlide=Math.floor(Math.random()*a.totalSlides)),n.startSlide>0&&(n.startSlide>=a.totalSlides&&(n.startSlide=a.totalSlides-1),a.currentSlide=n.startSlide),e(r[a.currentSlide]).is("img")?a.currentImage=e(r[a.currentSlide]):a.currentImage=e(r[a.currentSlide]).find("img:first"),e(r[a.currentSlide]).is("a")&&e(r[a.currentSlide]).css("display","block");var s=e("<img/>").addClass("nivo-main-image");s.attr("src",a.currentImage.attr("src")).show(),o.append(s),e(window).resize((function(){o.children("img").width(o.width()),s.attr("src",a.currentImage.attr("src")),s.stop().height("auto"),e(".nivo-slice").remove(),e(".nivo-box").remove()})),o.append(e('<div class="nivo-caption"></div>'));var c=function(i){var t=e(".nivo-caption",o);if(""!=a.currentImage.attr("title")&&null!=a.currentImage.attr("title")){var n=a.currentImage.attr("title");"#"==n.substr(0,1)&&(n=e(n).html()),"block"==t.css("display")?setTimeout((function(){t.html(n)}),i.animSpeed):(t.html(n),t.stop().fadeIn(i.animSpeed))}else t.stop().fadeOut(i.animSpeed)};c(n);var l=0;if(!n.manualAdvance&&r.length>1&&(l=setInterval((function(){p(o,r,n,!1)}),n.pauseTime)),n.directionNav&&(o.append('<div class="nivo-directionNav"><a class="nivo-prevNav">'+n.prevText+'</a><a class="nivo-nextNav">'+n.nextText+"</a></div>"),e(o).on("click","a.nivo-prevNav",(function(){if(a.running)return!1;clearInterval(l),l="",a.currentSlide-=2,p(o,r,n,"prev")})),e(o).on("click","a.nivo-nextNav",(function(){if(a.running)return!1;clearInterval(l),l="",p(o,r,n,"next")}))),n.controlNav){a.controlNavEl=e('<div class="nivo-controlNav"></div>'),o.after(a.controlNavEl);for(var d=0;d<r.length;d++)if(n.controlNavThumbs){a.controlNavEl.addClass("nivo-thumbs-enabled");var v=r.eq(d);v.is("img")||(v=v.find("img:first")),v.attr("data-thumb")&&a.controlNavEl.append('<a class="nivo-control" rel="'+d+'"><img src="'+v.attr("data-thumb")+'" alt="" /></a>')}else a.controlNavEl.append('<a class="nivo-control" rel="'+d+'">'+(d+1)+"</a>");e("a:eq("+a.currentSlide+")",a.controlNavEl).addClass("active"),e("a",a.controlNavEl).bind("click",(function(){return!a.running&&!e(this).hasClass("active")&&(clearInterval(l),l="",s.attr("src",a.currentImage.attr("src")),a.currentSlide=e(this).attr("rel")-1,void p(o,r,n,"control"))}))}n.pauseOnHover&&o.hover((function(){a.paused=!0,clearInterval(l),l=""}),(function(){a.paused=!1,""!==l||n.manualAdvance||(l=setInterval((function(){p(o,r,n,!1)}),n.pauseTime))})),o.bind("nivo:animFinished",(function(){s.attr("src",a.currentImage.attr("src")),a.running=!1,e(r).each((function(){e(this).is("a")&&e(this).css("display","none")})),e(r[a.currentSlide]).is("a")&&e(r[a.currentSlide]).css("display","block"),""!==l||a.paused||n.manualAdvance||(l=setInterval((function(){p(o,r,n,!1)}),n.pauseTime)),n.afterChange.call(this)}));var h=function(i,t,n){e(n.currentImage).parent().is("a")&&e(n.currentImage).parent().css("display","block"),e('img[src="'+n.currentImage.attr("src")+'"]',i).not(".nivo-main-image,.nivo-control img").width(i.width()).css("visibility","hidden").show();for(var a=e('img[src="'+n.currentImage.attr("src")+'"]',i).not(".nivo-main-image,.nivo-control img").parent().is("a")?e('img[src="'+n.currentImage.attr("src")+'"]',i).not(".nivo-main-image,.nivo-control img").parent().height():e('img[src="'+n.currentImage.attr("src")+'"]',i).not(".nivo-main-image,.nivo-control img").height(),o=0;o<t.slices;o++){var r=Math.round(i.width()/t.slices);o===t.slices-1?i.append(e('<div class="nivo-slice" name="'+o+'"><img src="'+n.currentImage.attr("src")+'" style="position:absolute; width:'+i.width()+"px; height:auto; display:block !important; top:0; left:-"+(r+o*r-r)+'px;" /></div>').css({left:r*o+"px",width:i.width()-r*o+"px",height:a+"px",opacity:"0",overflow:"hidden"})):i.append(e('<div class="nivo-slice" name="'+o+'"><img src="'+n.currentImage.attr("src")+'" style="position:absolute; width:'+i.width()+"px; height:auto; display:block !important; top:0; left:-"+(r+o*r-r)+'px;" /></div>').css({left:r*o+"px",width:r+"px",height:a+"px",opacity:"0",overflow:"hidden"}))}e(".nivo-slice",i).height(a),s.stop().animate({height:e(n.currentImage).height()},t.animSpeed)},m=function(i,t,n){e(n.currentImage).parent().is("a")&&e(n.currentImage).parent().css("display","block"),e('img[src="'+n.currentImage.attr("src")+'"]',i).not(".nivo-main-image,.nivo-control img").width(i.width()).css("visibility","hidden").show();for(var a=Math.round(i.width()/t.boxCols),o=Math.round(e('img[src="'+n.currentImage.attr("src")+'"]',i).not(".nivo-main-image,.nivo-control img").height()/t.boxRows),r=0;r<t.boxRows;r++)for(var c=0;c<t.boxCols;c++)c===t.boxCols-1?(i.append(e('<div class="nivo-box" name="'+c+'" rel="'+r+'"><img src="'+n.currentImage.attr("src")+'" style="position:absolute; width:'+i.width()+"px; height:auto; display:block; top:-"+o*r+"px; left:-"+a*c+'px;" /></div>').css({opacity:0,left:a*c+"px",top:o*r+"px",width:i.width()-a*c+"px"})),e('.nivo-box[name="'+c+'"]',i).height(e('.nivo-box[name="'+c+'"] img',i).height()+"px")):(i.append(e('<div class="nivo-box" name="'+c+'" rel="'+r+'"><img src="'+n.currentImage.attr("src")+'" style="position:absolute; width:'+i.width()+"px; height:auto; display:block; top:-"+o*r+"px; left:-"+a*c+'px;" /></div>').css({opacity:0,left:a*c+"px",top:o*r+"px",width:a+"px"})),e('.nivo-box[name="'+c+'"]',i).height(e('.nivo-box[name="'+c+'"] img',i).height()+"px"));s.stop().animate({height:e(n.currentImage).height()},t.animSpeed)},p=function(i,t,n,a){var o=i.data("nivo:vars");if(o&&o.currentSlide===o.totalSlides-1&&n.lastSlide.call(this),(!o||o.stop)&&!a)return!1;n.beforeChange.call(this),a?("prev"===a&&s.attr("src",o.currentImage.attr("src")),"next"===a&&s.attr("src",o.currentImage.attr("src"))):s.attr("src",o.currentImage.attr("src")),o.currentSlide++,o.currentSlide===o.totalSlides&&(o.currentSlide=0,n.slideshowEnd.call(this)),o.currentSlide<0&&(o.currentSlide=o.totalSlides-1),e(t[o.currentSlide]).is("img")?o.currentImage=e(t[o.currentSlide]):o.currentImage=e(t[o.currentSlide]).find("img:first"),n.controlNav&&(e("a",o.controlNavEl).removeClass("active"),e("a:eq("+o.currentSlide+")",o.controlNavEl).addClass("active")),c(n),e(".nivo-slice",i).remove(),e(".nivo-box",i).remove();var r=n.effect,l="";"random"===n.effect&&(l=new Array("sliceDownRight","sliceDownLeft","sliceUpRight","sliceUpLeft","sliceUpDown","sliceUpDownLeft","fold","fade","boxRandom","boxRain","boxRainReverse","boxRainGrow","boxRainGrowReverse"),void 0===(r=l[Math.floor(Math.random()*(l.length+1))])&&(r="fade")),-1!==n.effect.indexOf(",")&&(l=n.effect.split(","),void 0===(r=l[Math.floor(Math.random()*l.length)])&&(r="fade")),o.currentImage.attr("data-transition")&&(r=o.currentImage.attr("data-transition")),o.running=!0;var d=0,v=0,p="",f="",g="",x="";if("sliceDown"===r||"sliceDownRight"===r||"sliceDownLeft"===r)h(i,n,o),d=0,v=0,p=e(".nivo-slice",i),"sliceDownLeft"===r&&(p=e(".nivo-slice",i)._reverse()),p.each((function(){var t=e(this);t.css({top:"0px"}),v===n.slices-1?setTimeout((function(){t.animate({opacity:"1.0"},n.animSpeed,"",(function(){i.trigger("nivo:animFinished")}))}),100+d):setTimeout((function(){t.animate({opacity:"1.0"},n.animSpeed)}),100+d),d+=50,v++}));else if("sliceUp"===r||"sliceUpRight"===r||"sliceUpLeft"===r)h(i,n,o),d=0,v=0,p=e(".nivo-slice",i),"sliceUpLeft"===r&&(p=e(".nivo-slice",i)._reverse()),p.each((function(){var t=e(this);t.css({bottom:"0px"}),v===n.slices-1?setTimeout((function(){t.animate({opacity:"1.0"},n.animSpeed,"",(function(){i.trigger("nivo:animFinished")}))}),100+d):setTimeout((function(){t.animate({opacity:"1.0"},n.animSpeed)}),100+d),d+=50,v++}));else if("sliceUpDown"===r||"sliceUpDownRight"===r||"sliceUpDownLeft"===r){h(i,n,o),d=0,v=0;var w=0;p=e(".nivo-slice",i),"sliceUpDownLeft"===r&&(p=e(".nivo-slice",i)._reverse()),p.each((function(){var t=e(this);0===v?(t.css("top","0px"),v++):(t.css("bottom","0px"),v=0),w===n.slices-1?setTimeout((function(){t.animate({opacity:"1.0"},n.animSpeed,"",(function(){i.trigger("nivo:animFinished")}))}),100+d):setTimeout((function(){t.animate({opacity:"1.0"},n.animSpeed)}),100+d),d+=50,w++}))}else if("fold"===r)h(i,n,o),d=0,v=0,e(".nivo-slice",i).each((function(){var t=e(this),a=t.width();t.css({top:"0px",width:"0px"}),v===n.slices-1?setTimeout((function(){t.animate({width:a,opacity:"1.0"},n.animSpeed,"",(function(){i.trigger("nivo:animFinished")}))}),100+d):setTimeout((function(){t.animate({width:a,opacity:"1.0"},n.animSpeed)}),100+d),d+=50,v++}));else if("fade"===r)h(i,n,o),(f=e(".nivo-slice:first",i)).css({width:i.width()+"px"}),f.animate({opacity:"1.0"},2*n.animSpeed,"",(function(){i.trigger("nivo:animFinished")}));else if("slideInRight"===r)h(i,n,o),(f=e(".nivo-slice:first",i)).css({width:"0px",opacity:"1"}),f.animate({width:i.width()+"px"},2*n.animSpeed,"",(function(){i.trigger("nivo:animFinished")}));else if("slideInLeft"===r)h(i,n,o),(f=e(".nivo-slice:first",i)).css({width:"0px",opacity:"1",left:"",right:"0px"}),f.animate({width:i.width()+"px"},2*n.animSpeed,"",(function(){f.css({left:"0px",right:""}),i.trigger("nivo:animFinished")}));else if("boxRandom"===r)m(i,n,o),g=n.boxCols*n.boxRows,v=0,d=0,(x=u(e(".nivo-box",i))).each((function(){var t=e(this);v===g-1?setTimeout((function(){t.animate({opacity:"1"},n.animSpeed,"",(function(){i.trigger("nivo:animFinished")}))}),100+d):setTimeout((function(){t.animate({opacity:"1"},n.animSpeed)}),100+d),d+=20,v++}));else if("boxRain"===r||"boxRainReverse"===r||"boxRainGrow"===r||"boxRainGrowReverse"===r){m(i,n,o),g=n.boxCols*n.boxRows,v=0,d=0;var b=0,S=0,I=[];I[b]=[],x=e(".nivo-box",i),"boxRainReverse"!==r&&"boxRainGrowReverse"!==r||(x=e(".nivo-box",i)._reverse()),x.each((function(){I[b][S]=e(this),++S===n.boxCols&&(b++,S=0,I[b]=[])}));for(var y=0;y<2*n.boxCols;y++){for(var R=y,N=0;N<n.boxRows;N++)R>=0&&R<n.boxCols&&(function(t,a,o,s,c){var l=e(I[t][a]),d=l.width(),v=l.height();"boxRainGrow"!==r&&"boxRainGrowReverse"!==r||l.width(0).height(0),s===c-1?setTimeout((function(){l.animate({opacity:"1",width:d,height:v},n.animSpeed/1.3,"",(function(){i.trigger("nivo:animFinished")}))}),100+o):setTimeout((function(){l.animate({opacity:"1",width:d,height:v},n.animSpeed/1.3)}),100+o)}(N,R,d,v,g),v++),R--;d+=100}}},u=function(i){for(var t,e,n=i.length;n;t=parseInt(Math.random()*n,10),e=i[--n],i[n]=i[t],i[t]=e);return i},f=function(i){this.console&&void 0!==console.log&&console.log(i)};return this.stop=function(){e(i).data("nivo:vars").stop||(e(i).data("nivo:vars").stop=!0,f("Stop Slider"))},this.start=function(){e(i).data("nivo:vars").stop&&(e(i).data("nivo:vars").stop=!1,f("Start Slider"))},n.afterLoad.call(this),this},e.fn.nivoSlider=function(i){return this.each((function(t,a){var o=e(this);if(o.data("nivoslider"))return o.data("nivoslider");var r=new n(this,i);o.data("nivoslider",r)}))},e.fn.nivoSlider.defaults={effect:"random",slices:15,boxCols:8,boxRows:4,animSpeed:500,pauseTime:3e3,startSlide:0,directionNav:!0,controlNav:!0,controlNavThumbs:!1,pauseOnHover:!0,manualAdvance:!1,prevText:"Prev",nextText:"Next",randomStart:!1,beforeChange:function(){},afterChange:function(){},slideshowEnd:function(){},lastSlide:function(){},afterLoad:function(){}},e.fn._reverse=[].reverse}}]);
=======
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./resources/js/vendor/jquery.slicknav.min.js":
/*!****************************************************!*\
  !*** ./resources/js/vendor/jquery.slicknav.min.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * SlickNav Responsive Mobile Menu v1.0.10
 * (c) 2016 Josh Cope
 * licensed under MIT
 */
!function (e, t, n) {
  function a(t, n) {
    this.element = t, this.settings = e.extend({}, i, n), this.settings.duplicate || n.hasOwnProperty("removeIds") || (this.settings.removeIds = !1), this._defaults = i, this._name = s, this.init();
  }

  var i = {
    label: "MENU",
    duplicate: !0,
    duration: 200,
    easingOpen: "swing",
    easingClose: "swing",
    closedSymbol: "&#9658;",
    openedSymbol: "&#9660;",
    prependTo: "body",
    appendTo: "",
    parentTag: "a",
    closeOnClick: !1,
    allowParentLinks: !1,
    nestedParentLinks: !0,
    showChildren: !1,
    removeIds: !0,
    removeClasses: !1,
    removeStyles: !1,
    brand: "",
    animations: "jquery",
    init: function init() {},
    beforeOpen: function beforeOpen() {},
    beforeClose: function beforeClose() {},
    afterOpen: function afterOpen() {},
    afterClose: function afterClose() {}
  },
      s = "slicknav",
      o = "slicknav",
      l = {
    DOWN: 40,
    ENTER: 13,
    ESCAPE: 27,
    LEFT: 37,
    RIGHT: 39,
    SPACE: 32,
    TAB: 9,
    UP: 38
  };
  a.prototype.init = function () {
    var n,
        a,
        i = this,
        s = e(this.element),
        r = this.settings;

    if (r.duplicate ? i.mobileNav = s.clone() : i.mobileNav = s, r.removeIds && (i.mobileNav.removeAttr("id"), i.mobileNav.find("*").each(function (t, n) {
      e(n).removeAttr("id");
    })), r.removeClasses && (i.mobileNav.removeAttr("class"), i.mobileNav.find("*").each(function (t, n) {
      e(n).removeAttr("class");
    })), r.removeStyles && (i.mobileNav.removeAttr("style"), i.mobileNav.find("*").each(function (t, n) {
      e(n).removeAttr("style");
    })), n = o + "_icon", "" === r.label && (n += " " + o + "_no-text"), "a" == r.parentTag && (r.parentTag = 'a href="#"'), i.mobileNav.attr("class", o + "_nav"), a = e('<div class="' + o + '_menu"></div>'), "" !== r.brand) {
      var c = e('<div class="' + o + '_brand">' + r.brand + "</div>");
      e(a).append(c);
    }

    i.btn = e(["<" + r.parentTag + ' aria-haspopup="true" role="button" tabindex="0" class="' + o + "_btn " + o + '_collapsed">', '<span class="' + o + '_menutxt">' + r.label + "</span>", '<span class="' + n + '">', '<span class="' + o + '_icon-bar"></span>', '<span class="' + o + '_icon-bar"></span>', '<span class="' + o + '_icon-bar"></span>', "</span>", "</" + r.parentTag + ">"].join("")), e(a).append(i.btn), "" !== r.appendTo ? e(r.appendTo).append(a) : e(r.prependTo).prepend(a), a.append(i.mobileNav);
    var p = i.mobileNav.find("li");
    e(p).each(function () {
      var t = e(this),
          n = {};

      if (n.children = t.children("ul").attr("role", "menu"), t.data("menu", n), n.children.length > 0) {
        var a = t.contents(),
            s = !1,
            l = [];
        e(a).each(function () {
          return e(this).is("ul") ? !1 : (l.push(this), void (e(this).is("a") && (s = !0)));
        });
        var c = e("<" + r.parentTag + ' role="menuitem" aria-haspopup="true" tabindex="-1" class="' + o + '_item"/>');
        if (r.allowParentLinks && !r.nestedParentLinks && s) e(l).wrapAll('<span class="' + o + "_parent-link " + o + '_row"/>').parent();else {
          var p = e(l).wrapAll(c).parent();
          p.addClass(o + "_row");
        }
        r.showChildren ? t.addClass(o + "_open") : t.addClass(o + "_collapsed"), t.addClass(o + "_parent");
        var d = e('<span class="' + o + '_arrow">' + (r.showChildren ? r.openedSymbol : r.closedSymbol) + "</span>");
        r.allowParentLinks && !r.nestedParentLinks && s && (d = d.wrap(c).parent()), e(l).last().after(d);
      } else 0 === t.children().length && t.addClass(o + "_txtnode");

      t.children("a").attr("role", "menuitem").click(function (t) {
        r.closeOnClick && !e(t.target).parent().closest("li").hasClass(o + "_parent") && e(i.btn).click();
      }), r.closeOnClick && r.allowParentLinks && (t.children("a").children("a").click(function (t) {
        e(i.btn).click();
      }), t.find("." + o + "_parent-link a:not(." + o + "_item)").click(function (t) {
        e(i.btn).click();
      }));
    }), e(p).each(function () {
      var t = e(this).data("menu");
      r.showChildren || i._visibilityToggle(t.children, null, !1, null, !0);
    }), i._visibilityToggle(i.mobileNav, null, !1, "init", !0), i.mobileNav.attr("role", "menu"), e(t).mousedown(function () {
      i._outlines(!1);
    }), e(t).keyup(function () {
      i._outlines(!0);
    }), e(i.btn).click(function (e) {
      e.preventDefault(), i._menuToggle();
    }), i.mobileNav.on("click", "." + o + "_item", function (t) {
      t.preventDefault(), i._itemClick(e(this));
    }), e(i.btn).keydown(function (t) {
      var n = t || event;

      switch (n.keyCode) {
        case l.ENTER:
        case l.SPACE:
        case l.DOWN:
          t.preventDefault(), n.keyCode === l.DOWN && e(i.btn).hasClass(o + "_open") || i._menuToggle(), e(i.btn).next().find('[role="menuitem"]').first().focus();
      }
    }), i.mobileNav.on("keydown", "." + o + "_item", function (t) {
      var n = t || event;

      switch (n.keyCode) {
        case l.ENTER:
          t.preventDefault(), i._itemClick(e(t.target));
          break;

        case l.RIGHT:
          t.preventDefault(), e(t.target).parent().hasClass(o + "_collapsed") && i._itemClick(e(t.target)), e(t.target).next().find('[role="menuitem"]').first().focus();
      }
    }), i.mobileNav.on("keydown", '[role="menuitem"]', function (t) {
      var n = t || event;

      switch (n.keyCode) {
        case l.DOWN:
          t.preventDefault();
          var a = e(t.target).parent().parent().children().children('[role="menuitem"]:visible'),
              s = a.index(t.target),
              r = s + 1;
          a.length <= r && (r = 0);
          var c = a.eq(r);
          c.focus();
          break;

        case l.UP:
          t.preventDefault();
          var a = e(t.target).parent().parent().children().children('[role="menuitem"]:visible'),
              s = a.index(t.target),
              c = a.eq(s - 1);
          c.focus();
          break;

        case l.LEFT:
          if (t.preventDefault(), e(t.target).parent().parent().parent().hasClass(o + "_open")) {
            var p = e(t.target).parent().parent().prev();
            p.focus(), i._itemClick(p);
          } else e(t.target).parent().parent().hasClass(o + "_nav") && (i._menuToggle(), e(i.btn).focus());

          break;

        case l.ESCAPE:
          t.preventDefault(), i._menuToggle(), e(i.btn).focus();
      }
    }), r.allowParentLinks && r.nestedParentLinks && e("." + o + "_item a").click(function (e) {
      e.stopImmediatePropagation();
    });
  }, a.prototype._menuToggle = function (e) {
    var t = this,
        n = t.btn,
        a = t.mobileNav;
    n.hasClass(o + "_collapsed") ? (n.removeClass(o + "_collapsed"), n.addClass(o + "_open")) : (n.removeClass(o + "_open"), n.addClass(o + "_collapsed")), n.addClass(o + "_animating"), t._visibilityToggle(a, n.parent(), !0, n);
  }, a.prototype._itemClick = function (e) {
    var t = this,
        n = t.settings,
        a = e.data("menu");
    a || (a = {}, a.arrow = e.children("." + o + "_arrow"), a.ul = e.next("ul"), a.parent = e.parent(), a.parent.hasClass(o + "_parent-link") && (a.parent = e.parent().parent(), a.ul = e.parent().next("ul")), e.data("menu", a)), a.parent.hasClass(o + "_collapsed") ? (a.arrow.html(n.openedSymbol), a.parent.removeClass(o + "_collapsed"), a.parent.addClass(o + "_open"), a.parent.addClass(o + "_animating"), t._visibilityToggle(a.ul, a.parent, !0, e)) : (a.arrow.html(n.closedSymbol), a.parent.addClass(o + "_collapsed"), a.parent.removeClass(o + "_open"), a.parent.addClass(o + "_animating"), t._visibilityToggle(a.ul, a.parent, !0, e));
  }, a.prototype._visibilityToggle = function (t, n, a, i, s) {
    function l(t, n) {
      e(t).removeClass(o + "_animating"), e(n).removeClass(o + "_animating"), s || p.afterOpen(t);
    }

    function r(n, a) {
      t.attr("aria-hidden", "true"), d.attr("tabindex", "-1"), c._setVisAttr(t, !0), t.hide(), e(n).removeClass(o + "_animating"), e(a).removeClass(o + "_animating"), s ? "init" == n && p.init() : p.afterClose(n);
    }

    var c = this,
        p = c.settings,
        d = c._getActionItems(t),
        u = 0;

    a && (u = p.duration), t.hasClass(o + "_hidden") ? (t.removeClass(o + "_hidden"), s || p.beforeOpen(i), "jquery" === p.animations ? t.stop(!0, !0).slideDown(u, p.easingOpen, function () {
      l(i, n);
    }) : "velocity" === p.animations && t.velocity("finish").velocity("slideDown", {
      duration: u,
      easing: p.easingOpen,
      complete: function complete() {
        l(i, n);
      }
    }), t.attr("aria-hidden", "false"), d.attr("tabindex", "0"), c._setVisAttr(t, !1)) : (t.addClass(o + "_hidden"), s || p.beforeClose(i), "jquery" === p.animations ? t.stop(!0, !0).slideUp(u, this.settings.easingClose, function () {
      r(i, n);
    }) : "velocity" === p.animations && t.velocity("finish").velocity("slideUp", {
      duration: u,
      easing: p.easingClose,
      complete: function complete() {
        r(i, n);
      }
    }));
  }, a.prototype._setVisAttr = function (t, n) {
    var a = this,
        i = t.children("li").children("ul").not("." + o + "_hidden");
    n ? i.each(function () {
      var t = e(this);
      t.attr("aria-hidden", "true");

      var i = a._getActionItems(t);

      i.attr("tabindex", "-1"), a._setVisAttr(t, n);
    }) : i.each(function () {
      var t = e(this);
      t.attr("aria-hidden", "false");

      var i = a._getActionItems(t);

      i.attr("tabindex", "0"), a._setVisAttr(t, n);
    });
  }, a.prototype._getActionItems = function (e) {
    var t = e.data("menu");

    if (!t) {
      t = {};
      var n = e.children("li"),
          a = n.find("a");
      t.links = a.add(n.find("." + o + "_item")), e.data("menu", t);
    }

    return t.links;
  }, a.prototype._outlines = function (t) {
    t ? e("." + o + "_item, ." + o + "_btn").css("outline", "") : e("." + o + "_item, ." + o + "_btn").css("outline", "none");
  }, a.prototype.toggle = function () {
    var e = this;

    e._menuToggle();
  }, a.prototype.open = function () {
    var e = this;
    e.btn.hasClass(o + "_collapsed") && e._menuToggle();
  }, a.prototype.close = function () {
    var e = this;
    e.btn.hasClass(o + "_open") && e._menuToggle();
  }, e.fn[s] = function (t) {
    var n = arguments;
    if (void 0 === t || "object" == _typeof(t)) return this.each(function () {
      e.data(this, "plugin_" + s) || e.data(this, "plugin_" + s, new a(this, t));
    });

    if ("string" == typeof t && "_" !== t[0] && "init" !== t) {
      var i;
      return this.each(function () {
        var o = e.data(this, "plugin_" + s);
        o instanceof a && "function" == typeof o[t] && (i = o[t].apply(o, Array.prototype.slice.call(n, 1)));
      }), void 0 !== i ? i : this;
    }
  };
}(jQuery, document, window);

/***/ })

}]);
>>>>>>> Stashed changes
