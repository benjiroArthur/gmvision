<<<<<<< Updated upstream
/*! For license information please see 3.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{22:function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e,t,a){function i(t,n){this.element=t,this.settings=e.extend({},s,n),this.settings.duplicate||n.hasOwnProperty("removeIds")||(this.settings.removeIds=!1),this._defaults=s,this._name=o,this.init()}var s={label:"MENU",duplicate:!0,duration:200,easingOpen:"swing",easingClose:"swing",closedSymbol:"&#9658;",openedSymbol:"&#9660;",prependTo:"body",appendTo:"",parentTag:"a",closeOnClick:!1,allowParentLinks:!1,nestedParentLinks:!0,showChildren:!1,removeIds:!0,removeClasses:!1,removeStyles:!1,brand:"",animations:"jquery",init:function(){},beforeOpen:function(){},beforeClose:function(){},afterOpen:function(){},afterClose:function(){}},o="slicknav",l="slicknav",r=40,c=13,p=27,d=37,u=39,m=32,f=38;i.prototype.init=function(){var n,a,i=this,s=e(this.element),o=this.settings;if(o.duplicate?i.mobileNav=s.clone():i.mobileNav=s,o.removeIds&&(i.mobileNav.removeAttr("id"),i.mobileNav.find("*").each((function(t,n){e(n).removeAttr("id")}))),o.removeClasses&&(i.mobileNav.removeAttr("class"),i.mobileNav.find("*").each((function(t,n){e(n).removeAttr("class")}))),o.removeStyles&&(i.mobileNav.removeAttr("style"),i.mobileNav.find("*").each((function(t,n){e(n).removeAttr("style")}))),n=l+"_icon",""===o.label&&(n+=" "+l+"_no-text"),"a"==o.parentTag&&(o.parentTag='a href="#"'),i.mobileNav.attr("class",l+"_nav"),a=e('<div class="'+l+'_menu"></div>'),""!==o.brand){var h=e('<div class="'+l+'_brand">'+o.brand+"</div>");e(a).append(h)}i.btn=e(["<"+o.parentTag+' aria-haspopup="true" role="button" tabindex="0" class="'+l+"_btn "+l+'_collapsed">','<span class="'+l+'_menutxt">'+o.label+"</span>",'<span class="'+n+'">','<span class="'+l+'_icon-bar"></span>','<span class="'+l+'_icon-bar"></span>','<span class="'+l+'_icon-bar"></span>',"</span>","</"+o.parentTag+">"].join("")),e(a).append(i.btn),""!==o.appendTo?e(o.appendTo).append(a):e(o.prependTo).prepend(a),a.append(i.mobileNav);var v=i.mobileNav.find("li");e(v).each((function(){var t=e(this),n={};if(n.children=t.children("ul").attr("role","menu"),t.data("menu",n),n.children.length>0){var a=t.contents(),s=!1,r=[];e(a).each((function(){return!e(this).is("ul")&&(r.push(this),void(e(this).is("a")&&(s=!0)))}));var c=e("<"+o.parentTag+' role="menuitem" aria-haspopup="true" tabindex="-1" class="'+l+'_item"/>');if(o.allowParentLinks&&!o.nestedParentLinks&&s)e(r).wrapAll('<span class="'+l+"_parent-link "+l+'_row"/>').parent();else e(r).wrapAll(c).parent().addClass(l+"_row");o.showChildren?t.addClass(l+"_open"):t.addClass(l+"_collapsed"),t.addClass(l+"_parent");var p=e('<span class="'+l+'_arrow">'+(o.showChildren?o.openedSymbol:o.closedSymbol)+"</span>");o.allowParentLinks&&!o.nestedParentLinks&&s&&(p=p.wrap(c).parent()),e(r).last().after(p)}else 0===t.children().length&&t.addClass(l+"_txtnode");t.children("a").attr("role","menuitem").click((function(t){o.closeOnClick&&!e(t.target).parent().closest("li").hasClass(l+"_parent")&&e(i.btn).click()})),o.closeOnClick&&o.allowParentLinks&&(t.children("a").children("a").click((function(t){e(i.btn).click()})),t.find("."+l+"_parent-link a:not(."+l+"_item)").click((function(t){e(i.btn).click()})))})),e(v).each((function(){var t=e(this).data("menu");o.showChildren||i._visibilityToggle(t.children,null,!1,null,!0)})),i._visibilityToggle(i.mobileNav,null,!1,"init",!0),i.mobileNav.attr("role","menu"),e(t).mousedown((function(){i._outlines(!1)})),e(t).keyup((function(){i._outlines(!0)})),e(i.btn).click((function(e){e.preventDefault(),i._menuToggle()})),i.mobileNav.on("click","."+l+"_item",(function(t){t.preventDefault(),i._itemClick(e(this))})),e(i.btn).keydown((function(t){var n=t||event;switch(n.keyCode){case c:case m:case r:t.preventDefault(),n.keyCode===r&&e(i.btn).hasClass(l+"_open")||i._menuToggle(),e(i.btn).next().find('[role="menuitem"]').first().focus()}})),i.mobileNav.on("keydown","."+l+"_item",(function(t){switch((t||event).keyCode){case c:t.preventDefault(),i._itemClick(e(t.target));break;case u:t.preventDefault(),e(t.target).parent().hasClass(l+"_collapsed")&&i._itemClick(e(t.target)),e(t.target).next().find('[role="menuitem"]').first().focus()}})),i.mobileNav.on("keydown",'[role="menuitem"]',(function(t){switch((t||event).keyCode){case r:t.preventDefault();var n=(s=(a=e(t.target).parent().parent().children().children('[role="menuitem"]:visible')).index(t.target))+1;a.length<=n&&(n=0),a.eq(n).focus();break;case f:t.preventDefault();var a,s=(a=e(t.target).parent().parent().children().children('[role="menuitem"]:visible')).index(t.target);a.eq(s-1).focus();break;case d:if(t.preventDefault(),e(t.target).parent().parent().parent().hasClass(l+"_open")){var o=e(t.target).parent().parent().prev();o.focus(),i._itemClick(o)}else e(t.target).parent().parent().hasClass(l+"_nav")&&(i._menuToggle(),e(i.btn).focus());break;case p:t.preventDefault(),i._menuToggle(),e(i.btn).focus()}})),o.allowParentLinks&&o.nestedParentLinks&&e("."+l+"_item a").click((function(e){e.stopImmediatePropagation()}))},i.prototype._menuToggle=function(e){var t=this,n=t.btn,a=t.mobileNav;n.hasClass(l+"_collapsed")?(n.removeClass(l+"_collapsed"),n.addClass(l+"_open")):(n.removeClass(l+"_open"),n.addClass(l+"_collapsed")),n.addClass(l+"_animating"),t._visibilityToggle(a,n.parent(),!0,n)},i.prototype._itemClick=function(e){var t=this,n=t.settings,a=e.data("menu");a||((a={}).arrow=e.children("."+l+"_arrow"),a.ul=e.next("ul"),a.parent=e.parent(),a.parent.hasClass(l+"_parent-link")&&(a.parent=e.parent().parent(),a.ul=e.parent().next("ul")),e.data("menu",a)),a.parent.hasClass(l+"_collapsed")?(a.arrow.html(n.openedSymbol),a.parent.removeClass(l+"_collapsed"),a.parent.addClass(l+"_open"),a.parent.addClass(l+"_animating"),t._visibilityToggle(a.ul,a.parent,!0,e)):(a.arrow.html(n.closedSymbol),a.parent.addClass(l+"_collapsed"),a.parent.removeClass(l+"_open"),a.parent.addClass(l+"_animating"),t._visibilityToggle(a.ul,a.parent,!0,e))},i.prototype._visibilityToggle=function(t,n,a,i,s){function o(t,n){e(t).removeClass(l+"_animating"),e(n).removeClass(l+"_animating"),s||p.afterOpen(t)}function r(n,a){t.attr("aria-hidden","true"),d.attr("tabindex","-1"),c._setVisAttr(t,!0),t.hide(),e(n).removeClass(l+"_animating"),e(a).removeClass(l+"_animating"),s?"init"==n&&p.init():p.afterClose(n)}var c=this,p=c.settings,d=c._getActionItems(t),u=0;a&&(u=p.duration),t.hasClass(l+"_hidden")?(t.removeClass(l+"_hidden"),s||p.beforeOpen(i),"jquery"===p.animations?t.stop(!0,!0).slideDown(u,p.easingOpen,(function(){o(i,n)})):"velocity"===p.animations&&t.velocity("finish").velocity("slideDown",{duration:u,easing:p.easingOpen,complete:function(){o(i,n)}}),t.attr("aria-hidden","false"),d.attr("tabindex","0"),c._setVisAttr(t,!1)):(t.addClass(l+"_hidden"),s||p.beforeClose(i),"jquery"===p.animations?t.stop(!0,!0).slideUp(u,this.settings.easingClose,(function(){r(i,n)})):"velocity"===p.animations&&t.velocity("finish").velocity("slideUp",{duration:u,easing:p.easingClose,complete:function(){r(i,n)}}))},i.prototype._setVisAttr=function(t,n){var a=this,i=t.children("li").children("ul").not("."+l+"_hidden");n?i.each((function(){var t=e(this);t.attr("aria-hidden","true"),a._getActionItems(t).attr("tabindex","-1"),a._setVisAttr(t,n)})):i.each((function(){var t=e(this);t.attr("aria-hidden","false"),a._getActionItems(t).attr("tabindex","0"),a._setVisAttr(t,n)}))},i.prototype._getActionItems=function(e){var t=e.data("menu");if(!t){t={};var n=e.children("li"),a=n.find("a");t.links=a.add(n.find("."+l+"_item")),e.data("menu",t)}return t.links},i.prototype._outlines=function(t){t?e("."+l+"_item, ."+l+"_btn").css("outline",""):e("."+l+"_item, ."+l+"_btn").css("outline","none")},i.prototype.toggle=function(){this._menuToggle()},i.prototype.open=function(){this.btn.hasClass(l+"_collapsed")&&this._menuToggle()},i.prototype.close=function(){this.btn.hasClass(l+"_open")&&this._menuToggle()},e.fn[o]=function(t){var a,s=arguments;return void 0===t||"object"==n(t)?this.each((function(){e.data(this,"plugin_"+o)||e.data(this,"plugin_"+o,new i(this,t))})):"string"==typeof t&&"_"!==t[0]&&"init"!==t?(this.each((function(){var n=e.data(this,"plugin_"+o);n instanceof i&&"function"==typeof n[t]&&(a=n[t].apply(n,Array.prototype.slice.call(s,1)))})),void 0!==a?a:this):void 0}}(jQuery,document,window)}}]);
=======
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./resources/js/vendor/letteranimation.min.js":
/*!****************************************************!*\
  !*** ./resources/js/vendor/letteranimation.min.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * letteranimation.js
 * Current Version: 1.0.2
 * https://www.cssanimatio.io
 * Created and maintained by: Pavel
 * Find me at: https://www.linkedin.com/in/yesiamrocks/
 * Email: hello@cssanimation.io
 * Github: https://github.com/yesiamrocks/cssanimation.io
 * Title: A CSS Animation Library for Developers and Ninjas
 * Copyright (c) 2017 Pavel
 * License: cssanimation.io is licensed under the MIT license
 **/
