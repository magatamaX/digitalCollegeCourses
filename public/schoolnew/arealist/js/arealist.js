$(function(){


	// CSVを取得
    	$.ajax({
		url: '/school/common/csv/new.csv',
		success: csvJson,
		error: function(){
			// alert("エラー");
		}
	});

// 消す
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

		addCourse();

		return JSON.stringify(data);
	} // csvJson


	function addCourse(){

		// 締切 日付セット
		var dtClose = new Date('07/23/2019');
		var	yearSetClose = dtClose.getFullYear();
		var	monthSetClose = dtClose.getMonth()+1;
		var	daySetClose = dtClose.getDate();

		// ----------- エクセル締切日関連
		// 形式変換前
		var monthCloseData = '';
		var dayCloseData = '';
		// 変換後
		var yearClose = '';
		var monthClose = '';
		var dayClose = '';

		// ----------- エクセル開催日関連
		// スライスした月
		var monthDate1Data = '';
		var monthDate2Data = '';
		var monthDate3Data = '';
		var monthDate4Data = '';
		var monthDate5Data = '';
		var monthDate6Data = '';
		// スライスした日
		var dayDate1Data = '';
		var dayDate2Data = '';
		var dayDate3Data = '';
		var dayDate4Data = '';
		var dayDate5Data = '';
		var dayDate6Data = '';
		// 0を取った月
		var monthDate1 = '';
		var monthDate2 = '';
		var monthDate3 = '';
		var monthDate4 = '';
		var monthDate5 = '';
		var monthDate6 = '';
		// 0を取った日
		var dayDate1 = '';
		var dayDate2 = '';
		var dayDate3 = '';
		var dayDate4 = '';
		var dayDate5 = '';
		var dayDate6 = '';
		// 表示形式
		var date1 = '';
		var date2 = '';
		var date3 = '';
		var date4 = '';
		var date5 = '';
		var date6 = '';

		// ----------- リンク関連
		var pageId = '';
		var courseId = '';
		var prefecture = '';
		var title = '';
		var linkToCourse = '';

    // console.log(data);


		for (var i=0; i<data.length; i++) {

			var courseInfo = data[i];
      // console.log(i);

			// ---------- 日付表示関係 ---------- //

			// エクセル開催日の記載形式を変換 //

			// 月
			monthDate1Data = courseInfo.開催日1.substr(0,2);
			monthDate2Data = courseInfo.開催日2.substr(0,2);
			monthDate3Data = courseInfo.開催日3.substr(0,2);
			monthDate4Data = courseInfo.開催日4.substr(0,2);
			monthDate5Data = courseInfo.開催日5.substr(0,2);
			monthDate6Data = courseInfo.開催日6.substr(0,2);

			// 日
			dayDate1Data = courseInfo.開催日1.substr(3,2);
			dayDate2Data = courseInfo.開催日2.substr(3,2);
			dayDate3Data = courseInfo.開催日3.substr(3,2);
			dayDate4Data = courseInfo.開催日4.substr(3,2);
			dayDate5Data = courseInfo.開催日5.substr(3,2);
			dayDate6Data = courseInfo.開催日6.substr(3,2);

			// 1日目
			if(monthDate1Data.substr(0,1) === '0'){
				monthDate1 = monthDate1Data.substr(1,1);
			}else{
				monthDate1 = monthDate1Data;
			}
			if(dayDate1Data.substr(0,1) === '0'){
				dayDate1 = dayDate1Data.substr(1,1);
			}else{
				dayDate1 = dayDate1Data;
			}
			// 2日目
			if(monthDate2Data.substr(0,1) === '0'){
				monthDate2 = monthDate2Data.substr(1,1);
			}else{
				monthDate2 = monthDate2Data;
			}
			if(dayDate2Data.substr(0,1) === '0'){
				dayDate2 = dayDate2Data.substr(1,1);
			}else{
				dayDate2 = dayDate2Data;
			}
			// 3日目
			if(monthDate3Data.substr(0,1) === '0'){
				monthDate3 = monthDate3Data.substr(1,1);
			}else{
				monthDate3 = monthDate3Data;
			}
			if(dayDate3Data.substr(0,1) === '0'){
				dayDate3 = dayDate3Data.substr(1,1);
			}else{
				dayDate3 = dayDate3Data;
			}
			// 4日目
			if(monthDate4Data.substr(0,1) === '0'){
				monthDate4= monthDate4Data.substr(1,1);
			}else{
				monthDate4 = monthDate4Data;
			}
			if(dayDate4Data.substr(0,1) === '0'){
				dayDate4 = dayDate4Data.substr(1,1);
			}else{
				dayDate4 = dayDate4Data;
			}
			// 5日目
			if(monthDate5Data.substr(0,1) === '0'){
				monthDate5 = monthDate5Data.substr(1,1);
			}else{
				monthDate5 = monthDate5Data;
			}
			if(dayDate5Data.substr(0,1) === '0'){
				dayDate5 = dayDate5Data.substr(1,1);
			}else{
				dayDate5 = dayDate5Data;
			}
			// 6日目
			if(monthDate6Data.substr(0,1) === '0'){
				monthDate6 = monthDate6Data.substr(1,1);
			}else{
				monthDate6 = monthDate6Data;
			}
			if(dayDate6Data.substr(0,1) === '0'){
				dayDate6 = dayDate6Data.substr(1,1);
			}else{
				dayDate6 = dayDate6Data;
			}

			// 変換結果
			date1 = monthDate1 + '/' + dayDate1;
			date2 = monthDate2 + '/' + dayDate2;
			date3 = monthDate3 + '/' + dayDate3;
			date4 = monthDate4 + '/' + dayDate4;
			date5 = monthDate5 + '/' + dayDate5;
			date6 = monthDate6 + '/' + dayDate6;

			// 日付に曜日と中点を追加
			date1 = date1 + '（' + courseInfo.曜日1 + '）';
			if(date2 === '/'){
				date2= '';
			}else{
				date2= '・' + date2 + '（' + courseInfo.曜日2 + '）';
			}
			if(date3 === '/'){
				date3= '';
			}else{
				date3= '・' + date3 + '（' + courseInfo.曜日3 + '）';
			}
			if(date4 === '/'){
				date4= '';
			}else{
				date4= '・' + date4 + '（' + courseInfo.曜日4 + '）';
			}
			if(date5 === '/'){
				date5= '';
			}else{
				date5= '・' + date5 + '（' + courseInfo.曜日5 + '）';
			}
			if(date6 === '/'){
				date6= '';
			}else{
				date6= '・' + date6 + '（' + courseInfo.曜日6 + '）';
			}

			// ---------- リンク ---------- //
			pageId = courseInfo.ページid;
			courseId = courseInfo.講座id;

			switch (pageId){

				case 'step_1':
				case 'mirrorless_beginner':
				linkToCourse = '/school/step1/#' + courseId;
				break;

				case 'stylus_howtouse':
				linkToCourse = '/school/step1/#' + courseId;
				break;

				case 'step_2':
				case 'mirrorless_stepup':
				linkToCourse = '/school/step2/#' + courseId;
				break;

				case 'step_3':
				case 'howtotake':
				case 'howtotake2':
				linkToCourse = '/school/step3/#' + courseId;
				break;

				case 'step_2-3':
				case 'mirrorless_stepup2':
				linkToCourse = '/school/step2-3/#' + courseId;
				break;

				case 'flower_lecture':
				case 'flower_photographing':
				linkToCourse = '/school/flower/#' + courseId + 'Anc';
				break;

				case 'landscape_lecture':
				case 'landscape_photographing':
				linkToCourse = '/school/landscape/#' + courseId + 'Anc';
				break;

				case 'snap_lecture':
				case 'snap_photographing':
				linkToCourse = '/school/snap/#' + courseId + 'Anc';
				break;

				case 'forest_lens4':
				linkToCourse = '/school/snap/#' + courseId;
				break;

				case 'transport_lecture':
				case 'transport_photographing':
				linkToCourse = '/school/transport/#' + courseId + 'Anc';
				break;

				case 'animal_lecture':
				case 'animal_photographing':
				linkToCourse = '/school/animal/#' + courseId + 'Anc';
				break;

				case 'human_lecture':
				case 'human_photographing':
				linkToCourse = '/school/human/#' + courseId + 'Anc';
				break;

				case 'night_composite':
				case 'night_star':
				case 'special_hoshi':
				case 'livecomposite':
				linkToCourse = '/school/night/#' + courseId;
				break;

				case 'night_lecture':
				case 'night_photographing':
				linkToCourse = '/school/night/#' + courseId + 'Anc';
				break;

				case 'mono_lecture':
				case 'mono_photographing':
				linkToCourse = '/school/mono/#' + courseId + 'Anc';
				break;

				case 'season_lecture':
				case 'season_photographing':
				case 'season_1':
				linkToCourse = '/school/season/#' + courseId + 'Anc';
				break;


				case 'table_photographing':
				case 'table_lecture':
				linkToCourse = '/school/table/#' + courseId + 'Anc';
				break;

				case 'lens_howto':
				linkToCourse = '/school/lens/#' + courseId;
				break;

				case 'lens_lecture':
				case 'lens_photographing':
				linkToCourse = '/school/lens/#' + courseId + 'Anc';
				break;

				case 'filter_photographing':
				linkToCourse = '/school/filter/#' + courseId + 'Anc';
				break;

				case 'special_filter':
				linkToCourse = '/school/filter/#' + courseId;
				break;

				case 'edit_viewer3':
				case 'edit_raw':
				case 'special_viewer3':
				case 'creative_viewer3':
				linkToCourse = '/school/edit/#' + courseId;
				break;

				case 'petit_photographing':
				linkToCourse = '/school/rouge/petit/#' + courseId + 'Anc';
				break;

				case 'rouge_photographing':
				linkToCourse = '/school/rouge/episode_1/#' + courseId + 'Anc';
				break;

				case 'marmaid1_photographing':
				linkToCourse = '/school/mermaid/episode_1/#' + courseId + 'Anc';
				break;

				case 'memory_photographing':
				linkToCourse = '/school/memory/#' + courseId + 'Anc';
				break;

				default:
				linkToCourse = '';
			}

			// エクセル締切日を取得して記載形式を変換
			yearClose = courseInfo.締切日.substr(6,4);
			monthCloseData = courseInfo.締切日.substr(0,2);
			dayCloseData = courseInfo.締切日.substr(3,2);

			if(monthCloseData.substr(0,1) === '0'){
				monthClose = monthCloseData.substr(1,1);
			}else{
				monthClose = monthCloseData;
			}
			if(dayCloseData.substr(0,1) === '0'){
				dayClose = dayCloseData.substr(1,1);
			}else{
				dayClose = dayCloseData;
			}

			prefecture = courseInfo.都道府県;
			title = courseInfo.タイトル;

			if (pageId.match('satellite') === null) {
				// 締切前の講座のみ以下の処理
				if(yearClose > yearSetClose || yearClose >= yearSetClose && monthClose > monthSetClose || yearClose >= yearSetClose && monthClose >= monthSetClose && dayClose > daySetClose){

					// 北海道
					if(prefecture === "北海道"){
						$('#hokkaido').show();
						$('#hokkaido .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listHokkaido').css('display', 'inline-block');
						$('.hokkaido').css('display', 'inline-block');

					// 東北
					}else if(prefecture === "青森"){
						$('#aomori').show();
						$('#aomori .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listTohoku').css('display', 'inline-block');
						$('.aomori').css('display', 'inline-block');
					}else if(prefecture === "秋田"){
						$('#akita').show();
						$('#akita .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listTohoku').css('display', 'inline-block');
						$('.akita').css('display', 'inline-block');
					}else if(prefecture === "山形"){
						$('#yamagata').show();
						$('#yamagata .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listTohoku').css('display', 'inline-block');
						$('.yamagata').css('display', 'inline-block');
					}else if(prefecture === "岩手"){
						$('#iwate').show();
						$('#iwate .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listTohoku').css('display', 'inline-block');
						$('.iwate').css('display', 'inline-block');
					}else if(prefecture === "宮城"){
						$('#miyagi').show();
						$('#miyagi .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listTohoku').css('display', 'inline-block');
						$('.miyagi').css('display', 'inline-block');
					}else if(prefecture === "福島"){
						$('#fukushima').show();
						$('#fukushima .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listTohoku').css('display', 'inline-block');
						$('.fukushima').css('display', 'inline-block');

					// 関東
					}else if(prefecture === "東京"){
						$('#tokyo').show();
						$('#tokyo .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listKanto').css('display', 'inline-block');
						$('.tokyo').css('display', 'inline-block');
					}else if(prefecture === "神奈川"){
						$('#kanagawa').show();
						$('#kanagawa .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listKanto').css('display', 'inline-block');
						$('.kanagawa').css('display', 'inline-block');
					}else if(prefecture === "千葉"){
						$('#chiba').show();
						$('#chiba .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listKanto').css('display', 'inline-block');
						$('.chiba').css('display', 'inline-block');
					}else if(prefecture === "埼玉"){
						$('#saitama').show();
						$('#saitama .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listKanto').css('display', 'inline-block');
						$('.saitama').css('display', 'inline-block');
					}else if(prefecture === "茨城"){
						$('#ibaraki').show();
						$('#ibaraki .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listKanto').css('display', 'inline-block');
						$('.ibaraki').css('display', 'inline-block');
					}else if(prefecture === "栃木"){
						$('#tochigi').show();
						$('#tochigi .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listKanto').css('display', 'inline-block');
						$('.tochigi').css('display', 'inline-block');
					}else if(prefecture === "群馬"){
						$('#gunma').show();
						$('#gunma .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listKanto').css('display', 'inline-block');
						$('.gunma').css('display', 'inline-block');

					// 中部
					}else if(prefecture === "静岡"){
						$('#shizuoka').show();
						$('#shizuoka .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listChubu').css('display', 'inline-block');
						$('.shizuoka').css('display', 'inline-block');
					}else if(prefecture === "石川"){
						$('#ishikawa').show();
						$('#ishikawa .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listChubu').css('display', 'inline-block');
						$('.ishikawa').css('display', 'inline-block');
					}else if(prefecture === "長野"){
						$('#nagano').show();
						$('#nagano .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listChubu').css('display', 'inline-block');
						$('.nagano').css('display', 'inline-block');
					}else if(prefecture === "富山"){
						$('#toyama').show();
						$('#toyama .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listChubu').css('display', 'inline-block');
						$('.toyama').css('display', 'inline-block');
					}else if(prefecture === "山梨"){
						$('#yamanashi').show();
						$('#yamanashi .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listChubu').css('display', 'inline-block');
						$('.yamanashi').css('display', 'inline-block');
					}else if(prefecture === "福井"){
						$('#fukui').show();
						$('#fukui .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listChubu').css('display', 'inline-block');
						$('.fukui').css('display', 'inline-block');
					}else if(prefecture === "岐阜"){
						$('#gifu').show();
						$('#gifu .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listChubu').css('display', 'inline-block');
						$('.gifu').css('display', 'inline-block');
					}else if(prefecture === "新潟"){
						$('#niigata').show();
						$('#niigata .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listChubu').css('display', 'inline-block');
						$('.niigata').css('display', 'inline-block');
					}else if(prefecture === "愛知"){
						$('#aichi').show();
						$('#aichi .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listChubu').css('display', 'inline-block');
						$('.aichi').css('display', 'inline-block');

					// 近畿
					}else if(prefecture === "三重"){
						$('#mie').show();
						$('#mie .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listKinki').css('display', 'inline-block');
						$('.mie').css('display', 'inline-block');
					}else if(prefecture === "大阪"){
						$('#osaka').show();
						$('#osaka .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listKinki').css('display', 'inline-block');
						$('.osaka').css('display', 'inline-block');
					}else if(prefecture === "京都"){
						$('#kyoto').show();
						$('#kyoto .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listKinki').css('display', 'inline-block');
						$('.kyoto').css('display', 'inline-block');
					}else if(prefecture === "奈良"){
						$('#nara').show();
						$('#nara .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listKinki').css('display', 'inline-block');
						$('.nara').css('display', 'inline-block');
					}else if(prefecture === "兵庫"){
						$('#hyogo').show();
						$('#hyogo .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listKinki').css('display', 'inline-block');
						$('.hyogo').css('display', 'inline-block');
					}else if(prefecture === "滋賀"){
						$('#shiga').show();
						$('#shiga .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listKinki').css('display', 'inline-block');
						$('.shiga').css('display', 'inline-block');
					}else if(prefecture === "和歌山"){
						$('#wakayama').show();
						$('#wakayama .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listKinki').css('display', 'inline-block');
						$('.wakayama').css('display', 'inline-block');

					// 中国
					}else if(prefecture === "広島"){
						$('#hiroshima').show();
						$('#hiroshima .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listChugoku').css('display', 'inline-block');
						$('.hiroshima').css('display', 'inline-block');
					}else if(prefecture === "山口"){
						$('#yamaguchi').show();
						$('#yamaguchi .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listChugoku').css('display', 'inline-block');
						$('.yamaguchi').css('display', 'inline-block');
					}else if(prefecture === "島根"){
						$('#shimane').show();
						$('#shimane .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listChugoku').css('display', 'inline-block');
						$('.shimane').css('display', 'inline-block');
					}else if(prefecture === "岡山"){
						$('#okayama').show();
						$('#okayama .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listChugoku').css('display', 'inline-block');
						$('.okayama').css('display', 'inline-block');
					}else if(prefecture === "鳥取"){
						$('#tottori').show();
						$('#tottori .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listChugoku').css('display', 'inline-block');
						$('.tottori').css('display', 'inline-block');

					// 四国
					}else if(prefecture === "香川"){
						$('#kagawa').show();
						$('#kagawa .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listShikoku').css('display', 'inline-block');
						$('.kagawa').css('display', 'inline-block');
					}else if(prefecture === "徳島"){
						$('#tokushima').show();
						$('#tokushima .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listShikoku').css('display', 'inline-block');
						$('.tokushima').css('display', 'inline-block');
					}else if(prefecture === "高知"){
						$('#kochi').show();
						$('#kochi .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listShikoku').css('display', 'inline-block');
						$('.kochi').css('display', 'inline-block');
					}else if(prefecture === "愛媛"){
						$('#ehime').show();
						$('#ehime .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listShikoku').css('display', 'inline-block');
						$('.ehime').css('display', 'inline-block');

					// 九州
					}else if(prefecture === "福岡"){
						$('#fukuoka').show();
						$('#fukuoka .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listKyushu').css('display', 'inline-block');
						$('.fukuoka').css('display', 'inline-block');
					}else if(prefecture === "長崎"){
						$('#nagasaki').show();
						$('#nagasaki .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listKyushu').css('display', 'inline-block');
						$('.nagasaki').css('display', 'inline-block');
					}else if(prefecture === "佐賀"){
						$('#saga').show();
						$('#saga .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listKyushu').css('display', 'inline-block');
						$('.saga').css('display', 'inline-block');
					}else if(prefecture === "熊本"){
						$('#kumamoto').show();
						$('#kumamoto .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listKyushu').css('display', 'inline-block');
						$('.kumamoto').css('display', 'inline-block');
					}else if(prefecture === "大分"){
						$('#oita').show();
						$('#oita .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listKyushu').css('display', 'inline-block');
						$('.oita').css('display', 'inline-block');
					}else if(prefecture === "宮崎"){
						$('#miyazaki').show();
						$('#miyazaki .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listKyushu').css('display', 'inline-block');
						$('.miyazaki').css('display', 'inline-block');
					}else if(prefecture === "鹿児島"){
						$('#kagoshima').show();
						$('#kagoshima .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listKyushu').css('display', 'inline-block');
						$('.kagoshima').css('display', 'inline-block');

					// 沖縄
					}else if(prefecture === "沖縄"){
						$('#okinawa').show();
						$('#okinawa .course').append('<li id="' + courseInfo.講座id + '"><a href="' + linkToCourse + '">' + title + '</a><br>開催日：' + date1 + date2 + date3 + date4 + date5 + date6 + '</li>');
						$('#listOkinawa').css('display', 'inline-block');
						$('.okinawa').css('display', 'inline-block');
					}
				}
			}

		}

	}

});
