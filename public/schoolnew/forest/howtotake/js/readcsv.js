function loadTextFile(){
$(function(){
	$.get('/school/common/csv/index.csv',function(data){
		var csv = $.csv()(data);
		//indexを使ってくり返し回数をカウントします
		$(csv).each(function(index){
			if(index == 0){//一列目
				if(this[2]){
					$('#howtotake').append('<tr><th>開催地</th><th>申し込み</th><th colspan="3">開催日時</th><th class="corcePlace">会場</th><th>定員</th><th>講師</th><th>残数</th></tr>');
					$('#howtotake2').append('<tr><th>開催地</th><th>申し込み</th><th colspan="3">開催日時</th><th class="corcePlace">会場</th><th>定員</th><th>講師</th><th>残数</th></tr>');
					$('#howtotake3').append('<tr><th>開催地</th><th>開催回数</th><th>申し込み</th><th colspan="3">開催日時</th><th class="corcePlace">会場</th><th>定員</th><th>講師</th><th>残数</th></tr>');
				}
			} else {
				if(this[6] == '' && this[7] == 'howtotake'){//締め切り
					$('#howtotake').append('<tr id="'+this[1]+'"><td>'+this[13]+'</td><td class="'+this[6]+'">受付終了</td><td>'+this[3]+'</td><td>'+this[4]+'</td><td>'+this[5]+'</td><td><span class="'+this[67]+'">'+this[42]+'</span></td><td class="num">'+this[38]+'</td><td><a href="/school/instructor/#'+this[41]+'"><span class="'+this[41]+'">'+this[39]+'</span></a></td><td></td></tr>');
				}else if(this[6] == 'opening' && this[7] == 'howtotake'){//開催中
					$('#howtotake').append('<tr id="'+this[1]+'"><td>'+this[13]+'</td><td><a href="/school/entry.php?seminar_id='+this[1]+'"><img src="/school/common/images/btn_form.png"></a></td><td>'+this[3]+'</td><td>'+this[4]+'</td><td>'+this[5]+'</td><td><span class="'+this[67]+'">'+this[42]+'</span></td><td class="num">'+this[38]+'</td><td><a href="/school/instructor/#'+this[41]+'"><span class="'+this[41]+'">'+this[39]+'</span></a></td><td></td></tr>');
				}else if(this[6] == '' && this[7] == 'howtotake2'){//締め切り
					$('#howtotake2').append('<tr id="'+this[1]+'"><td>'+this[13]+'</td><td class="'+this[6]+'">受付終了</td><td>'+this[3]+'</td><td>'+this[4]+'</td><td>'+this[5]+'</td><td><span class="'+this[67]+'">'+this[42]+'</span></td><td class="num">'+this[38]+'</td><td><a href="/school/instructor/#'+this[41]+'"><span class="'+this[41]+'">'+this[39]+'</span></a></td><td></td></tr>');
				}else if(this[6] == 'opening' && this[7] == 'howtotake2'){//開催中
					$('#howtotake2').append('<tr id="'+this[1]+'"><td>'+this[13]+'</td><td><a href="/school/entry.php?seminar_id='+this[1]+'"><img src="/school/common/images/btn_form.png"></a></td><td>'+this[3]+'</td><td>'+this[4]+'</td><td>'+this[5]+'</td><td><span class="'+this[67]+'">'+this[42]+'</span></td><td class="num">'+this[38]+'</td><td><a href="/school/instructor/#'+this[41]+'"><span class="'+this[41]+'">'+this[39]+'</span></a></td><td></td></tr>');
				}else if(this[6] == '' && this[7] == 'howtotake3'){//締め切り
					if (this[21] == ''){
						var Num = 1;
					}else if(this[25] == ''){
						var Num = 2;
					}else if(this[29] == ''){
						var Num = 3;
					}else if(this[33] == ''){
						var Num = 4;
					}else{
						var Num = 5;
					}
					$('#howtotake3').append('<tr id="'+this[1]+'" class="firstLesson"><td rowspan="'+Num+'">'+this[13]+'</td><td>1回目</td><td rowspan="'+Num+'">受付終了</td><td>'+this[3]+'</td><td>'+this[4]+'</td><td>'+this[5]+'</td><td><span class="'+this[67]+'">'+this[42]+'</span></td><td class="num" rowspan="'+Num+'">'+this[38]+'</td><td rowspan="'+Num+'"><a href="/school/instructor/#'+this[41]+'"><span class="'+this[41]+'">'+this[39]+'</span></a></td><td rowspan="'+Num+'"></td></tr><tr class="secondLesson"><td>2回目</td><td class="date02">'+this[21]+'</td><td>'+this[23]+'</td><td>'+this[24]+'</td><td><span class="'+this[69]+'">'+this[43]+'</span></td></tr><tr class="thirdLesson"><td>3回目</td><td class="date03">'+this[25]+'</td><td>'+this[27]+'</td><td>'+this[28]+'</td><td><span class="'+this[70]+'">'+this[44]+'</span></td></tr><tr class="forthLesson"><td>4回目</td><td class="date04">'+this[29]+'</td><td>'+this[31]+'</td><td>'+this[32]+'</td><td><span class="'+this[71]+'">'+this[45]+'</span></td></tr><tr class="fifthLesson"><td>5回目</td><td class="date05">'+this[33]+'</td><td>'+this[35]+'</td><td>'+this[36]+'</td><td><span class="'+this[72]+'">'+this[46]+'</span></td></tr>');
				}else if(this[6] == 'opening' && this[7] == 'howtotake3'){//開催中
					if (this[21] == ''){
						var Num = 1;
					}else if(this[25] == ''){
						var Num = 2;
					}else if(this[29] == ''){
						var Num = 3;
					}else if(this[33] == ''){
						var Num = 4;
					}else{
						var Num = 5;
					}
					$('#howtotake3').append('<tr id="'+this[1]+'" class="firstLesson"><td rowspan="'+Num+'">'+this[13]+'</td><td>1回目</td><td rowspan="'+Num+'"><a href="/school/entry.php?seminar_id='+this[1]+'"><img src="/school/common/images/btn_form.png"></a></td><td>'+this[3]+'</td><td>'+this[4]+'</td><td>'+this[5]+'</td><td><span class="'+this[67]+'">'+this[42]+'</span></td><td class="num" rowspan="'+Num+'">'+this[38]+'</td><td rowspan="'+Num+'"><a href="/school/instructor/#'+this[41]+'"><span class="'+this[41]+'">'+this[39]+'</span></a></td><td rowspan="'+Num+'"></td></tr><tr class="secondLesson"><td>2回目</td><td class="date02">'+this[21]+'</td><td>'+this[23]+'</td><td>'+this[24]+'</td><td><span class="'+this[69]+'">'+this[43]+'</span></td></tr><tr class="thirdLesson"><td>3回目</td><td class="date03">'+this[25]+'</td><td>'+this[27]+'</td><td>'+this[28]+'</td><td><span class="'+this[70]+'">'+this[44]+'</span></td></tr><tr class="forthLesson"><td>4回目</td><td class="date04">'+this[29]+'</td><td>'+this[31]+'</td><td>'+this[32]+'</td><td><span class="'+this[71]+'">'+this[45]+'</span></td></tr><tr class="fifthLesson"><td>5回目</td><td class="date05">'+this[33]+'</td><td>'+this[35]+'</td><td>'+this[36]+'</td><td><span class="'+this[72]+'">'+this[46]+'</span></td></tr>');
				}
			}
		})//function csv
	$('.schedule tr:nth-child(2n-1)').css('background-color','#f7fffb');
	$('.schedule2 tr:nth-child(2n-1)').css('background-color','#f7fffb');

	//$('.schedule .num').css('display','none');
	//女性アイコン表示
	$(".default").each(function() {
			$(this).unwrap('');
	});
	//インストラクターリンク削除
	$(".default").each(function() {
			$(this).unwrap('');
	});
	$(".phototutor").each(function() {
			$(this).unwrap('');
	});

	$('.secondLesson').each(function() {
			var text = $(this).children('.date02').text();
			if (text == ''){
				$(this).remove();
			}
    });
	$('.thirdLesson').each(function() {
			var text = $(this).children('.date03').text();
			if (text == ''){
				$(this).remove();
			}
    });
	$('.forthLesson').each(function() {
			var text = $(this).children('.date04').text();
			if (text == ''){
				$(this).remove();
			}
    });
	$('.fifthLesson').each(function() {
			var text = $(this).children('.date05').text();
			if (text == ''){
				$(this).remove();
			}
    });

	//会場リンク追加
	$(".plaza_tokyo").wrap('<a href="http://www.olympus.co.jp/jp/contact/list/map_format.jsp?site_id=8677" target="_blank"></a>');
	$(".plaza_osaka").wrap('<a href="http://www.olympus.co.jp/jp/contact/list/map_format.jsp?site_id=8682" target="_blank"></a>');
	$(".shinjuku_monolith").wrap('<a href="http://www.olympus.co.jp/jp/contact/list/map_format.jsp?site_id=8312" target="_blank"></a>');
	$(".olympus_fukuoka").wrap('<a href="http://www.olympus.co.jp/jp/contact/list/map_format.jsp?site_id=8624" target="_blank"></a>');
	$(".olympus_sapporo").wrap('<a href="http://www.olympus.co.jp/jp/contact/list/map_format.jsp?site_id=8577" target="_blank"></a>');
	$(".winc_aichi").wrap('<a href="/exlink.php?http://www.winc-aichi.jp/access/" target="_blank"></a>');
	$(".sonic_city").wrap('<a href="/exlink.php?http://www.sonic-city.or.jp/?page_id=178" target="_blank"></a>');
	$(".chiba_cci").wrap('<a href="/exlink.php?http://www.chiba-cci.or.jp/general.php?cms_id=0" target="_blank"></a>');
	$(".ccma_net").wrap('<a href="/exlink.php?http://www.ccma-net.jp/information_03.html" target="_blank"></a>');
	$(".y-port-kousei").wrap('<a href="/exlink.php?http://www.y-port-kousei.or.jp/6-1bannkokubasi.html" target="_blank"></a>');
	$(".hatoba").wrap('<a href="/exlink.php?http://www.hatoba.jp/access.html" target="_blank"></a>');
	$(".tenjin").wrap('<a href="/exlink.php?http://www.kyumen.co.jp/rental/tenjin_access.html" target="_blank"></a>');
	$(".smt").wrap('<a href="/exlink.php?http://www.smt.jp/info/access/#03" target="_blank"></a>');
	$(".chocot").wrap('<a href="/exlink.php?http://photochocot.na-watashi.com/" target="_blank"></a>');
	$(".peace").wrap('<a href="/exlink.php?http://www.peacestudioplus.jp/shop.html" target="_blank"></a>');
	$(".chibashi_bijyutsukan").wrap('<a href="/exlink.php?http://www.ccma-net.jp/" target="_blank"></a>');
	$(".rcc").wrap('<a href="/exlink.php?http://www.rccbc.co.jp/access.html" target="_blank"></a>');

var trlength = $('.schedule tr').length;
var reminderID2 ='' ;
for ( i=2; i<=trlength; i++ ){
var reminderID = $('.schedule tr:nth-child('+i+')').attr('id');
reminderID2 += reminderID +'_1'+',';
}

var trlength_02 = $('.schedule2 tr').length;
var reminderID2_02 ='' ;
for ( i=2; i<=trlength_02; i++ ){
var reminderID_02 = $('.schedule2 tr:nth-child('+i+')').attr('id');
reminderID2_02 += reminderID_02 +'_1'+',';
}

var reminderID2days ='' ;
$('.schedule3 .firstLesson').each(function() {
	var reminderID_03 = $(this).attr('id');
	reminderID2days += reminderID_03 +'_1'+',';
});

var reminderIDAll = reminderID2 + reminderID2_02 + reminderID2days;
//console.log(reminderIDAll);

						$.ajax({
									 type:'GET',
									 //url: '/school/common/json/courseID.json',
									 //url: '/api/college/remain/sid/'+reminderID2+'_1',
									 url: 'http://fotopus.com/api/college/remain/sid/'+reminderIDAll+'_1',
									 dataType: 'jsonp',
									 jsonpCallback: 'collegeData',
									 success:successJson ,
									 error: function(){
										 //alert("エラー");
									 }
						});
						function successJson(json){
							var trobject = $('.schedule tr').length;
							for ( i=2; i<=trobject; i++ ){
								var id = $('.schedule tr:nth-child('+i+')').attr('id');
								var jsonId = json.length;
								for ( var t=0; t<jsonId ;t++){
									if (id == json[t].id){//trのidとjsonのid判別
										var matchId = $('.schedule tr:nth-child('+i+') td:nth-child(9)');
										var maxnum = $('.schedule tr:nth-child('+i+') td:nth-child(7)').text();
										if ( maxnum / 3 < json[t].remainder ){//残数が3/1以上
											matchId.html('○');
										}else if (json[t].remainder == 0){//残数が0
											matchId.html('―');
											$('.schedule tr:nth-child('+i+') td:nth-child(2)').html('受付終了').css('font-weight','bold');
										}else if (json[t].remainder == "null"){//残数がnull
											matchId.html('―');
											$('.schedule tr:nth-child('+i+') td:nth-child(2)').html('受付前');
										}else {//残数が3/1以下
											matchId.html('△');
										}
										//matchId.html(json[t].remainder);
									}
								}
							}//.schedule

							var trobject = $('.schedule2 tr').length;
							for ( i=2; i<=trobject; i++ ){
								var id = $('.schedule2 tr:nth-child('+i+')').attr('id');
								var jsonId = json.length;
								for ( var t=0; t<jsonId ;t++){
									if (id == json[t].id){//trのidとjsonのid判別
										var matchId = $('.schedule2 tr:nth-child('+i+') td:nth-child(9)');
										var maxnum = $('.schedule2 tr:nth-child('+i+') td:nth-child(7)').text();
										if ( maxnum / 3 < json[t].remainder ){//残数が3/1以上
											matchId.html('○');
										}else if (json[t].remainder == 0){//残数が0
											matchId.html('―');
											$('.schedule2 tr:nth-child('+i+') td:nth-child(2)').html('受付終了').css('font-weight','bold');
										}else if (json[t].remainder == "null"){//残数がnull
											matchId.html('―');
											$('.schedule2 tr:nth-child('+i+') td:nth-child(2)').html('受付前');
										}else {//残数が3/1以下
											matchId.html('△');
										}
										//matchId.html(json[t].remainder);
									}
								}
							}//.schedule2

							var trobject = $('.schedule3 tr').length;
							for ( i=2; i<=trobject; i++ ){
								var id = $('.schedule3 tr:nth-child('+i+')').attr('id');
								var jsonId = json.length;
								for ( var t=0; t<jsonId ;t++){
									if (id == json[t].id){//trのidとjsonのid判別
										var matchId = $('.schedule3 tr:nth-child('+i+') td:nth-child(10)');
										var maxnum = $('.schedule3 tr:nth-child('+i+') td:nth-child(8)').text();
										if ( maxnum / 3 < json[t].remainder ){//残数が3/1以上
											matchId.html('○');
										}else if (json[t].remainder == 0){//残数が0
											matchId.html('―');
											$('.schedule3 tr:nth-child('+i+') td:nth-child(3)').html('受付終了').css('font-weight','bold');
										}else if (json[t].remainder == "null"){//残数がnull
											matchId.html('―');
											$('.schedule3 tr:nth-child('+i+') td:nth-child(3)').html('受付前');
										}else {//残数が3/1以下
											matchId.html('△');
										}
										//matchId.html(json[t].remainder);
									}
								}
							}//.schedule3


						}//successJson

		var pageId = '';
		var url = window.location;
		var path = url.href.split('/');
		var sectionID01 = '#study';
		var sectionID02 = '#beginner';
		var sectionID03 = '#5times';
		if(path[6] == sectionID01){
			var file_name = sectionID01;
			if (file_name != ''){
				var targetOffset = $(file_name).offset().top;
				$('html,body').animate({scrollTop: targetOffset}, "fast");
				$('body').removeClass('loading');
				$('img.loading').remove();
			}
		}else if(path[6] == sectionID02){
			var file_name = sectionID02;
			if (file_name != ''){
				var targetOffset = $(file_name).offset().top;
				$('html,body').animate({scrollTop: targetOffset}, "fast");
				$('body').removeClass('loading');
				$('img.loading').remove();
			}
		}else if(path[6] == sectionID03){
			var file_name = sectionID03;
			if (file_name != ''){
				var targetOffset = $(file_name).offset().top;
				$('html,body').animate({scrollTop: targetOffset}, "fast");
				$('body').removeClass('loading');
				$('img.loading').remove();
			}
		}


		$(".schedule tr,.schedule2 tr,.schedule3 tr,").each(function() {
			pageId = '#'+$(this).attr('id');
			if (location.href.match(pageId)){
				var url = window.location;
				var path = url.href.split('/');
				var file_name = pageId;
				if (file_name != ''){
					var targetOffset = $(file_name).offset().top;
					$('html,body').animate({scrollTop: targetOffset}, "fast");
					$('body').removeClass('loading');
					$('img.loading').remove();
				}
			}else{
				$('body').removeClass('loading');
				$('img.loading').remove();
			}
        });
	})
})//function



}
