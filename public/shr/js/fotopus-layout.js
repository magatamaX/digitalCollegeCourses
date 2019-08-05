/**
 * $.disablescroll
 * Author: Josh Harrison - aloof.co
 *
 * Disables scroll events from mousewheels, touchmoves and keypresses.
 * Use while jQuery is animating the scroll position for a guaranteed super-smooth ride!
 */

(function($) {

    "use strict";

    var instance, proto;
    function UserScrollDisabler($container, options) {
        // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
        // left: 37, up: 38, right: 39, down: 40
        this.opts = $.extend({
            handleWheel : true,
            handleScrollbar: true,
            handleKeys : true,
            scrollEventKeys : [32, 33, 34, 35, 36, 37, 38, 39, 40]
        }, options);

        this.$container = $container;
        this.$document = $(document);
        this.lockToScrollPos = [0, 0];

        this.disable();
    }

    proto = UserScrollDisabler.prototype;

    proto.disable = function() {
        var t = this;
        if(t.opts.handleWheel) {
            t.$container.on(
                "mousewheel.disablescroll DOMMouseScroll.disablescroll touchmove.disablescroll",
                t._handleWheel
            );
        }

        if(t.opts.handleScrollbar) {
            t.lockToScrollPos = [
                t.$container.scrollLeft(),
                t.$container.scrollTop()
            ];
            t.$container.on("scroll.disablescroll", function() {
                t._handleScrollbar.call(t);
            });
        }

        if(t.opts.handleKeys) {
            t.$document.on("keydown.disablescroll", function(event) {
                t._handleKeydown.call(t, event);
            });
        }
    };

    proto.undo = function() {
        var t = this;
        t.$container.off(".disablescroll");
        if(t.opts.handleKeys) {
            t.$document.off(".disablescroll");
        }
    };

    proto._handleWheel = function(event) {
        event.preventDefault();
    };

    proto._handleScrollbar = function() {
        this.$container.scrollLeft(this.lockToScrollPos[0]);
        this.$container.scrollTop(this.lockToScrollPos[1]);
    };

    proto._handleKeydown = function(event) {
        for (var i = 0; i < this.opts.scrollEventKeys.length; i++) {
            if (event.keyCode === this.opts.scrollEventKeys[i]) {
                event.preventDefault();
                return;
            }
        }
    };


    // Plugin wrapper for object
    $.fn.disablescroll = function(method) {

        // If calling for the first time, instantiate the object and save
        // reference. The plugin can therefore only be instantiated once per
        // page. You can pass options object in through the method parameter.
        if( ! instance && (typeof method === "object" || ! method)) {
            instance = new UserScrollDisabler(this, method);
        }

        // Instance created, no method specified. Call disable again
        if(instance && typeof method === "undefined") {
            instance.disable();
        }

        // Instance already created, and a method is being explicitly called,
        // e.g. .disablescroll('undo');
        else if(instance && instance[method]) {
            instance[method].call(instance);
        }

    };

    // Global access
    window.UserScrollDisabler = UserScrollDisabler;

})(jQuery);


