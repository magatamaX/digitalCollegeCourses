function loadTextFile(){
$(function(){
	$.get('/school/common/csv/index.csv',function(data){
		var csv = $.csv()(data);
		//indexを使ってくり返し回数をカウントします
		var DC_detailCourseNum = $(".DC_detailCourse").length;
		var DC_detailCourseNum2 = DC_detailCourseNum + 1;
		for ( var i= 2; i<=DC_detailCourseNum2; i++ ){
			//var DC_detailCourseId = $('.DC_detailCourse:nth-of-type('+i+')').attr('id');
			var DC_detailCourseId = $('.DC_detailCourse:nth-child('+i+')').attr('id');
		$(csv).each(function(index){
			if(index == 0){//一列目
				if(this[2]){
					$('#'+DC_detailCourseId+' .schedule').append('<tr><th colspan="3">開催日</th><th>時間</th><th>授業形式</th></tr>');
				}
			} else {
				if(this[6] == '' && this[7] == 'photographing' && this[1] == DC_detailCourseId ){//締め切り
					$('#'+DC_detailCourseId+' .Explanation').prepend('●'+this[65]);
					$('#'+DC_detailCourseId+' .schedule').append('<tr class="first"><td>1回目</td><td>'+this[3]+'</td><td>'+this[4]+'</td><td>'+this[5]+'</td><td>'+this[18]+'</td></tr><tr class="second"><td>2回目</td><td>'+this[21]+'</td><td>'+this[23]+'</td><td>'+this[24]+'</td><td>'+this[22]+'</td></tr><tr class="third"><td>3回目</td><td>'+this[25]+'</td><td>'+this[27]+'</td><td>'+this[28]+'</td><td>'+this[26]+'</td></tr><tr class="fourth"><td>4回目</td><td>'+this[29]+'</td><td>'+this[31]+'</td><td>'+this[32]+'</td><td>'+this[30]+'</td></tr><tr class="fifth"><td>5回目</td><td>'+this[33]+'</td><td>'+this[35]+'</td><td>'+this[36]+'</td><td>'+this[34]+'</td></tr>');
					$('#'+DC_detailCourseId+' .timeLesson').append('<br /><span class="firstLesson">1回目：<span class="'+this[67]+'">'+this[42]+'</span></span><br /><span class="secondLesson">2回目：<span class="'+this[69]+'">'+this[43]+'</span></span><br /><span class="thirdLesson">3回目：<span class="'+this[70]+'">'+this[44]+'</span></span><br /><span class="fourthLesson">4回目：<span class="'+this[71]+'">'+this[45]+'</span></span><br /><span class="fifthLesson">5回目：<span class="fifthLesson '+this[72]+'">'+this[46]+'</span></span>');
					if(this[21] == ''){//2回目がない場合
						$('#'+DC_detailCourseId+' .second').detach();
						$('#'+DC_detailCourseId+' .secondLesson').detach();
					}
					if(this[25] == ''){//3回目がない場合
						$('#'+DC_detailCourseId+' .third').detach();
						$('#'+DC_detailCourseId+' .thirdLesson').detach();
					}
					if(this[29] == ''){//4回目がない場合
						$('#'+DC_detailCourseId+' .fourth').detach();
						$('#'+DC_detailCourseId+' .fourthLesson').detach();
					}
					if(this[33] == ''){//5回目がない場合
						$('#'+DC_detailCourseId+' .fifth').detach();
						$('#'+DC_detailCourseId+' .fifthLesson').detach();
					}


					//ページ内リンクリスト日付表示用 16.06.16 川根
					if(this[21]){//2回目がない場合
						var secondDay = '・'+this[21];
					}else{
						secondDay = "";
					}
					if(this[25]){//3回目がない場合
						var thirdDay = '・'+this[25];
					}else{
						thirdDay = "";
					}
					if(this[29]){//4回目がない場合
						var fourthDay = '・'+this[29];
					}else{
						fourthDay = "";
					}
					if(this[33]){//5回目がない場合
						var fifthDay = '・'+this[33];
					}else{
						fifthDay = "";
					}


					$('#DC_detailIntro ul').append('<li class="DC_detailList"><img width="9" height="14" alt="" src="/school/common/images/icon_arrow.gif">&#12288;<a href="#'+this[1]+'">'+this[12]+this[3]+secondDay+thirdDay+fourthDay+fifthDay+'</a></li>');
					$('#'+DC_detailCourseId+' h4').text(this[12]).addClass(this[81]+' '+this[82]+' '+this[83]+' '+this[84]);
					$('#'+DC_detailCourseId+' .premirCharge').text(this[50]);
					$('#'+DC_detailCourseId+' .otherCharge').text(this[53]);
					$('#'+DC_detailCourseId+' .lessonCaution').text(this[66]);
					$('#'+DC_detailCourseId+' .maxNum').text(this[38]);
					$('#'+DC_detailCourseId+' .Num').text('―');
					$('#'+DC_detailCourseId+' .formBtn').append('<p class="DC_detailCourseOver">受付終了になりました。ご応募ありがとうございました。</p>');
					//講座イメージキャプション 16.07.05
					$('#'+DC_detailCourseId+' .caption').append('※'+this[15]);
					//画像パス 16.07.07
					$('#'+DC_detailCourseId+' .imgNumber').attr('src', 'images/course/' + DC_detailCourseId + '.jpg');

				}else if(this[6] == 'opening' && this[7] == 'photographing' && this[1] == DC_detailCourseId ){//開催中
				  $('#'+DC_detailCourseId+' .Explanation').prepend('●'+this[65]);
					$('#'+DC_detailCourseId+' .schedule').append('<tr class="first"><td>1回目</td><td>'+this[3]+'</td><td>'+this[4]+'</td><td>'+this[5]+'</td><td>'+this[18]+'</td></tr><tr class="second"><td>2回目</td><td>'+this[21]+'</td><td>'+this[23]+'</td><td>'+this[24]+'</td><td>'+this[22]+'</td></tr><tr class="third"><td>3回目</td><td>'+this[25]+'</td><td>'+this[27]+'</td><td>'+this[28]+'</td><td>'+this[26]+'</td></tr><tr class="fourth"><td>4回目</td><td>'+this[29]+'</td><td>'+this[31]+'</td><td>'+this[32]+'</td><td>'+this[30]+'</td></tr><tr class="fifth"><td>5回目</td><td>'+this[33]+'</td><td>'+this[35]+'</td><td>'+this[36]+'</td><td>'+this[34]+'</td></tr>');
					$('#'+DC_detailCourseId+' .timeLesson').append('<br /><span class="firstLesson">1回目：<span class="'+this[67]+'">'+this[42]+'</span></span><br /><span class="secondLesson">2回目：<span class="'+this[69]+'">'+this[43]+'</span></span><br /><span class="thirdLesson">3回目：<span class="'+this[70]+'">'+this[44]+'</span></span><br /><span class="fourthLesson">4回目：<span class="'+this[71]+'">'+this[45]+'</span></span><br /><span class="fifthLesson">5回目：<span class="fifthLesson '+this[72]+'">'+this[46]+'</span></span>');
					if(this[21] == ''){//2回目がない場合
						$('#'+DC_detailCourseId+' .second').detach();
						$('#'+DC_detailCourseId+' .secondLesson').detach();
					}
					if(this[25] == ''){//3回目がない場合
						$('#'+DC_detailCourseId+' .third').detach();
						$('#'+DC_detailCourseId+' .thirdLesson').detach();
					}
					if(this[29] == ''){//4回目がない場合
						$('#'+DC_detailCourseId+' .fourth').detach();
						$('#'+DC_detailCourseId+' .fourthLesson').detach();
					}
					if(this[33] == ''){//5回目がない場合
						$('#'+DC_detailCourseId+' .fifth').detach();
						$('#'+DC_detailCourseId+' .fifthLesson').detach();
					}


					//ページ内リンクリスト日付表示用 16.06.16 川根
					if(this[21]){//2回目がない場合
						var secondDay = '・'+this[21];
					}else{
						secondDay = "";
					}
					if(this[25]){//3回目がない場合
						var thirdDay = '・'+this[25];
					}else{
						thirdDay = "";
					}
					if(this[29]){//4回目がない場合
						var fourthDay = '・'+this[29];
					}else{
						fourthDay = "";
					}
					if(this[33]){//5回目がない場合
						var fifthDay = '・'+this[33];
					}else{
						fifthDay = "";
					}


					$('#DC_detailIntro ul').append('<li class="DC_detailList"><img width="9" height="14" alt="" src="/school/common/images/icon_arrow.gif">&#12288;<a href="#'+this[1]+'">'+this[12]+this[3]+secondDay+thirdDay+fourthDay+fifthDay+'</a></li>');
					$('#'+DC_detailCourseId+' h4').text(this[12]).addClass(this[81]+' '+this[82]+' '+this[83]+' '+this[84]);
					$('#'+DC_detailCourseId+' .premirCharge').text(this[50]);
					$('#'+DC_detailCourseId+' .otherCharge').text(this[53]);
					$('#'+DC_detailCourseId+' .lessonCaution').text(this[66]);
					$('#'+DC_detailCourseId+' .maxNum').text(this[38]);
					$('#'+DC_detailCourseId+' .formBtn').append('<a href="/school/entry.php?seminar_id='+DC_detailCourseId+'"><img width="372" height="61" alt="お申し込みフォームへ" src="/school/common/images/btn_form_off.jpg" class="hover" /></a>');
					//講座イメージキャプション 16.07.05
					$('#'+DC_detailCourseId+' .caption').append('※'+this[15]);
					//画像パス 16.07.07
					$('#'+DC_detailCourseId+' .imgNumber').attr('src', 'images/course/' + DC_detailCourseId + '.jpg');

				}
			}
		})//function csv
		}//for

	//会場リンク追加
	$(".olympuslive").wrap('<a href="/olympuslive/"></a>');
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

	//講座アイコン
$('.icon_pro').prepend('<img width="70" height="20" alt="プロ講師" src="/school/common/images/kouazaicon/icon_pro.gif"> ');
$('.icon_kohyo').prepend('<img width="50" height="20" alt="講評" src="/school/common/images/kouazaicon/icon_kohyo.gif"> ');
$('.icon_satsuei').prepend('<img width="50" height="20" alt="撮影" src="/school/common/images/kouazaicon/icon_satsuei.gif"> ');
$('.icon_kogi').prepend('<img width="50" height="20" alt="講義" src="/school/common/images/kouazaicon/icon_kogi.gif"> ');
$('.icon_recommend').prepend('<img width="50" height="20" src="/school/common/images/icon_recommend.gif" alt="おすすめ"> ');	

$('a[href^=#]').click(function(){
		var speed = 1500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});

var trlength = $('.DC_detailCourse').length;
var trlength2 = trlength + 1;
var reminderID2 ='' ;
for ( i=2; i<=trlength2; i++ ){
var reminderID = $('.DC_detailCourse:nth-child('+i+')').attr('id');
reminderID2 += reminderID +'_1'+',';
}
						$.ajax({
									 type:'GET',
									 //url: '/school/common/json/courseID.json',
									 //url: '/api/college/remain/sid/'+reminderID2+'_1',
									 url: 'http://fotopus.com/api/college/remain/sid/'+reminderID2+'_1',
									 dataType: 'jsonp',
									 jsonpCallback: 'collegeData',
									 success:successJson ,
									 error: function(){
										 //alert("エラー");
									 }
						});
						function successJson(json){
							var DC_detailCourseNum = $(".DC_detailCourse").length;
							var DC_detailCourseNum2 = DC_detailCourseNum + 1;
							for ( var i= 2; i<=DC_detailCourseNum2; i++ ){
								//var DC_detailCourseId = $('.DC_detailCourse:nth-of-type('+i+')').attr('id');
								var DC_detailCourseId = $('.DC_detailCourse:nth-child('+i+')').attr('id');
								var maxNum = $('.DC_detailCourse:nth-child('+i+') .maxNum').text();
								//alert(DC_detailCourseId);
								var jsonId = json.length;
								for ( var t=0; t<jsonId ;t++){
									if ( DC_detailCourseId == json[t].id){
										//$('#'+DC_detailCourseId+' .Num').text(json[t].remainder);
										if (maxNum / 3 < json[t].remainder){//残数が3/1以上
											//matchId.html('○');
											$('#'+DC_detailCourseId+' .Num').html('○');
										}else if (json[t].remainder == 0){
											$('#'+DC_detailCourseId+' .Num').html('―');
											$('#'+DC_detailCourseId+' .formBtn a').remove();
											$('#'+DC_detailCourseId+' .formBtn').empty();
											$('#'+DC_detailCourseId+' .formBtn').append('<p class="DC_detailCourseOver" style="color:#cc0000;">受付終了になりました。ご応募ありがとうございました。</p>');
										}else if (json[t].remainder == 'null'){
											$('#'+DC_detailCourseId+' .Num').html('―');
											$('#'+DC_detailCourseId+' .formBtn a').remove();
											$('#'+DC_detailCourseId+' .formBtn').empty();
											$('#'+DC_detailCourseId+' .formBtn').append('<p class="DC_detailCourseOver">受付期間前になります。受付期間になりましたらご応募ください。</p>');
										}else{
											$('#'+DC_detailCourseId+' .Num').html('△');
										}
									}
								}
							}
						}//successJson

		var pageId = '';
		$(".DC_detailCourse").each(function() {
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

//			var url = window.location;
//			var path = url.href.split('/');
//			var file_name = path.pop();
//			if (file_name != ''){
//				var targetOffset = $(file_name).offset().top;
//				$('html,body').animate({scrollTop: targetOffset}, "fast");
//				$('body').removeClass('loading');
//				$('img.loading').remove();
//			}else{
//				var targetOffset = $('#headerNav').offset().top;
//				$('html,body').animate({scrollTop: targetOffset}, "fast");
//				$('body').removeClass('loading');
//				$('img.loading').remove();
//			}
	})	
})//function



}