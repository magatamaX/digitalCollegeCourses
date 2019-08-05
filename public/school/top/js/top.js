$(function(){
	// スライダー
	$( '#slider' ).sliderPro({
		width: '920px',
		autoHeight: true,
		arrows: true,
		buttons: true,
		slideDistance : 0,
		fadeOutPreviousSlide: false,
		autoplayDelay  : 7000
	});

	// 基礎から学ぶ
	var step1H = $(".step1").innerHeight(); 
	var step2H = $(".step2").innerHeight(); 
	var step3H = $(".step3").innerHeight(); 
	var step2_3H = $(".step2-3").innerHeight(); 
	$(".step1").css("margin-top", "-" + step1H / 2 + "px");
	$(".step2").css("margin-top", "-" + step2H / 2 + "px");
	$(".step3").css("margin-top", "-" + step3H / 2 + "px");
	$(".step2-3").css("margin-top", "-" + step2_3H / 2 + "px");

});

// インフォメーション
function info(){
	$('#DC_frameInfo').contents().find('head').append('<link type="text/css" rel="stylesheet" href="/school/common/css/iframe-style.css">');
	// alert('woo!!');
}

// 休暇文言
function holiday(){
	$('#DC_holidayInfo').contents().find('head').append('<link type="text/css" rel="stylesheet" href="/school/common/css/iframe-style.css">');

	var holidayHeight = $('#DC_holidayInfo').contents().find('p').outerHeight();
	if(holidayHeight){
		$('.holidayFrame').css('height', holidayHeight+10 +'px');
	}else{
		$('.holidayFrame').css('height', '0');
	}
}