// 201703 NEW HEADER js
//******************************************************************************
(function() {
    //menu_open/close
    var $window = $(window);
    var $navFotopus = $('#fotopus-nav');
    var $navFotopusOpenBtn = $('.fotopus-header-item-menu');
    var $navFotopusCloseBtn = $('.fotopus-menu-close-button');
    var $navFotopusCloseBtnPC = $('.fotopus-menu-close-button-pc');
    var $navFotopusSubBtn = $('.fotopus-menu-list-drop li.fotopus-menu-list-item');
    var $navFotopusMenu = $('#fotopus-menu-section');
    var $navFotopusMenuWarpper = $('#fotopus-menu-section-warpper');
    var $navFotopusHeader = $("#fotopus-header-section");

    var breakPoint = 790;
    var menuFlag = "pc";

    //resize
    var $win = $(window);
    var windowWidth;
    $win.on('load resize', function(event) {
        windowWidth = window.innerWidth;
        if (windowWidth >= breakPoint) {
          $navFotopusMenuWarpper.removeAttr("style");
          $navFotopusSubBtn.children('ul').removeAttr("style");
          menuFlag = "pc";
        }else{
          $navFotopusMenu.removeAttr("style");
          menuFlag = "sp";
				}
    });

    //sub-menu toggle slide    　
    $navFotopusSubBtn.on('click', function(event) {　
        if (windowWidth <= breakPoint && $("body").hasClass("fotopus-nav-no-responsive") === false) {
            $(this).children('ul').stop().slideToggle('fast', 'linear');
            $(this).toggleClass('fotopus-menu-list-open');
        }
    });

    //menu open
    $navFotopusOpenBtn.on('click', function(event) {
        if(menuFlag === "sp"){
          $navFotopusMenuWarpper.attr("style","transition: -webkit-transform 0.35s cubic-bezier(0.165, 0.84, 0.44, 1); transition: transform 0.35s cubic-bezier(0.165, 0.84, 0.44, 1);");
        }
        if (windowWidth >= breakPoint) {
          $navFotopusMenu.stop().slideToggle('fast', 'linear');
          if($navFotopus.hasClass('fotopus-menu-opened')){
            $navFotopus.removeClass('fotopus-menu-opened');
            $window.disablescroll("undo"); //pc window scroll on
          }else{
            $navFotopus.addClass('fotopus-menu-opened');
            if($("body").hasClass("fotopus-nav-no-responsive") === false){
              $window.disablescroll(); //pc window scroll off
            }
          }
        }else{
          if($("body").hasClass("fotopus-nav-no-responsive") === true){
            $navFotopusMenu.stop().slideToggle('fast', 'linear');
            if($navFotopus.hasClass('fotopus-menu-opened')){
              $navFotopus.removeClass('fotopus-menu-opened');
              $window.disablescroll("undo"); //pc window scroll on
            }else{
              $navFotopus.addClass('fotopus-menu-opened');
              $window.disablescroll("undo"); //pc window scroll on
            }
          }else{
            $navFotopus.addClass('fotopus-menu-opened');
          }
        }
    });

    //menu close
    //click btn
    $navFotopusCloseBtn.on('click', function(event) {
      $navFotopus.removeClass('fotopus-menu-opened');
    });
    $navFotopusCloseBtnPC.on('click', function(event) {
      $navFotopusMenu.stop().slideToggle('fast', 'linear');
      $window.disablescroll("undo"); //pc window scroll on
      $navFotopus.removeClass('fotopus-menu-opened');
    });
    //click black part
    $navFotopusMenu.on('click', function(event){
      if($(event.target).attr("id") === "fotopus-menu-section-warpper"){
        if (windowWidth >= breakPoint || $("body").hasClass("fotopus-nav-no-responsive") === true) {
          $navFotopusMenu.stop().slideToggle('fast', 'linear');
          $window.disablescroll("undo"); //pc window scroll on
        }
        $navFotopus.removeClass('fotopus-menu-opened');
      }
    });

}());


// 201803 ReplaceButton js
//******************************************************************************
$(function() {
  var terminate = false;

  function ReplaceButton() {
    var targetGroup = $('#photoContributeNav_list'),
        targetA = targetGroup.find('a'),
        targetAStyle = 'text-align: center; height: 48px; border: 1px solid #cccccc; background-color: #f2f2f6; border-radius: 5px; display: table-cell; vertical-align: middle; color: #000; font-weight: 600;',
        closeText = '× 閉じる',
        targetSpan = '<span style="background-position: -1390px -380px; width: 80px; height: 28px;"></span>' + closeText;

    if ( isSweetPhoto() === true ) {
      targetA = $('.galleryDetail_nav .commonBtn2');
      if ( targetA.attr('href').match(/MyFotoPusDetail\/mem_cd/) || targetA.attr('href').match(/favoritephoto\/list\/mem_cd/) ) {
        targetA.html('&times; CLOSE').attr('id', 'terminate');
      }
    } else if ($('body').hasClass('imageDetail') && location.pathname.match(/api_photos/)) {
      targetA = $('.icon_gallery');
      targetA.attr('id', 'terminate');
      targetA.addClass('close');
      targetA.text(closeText);

    } else {
      if (!targetA.length) {
        return false;
      }
      if (targetA.attr('href').match(/MyFotoPusDetail\/mem_cd/) || targetA.attr('href').match(/favoritephoto\/list\/mem_cd/) || location.pathname.match(/api_photos/) || location.search.match(/api_photos/)) {
        targetGroup.width(80);
        targetA.attr('id', 'terminate');
        targetA.html(targetSpan);
        if ( window.innerWidth <= 800 ) {
          if (!$('html').hasClass('imageDetail2018')) {
            targetA.attr('style', targetAStyle);
          }
          targetA.children('span').remove();
          targetA.parents('li').css({ 'display': 'table' });
        }
        else {
          targetA.attr('style', '');
        }
      }
    }

    if (!terminate) {
      $('#terminate').on('click', function() { terminateWindow(); });
      terminate = true;
    }

    function terminateWindow() {
      window.close();
      return false;
    }

    // Sweet Photo 判定
    function isSweetPhoto (c) {
      var thisTitle = document.getElementsByTagName('title')[0].innerHTML;
      if ( thisTitle.match(/SWEET\sPHOTO/i) ) {
        c = true;
      }
      else {
        c = false;
      }
      return c;
    }
  }

  if ($('#photoContributeNav').length || $('body').hasClass('imageDetail') && location.pathname.match(/api_photos/)) {
      // 実行
      ReplaceButton();
      // リサイズ時
      $(window).on('resize', function() {
          var timer = false;
          if ( timer !== false ) {
              clearTimeout(timer);
          }
          timer = setTimeout(function() {
              ReplaceButton();
          }, 100);
      });
  }

});