function animateSequence() {
  for (var n = document.getElementsByClassName("sequence"), a = 0; a < n.length; a++) {
    var e = n[a],
        t = e.innerHTML;
    t = t.trim();
    var i = "",
        m = 100;

    for (l = 0; l < t.length; l++) {
      " " != t[l] ? (i += '<span style="animation-delay:' + m + "ms; -moz-animation-delay:" + m + "ms; -webkit-animation-delay:" + m + 'ms; ">' + t[l] + "</span>", m += 150) : i += t[l];
    }

    e.innerHTML = i;
  }
}

function animateRandom() {
  for (var n = document.getElementsByClassName("random"), a = 0; a < n.length; a++) {
    var e = n[a],
        t = e.innerHTML;
    t = t.trim();
    var i = 70,
        m = new Array(),
        o = new Array();

    for (j = 0; j < t.length; j++) {
      for (;;) {
        var r = getRandomInt(0, t.length - 1);
        if (-1 == m.indexOf(r)) break;
      }

      m[j] = r;
    }

    for (l = 0; l < m.length; l++) {
      var s = "",
          d = m[l];
      " " != t[d] ? (s = '<span style="animation-delay:' + i + "ms; -moz-animation-delay:" + i + "ms; -webkit-animation-delay:" + i + 'ms; ">' + t[d] + "</span>", o[d] = s) : o[d] = t[d], i += 80;
    }

    o = o.join(""), e.innerHTML = o;
  }
}

function getRandomInt(n, a) {
  return Math.floor(Math.random() * (a - n + 1)) + n;
}

window.onload = function () {
  animateSequence(), animateRandom();
};

/***/ })

}]);
>>>>>>> Stashed changes
