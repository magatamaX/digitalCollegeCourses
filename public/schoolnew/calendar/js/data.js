$(function(){

	// ==============================================
	// CSVを取得
    	$.ajax({
		url: '/school/common/csv/new.csv',
		success: csvJson,
		error: function(){
			// alert("エラー");
		}
	});


	// ==============================================
	// JSONに変換
	function csvJson(csv){

		var lines=csv.split("\n");
		var headers=lines[0].split(",");
		var obj = '';
		var currentline = '';
		data = [];

		for(var i=1;i<lines.length;i++){

			obj = {};
			currentline=lines[i].split(",");

			for(var j=0;j<headers.length;j++){

				obj[headers[j]] = currentline[j];
			}

			data.push(obj);
		}

		addSchedule();

		return JSON.stringify(data);
	}


	// ==============================================
	// スケジュールを追加

	function addSchedule(){
// 消す
		// 削除 日付セット
		var dtDelete = new Date('07/23/2019');

		// エクセル削除日
		var deleteDate = '';
		var yearDelete = '';
		var monthDelete = '';
		var dayDelete = '';

		// セットされた削除日
		var yearSetDelete = '';
		var monthSetDelete = '';
		var daySetDelete = '';

		// 日付の文字列を含むカレンダーのクラス名
		var dayNumber = '';
		var dayNumberAll = '';

		// jsonから読み込んだ日付
		var jsonDate1 = '';
		var jsonDate2 = '';
		var jsonDate3 = '';
		var jsonDate4 = '';
		var jsonDate5 = '';
		var jsonDate6 = '';

		// jsonから読み込んだID
		var jsonPageID = '';

		// リンク
		var link ='';

		// 祝日表示
		var today = '';
		var holidaysData = '';
		var holidays = '';
		var yy = '';
		var mm = '';
		var dd = '';

		// ---------- カレンダーのクラス名から日付のセルを取得
		var weeks = $('.row').length;
		var courses = ['flower_lecture', 'flower_photographing', 'landscape_lecture', 'landscape_photographing', 'snap_lecture', 'snap_photographing', 'transport_lecture', 'transport_photographing', 'animal_lecture', 'animal_photographing', 'human_lecture', 'human_photographing', 'night_composite', 'night_star', 'night_lecture', 'night_photographing', 'mono_lecture', 'mono_photographing', 'season_lecture', 'season_photographing', 'table_lecture','table_photographing', 'lens_howto', 'lens_photographing', 'filter_photographing', 'edit_viewer3', 'edit_raw'];

		for(var i=2; i < weeks+1; i++){

			for(var j=1; j<8; j++){

				dayNumber = $('.row:nth-of-type(' + i + ') .day:nth-of-type(' + j + ')').attr('class');
				dayNumberAll += dayNumber + ',';
			}
		}

		// セットされた削除日を取得
		yearSetDelete = dtDelete.getFullYear();
		monthSetDelete = dtDelete.getMonth()+1;
		daySetDelete = dtDelete.getDate();

		// ---------- jsonの日付とマッチした日付のセルにリンクテキストを追加
		for(var k=0; k<data.length; k++){

			jsonDate1 = data[k].開催日1.substr(6,4) + '-' + data[k].開催日1.substr(0,2) +  '-' + data[k].開催日1.substr(3,2);
			jsonDate2 = data[k].開催日2.substr(6,4) + '-' + data[k].開催日2.substr(0,2) +  '-' + data[k].開催日2.substr(3,2);
			jsonDate3 = data[k].開催日3.substr(6,4) + '-' + data[k].開催日3.substr(0,2) +  '-' + data[k].開催日3.substr(3,2);
			jsonDate4 = data[k].開催日4.substr(6,4) + '-' + data[k].開催日4.substr(0,2) +  '-' + data[k].開催日4.substr(3,2);
			jsonDate5 = data[k].開催日5.substr(6,4) + '-' + data[k].開催日5.substr(0,2) +  '-' + data[k].開催日5.substr(3,2);
			jsonDate6 = data[k].開催日6.substr(6,4) + '-' + data[k].開催日6.substr(0,2) +  '-' + data[k].開催日6.substr(3,2);

			jsonPageID = data[k].ページid;

			// リンクリスト
			switch (jsonPageID){

				case 'flower_lecture':
				case 'flower_photographing':
				link = '/school/flower/#' + data[k].講座id + 'Anc';
				break;

				case 'landscape_lecture':
				case 'landscape_photographing':
				link = '/school/landscape/#' + data[k].講座id + 'Anc';
				break;

				case 'snap_lecture':
				case 'snap_photographing':
				link = '/school/snap/#' + data[k].講座id + 'Anc';
				break;

				case 'transport_lecture':
				case 'transport_photographing':
				link = '/school/transport/#' + data[k].講座id + 'Anc';
				break;

				case 'animal_lecture':
				case 'animal_photographing':
				link = '/school/animal/#' + data[k].講座id + 'Anc';
				break;

				case 'human_lecture':
				case 'human_photographing':
				link = '/school/human/#' + data[k].講座id + 'Anc';
				break;

				case 'night_composite':
				case 'night_star':
				link = '/school/night/#' + data[k].講座id;
				break;

				case 'night_lecture':
				case 'night_photographing':
				link = '/school/night/#' + data[k].講座id + 'Anc';
				break;

				case 'mono_lecture':
				case 'mono_photographing':
				link = '/school/mono/#' + data[k].講座id + 'Anc';
				break;

				case 'season_lecture':
				case 'season_photographing':
				link = '/school/season/#' + data[k].講座id + 'Anc';
				break;

				case 'table_lecture':
				case 'table_photographing':
				link = '/school/table/#' + data[k].講座id + 'Anc';
				break;

				case 'lens_howto':
				link = '/school/lens/#' + data[k].講座id;
				break;

				case 'lens_photographing':
				link = '/school/lens/#' + data[k].講座id + 'Anc';
				break;


				case 'filter_photographing':
				link = '/school/filter/#' + data[k].講座id + 'Anc';
				break;

				case 'edit_viewer3':
				case 'edit_raw':
				link = '/school/edit/#' + data[k].講座id;
				break;

				default:
				link = '';
			}

			// エクセル削除日を取得して記載形式を変換
			if(data[k].開催日6 === '' && data[k].開催日5 === '' && data[k].開催日4 === '' && data[k].開催日3 === '' && data[k].開催日2 === ''){
				deleteDate = data[k].開催日1;
			}else if(data[k].開催日6 === '' && data[k].開催日5 === '' && data[k].開催日4 === '' && data[k].開催日3 === ''){
				deleteDate = data[k].開催日2;
			}else if(data[k].開催日6 === '' && data[k].開催日5 === '' && data[k].開催日4 === ''){
				deleteDate = data[k].開催日3;
			}else if(data[k].開催日6 === '' && data[k].開催日5 === ''){
				deleteDate = data[k].開催日4;
			}else if(data[k].開催日6 === ''){
				deleteDate = data[k].開催日5;
			}else{
                deleteDate = data[k].開催日6;
            }

			yearDelete = deleteDate.substr(6,4);
			monthDelete = deleteDate.substr(0,2).replace(/^0+([0-9]+)/,"$1");
			dayDelete = deleteDate.substr(3,2).replace(/^0+([0-9]+)/,"$1");

			// 削除日を過ぎた講座を除外
			if(yearDelete > yearSetDelete || yearDelete >= yearSetDelete && monthDelete > monthSetDelete || yearDelete >= yearSetDelete && monthDelete >= monthSetDelete && dayDelete >= daySetDelete){

				// 被写体・テーマ別講座のみ追加
				if($.inArray(jsonPageID, courses) >= 0){

					if(dayNumberAll.match(jsonDate1)){

						$('.calendar-day-' + jsonDate1).append('<a class="' + jsonPageID +' " href="' + link + '">' + data[k].タイトル + '</a>').addClass('active');
					}
					if(dayNumberAll.match(jsonDate2)){
						$('.calendar-day-' + jsonDate2).append('<a class="' + jsonPageID +' " href="' + link + '">' + data[k].タイトル + '</a>').addClass('active');
					}
					if(dayNumberAll.match(jsonDate3)){
						$('.calendar-day-' + jsonDate3).append('<a class="' + jsonPageID +' " href="' + link + '">' + data[k].タイトル + '</a>').addClass('active');
					}
					if(dayNumberAll.match(jsonDate4)){
						$('.calendar-day-' + jsonDate4).append('<a class="' + jsonPageID +' " href="' + link + '">' + data[k].タイトル + '</a>').addClass('active');
					}
					if(dayNumberAll.match(jsonDate5)){
						$('.calendar-day-' + jsonDate5).append('<a class="' + jsonPageID +' " href="' + link + '">' + data[k].タイトル + '</a>').addClass('active');
					}
					if(dayNumberAll.match(jsonDate6)){
						$('.calendar-day-' + jsonDate6).append('<a class="' + jsonPageID +' " href="' + link + '">' + data[k].タイトル + '</a>').addClass('active');
					}
				}
			}
		}

		yy = $('.month').text().substr($('.month').text().length -4,4); //カレンダーの表示年
		today = new Date(yy);

		// ---------- 月表示日本語化
		if($('.month').text().match('January')){
			$('.month').text(yy + '年 1月');
		}else if($('.month').text().match('February')){
			$('.month').text(yy + '年 2月');
		}else if($('.month').text().match('March')){
			$('.month').text(yy + '年 3月');
		}else if($('.month').text().match('April')){
			$('.month').text(yy + '年 4月');
		}else if($('.month').text().match('May')){
			$('.month').text(yy + '年 5月');
		}else if($('.month').text().match('June')){
			$('.month').text(yy + '年 6月');
		}else if($('.month').text().match('July')){
			$('.month').text(yy + '年 7月');
		}else if($('.month').text().match('August')){
			$('.month').text(yy + '年 8月');
		}else if($('.month').text().match('September')){
			$('.month').text(yy + '年 9月');
		}else if($('.month').text().match('October')){
			$('.month').text(yy + '年 10月');
		}else if($('.month').text().match('November')){
			$('.month').text(yy + '年 11月');
		}else{
			$('.month').text(yy + '年 12月');
		}

		// ---------- 祝日表示
		holidaysData = JapaneseHolidays.getHolidaysOf( today.getFullYear() );
		holidays = '';

		for(var l=0; l<holidaysData.length; l++){

			mm = ('0' + holidaysData[l].month).slice(-2);
			dd = ('0' + holidaysData[l].date).slice(-2);

			holidays = yy + '-' + mm + '-' + dd;

			if(dayNumberAll.match(holidays)){

				$('.calendar-day-' + holidays).addClass('holiday-background');
				$('.calendar-day-' + holidays +' .day-contents').addClass('holiday-color');
			}
		}

		matchHeight();
	}

	// ==============================================
	// モバイル版曜日挿入
	$('.row .cell:first-child .day-contents').append('<span class="weekdays">日</span>');
	$('.row .cell:nth-child(2) .day-contents').append('<span class="weekdays">月</span>');
	$('.row .cell:nth-child(3) .day-contents').append('<span class="weekdays">火</span>');
	$('.row .cell:nth-child(4) .day-contents').append('<span class="weekdays">水</span>');
	$('.row .cell:nth-child(5) .day-contents').append('<span class="weekdays">木</span>');
	$('.row .cell:nth-child(6) .day-contents').append('<span class="weekdays">金</span>');
	$('.row .cell:nth-child(7) .day-contents').append('<span class="weekdays">土</span>');


	// ==============================================
	// クリックして現れた当月分のスケジュールを追加
	$(document).on('click', '.clndr-previous-button,.clndr-next-button', function(){
			addSchedule();
	});

	// ==============================================
	// 高さ調整
	function matchHeight(){
		$('.row .day').matchHeight();
	}

});
