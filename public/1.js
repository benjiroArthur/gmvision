(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"8yrV":function(a,e){!function(a){"use strict";a(window).on("load",(function(){a("body").addClass("loaded")})),a((function(){var e=a("#header"),o=e.height();a(".header-height").css("height",o+"px"),a(window).on("scroll",(function(){a(window).scrollTop()>=100?(e.removeClass("animated cssanimation fadeIn"),e.addClass("navbar-fixed-top  cssanimation animated fadeInTop")):(e.removeClass("navbar-fixed-top cssanimation  animated fadeInTop"),e.addClass("animated cssanimation fadeIn"))}))})),a("#main-slider").nivoSlider({effect:"random",animSpeed:300,pauseTime:5e3,directionNav:!0,manualAdvance:!1,controlNavThumbs:!1,pauseOnHover:!0,controlNav:!1,prevText:"<i class='ti-arrow-left'></i>",nextText:"<i class='ti-arrow-right'></i>"}),a((function(){a("#mainmenu").slicknav({prependTo:".site-branding",label:"",allowParentLinks:!0})})),a("#event-carousel").owlCarousel({loop:!0,margin:15,autoplay:!1,smartSpeed:500,nav:!0,navText:['<i class="ti-arrow-left"></i>','<i class="ti-arrow-right"></i>'],dots:!1,responsive:{0:{items:1},480:{items:1},768:{items:2},992:{items:2}}}),a("#testimonial-carousel").owlCarousel({loop:!0,margin:15,autoplay:!0,smartSpeed:500,items:1,nav:!1,dots:!0,responsive:{0:{items:1},480:{items:2},768:{items:2},992:{items:3}}}),a("#sponsor-carousel").owlCarousel({loop:!0,margin:40,autoplay:!0,smartSpeed:500,nav:!1,dots:!1,responsive:{0:{items:2},480:{items:3},768:{items:4},992:{items:6}}}),a(".img-popup").venobox({numeratio:!0,infinigall:!0}),a(window).on("scroll",(function(){a(this).scrollTop()>100?a("#scroll-to-top").fadeIn():a("#scroll-to-top").fadeOut()}))}(jQuery)}}]);