function loadTextFile(){
$(function(){
	$.get('/school/common/csv/index.csv',function(data){
		var csv = $.csv()(data);
		//indexを使ってくり返し回数をカウントします
		$(csv).each(function(index){
			if(index == 0){//一列目
				if(this[2]){
					$('#forest_lens').append('<tr><th>開催地</th><th>申し込み</th><th colspan="3">開催日時</th><th class="corcePlace">会場</th><th>定員</th><th>講師</th><th>残数</th></tr>');
					$('#forest_lens2').append('<tr><th colspan="2" class="corcePlace">開催地</th><th>申し込み</th><th colspan="3">開催日時</th><th class="lens">レンズ</th><th>会場</th><th>定員</th><th>講師</th><th>残数</th></tr>');
					$('#forest_lens3').append('<tr><th colspan="2" class="corcePlace">開催地</th><th>申し込み</th><th colspan="3">開催日時</th><th class="lens">レンズ</th><th>会場</th><th>定員</th><th>講師</th><th>残数</th></tr>');
					$('#forest_lens4').append('<tr><th colspan="2" class="corcePlace">開催地</th><th>申し込み</th><th colspan="3">開催日時</th><th class="lens">レンズ</th><th>会場</th><th>定員</th><th>講師</th><th>残数</th></tr>');
				}
			} else {
				if(this[6] == '' && this[7] == 'forest_lens'){//締め切り
					$('#forest_lens').append('<tr id="'+this[1]+'"><td>'+this[13]+'</td><td class="'+this[6]+'">受付終了</td><td>'+this[3]+'</td><td>'+this[4]+'</td><td>'+this[5]+'</td><td><span class="'+this[67]+'">'+this[42]+'</span></td><td class="num">'+this[38]+'</td><td><a href="/school/instructor/#'+this[41]+'"><span class="'+this[41]+'">'+this[39]+'</span></a></td><td></td></tr>');
				}else if(this[6] == 'opening' && this[7] == 'forest_lens'){//開催中
					$('#forest_lens').append('<tr id="'+this[1]+'"><td>'+this[13]+'</td><td><a href="/school/entry.php?seminar_id='+this[1]+'"><img src="/school/common/images/btn_form.png"></a></td><td>'+this[3]+'</td><td>'+this[4]+'</td><td>'+this[5]+'</td><td><span class="'+this[67]+'">'+this[42]+'</span></td><td class="num">'+this[38]+'</td><td><a href="/school/instructor/#'+this[41]+'"><span class="'+this[41]+'">'+this[39]+'</span></a></td><td></td></tr>');
				}else if(this[6] == '' && this[7] == 'forest_lens2'){//締め切り
					$('#forest_lens2').append('<tr id="'+this[1]+'"><td class="'+this[11]+'"></td><td>'+this[13]+'</td><td class="'+this[6]+'">受付終了</td><td>'+this[3]+'</td><td>'+this[4]+'</td><td>'+this[5]+'</td><td>'+this[10]+'</td><td><span class="'+this[67]+'">'+this[42]+'</span></td><td class="num">'+this[38]+'</td><td class="'+this[41]+'"><a href="/school/instructor/#'+this[41]+'"><span class="'+this[41]+'">'+this[39]+'</span></a></td><td></td></tr>');
				}else if(this[6] == 'opening' && this[7] == 'forest_lens2'){//開催中
					$('#forest_lens2').append('<tr id="'+this[1]+'"><td class="'+this[11]+'"><td>'+this[13]+'</td><td><a href="/school/entry.php?seminar_id='+this[1]+'"><img src="/school/common/images/btn_form.png"></a></td><td>'+this[3]+'</td><td>'+this[4]+'</td><td>'+this[5]+'</td><td>'+this[10]+'</td><td><span class="'+this[67]+'">'+this[42]+'</span></td><td class="num">'+this[38]+'</td><td><a href="/school/instructor/#'+this[41]+'"><span class="'+this[41]+'">'+this[39]+'</span></a></td><td></td></tr>');
				}else if(this[6] == '' && this[7] == 'forest_lens3'){//締め切り
					$('#forest_lens3').append('<tr id="'+this[1]+'"><td class="'+this[11]+'"></td><td>'+this[13]+'</td><td class="'+this[6]+'">受付終了</td><td>'+this[3]+'</td><td>'+this[4]+'</td><td>'+this[5]+'</td><td>'+this[10]+'</td><td><span class="'+this[67]+'">'+this[42]+'</span></td><td class="num">'+this[38]+'</td><td class="'+this[41]+'"><a href="/school/instructor/#'+this[41]+'"><span class="'+this[41]+'">'+this[39]+'</span></a></td><td></td></tr>');
				}else if(this[6] == 'opening' && this[7] == 'forest_lens3'){//開催中
					$('#forest_lens3').append('<tr id="'+this[1]+'"><td class="'+this[11]+'"><td>'+this[13]+'</td><td><a href="/school/entry.php?seminar_id='+this[1]+'"><img src="/school/common/images/btn_form.png"></a></td><td>'+this[3]+'</td><td>'+this[4]+'</td><td>'+this[5]+'</td><td>'+this[10]+'</td><td><span class="'+this[67]+'">'+this[42]+'</span></td><td class="num">'+this[38]+'</td><td><a href="/school/instructor/#'+this[41]+'"><span class="'+this[41]+'">'+this[39]+'</span></a></td><td></td></tr>');
				}else if(this[6] == '' && this[7] == 'forest_lens4'){//締め切り
					$('#forest_lens4').append('<tr id="'+this[1]+'"><td class="'+this[11]+'"></td><td>'+this[13]+'</td><td class="'+this[6]+'">受付終了</td><td>'+this[3]+'</td><td>'+this[4]+'</td><td>'+this[5]+'</td><td>'+this[10]+'</td><td><span class="'+this[67]+'">'+this[42]+'</span></td><td class="num">'+this[38]+'</td><td class="'+this[41]+'"><a href="/school/instructor/#'+this[41]+'"><span class="'+this[41]+'">'+this[39]+'</span></a></td><td></td></tr>');
				}else if(this[6] == 'opening' && this[7] == 'forest_lens4'){//開催中
					$('#forest_lens4').append('<tr id="'+this[1]+'"><td class="'+this[11]+'"><td>'+this[13]+'</td><td><a href="/school/entry.php?seminar_id='+this[1]+'"><img src="/school/common/images/btn_form.png"></a></td><td>'+this[3]+'</td><td>'+this[4]+'</td><td>'+this[5]+'</td><td>'+this[10]+'</td><td><span class="'+this[67]+'">'+this[42]+'</span></td><td class="num">'+this[38]+'</td><td><a href="/school/instructor/#'+this[41]+'"><span class="'+this[41]+'">'+this[39]+'</span></a></td><td></td></tr>');
				}
			}
		})//function csv
	$('.schedule tr:nth-child(2n-1)').css('background-color','#f7fffb');
	$('.schedule2 tr:nth-child(2n-1)').css('background-color','#f7fffb');
	$('.schedule3 tr:nth-child(2n-1)').css('background-color','#f7fffb');
	$('.schedule4 tr:nth-child(2n-1)').css('background-color','#f7fffb');

//	$('.schedule .num').css('display','none');
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

var trlength_03 = $('.schedule3 tr').length;
var reminderID2_03 ='' ;
for ( i=2; i<=trlength_03; i++ ){
var reminderID_03 = $('.schedule3 tr:nth-child('+i+')').attr('id');
reminderID2_03 += reminderID_03 +'_1'+',';
}

var trlength_04 = $('.schedule4 tr').length;
var reminderID2_04 ='' ;
for ( i=2; i<=trlength_04; i++ ){
var reminderID_04 = $('.schedule4 tr:nth-child('+i+')').attr('id');
reminderID2_04 += reminderID_04 +'_1'+',';
}

var reminderIDAll = reminderID2 + reminderID2_02 + reminderID2_03 + reminderID2_04;
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
							}

							var trobject = $('.schedule2 tr').length;
							for ( i=2; i<=trobject; i++ ){
								var id = $('.schedule2 tr:nth-child('+i+')').attr('id');
								var jsonId = json.length;
								for ( var t=0; t<jsonId ;t++){
									if (id == json[t].id){//trのidとjsonのid判別
										var matchId = $('.schedule2 tr:nth-child('+i+') td:nth-child(11)');
										var maxnum = $('.schedule2 tr:nth-child('+i+') td:nth-child(9)').text();
										if ( maxnum / 3 < json[t].remainder ){//残数が3/1以上
											matchId.html('○');
										}else if (json[t].remainder == 0){//残数が0
											matchId.html('―');
											$('.schedule2 tr:nth-child('+i+') td:nth-child(3)').html('受付終了').css('font-weight','bold');
										}else if (json[t].remainder == "null"){//残数がnull
											matchId.html('―');
											$('.schedule2 tr:nth-child('+i+') td:nth-child(3)').html('受付前');
										}else {//残数が3/1以下
											matchId.html('△');
										}

										//matchId.html(json[t].remainder);


									}
								}
							}

							var trobject = $('.schedule3 tr').length;
							for ( i=2; i<=trobject; i++ ){
								var id = $('.schedule3 tr:nth-child('+i+')').attr('id');
								var jsonId = json.length;
								for ( var t=0; t<jsonId ;t++){
									if (id == json[t].id){//trのidとjsonのid判別
										var matchId = $('.schedule3 tr:nth-child('+i+') td:nth-child(11)');
										var maxnum = $('.schedule3 tr:nth-child('+i+') td:nth-child(9)').text();
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
							}

							var trobject = $('.schedule4 tr').length;
							for ( i=2; i<=trobject; i++ ){
								var id = $('.schedule4 tr:nth-child('+i+')').attr('id');
								var jsonId = json.length;
								for ( var t=0; t<jsonId ;t++){
									if (id == json[t].id){//trのidとjsonのid判別
										var matchId = $('.schedule4 tr:nth-child('+i+') td:nth-child(11)');
										var maxnum = $('.schedule4 tr:nth-child('+i+') td:nth-child(9)').text();
										if ( maxnum / 3 < json[t].remainder ){//残数が3/1以上
											matchId.html('○');
										}else if (json[t].remainder == 0){//残数が0
											matchId.html('―');
											$('.schedule4 tr:nth-child('+i+') td:nth-child(3)').html('受付終了').css('font-weight','bold');
										}else if (json[t].remainder == "null"){//残数がnull
											matchId.html('―');
											$('.schedule4 tr:nth-child('+i+') td:nth-child(3)').html('受付前');
										}else {//残数が3/1以下
											matchId.html('△');
										}

										//matchId.html(json[t].remainder);


									}
								}
							}

						}//successJson

//loading 削除
		var pageId = '';
		var url = window.location;
		var path = url.href.split('/');
		var sectionID01 = '#lensBeginner';
		var sectionID02 = '#lensTokyo';
		var sectionID03 = '#lensOsaka';
		var sectionID04 = '#lensphotographing';
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
		}else if(path[6] == sectionID04){
			var file_name = sectionID04;
			if (file_name != ''){
				var targetOffset = $(file_name).offset().top;
				$('html,body').animate({scrollTop: targetOffset}, "fast");
				$('body').removeClass('loading');
				$('img.loading').remove();
			}
		}

		$(".schedule tr,.schedule2 tr,.schedule3 tr,.schedule4 tr").each(function() {
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
