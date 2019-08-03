function loadTextFile(){
$(function(){
	$.get('/school/common/csv/index.csv',function(data){
		var csv = $.csv()(data);
		//indexを使ってくり返し回数をカウントします
		$(csv).each(function(index){
			if(index != 0){//一列目以外
				var corseurl = '';
				if (this[7] == 'mirrorless_beginner'){
					corseurl = '/school/howtouse/mirrorless_beginner/#'
				}else if(this[7] == 'mirrorless_stepup' || this[7] == 'mirrorless_stepup2'){
					corseurl = '/school/howtouse/mirrorless_stepup/#'
				}else if(this[7] == 'howtotake' || this[7] == 'howtotake2' || this[7] == 'howtotake3'){
					corseurl = '/school/forest/howtotake/#'
				}else if(this[7] == 'forest_lens' || this[7] == 'forest_lens2' || this[7] == 'forest_lens3' || this[7] == 'forest_lens4'){
					corseurl = '/school/forest/lens/#'
				}else if(this[7] =='creative_omdEm1' || this[7] =='creative_penEp5' || this[7] =='creative_lens' || this[7] =='creative_artfilter' || this[7] =='creative_viewer3' || this[7] =='creative_flash'){
					corseurl = '/school/forest/creative/#'
				}else if(this[7] =='technique'){
					corseurl = '/school/forest/technique/#'
				}else if(this[7] =='photographing'){
					corseurl = '/school/forest/photographing/#'
				}else if(this[7] =='petit'){
					corseurl = '/school/rouge/petit/#'
				}else if(this[7] =='rouge_episode_1'){
					corseurl = '/school/rouge/episode_1/#'
				}else if(this[7] =='memory'){
					corseurl = '/school/memory/#'
				}else if(this[7] =='special_hoshi' || this[7] =='special_filter' || this[7] =='special_viewer3' || this[7] =='special_stylus' || this[7] =='livecomposite'){
					corseurl = '/school/howtouse/special/#'
				}else if(this[7] =='mermaid_episode_1'){
					corseurl = '/school/mermaid/episode_1/#'
				}else if(this[7] =='technique2'){
					corseurl = '/school/forest/technique2/#'
				}else if(this[7] =='stylus_howtouse'){
					corseurl = '/school/stylus/howtouse/#'
				}else if(this[7] =='stylus_photographing'){
					corseurl = '/school/stylus/photographing/#'
				}

				var listBoxClass = '#DC_arealist_list_box .'+this[68];
				if (this[6] =='opening'){
					$(listBoxClass).css('display','block').addClass('active');
				}

				var disorption = '<div class="DC_arealist_lesson_section DC_clearfix" id="'+this[1]+'"><div id="'+this[7]+'" class="lesson_img"></div><ul><li><span class="bold">講座名：'+this[12]+'</span></li><li><span class="bold">講座開催日：'+this[3]+'<span class="firstdate bold">'+this[4]+'</span>&nbsp;&nbsp;'+this[21]+'<span class="seconddate bold">'+this[23]+'</span>&nbsp;&nbsp;'+this[25]+'<span class="thirddate bold">'+this[27]+'</span>&nbsp;&nbsp;'+this[29]+'<span class="fourthdate bold">'+this[31]+'</span>&nbsp;&nbsp;'+this[33]+'<span class="fifthdate bold">'+this[35]+'</span></span></li><li class="DC_ctopGoNext"><a href="'+corseurl+''+this[1]+'"><img width="148" height="23" src="images/btn_lesson01_off.jpg" alt="講座詳細ページへ" class="hover" /></a></li></ul></div>';


				if(this[68] =='hokkaido' ){/////////////////////////////////hokkaido/////////////////////////////////////
					if(this[6] =='opening'){
						$('#hokkaido .course').append(disorption);
					}
				}/////////////////////////////////hokkaido/////////////////////////////////////
				if(this[68] =='aomori' ){/////////////////////////////////aomori/////////////////////////////////////
					if(this[6] =='opening'){
						$('#aomori .course').append(disorption);
					}
				}/////////////////////////////////aomori/////////////////////////////////////
				if(this[68] =='iwate' ){/////////////////////////////////iwate/////////////////////////////////////
					if(this[6] =='opening'){
						$('#iwate .course').append(disorption);
					}
				}/////////////////////////////////iwate/////////////////////////////////////
				if(this[68] =='miyagi' ){/////////////////////////////////miyagi/////////////////////////////////////
					if(this[6] =='opening'){
						$('#miyagi .course').append(disorption);
					}
				}/////////////////////////////////miyagi/////////////////////////////////////
				if(this[68] =='akita' ){/////////////////////////////////akita/////////////////////////////////////
					if(this[6] =='opening'){
						$('#akita .course').append(disorption);
					}
				}/////////////////////////////////akita/////////////////////////////////////
				if(this[68] =='yamagata' ){/////////////////////////////////yamagata/////////////////////////////////////
					if(this[6] =='opening'){
						$('#yamagata .course').append(disorption);
					}
				}/////////////////////////////////yamagata/////////////////////////////////////
				if(this[68] =='fukushima' ){/////////////////////////////////fukushima/////////////////////////////////////
					if(this[6] =='opening'){
						$('#fukushima .course').append(disorption);
					}
				}/////////////////////////////////fukushima/////////////////////////////////////
				if(this[68] =='ibaraki' ){/////////////////////////////////ibaraki/////////////////////////////////////
					if(this[6] =='opening'){
						$('#ibaraki .course').append(disorption);
					}
				}/////////////////////////////////ibaraki/////////////////////////////////////
				if(this[68] =='tochigi' ){/////////////////////////////////tochigi/////////////////////////////////////
					if(this[6] =='opening'){
						$('#tochigi .course').append(disorption);
					}
				}/////////////////////////////////tochigi/////////////////////////////////////
				if(this[68] =='gunma' ){/////////////////////////////////gunma/////////////////////////////////////
					if(this[6] =='opening'){
						$('#gunma .course').append(disorption);
					}
				}/////////////////////////////////gunma/////////////////////////////////////
				if(this[68] =='saitama' ){/////////////////////////////////saitama/////////////////////////////////////
					if(this[6] =='opening'){
						$('#saitama .course').append(disorption);
					}
				}/////////////////////////////////saitama/////////////////////////////////////
				if(this[68] =='chiba' ){/////////////////////////////////chiba/////////////////////////////////////
					if(this[6] =='opening'){
						$('#chiba .course').append(disorption);
					}
				}/////////////////////////////////chiba/////////////////////////////////////
				if(this[68] =='tokyo' ){/////////////////////////////////tokyo/////////////////////////////////////
					if(this[6] =='opening'){
						$('#tokyo .course').append(disorption);
					}
				}/////////////////////////////////tokyo/////////////////////////////////////
				if(this[68] =='kanagawa' ){/////////////////////////////////kanagawa/////////////////////////////////////
					if(this[6] =='opening'){
						$('#kanagawa .course').append(disorption);
					}
				}/////////////////////////////////kanagawa/////////////////////////////////////
				if(this[68] =='niigata' ){/////////////////////////////////niigata/////////////////////////////////////
					if(this[6] =='opening'){
						$('#niigata .course').append(disorption);
					}
				}/////////////////////////////////niigata/////////////////////////////////////
				if(this[68] =='toyama' ){/////////////////////////////////toyama/////////////////////////////////////
					if(this[6] =='opening'){
						$('#toyama .course').append(disorption);
					}
				}/////////////////////////////////toyama/////////////////////////////////////
				if(this[68] =='ishikawa' ){/////////////////////////////////ishikawa/////////////////////////////////////
					if(this[6] =='opening'){
						$('#ishikawa .course').append(disorption);
					}
				}/////////////////////////////////ishikawa/////////////////////////////////////
				if(this[68] =='fukui' ){/////////////////////////////////fukui/////////////////////////////////////
					if(this[6] =='opening'){
						$('#fukui .course').append(disorption);
					}
				}/////////////////////////////////fukui/////////////////////////////////////
				if(this[68] =='yamanashi' ){/////////////////////////////////yamanashi/////////////////////////////////////
					if(this[6] =='opening'){
						$('#yamanashi .course').append(disorption);
					}
				}/////////////////////////////////yamanashi/////////////////////////////////////
				if(this[68] =='nagano' ){/////////////////////////////////nagano/////////////////////////////////////
					if(this[6] =='opening'){
						$('#nagano .course').append(disorption);
					}
				}/////////////////////////////////nagano/////////////////////////////////////
				if(this[68] =='gifu' ){/////////////////////////////////gifu/////////////////////////////////////
					if(this[6] =='opening'){
						$('#gifu .course').append(disorption);
					}
				}/////////////////////////////////gifu/////////////////////////////////////
				if(this[68] =='shizuoka' ){/////////////////////////////////shizuoka/////////////////////////////////////
					if(this[6] =='opening'){
						$('#shizuoka .course').append(disorption);
					}
				}/////////////////////////////////shizuoka/////////////////////////////////////
				if(this[68] =='aichi' ){/////////////////////////////////aichi/////////////////////////////////////
					if(this[6] =='opening'){
						$('#aichi .course').append(disorption);
					}
				}/////////////////////////////////aichi/////////////////////////////////////
				if(this[68] =='mie' ){/////////////////////////////////mie/////////////////////////////////////
					if(this[6] =='opening'){
						$('#mie .course').append(disorption);
					}
				}/////////////////////////////////mie/////////////////////////////////////
				if(this[68] =='shiga' ){/////////////////////////////////shiga/////////////////////////////////////
					if(this[6] =='opening'){
						$('#shiga .course').append(disorption);
					}
				}/////////////////////////////////shiga/////////////////////////////////////
				if(this[68] =='kyoto' ){/////////////////////////////////kyoto/////////////////////////////////////
					if(this[6] =='opening'){
						$('#kyoto .course').append(disorption);
					}
				}/////////////////////////////////kyoto/////////////////////////////////////
				if(this[68] =='osaka' ){/////////////////////////////////osaka/////////////////////////////////////
					if(this[6] =='opening'){
						$('#osaka .course').append(disorption);
					}
				}/////////////////////////////////osaka/////////////////////////////////////
				if(this[68] =='hyogo' ){/////////////////////////////////hyogo/////////////////////////////////////
					if(this[6] =='opening'){
						$('#hyogo .course').append(disorption);
					}
				}/////////////////////////////////hyogo/////////////////////////////////////
				if(this[68] =='nara' ){/////////////////////////////////nara/////////////////////////////////////
					if(this[6] =='opening'){
						$('#nara .course').append(disorption);
					}
				}/////////////////////////////////nara/////////////////////////////////////
				if(this[68] =='wakayama' ){/////////////////////////////////wakayama/////////////////////////////////////
					if(this[6] =='opening'){
						$('#wakayama .course').append(disorption);
					}
				}/////////////////////////////////wakayama/////////////////////////////////////
				if(this[68] =='tottori' ){/////////////////////////////////tottori/////////////////////////////////////
					if(this[6] =='opening'){
						$('#tottori .course').append(disorption);
					}
				}/////////////////////////////////tottori/////////////////////////////////////
				if(this[68] =='shimane' ){/////////////////////////////////shimane/////////////////////////////////////
					if(this[6] =='opening'){
						$('#shimane .course').append(disorption);
					}
				}/////////////////////////////////shimane/////////////////////////////////////
				if(this[68] =='okayama' ){/////////////////////////////////okayama/////////////////////////////////////
					if(this[6] =='opening'){
						$('#okayama .course').append(disorption);
					}
				}/////////////////////////////////okayama/////////////////////////////////////
				if(this[68] =='hiroshima' ){/////////////////////////////////hiroshima/////////////////////////////////////
					if(this[6] =='opening'){
						$('#hiroshima .course').append(disorption);
					}
				}/////////////////////////////////hiroshima/////////////////////////////////////
				if(this[68] =='yamaguchi' ){/////////////////////////////////yamaguchi/////////////////////////////////////
					if(this[6] =='opening'){
						$('#yamaguchi .course').append(disorption);
					}
				}/////////////////////////////////yamaguchi/////////////////////////////////////
				if(this[68] =='tokushima' ){/////////////////////////////////tokushima/////////////////////////////////////
					if(this[6] =='opening'){
						$('#tokushima .course').append(disorption);
					}
				}/////////////////////////////////tokushima/////////////////////////////////////
				if(this[68] =='kagawa' ){/////////////////////////////////kagawa/////////////////////////////////////
					if(this[6] =='opening'){
						$('#kagawa .course').append(disorption);
					}
				}/////////////////////////////////kagawa/////////////////////////////////////
				if(this[68] =='ehime' ){/////////////////////////////////ehime/////////////////////////////////////
					if(this[6] =='opening'){
						$('#ehime .course').append(disorption);
					}
				}/////////////////////////////////ehime/////////////////////////////////////
				if(this[68] =='kochi' ){/////////////////////////////////kochi/////////////////////////////////////
					if(this[6] =='opening'){
						$('#kochi .course').append(disorption);
					}
				}/////////////////////////////////kochi/////////////////////////////////////
				if(this[68] =='fukuoka' ){/////////////////////////////////fukuoka/////////////////////////////////////
					if(this[6] =='opening'){
						$('#fukuoka .course').append(disorption);
					}
				}/////////////////////////////////fukuoka/////////////////////////////////////
				if(this[68] =='saga' ){/////////////////////////////////saga/////////////////////////////////////
					if(this[6] =='opening'){
						$('#saga .course').append(disorption);
					}
				}/////////////////////////////////saga/////////////////////////////////////
				if(this[68] =='nagasaki' ){/////////////////////////////////nagasaki/////////////////////////////////////
					if(this[6] =='opening'){
						$('#nagasaki .course').append(disorption);
					}
				}/////////////////////////////////nagasaki/////////////////////////////////////
				if(this[68] =='kumamoto' ){/////////////////////////////////kumamoto/////////////////////////////////////
					if(this[6] =='opening'){
						$('#kumamoto .course').append(disorption);
					}
				}/////////////////////////////////kumamoto/////////////////////////////////////
				if(this[68] =='oita' ){/////////////////////////////////oita/////////////////////////////////////
					if(this[6] =='opening'){
						$('#oita .course').append(disorption);
					}
				}/////////////////////////////////oita/////////////////////////////////////
				if(this[68] =='miyazaki' ){/////////////////////////////////miyazaki/////////////////////////////////////
					if(this[6] =='opening'){
						$('#miyazaki .course').append(disorption);
					}
				}/////////////////////////////////miyazaki/////////////////////////////////////
				if(this[68] =='kagoshima' ){/////////////////////////////////kagoshima/////////////////////////////////////
					if(this[6] =='opening'){
						$('#kagoshima .course').append(disorption);
					}
				}/////////////////////////////////kagoshima/////////////////////////////////////
				if(this[68] =='okinawa' ){/////////////////////////////////okinawa/////////////////////////////////////
					if(this[6] =='opening'){
						$('#okinawa .course').append(disorption);
					}
				}/////////////////////////////////okinawa/////////////////////////////////////

			}
		})//function csv

		$('#listHokkaido dd').each(function() {
			var areaClass = $(this).attr('class');
			if(areaClass == 'hokkaido active'){
				$('#listHokkaido').css('display','block');
			}
        });
		$('#listTohoku dd').each(function() {
			var areaClass = $(this).attr('class');
			if(areaClass == 'aomori active' || areaClass == 'akita active' || areaClass == 'yamagata active' || areaClass == 'iwate active' || areaClass == 'miyagi active' || areaClass == 'fukushima active'){
				$('#listTohoku').css('display','block');
			}
        });
		$('#listKanto dd').each(function() {
			var areaClass = $(this).attr('class');
			if(areaClass == 'tokyo active' || areaClass == 'kanagawa active' || areaClass == 'chiba active' || areaClass == 'saitama active' || areaClass == 'ibaraki active' || areaClass == 'tochigi active' || areaClass == 'gunma active'){
				$('#listKanto').css('display','block');
			}
        });
		$('#listChubu dd').each(function() {
			var areaClass = $(this).attr('class');
			if(areaClass == 'shizuoka active' || areaClass == 'ishikawa active' || areaClass == 'nagano active' || areaClass == 'toyama active' || areaClass == 'yamanashi active' || areaClass == 'fukui active' || areaClass == 'gifu active' || areaClass == 'niigata active' || areaClass == 'aichi active'){
				$('#listChubu').css('display','block');
			}
        });
		$('#listKinki dd').each(function() {
			var areaClass = $(this).attr('class');
			if(areaClass == 'mie active' || areaClass == 'osaka active' || areaClass == 'kyoto active' || areaClass == 'nara active' || areaClass == 'hyogo active' || areaClass == 'shiga active' || areaClass == 'wakayama active'){
				$('#listKinki').css('display','block');
			}
        });
		$('#listChugoku dd').each(function() {
			var areaClass = $(this).attr('class');
			if(areaClass == 'hiroshima active' || areaClass == 'yamaguchi active' || areaClass == 'shimane active' || areaClass == 'okayama active' || areaClass == 'tottori active'){
				$('#listChugoku').css('display','block');
			}
        });
		$('#listShikoku dd').each(function() {
			var areaClass = $(this).attr('class');
			if(areaClass == 'kagawa active' || areaClass == 'tokushima active' || areaClass == 'kochi active' || areaClass == 'ehime active'){
				$('#listShikoku').css('display','block');
			}
        });
		$('#listKyushu dd').each(function() {
			var areaClass = $(this).attr('class');
			if(areaClass == 'fukuoka active' || areaClass == 'nagasaki active' || areaClass == 'saga active' || areaClass == 'kumamoto active' || areaClass == 'oita active' || areaClass == 'miyazaki active' || areaClass == 'kagoshima active'){
				$('#listKyushu').css('display','block');
			}
        });
		$('#listOkinawa dd').each(function() {
			var areaClass = $(this).attr('class');
			if(areaClass == 'okinawa active'){
				$('#listOkinawa').css('display','block');
			}
        });

		$('.lesson_img').each(function() {
			if ($(this).attr('id') == 'mirrorless_beginner'){
				$(this).append('<img width="210" height="100" alt="初めてのミラーレス一眼カメラ使い方講座" src="/school/arealist/images/howtouse_mirrorlessbeginner.jpg" />');
			}else if ($(this).attr('id') == 'mirrorless_stepup' || $(this).attr('id') == 'mirrorless_stepup2'){
				$(this).append('<img width="210" height="100" src="/school/arealist/images/howtouse_mirrorlessstepup.jpg" alt="ミラーレス一眼カメラ ステップアップ講座" />');
			}else if ($(this).attr('id') == 'howtotake' || $(this).attr('id') == 'howtotake2' || $(this).attr('id') == 'howtotake3'){
				$(this).append('<img width="210" height="100" alt="撮り方講座 ～入門編～" src="/school/arealist/images/howtotake.jpg" />');
			}else if ($(this).attr('id') == 'forest_lens' || $(this).attr('id') == 'forest_lens2' || $(this).attr('id') == 'forest_lens3' || $(this).attr('id') == 'forest_lens4'){
				$(this).append('<img width="210" height="100" src="/school/arealist/images/lens.jpg" alt="レンズのきほんレッスン" />');
			}else if ($(this).attr('id') =='creative_omdEm1' || $(this).attr('id') =='creative_penEp5' || $(this).attr('id') =='creative_lens' || $(this).attr('id') =='creative_artfilter' || $(this).attr('id') =='creative_viewer3' || $(this).attr('id') =='creative_flash'){
				$(this).append('<img width="210" height="100" src="/school/arealist/images/creative.jpg" alt="システム活用講座" />');
			}else if ($(this).attr('id') == 'technique'){
				$(this).append('<img width="210" height="100" src="/school/arealist/images/technique.jpg" alt="撮り方講座 ～実践編～" />');
			}else if ($(this).attr('id') == 'photographing'){
				$(this).append('<img width="210" height="100" src="/school/arealist/images/photography.jpg" alt="撮影会" />');
			}else if ($(this).attr('id') == 'petit'){
				$(this).append('<img width="210" height="100" src="/school/arealist/images/rouge_petit.jpg" alt="PetitPhotoRouge（プチフォトルージュ）" />');
			}else if ($(this).attr('id') == 'rouge_episode_1'){
				$(this).append('<img width="210" height="100" alt="PhotoRouge（フォトルージュ）" src="/school/arealist/images/rouge_ep1.jpg" />');
			}else if ($(this).attr('id') == 'memory'){
				$(this).append('<img width="210" height="100" alt="memory（メモリー）" src="/school/arealist/images/memory.jpg" />');
			}else if ($(this).attr('id') =='special_hoshi' || $(this).attr('id') =='special_filter' || $(this).attr('id') =='special_viewer3' || $(this).attr('id') =='special_stylus' || $(this).attr('id') =='livecomposite'){
				$(this).append('<img width="210" height="100" src="/school/arealist/images/spcecial.jpg" alt="スペシャル" />');
			}else if ($(this).attr('id') =='mermaid_episode_1'){
				$(this).append('<img width="210" height="100" src="/school/arealist/images/mermaid_ep1.jpg" alt=" PhotoMermaid エピソード I">');
			}else if ($(this).attr('id') =='technique2'){
				$(this).append('<img width="210" height="100" src="/school/arealist/images/technique2.jpg" alt="レベルアップ！撮り方講座実践編">');
			}else if ($(this).attr('id') =='stylus_howtouse'){
				$(this).append('<img width="210" height="100" src="/school/arealist/images/stylus_howtouse.jpg" alt="STYLUS1使い方講座">');
			}else if ($(this).attr('id') =='stylus_photographing'){
				$(this).append('<img width="210" height="100" src="/school/arealist/images/stylus_howtouse.jpg" alt="STYLUS1撮影会">');
			}
        });

		$('.course').each(function() {
            if($(this).children().size() == 0){
				$(this).parent().remove();
			}
        });

		$('.seconddate').each(function(){
			var a= $(this).text();
			if (a == ''){
				$(this).removeClass('seconddate');
			}
		});
		$('.thirddate').each(function(){
			var a= $(this).text();
			if (a == ''){
				$(this).removeClass('thirddate');
			}
		});
		$('.fourthdate').each(function(){
			var a= $(this).text();
			if (a == ''){
				$(this).removeClass('fourthdate');
			}
		});
		$('.fifthdate').each(function(){
			var a= $(this).text();
			if (a == ''){
				$(this).removeClass('fifthdate');
			}
		});

	})
})//function

}
