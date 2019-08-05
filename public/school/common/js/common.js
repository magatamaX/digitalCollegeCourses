// メニュー
$(function() {
	var $window = $(window);
	var college_menu = $("#college_menu");
	var burger = $('.college-menu-link');
	var burgerlist = $('.college-menu-link2');
	var dropmenu_btn = $('.college-menu-list-drop li.college-menu-list-item');
	var collegeCloseBtnPC = $('.college-menu-close-button-pc');
	var ulpass = 0;

	var breakPoint = 790;
	var menuFlag = "pc";

	//resize
	var $win = $(window);
	var windowWidth;
	$win.on('load resize', function(event) {
			windowWidth = window.innerWidth;
			if (windowWidth >= breakPoint) {
				dropmenu_btn.children('ul').removeAttr("style");
				menuFlag = "pc";
			}else{
				menuFlag = "sp";
			}
	});

	//menu action
	burger.on('click', function() {
		$('#college-menu-section').stop().slideToggle('fast', 'linear');
		college_menu.toggleClass("college-menu-open");
	});
	burgerlist.on('click', function() {
		$('#college-menu-section').stop().slideToggle('fast', 'linear');
		college_menu.toggleClass("college-menu-open");
		if(college_menu.hasClass("college-menu-open") === true){
			$window.disablescroll(); //pc window scroll off
		}else{
			$window.disablescroll("undo"); //pc window scroll on
		}

	});

	// sp drop menu
	dropmenu_btn.on('click', function() {
		if (windowWidth <= breakPoint){
			$(this).children('ul').stop().slideToggle('fast', 'linear');
			$(this).toggleClass("college-menu-list-open");
		}
	});

	//menu close
	//click btn close
	collegeCloseBtnPC.on('click', function(event) {
		$('#college-menu-section').stop().slideToggle('fast', 'linear');
		college_menu.toggleClass("college-menu-open");
		$window.disablescroll("undo"); //pc window scroll on
	});
	//click black part
	$('#college-menu-section').on('click', function(event){
	  if($(event.target).attr("id") === "college-menu-section"){
			$('#college-menu-section').stop().slideToggle('fast', 'linear');
			college_menu.toggleClass("college-menu-open");
			$window.disablescroll("undo"); //pc window scroll on
	  }
	});
});



// pagetop
$(document).ready(function() {
  var pagetop = $('.scroll-top');
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
       } else {
            pagetop.fadeOut();
            }
       });
       pagetop.click(function () {
           $('body, html').animate({ scrollTop: 0 }, 500);
              return false;
   });
});
