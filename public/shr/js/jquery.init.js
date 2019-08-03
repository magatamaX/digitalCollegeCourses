/* ================================================================================
* Title: Jquery Function
* Date: Nov.11, 2013
* Macで作業するときの注意：バックスラッシュ\を入力するときはoptionを押しながらエンマーク
================================================================================ */
(function($)
{
//---------------------------------------------------------------------
$(function()
{
	//mobile
	$.EX.mobileWidth = 774;
	$.EX.mobileFlag = false;

	//f = 0;
	//$.EX.init(f);
	//login flag
	$.ajax({type:'GET', url:'/api/login/judge'
		,success:function(f)
		{//load function
			$.EX.init(f);
		}
	});
	$.EX.mobileMenu();
	if($('.nailthumb-container')[0]) $.EX.nailthumb();
	//window open
	function MM_openBrWindow(theURL,winName,features) {
		window.open(theURL,winName,features);
	}
	//現在のURLをCookieに記録
	$.cookie('nowUrl', '/', { expires: 0, path: '/', domain: ''});
	//htmlのheader,footer,menu
	$.EX.pageHtml();
//-----------------------------------------------------------------
});
//---------------------------------------------------------------------
$.EX =
{
//-----------------------------------------------------------------
init: function(f)
{
	var $window = $(window);
	var dom = $('.fotopus-menu');

	//login form
	var pcHeader = $('#log_status_pc');
	var mHeader = $('#log_status_sp');
	var formId = 'nlogin_form';
	var status;
	var host = document.location.host;
	var url = ('https:' == document.location.protocol ? 'https://' : 'http://') + host + document.location.pathname;
	if (document.location.search) url += escape(document.location.search);
	var output = '<div id="'+formId+'"><iframe id="framelogin" src="/user/login/frame_login_jump.php?tt=ow&ret_url='+url+'" scrolling="no" frameborder="0"></iframe></div>';

	//ie判定
	var ie = (function(){
	var undef, v = 3, div = document.createElement('div');

	while (
    div.innerHTML = '',
    div.getElementsByTagName('i')[0]
	);

	return v> 4 ? v : undef;
	}());

	if (($window.width() <= $.EX.mobileWidth) && (jQuery.support.opacity))
	{//mobile
		mHeader.append(output);
		status = $('#'+formId);
		if (f == 0) mHeader.next(status).hide();//20130521藤井追加
		$.EX.mobileFlag = true;
	}
	else
	{//pc
		pcHeader.append(output);
		status = $('#'+formId);
		pcHeader.children(status).show();//20130521藤井追加
		$.EX.mobileFlag = false;
	}

	$window.bind('resize orientationchange', function()
	{
		if (($window.width() <= $.EX.mobileWidth) && (jQuery.support.opacity))
		{//mobile
			mHeader.append(status);
			if (f == 0) mHeader.next(status).hide();//20130521藤井追加
			$.EX.mobileFlag = true;
		}
		else
		{//pc
			pcHeader.append(status);
			pcHeader.children(status).show();//20130521藤井追加
			$.EX.mobileFlag = false;
		}
	});

	//mobile login button
	var mLoginBt = dom.find('#loginBtn');
	var mLoginForm = mLoginBt.find('#login');
	var actionPath = 'https://' + host;
	if(f==0)
	{
		actionPath += '/user/login/before_login_park.php';
		mLoginForm.append('<input type="hidden" name="new_ret_url" value="'+ location.href +'">');
		mLoginBt.find('span').removeClass("F_icon-logout").addClass("F_icon-login");
		mLoginBt.find('span').text("ログイン");
		mHeader.attr({style:"display:none"});
	}
	else
	{
		mLoginBt.find('span').removeClass("F_icon-login").addClass("F_icon-logout");
		mLoginBt.find('span').text("ログアウト");
		actionPath += '/user/login/logout_jump.php';
		mLoginForm.append('<input type="hidden" name="logout" value="1">');
		mHeader.attr({style:"display:block"});
	}
	mLoginBt.click(function()
	{
		mLoginForm.attr('action', actionPath).submit();
	});

	//pulldown menu
	var pulldown = dom.find('#navigation');
	var current = 'current';

	//fotopusNav
	var fTarget = pulldown.find('#fotopusNav_fotopusMenuList');
	pulldown.find('#fotopusNav_fotopusMenu').click(function()
	{
		$(this).find('dl').addClass(current);
		fTarget.show();
	})
	.mouseleave(function()
	{
		$(this).find('dl').removeClass(current);
		fTarget.hide();
	});

	//photoSearch genre
	var gTarget = pulldown.find('#photoSearch_genreList');
	pulldown.find('#photoSearch_genre').click(function()
	{
		$(this).find('dl').addClass(current);
		gTarget.show();
	})
	.mouseleave(function()
	{
		$(this).find('dl').removeClass(current);
		gTarget.hide();
	});

	//photoSearch dictionary
	var dTarget = pulldown.find('#photoSearch_dictionaryList');
	pulldown.find('#photoSearch_dictionary').click(function()
	{
		$(this).find('dl').addClass(current);
		dTarget.show();
	})
	.mouseleave(function()
	{
		$(this).find('dl').removeClass(current);
		dTarget.hide();
	});
}
//-----------------------------------------------------------------
,
pageHtml:function(){
//	var mobilemenu = $('#menuHtmlMobile');
//	$('#headerHtml').load('/common/include/header01.html');
	$('#footerHtml').load('/common/include/footer03.html');
//	$('#menuHtmlPC').load('/common/include/headerMenu01.html');
//	if(mobilemenu){
//		mobilemenu.load('/common/include/header01_mobile.html',function(){
//		$.EX.mobileMenu();
//		});
//	}
}
//-----------------------------------------------------------------
,
mobileMenu: function()
{
	//mobile menu
	var target = $('#menu');
	var trigger = $('header').find('.menuBtn, .close').find('a');
	var subMenu = target.find('.subMenu');
	var menuPos = 40;
	var menuFlag = false;
	target.fadeOut(0);

	// change fotopusMQ if...
	// モーバイルメニューを出すのが 800px
	// 出なくなった時に変えてください。
	var menuTimer = false,
			fotopusMQ = 800;

	trigger.click(function()
	{/* menu */
		var posH = 0;
		if(menuFlag)
		{
			posH = menuPos;
		}
		target.stop(true, false).animate(
		{
			 opacity: 'toggle'
			,top : posH
		}
		,{
			 duration: 400
			,complete: function()
			{
				menuFlag = !menuFlag;
			}
		});
	});

	subMenu.click(function(e)
	{/* sub menu */
		e.preventDefault();
		$(this).toggleClass('subClose').next().slideToggle('fast', 'swing');
	});

	// 2016/05/26 added
	// 修正：メニューが開いたまま
	// ブラウザーウィンドウを大きくした時に
	// メニューがでてしまう
	$(window).bind('resize orientationchange', function() {
		var newWindowWidth = window.innerWidth;

    if ( menuTimer !== false) {
      clearTimeout(menuTimer);
    }
    menuTimer = setTimeout(function() {
    	if ( newWindowWidth > fotopusMQ && menuFlag == true ) {
    		target.css({
    			'display': 'none',
    			'top': menuPos
    		});
    		menuFlag = false;
    	}
    }, 20);

  });

}
//-----------------------------------------------------------------
,
nailthumb: function()
{
	var thumbContainer = $('.nailthumb-container');
	var $window = $(window);
	function nailInit()
	{
		var thumbs = $('dd.square-thumb');
		thumbs.css('width', '100%').height(thumbs.width());

		if ($window.width() <= $.EX.mobileWidth)
		{//mobile
			var thumbs2 = $('.tabIn').find('li.square-thumb2');
		}
		else
		{
			var thumbs2 = $('li.square-thumb2');
		}
		var thumbs2W = thumbs2.width();
		thumbs2.width(thumbs2W);
		thumbs2.height(thumbs2W);

		thumbContainer.stop(true, false).nailthumb();
	}
	nailInit();
	$window.bind('resize orientationchange', function() { nailInit(); });
}
//-----------------------------------------------------------------
};
//---------------------------------------------------------------------
})(jQuery);



//insert gtm tag 2018.2.8
//******************************************************************************
(function(){
  var script = document.createElement('script');
  script.src = '/shr/js/gtm.js';
  document.body.appendChild(script);
})();



// フッター　自動で年を変える
//******************************************************************************
copyrightYear();
function copyrightYear() {
	var thisDate = new Date();
	var thisYear = thisDate.getFullYear();
	var replaceText = $('#copyright, footer address');
	replaceText.text(function(i, txt) {return txt.replace(/\d+/, thisYear)});
}