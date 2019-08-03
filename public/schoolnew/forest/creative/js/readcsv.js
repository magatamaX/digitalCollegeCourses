function loadTextFile(){
$(function(){
	$.get('/school/common/csv/index.csv',function(data){
		var csv = $.csv()(data);
		//indexを使ってくり返し回数をカウントします
		$(csv).each(function(index){
			if(index == 0){//一列目
				if(this[2]){
					$('#creative_omdEm1').append('<tr><th class="corcePlace">開催地</th><th>申し込み</th><th colspan="3">開催日時</th><th>会場</th><th>定員</th><th>講師</th><th>残数</th></tr>');
					$('#creative_penEp5').append('<tr><th class="corcePlace">開催地</th><th>申し込み</th><th colspan="3">開催日時</th><th>会場</th><th>定員</th><th>講師</th><th>残数</th></tr>');
					$('#creative_lens').append('<tr><th colspan="2" class="corcePlace">開催地</th><th>申し込み</th><th colspan="3">開催日時</th><th class="lens">レンズ</th><th>会場</th><th>定員</th><th>講師</th><th>残数</th></tr>');
					$('#creative_artfilter').append('<tr><th class="corcePlace">開催地</th><th>申し込み</th><th colspan="3">開催日時</th><th>種類</th><th>会場</th><th>定員</th><th>講師</th><th>残数</th></tr>');
					$('#creative_viewer3').append('<tr><th class="corcePlace">開催地</th><th>申し込み</th><th colspan="3">開催日時</th><th>会場</th><th>定員</th><th>講師</th><th>残数</th></tr>');
					$('#creative_flash').append('<tr><th class="corcePlace">開催地</th><th>申し込み</th><th colspan="3">開催日時</th><th>会場</th><th>定員</th><th>講師</th><th>残数</th></tr>');
				}
			} else {
				if(this[6] == '' && this[7] == 'creative_omdEm1'){//締め切り
					$('#creative_omdEm1').append('<tr id="'+this[1]+'"><td>'+this[13]+'</td><td class="'+this[6]+'">受付終了</td><td>'+this[3]+'</td><td>'+this[4]+'</td><td>'+this[5]+'</td><td><span class="'+this[67]+'">'+this[42]+'</span></td><td class="num">'+this[38]+'</td><td><a href="/school/instructor/#'+this[41]+'"><span class="'+this[41]+'">'+this[39]+'</span></a></td><td></td></tr>');
				}else if(this[6] == 'opening' && this[7] == 'creative_omdEm1'){//開催中
					$('#creative_omdEm1').append('<tr id="'+this[1]+'"><td>'+this[13]+'</td><td><a href="/school/entry.php?seminar_id='+this[1]+'"><img src="/school/common/images/btn_form.png"></a></td><td>'+this[3]+'</td><td>'+this[4]+'</td><td>'+this[5]+'</td><td><span class="'+this[67]+'">'+this[42]+'</span></td><td class="num">'+this[38]+'</td><td><a href="/school/instructor/#'+this[41]+'"><span class="'+this[41]+'">'+this[39]+'</span></a></td><td></td></tr>');
				}else if(this[6] == '' && this[7] == 'creative_penEp5'){//締め切り
					$('#creative_penEp5').append('<tr id="'+this[1]+'"><td>'+this[13]+'</td><td class="'+this[6]+'">受付終了</td><td>'+this[3]+'</td><td>'+this[4]+'</td><td>'+this[5]+'</td><td><span class="'+this[67]+'">'+this[42]+'</span></td><td class="num">'+this[38]+'</td><td><a href="/school/instructor/#'+this[41]+'"><span class="'+this[41]+'">'+this[39]+'</span></a></td><td></td></tr>');
				}else if(this[6] == 'opening' && this[7] == 'creative_penEp5'){//開催中
					$('#creative_penEp5').append('<tr id="'+this[1]+'"><td>'+this[13]+'</td><td><a href="/school/entry.php?seminar_id='+this[1]+'"><img src="/school/common/images/btn_form.png"></a></td><td>'+this[3]+'</td><td>'+this[4]+'</td><td>'+this[5]+'</td><td><span class="'+this[67]+'">'+this[42]+'</span></td><td class="num">'+this[38]+'</td><td><a href="/school/instructor/#'+this[41]+'"><span class="'+this[41]+'">'+this[39]+'</span></a></td><td></td></tr>');
				}else if(this[6] == '' && this[7] == 'creative_lens'){//締め切り
					$('#creative_lens').append('<tr id="'+this[1]+'"><td class="'+this[11]+'"></td><td>'+this[13]+'</td><td class="'+this[6]+'">受付終了</td><td>'+this[3]+'</td><td>'+this[4]+'</td><td>'+this[5]+'</td><td>'+this[10]+'</td><td><span class="'+this[67]+'">'+this[42]+'</span></td><td class="num">'+this[38]+'</td><td class="'+this[41]+'"><a href="/school/instructor/#'+this[41]+'"><span class="'+this[41]+'">'+this[39]+'</span></a></td><td></td></tr>');
				}else if(this[6] == 'opening' && this[7] == 'creative_lens'){//開催中
					$('#creative_lens').append('<tr id="'+this[1]+'"><td class="'+this[11]+'"><td>'+this[13]+'</td><td><a href="/school/entry.php?seminar_id='+this[1]+'"><img src="/school/common/images/btn_form.png"></a></td><td>'+this[3]+'</td><td>'+this[4]+'</td><td>'+this[5]+'</td><td>'+this[10]+'</td><td><span class="'+this[67]+'">'+this[42]+'</span></td><td class="num">'+this[38]+'</td><td><a href="/school/instructor/#'+this[41]+'"><span class="'+this[41]+'">'+this[39]+'</span></a></td><td></td></tr>');
				}else if(this[6] == '' && this[7] == 'creative_artfilter'){//締め切り
					$('#creative_artfilter').append('<tr id="'+this[1]+'"><td>'+this[13]+'</td><td class="'+this[6]+'">受付終了</td><td>'+this[3]+'</td><td>'+this[4]+'</td><td>'+this[5]+'</td><td>'+this[9]+'</td><td><span class="'+this[67]+'">'+this[42]+'</span></td><td class="num">'+this[38]+'</td><td class="'+this[41]+'"><a href="/school/instructor/#'+this[41]+'"><span class="'+this[41]+'">'+this[39]+'</span></a></td><td></td></tr>');
				}else if(this[6] == 'opening' && this[7] == 'creative_artfilter'){//開催中
					$('#creative_artfilter').append('<tr id="'+this[1]+'"><td>'+this[13]+'</td><td><a href="/school/entry.php?seminar_id='+this[1]+'"><img src="/school/common/images/btn_form.png"></a></td><td>'+this[3]+'</td><td>'+this[4]+'</td><td>'+this[5]+'</td><td>'+this[9]+'</td><td><span class="'+this[67]+'">'+this[42]+'</span></td><td class="num">'+this[38]+'</td><td><a href="/school/instructor/#'+this[41]+'"><span class="'+this[41]+'">'+this[39]+'</span></a></td><td></td></tr>');
				}else if(this[6] == '' && this[7] == 'creative_viewer3'){//締め切り
					$('#creative_viewer3').append('<tr id="'+this[1]+'"><td>'+this[13]+'</td><td class="'+this[6]+'">受付終了</td><td>'+this[3]+'</td><td>'+this[4]+'</td><td>'+this[5]+'</td><td><span class="'+this[67]+'">'+this[42]+'</span></td><td class="num">'+this[38]+'</td><td><a href="/school/instructor/#'+this[41]+'"><span class="'+this[41]+'">'+this[39]+'</span></a></td><td></td></tr>');
				}else if(this[6] == 'opening' && this[7] == 'creative_viewer3'){//開催中
					$('#creative_viewer3').append('<tr id="'+this[1]+'"><td>'+this[13]+'</td><td><a href="/school/entry.php?seminar_id='+this[1]+'"><img src="/school/common/images/btn_form.png"></a></td><td>'+this[3]+'</td><td>'+this[4]+'</td><td>'+this[5]+'</td><td><span class="'+this[67]+'">'+this[42]+'</span></td><td class="num">'+this[38]+'</td><td><a href="/school/instructor/#'+this[41]+'"><span class="'+this[41]+'">'+this[39]+'</span></a></td><td></td></tr>');
				}else if(this[6] == '' && this[7] == 'creative_flash'){//締め切り
					$('#creative_flash').append('<tr id="'+this[1]+'"><td>'+this[13]+'</td><td class="'+this[6]+'">受付終了</td><td>'+this[3]+'</td><td>'+this[4]+'</td><td>'+this[5]+'</td><td><span class="'+this[67]+'">'+this[42]+'</span></td><td class="num">'+this[38]+'</td><td><a href="/school/instructor/#'+this[41]+'"><span class="'+this[41]+'">'+this[39]+'</span></a></td><td></td></tr>');
				}else if(this[6] == 'opening' && this[7] == 'creative_flash'){//開催中
					$('#creative_flash').append('<tr id="'+this[1]+'"><td>'+this[13]+'</td><td><a href="/school/entry.php?seminar_id='+this[1]+'"><img src="/school/common/images/btn_form.png"></a></td><td>'+this[3]+'</td><td>'+this[4]+'</td><td>'+this[5]+'</td><td><span class="'+this[67]+'">'+this[42]+'</span></td><td class="num">'+this[38]+'</td><td><a href="/school/instructor/#'+this[41]+'"><span class="'+this[41]+'">'+this[39]+'</span></a></td><td></td></tr>');
				}
			}
		})//function csv
	$('.schedule tr:nth-child(2n-1)').css('background-color','#f7fffb');

	//$('.schedule .num').css('display','none');
	//KSアイコン表示
	$('#creative_lens .KS').append('<img src="/school/forest/creative/images/icon_KS.png" />');
	$('#creative_lens .K').append('<img src="/school/forest/creative/images/icon_K.png" />');
	$('#creative_lens .S').append('<img src="/school/forest/creative/images/icon_S.png" />');
	//インストラクターリンク削除
	$(".default").each(function() {
			$(this).unwrap('');
	});
	$(".phototutor").each(function() {
			$(this).unwrap('');
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

var trlengthOmdEm1 = $('#creative_omdEm1 tr').length;
var trlengthPenEp5 = $('#creative_penEp5 tr').length;
var trlengthLens = $('#creative_lens tr').length;
var trlengthArtfilter = $('#creative_artfilter tr').length;
var trlengthViewer3 = $('#creative_viewer3 tr').length;
var trlengthFlash = $('#creative_flash tr').length;
var reminderID2OmdEm1 ='' ;
var reminderID2PenEp5 ='' ;
var reminderID2Lens ='' ;
var reminderID2Artfilter ='' ;
var reminderID2Viewer3 ='' ;
var reminderID2Flash ='' ;
for ( i=2; i<=trlengthOmdEm1; i++ ){
var reminderIDOmdEm1 = $('#creative_omdEm1 tr:nth-child('+i+')').attr('id');
reminderID2OmdEm1 += reminderIDOmdEm1 +'_1'+',';
}
for ( i=2; i<=trlengthPenEp5; i++ ){
var reminderIDPenEp5 = $('#creative_penEp5 tr:nth-child('+i+')').attr('id');
reminderID2PenEp5 += reminderIDPenEp5 +'_1'+',';
}
for ( i=2; i<=trlengthLens; i++ ){
var reminderIDLens = $('#creative_lens tr:nth-child('+i+')').attr('id');
reminderID2Lens += reminderIDLens +'_1'+',';
}
for ( i=2; i<=trlengthArtfilter; i++ ){
var reminderIDArtfilter = $('#creative_artfilter tr:nth-child('+i+')').attr('id');
reminderID2Artfilter += reminderIDArtfilter +'_1'+',';
}
for ( i=2; i<=trlengthViewer3; i++ ){
var reminderIDViewer3 = $('#creative_viewer3 tr:nth-child('+i+')').attr('id');
reminderID2Viewer3 += reminderIDViewer3 +'_1'+',';
}
for ( i=2; i<=trlengthFlash; i++ ){
var reminderIDFlash = $('#creative_flash tr:nth-child('+i+')').attr('id');
reminderID2Flash += reminderIDFlash +'_1'+',';
}
var reminderID2All = reminderID2OmdEm1 + reminderID2PenEp5 + reminderID2Lens + reminderID2Artfilter + reminderID2Viewer3 + reminderID2Flash;

						$.ajax({
									 type:'GET',
									 //url: '/school/common/json/courseID.json',
									 //url: '/api/college/remain/sid/'+reminderID2All+'_1',
									 url: 'http://fotopus.com/api/college/remain/sid/'+reminderID2All+'_1',
									 dataType: 'jsonp',
									 jsonpCallback: 'collegeData',
									 success:successJson ,
									 error: function(){
										 //alert("エラー");
									 }
						});
						function successJson(json){
							var trobject = $('#creative_omdEm1 tr').length;
							for ( i=2; i<=trobject; i++ ){//#creative_omdEm1
								var id = $('#creative_omdEm1 tr:nth-child('+i+')').attr('id');
								var jsonId = json.length;
								for ( var t=0; t<jsonId ;t++){
									if (id == json[t].id){//trのidとjsonのid判別
										var matchId = $('#creative_omdEm1 tr:nth-child('+i+') td:nth-child(9)');
										var maxnum = $('#creative_omdEm1 tr:nth-child('+i+') td:nth-child(7)').text();
										if ( maxnum / 3 < json[t].remainder ){//残数が3/1以上
											matchId.html('○');
										}else if (json[t].remainder == 0){//残数が0
											matchId.html('―');
											$('#creative_omdEm1 tr:nth-child('+i+') td:nth-child(2)').html('受付終了').css('font-weight','bold');
										}else if (json[t].remainder == "null"){//残数がnull
											matchId.html('―');
											$('#creative_omdEm1 tr:nth-child('+i+') td:nth-child(2)').html('受付前');
										}else {//残数が3/1以下
											matchId.html('△');
										}
									}
								}
							}//#creative_omdEm1

							var trobject = $('#creative_penEp5 tr').length;
							for ( i=2; i<=trobject; i++ ){//#creative_penEp5
								var id = $('#creative_penEp5 tr:nth-child('+i+')').attr('id');
								var jsonId = json.length;
								for ( var t=0; t<jsonId ;t++){
									if (id == json[t].id){//trのidとjsonのid判別
										var matchId = $('#creative_penEp5 tr:nth-child('+i+') td:nth-child(9)');
										var maxnum = $('#creative_penEp5 tr:nth-child('+i+') td:nth-child(7)').text();
										if ( maxnum / 3 < json[t].remainder ){//残数が3/1以上
											matchId.html('○');
										}else if (json[t].remainder == 0){//残数が0
											matchId.html('-');
											$('#creative_penEp5 tr:nth-child('+i+') td:nth-child(2)').html('受付終了').css('font-weight','bold');
										}else if (json[t].remainder == "null"){//残数がnull
											matchId.html('―');
											$('#creative_penEp5 tr:nth-child('+i+') td:nth-child(2)').html('受付前');
										}else {//残数が3/1以下
											matchId.html('△');
										}
									}
								}
							}//#creative_penEp5

							var trobject = $('#creative_lens tr').length;
							for ( i=2; i<=trobject; i++ ){//#creative_lens
								var id = $('#creative_lens tr:nth-child('+i+')').attr('id');
								var jsonId = json.length;
								for ( var t=0; t<jsonId ;t++){
									if (id == json[t].id){//trのidとjsonのid判別
										var matchId = $('#creative_lens tr:nth-child('+i+') td:nth-child(11)');
										var maxnum = $('#creative_lens tr:nth-child('+i+') td:nth-child(9)').text();
										if ( maxnum / 3 < json[t].remainder ){//残数が3/1以上
											matchId.html('○');
										}else if (json[t].remainder == 0){//残数が0
											matchId.html('―');
											$('#creative_lens tr:nth-child('+i+') td:nth-child(3)').html('受付終了').css('font-weight','bold');
										}else if (json[t].remainder == "null"){//残数がnull
											matchId.html('―');
											$('#creative_lens tr:nth-child('+i+') td:nth-child(3)').html('受付前');
										}else {//残数が3/1以下
											matchId.html('△');
										}
									}
								}
							}//#creative_lens

							var trobject = $('#creative_artfilter tr').length;
							for ( i=2; i<=trobject; i++ ){//#creative_artfilter
								var id = $('#creative_artfilter tr:nth-child('+i+')').attr('id');
								var jsonId = json.length;
								for ( var t=0; t<jsonId ;t++){
									if (id == json[t].id){//trのidとjsonのid判別
										var matchId = $('#creative_artfilter tr:nth-child('+i+') td:nth-child(10)');
										var maxnum = $('#creative_artfilter tr:nth-child('+i+') td:nth-child(8)').text();
										if ( maxnum / 3 < json[t].remainder ){//残数が3/1以上
											matchId.html('○');
										}else if (json[t].remainder == 0){//残数が0
											matchId.html('―');
											$('#creative_artfilter tr:nth-child('+i+') td:nth-child(2)').html('受付終了').css('font-weight','bold');
										}else if (json[t].remainder == "null"){//残数がnull
											matchId.html('―');
											$('#creative_artfilter tr:nth-child('+i+') td:nth-child(2)').html('受付前');
										}else {//残数が3/1以下
											matchId.html('△');
										}
									}
								}
							}//#creative_artfilter

							var trobject = $('#creative_viewer3 tr').length;
							for ( i=2; i<=trobject; i++ ){//#creative_viewer3
								var id = $('#creative_viewer3 tr:nth-child('+i+')').attr('id');
								var jsonId = json.length;
								for ( var t=0; t<jsonId ;t++){
									if (id == json[t].id){//trのidとjsonのid判別
										var matchId = $('#creative_viewer3 tr:nth-child('+i+') td:nth-child(9)');
										var maxnum = $('#creative_viewer3 tr:nth-child('+i+') td:nth-child(7)').text();
										if ( maxnum / 3 < json[t].remainder ){//残数が3/1以上
											matchId.html('○');
										}else if (json[t].remainder == 0){//残数が0
											matchId.html('―');
											$('#creative_viewer3 tr:nth-child('+i+') td:nth-child(2)').html('受付終了').css('font-weight','bold');
										}else if (json[t].remainder == "null"){//残数がnull
											matchId.html('―');
											$('#creative_viewer3 tr:nth-child('+i+') td:nth-child(2)').html('受付前');
										}else {//残数が3/1以下
											matchId.html('△');
										}
									}
								}
							}//#creative_viewer3

							var trobject = $('#creative_flash tr').length;
							for ( i=2; i<=trobject; i++ ){//#creative_viewer3
								var id = $('#creative_flash tr:nth-child('+i+')').attr('id');
								var jsonId = json.length;
								for ( var t=0; t<jsonId ;t++){
									if (id == json[t].id){//trのidとjsonのid判別
										var matchId = $('#creative_flash tr:nth-child('+i+') td:nth-child(9)');
										var maxnum = $('#creative_flash tr:nth-child('+i+') td:nth-child(7)').text();
										if ( maxnum / 3 < json[t].remainder ){//残数が3/1以上
											matchId.html('○');
										}else if (json[t].remainder == 0){//残数が0
											matchId.html('―');
											$('#creative_flash tr:nth-child('+i+') td:nth-child(2)').html('受付終了').css('font-weight','bold');
										}else if (json[t].remainder == "null"){//残数がnull
											matchId.html('―');
											$('#creative_flash tr:nth-child('+i+') td:nth-child(2)').html('受付前');
										}else {//残数が3/1以下
											matchId.html('△');
										}
									}
								}
							}//#creative_viewer3

						}//successJson
		var pageId = '';
		var url = window.location;
		var path = url.href.split('/');
		var sectionID01 = '#omdEm1';
		var sectionID02 = '#viewer3';
		var sectionID03 = '#flash';
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

		$(".schedule tr").each(function() {
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
