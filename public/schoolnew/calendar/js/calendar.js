
function loadTextFile(){
$.get('/school/common/csv/index.csv',function(data){
	var date=new Date();
    var year = year2 = year3 = year4 = date.getFullYear();
	var month = date.getMonth()+1;
	var month2 = date.getMonth()+2;
	var month3 = date.getMonth()+3;
	var month4 = date.getMonth()+4;
	var week = date.getDay();
	var day = date.getDate();
	if (month < 10){
		month = '0'+ month;
	}
	if (month2 < 10){
		month2 = '0'+ month2;
	}else if(month2 >= 13 ){
		month2 = month2 - 12;
		month2 = '0'+ month2;
        year2 = year2 +1;
	}
	if (month3 < 10){
		month3 = '0'+ month3;
	}else if(month3 >= 13 ){
		month3 = month3 - 12;
		month3 = '0'+ month3;
        year3 = year3 +1;
	}
	if (month4 < 10){
		month4 = '0'+ month4;
	}else if(month4 >= 13 ){
		month4 = month4 - 12;
		month4 = '0'+ month4;
        year4 = year4 +1;
	}

	var csv = $.csv()(data);
	var csvEvent = [];
	var csvEvent2 = [];
	var csvEvent3 = [];
	var csvEvent4 = [];

	var csvEventInner1 = '';
	var csvEventInner2 = '';
	var csvEventInner3 = '';
	var csvEventInner4 = '';
	var csvEventInner5 = '';
	var csvDate1 = '';
	var csvDate2 = '';
	var csvDate3 = '';
	var csvDate4 = '';
	var csvDate5 = '';
	var csvDate1Month = '';
	var csvDate2Month = '';
	var csvDate3Month = '';
	var csvDate4Month = '';
	var csvDate5Month = '';
	var csvDate1Day = '';
	var csvDate2Day = '';
	var csvDate3Day = '';
	var csvDate4Day = '';
	var csvDate5Day = '';
	var csvDate1Year = '';
	var csvDate2Year = '';
	var csvDate3Year = '';
	var csvDate4Year = '';
	var csvDate5Year = '';
	var scvDate1length = '';
	var scvDate2length = '';
	var scvDate3length = '';
	var scvDate4length = '';
	var scvDate5length = '';
	var url1 = '';
	var url2 = '';
	var url3 = '';
	var url4 = '';
	var url5 = '';
	var className1 = '';
	var className2 = '';
	var className3 = '';
	var className4 = '';
	var className5 = '';

	$(csv).each(function(index){
		if (index != 0 && this[7] == 'technique' || this[7] == 'technique2' || this[7] == 'photographing'){//1回講座
				csvDate1 = this[17];
					// if (csvDate1.substr(1,1) == '/' && csvDate1.substr(2,2) == 1 || csvDate1.substr(2,2) == 2 || csvDate1.substr(2,2) == 3 || csvDate1.substr(2,2) == 4 || csvDate1.substr(2,2) == 5 || csvDate1.substr(2,2) == 6 || csvDate1.substr(2,2) == 7 || csvDate1.substr(2,2) == 8 || csvDate1.substr(2,2) == 9 ){//1～9月までで1～9日までに0を追加
					// 	csvDate1Day = '0'+ csvDate1.substr(2,2);
					// }else if(csvDate1.substr(1,1) == '/' && csvDate1.substr(2,2) != 1 || csvDate1.substr(2,2) != 2 || csvDate1.substr(2,2) != 3 || csvDate1.substr(2,2) != 4 || csvDate1.substr(2,2) != 5 || csvDate1.substr(2,2) != 6 || csvDate1.substr(2,2) != 7 || csvDate1.substr(2,2) != 8 || csvDate1.substr(2,2) != 9 ){
					// 	csvDate1Day = csvDate1.substr(2,2);
					// }else if(csvDate1.substr(1,1) != '/' && csvDate1.substr(3,2) == 1 || csvDate1.substr(3,2) == 2 || csvDate1.substr(3,2) == 3 || csvDate1.substr(3,2) == 4 || csvDate1.substr(3,2) == 5 || csvDate1.substr(3,2) == 6 || csvDate1.substr(3,2) == 7 || csvDate1.substr(3,2) == 8 || csvDate1.substr(3,2) == 9 ){//10～12月までで1～9日までに0を追加
					// 	csvDate1Day = '0'+ csvDate1.substr(3,2);
					// }else if(csvDate1.substr(1,1) != '/' && csvDate1.substr(3,2) != 1 || csvDate1.substr(3,2) != 2 || csvDate1.substr(3,2) != 3 || csvDate1.substr(3,2) != 4 || csvDate1.substr(3,2) != 5 || csvDate1.substr(3,2) != 6 || csvDate1.substr(3,2) != 7 || csvDate1.substr(3,2) != 8 || csvDate1.substr(3,2) != 9 ){
					// }
					if (csvDate1.substr(1,1) == '/'){
						if(csvDate1.substr(2,2) == 1 || csvDate1.substr(2,2) == 2 || csvDate1.substr(2,2) == 3 || csvDate1.substr(2,2) == 4 || csvDate1.substr(2,2) == 5 || csvDate1.substr(2,2) == 6 || csvDate1.substr(2,2) == 7 || csvDate1.substr(2,2) == 8 || csvDate1.substr(2,2) == 9){
							csvDate1Day = '0'+ csvDate1.substr(2,2);
						}else{
							csvDate1Day = csvDate1.substr(2,2);
						}
					}else{
						if(csvDate1.substr(1,1) != '/' && csvDate1.substr(3,2) == 1 || csvDate1.substr(3,2) == 2 || csvDate1.substr(3,2) == 3 || csvDate1.substr(3,2) == 4 || csvDate1.substr(3,2) == 5 || csvDate1.substr(3,2) == 6 || csvDate1.substr(3,2) == 7 || csvDate1.substr(3,2) == 8 || csvDate1.substr(3,2) == 9 ){
							csvDate1Day = '0'+ csvDate1.substr(3,2);
						}else{
							csvDate1Day = csvDate1.substr(3,2);
						}
					}

					// if (csvDate1.substr(0,2) != 10 ||csvDate1.substr(0,2) != 11 ||csvDate1.substr(0,2) != 12 ){//1～9月までに0を追加
					// 	csvDate1Month = '0'+ csvDate1.substr(0,1);
					// }else {
					// 	csvDate1Month = '0'+ csvDate1.substr(0,2);
					// }
					if(csvDate1.substr(0,2) == 10 ||csvDate1.substr(0,2) == 12 || csvDate1.substr(0,2) == 11 ){
						csvDate1Month = csvDate1.substr(0,2);
					}else{
						csvDate1Month = '0'+ csvDate1.substr(0,1);
					}

					csvDate1Year = this[76];
					csvDate1Year = csvDate1Year.substr(0,4);
					Date1 = csvDate1Year +'-'+ csvDate1Month +'-'+ csvDate1Day;

					if(this[7] == 'technique'){
						url1 = '/school/forest/technique/'+'#'+this[1];
					}else if(this[7] == 'technique2'){
						url1 = '/school/forest/technique2/'+'#'+this[1];
					}else if(this[7] == 'photographing'){
						url1 = '/school/forest/photographing/'+'#'+this[1];
					}

					if(this[82] == 'icon_kogi' && this[83] == '' && this[84] == '' ){
						className1 = this[75] +' '+ this[82] +' '+this[7] ;
					}else{
						className1 = this[75] +' '+this[7] ;
					}

					if(csvDate1Month == month){
						csvEvent.push({ "title": this[74], "start": Date1 ,"subtext": this[12], "url": url1 ,"className":className1});
					}else if(csvDate1Month == month2){
						csvEvent2.push({ "title": this[74], "start": Date1 ,"subtext": this[12], "url": url1 ,"className":className1});
					}else if(csvDate1Month == month3){
						csvEvent3.push({ "title": this[74], "start": Date1 ,"subtext": this[12], "url": url1 ,"className":className1});
					}else if(csvDate1Month == month4){
						csvEvent4.push({ "title": this[74], "start": Date1 ,"subtext": this[12], "url": url1 ,"className":className1});
					}

			if(this[21] !=''){//////////////////////////////////////////2回講座以上
				csvDate2 = this[21];
					// if (csvDate2.substr(1,1) == '/' && csvDate2.substr(2,2) == 1 || csvDate2.substr(2,2) == 2 || csvDate2.substr(2,2) == 3 || csvDate2.substr(2,2) == 4 || csvDate2.substr(2,2) == 5 || csvDate2.substr(2,2) == 6 || csvDate2.substr(2,2) == 7 || csvDate2.substr(2,2) == 8 || csvDate2.substr(2,2) == 9 ){//1～9月までで1～9日までに0を追加
					// 	csvDate2Day = '0'+ csvDate2.substr(2,2);
					// }else if(csvDate2.substr(1,1) == '/' && csvDate2.substr(2,2) != 1 || csvDate2.substr(2,2) != 2 || csvDate2.substr(2,2) != 3 || csvDate2.substr(2,2) != 4 || csvDate2.substr(2,2) != 5 || csvDate2.substr(2,2) != 6 || csvDate2.substr(2,2) != 7 || csvDate2.substr(2,2) != 8 || csvDate2.substr(2,2) != 9 ){
					// 	csvDate2Day = csvDate2.substr(2,2);
					// }else if(csvDate2.substr(1,1) != '/' && csvDate2.substr(3,2) == 1 || csvDate2.substr(3,2) == 2 || csvDate2.substr(3,2) == 3 || csvDate2.substr(3,2) == 4 || csvDate2.substr(3,2) == 5 || csvDate2.substr(3,2) == 6 || csvDate2.substr(3,2) == 7 || csvDate2.substr(3,2) == 8 || csvDate2.substr(3,2) == 9 ){//10～12月までで1～9日までに0を追加
					// 	csvDate2Day = '0'+ csvDate2.substr(3,2);
					// }else if(csvDate2.substr(1,1) != '/' && csvDate2.substr(3,2) != 1 || csvDate2.substr(3,2) != 2 || csvDate2.substr(3,2) != 3 || csvDate2.substr(3,2) != 4 || csvDate2.substr(3,2) != 5 || csvDate2.substr(3,2) != 6 || csvDate2.substr(3,2) != 7 || csvDate2.substr(3,2) != 8 || csvDate2.substr(3,2) != 9 ){
					// }
					if (csvDate2.substr(1,1) == '/'){
						if(csvDate2.substr(2,2) == 1 || csvDate2.substr(2,2) == 2 || csvDate2.substr(2,2) == 3 || csvDate2.substr(2,2) == 4 || csvDate2.substr(2,2) == 5 || csvDate2.substr(2,2) == 6 || csvDate2.substr(2,2) == 7 || csvDate2.substr(2,2) == 8 || csvDate2.substr(2,2) == 9){
							csvDate2Day = '0'+ csvDate2.substr(2,2);
						}else{
							csvDate2Day = csvDate2.substr(2,2);
						}
					}else{
						if(csvDate2.substr(1,1) != '/' && csvDate2.substr(3,2) == 1 || csvDate2.substr(3,2) == 2 || csvDate2.substr(3,2) == 3 || csvDate2.substr(3,2) == 4 || csvDate2.substr(3,2) == 5 || csvDate2.substr(3,2) == 6 || csvDate2.substr(3,2) == 7 || csvDate2.substr(3,2) == 8 || csvDate2.substr(3,2) == 9 ){
							csvDate2Day = '0'+ csvDate2.substr(3,2);
						}else{
							csvDate2Day = csvDate2.substr(3,2);
						}
					}

					// if (csvDate2.substr(0,2) != 10 ||csvDate2.substr(0,2) != 11 ||csvDate2.substr(0,2) != 12 ){//1～9月までに0を追加
					// 	csvDate2Month = '0'+ csvDate2.substr(0,1);
					// }else {
					// 	csvDate2Month = '0'+ csvDate2.substr(0,2);
					// }
					if(csvDate2.substr(0,2) == 10 ||csvDate2.substr(0,2) == 12 || csvDate2.substr(0,2) == 11 ){
						csvDate2Month = csvDate2.substr(0,2);
					}else{
						csvDate2Month = '0'+ csvDate2.substr(0,1);
					}

					csvDate2Year = this[77];
					csvDate2Year = csvDate2Year.substr(0,4);
					Date2 = csvDate2Year +'-'+ csvDate2Month +'-'+ csvDate2Day;

					if(this[7] == 'technique'){
						url2 = '/school/forest/technique/'+'#'+this[1];
					}else if(this[7] == 'technique2'){
						url2 = '/school/forest/technique2/'+'#'+this[1];
					}else if(this[7] == 'photographing'){
						url2 = '/school/forest/photographing/'+'#'+this[1];
					}

					if(this[82] == 'icon_kogi' && this[83] == '' && this[84] == '' ){
						className2 = this[75] +' '+ this[82] +' '+this[7] ;
					}else{
						className2 = this[75] +' '+this[7] ;
					}

					if(csvDate2Month == month){
						csvEvent.push({ "title": this[74], "start": Date2 ,"subtext": this[12], "url": url2 ,"className":className2});
					}else if(csvDate2Month == month2){
						csvEvent2.push({ "title": this[74], "start": Date2 ,"subtext": this[12], "url": url2 ,"className":className2});
					}else if(csvDate2Month == month3){
						csvEvent3.push({ "title": this[74], "start": Date2 ,"subtext": this[12], "url": url2 ,"className":className2});
					}else if(csvDate2Month == month4){
						csvEvent4.push({ "title": this[74], "start": Date2 ,"subtext": this[12], "url": url2 ,"className":className2});
					}

			}//////////////////////////////////////////2回講座以上

			if(this[25] !=''){//////////////////////////////////////////3回講座以上
				csvDate3 = this[25];
					// if (csvDate3.substr(1,1) == '/' && csvDate3.substr(2,2) == 1 || csvDate3.substr(2,2) == 2 || csvDate3.substr(2,2) == 3 || csvDate3.substr(2,2) == 4 || csvDate3.substr(2,2) == 5 || csvDate3.substr(2,2) == 6 || csvDate3.substr(2,2) == 7 || csvDate3.substr(2,2) == 8 || csvDate3.substr(2,2) == 9 ){//1～9月までで1～9日までに0を追加
					// 	csvDate3Day = '0'+ csvDate3.substr(2,2);
					// }else if(csvDate3.substr(1,1) == '/' && csvDate3.substr(2,2) != 1 || csvDate3.substr(2,2) != 2 || csvDate3.substr(2,2) != 3 || csvDate3.substr(2,2) != 4 || csvDate3.substr(2,2) != 5 || csvDate3.substr(2,2) != 6 || csvDate3.substr(2,2) != 7 || csvDate3.substr(2,2) != 8 || csvDate3.substr(2,2) != 9 ){
					// 	csvDate3Day = csvDate3.substr(2,2);
					// }
					// if(csvDate3.substr(1,1) != '/' && csvDate3.substr(3,2) == 1 || csvDate3.substr(3,2) == 2 || csvDate3.substr(3,2) == 3 || csvDate3.substr(3,2) == 4 || csvDate3.substr(3,2) == 5 || csvDate3.substr(3,2) == 6 || csvDate3.substr(3,2) == 7 || csvDate3.substr(3,2) == 8 || csvDate3.substr(3,2) == 9 ){//10～12月までで1～9日までに0を追加
					// 	csvDate3Day = '0'+ csvDate3.substr(3,2);
					// }else if(csvDate3.substr(1,1) != '/' && csvDate3.substr(3,2) != 1 || csvDate3.substr(3,2) != 2 || csvDate3.substr(3,2) != 3 || csvDate3.substr(3,2) != 4 || csvDate3.substr(3,2) != 5 || csvDate3.substr(3,2) != 6 || csvDate3.substr(3,2) != 7 || csvDate3.substr(3,2) != 8 || csvDate3.substr(3,2) != 9 ){
					// }

					if (csvDate3.substr(1,1) == '/'){
						if(csvDate3.substr(2,2) == 1 || csvDate3.substr(2,2) == 2 || csvDate3.substr(2,2) == 3 || csvDate3.substr(2,2) == 4 || csvDate3.substr(2,2) == 5 || csvDate3.substr(2,2) == 6 || csvDate3.substr(2,2) == 7 || csvDate3.substr(2,2) == 8 || csvDate3.substr(2,2) == 9){
							csvDate3Day = '0'+ csvDate3.substr(2,2);
						}else{
							csvDate3Day = csvDate3.substr(2,2);
						}
					}else{
						if(csvDate3.substr(1,1) != '/' && csvDate3.substr(3,2) == 1 || csvDate3.substr(3,2) == 2 || csvDate3.substr(3,2) == 3 || csvDate3.substr(3,2) == 4 || csvDate3.substr(3,2) == 5 || csvDate3.substr(3,2) == 6 || csvDate3.substr(3,2) == 7 || csvDate3.substr(3,2) == 8 || csvDate3.substr(3,2) == 9 ){
							csvDate3Day = '0'+ csvDate3.substr(3,2);
						}else{
							csvDate3Day = csvDate3.substr(3,2);
						}
					}

					// if (csvDate3.substr(0,2) != 10 ||csvDate3.substr(0,2) != 11 ||csvDate3.substr(0,2) != 12 ){//1～9月までに0を追加
					// 	csvDate3Month = '0'+ csvDate3.substr(0,1);
					// // }else{
					// // 	csvDate3Month = csvDate3.substr(0,2);
					// }
					if(csvDate3.substr(0,2) == 10 ||csvDate3.substr(0,2) == 12 || csvDate3.substr(0,2) == 11 ){
						csvDate3Month = csvDate3.substr(0,2);
					}else{
						csvDate3Month = '0'+ csvDate3.substr(0,1);
					}

					csvDate3Year = this[78];
					csvDate3Year = csvDate3Year.substr(0,4);
					Date3 = csvDate3Year +'-'+ csvDate3Month +'-'+ csvDate3Day;
					//Date3 = 2015 +'-'+ csvDate3Month +'-'+ csvDate3Day;

					if(this[7] == 'technique'){
						url3 = '/school/forest/technique/'+'#'+this[1];
					}else if(this[7] == 'technique2'){
						url3 = '/school/forest/technique2/'+'#'+this[1];
					}else if(this[7] == 'photographing'){
						url3 = '/school/forest/photographing/'+'#'+this[1];
					}

					if(this[82] == 'icon_kogi' && this[83] == '' && this[84] == '' ){
						className3 = this[75] +' '+ this[82] +' '+this[7] ;
					}else{
						className3 = this[75] +' '+this[7] ;
					}

					if(csvDate3Month == month){
						csvEvent.push({ "title": this[74], "start": Date3 ,"subtext": this[12], "url": url3 ,"className":className3});
					}else if(csvDate3Month == month2){
						csvEvent2.push({ "title": this[74], "start": Date3 ,"subtext": this[12], "url": url3 ,"className":className3});
					}else if(csvDate3Month == month3){
						csvEvent3.push({ "title": this[74], "start": Date3 ,"subtext": this[12], "url": url3 ,"className":className3});
					}else if(csvDate3Month == month4){
						csvEvent4.push({ "title": this[74], "start": Date3 ,"subtext": this[12], "url": url3 ,"className":className3});
					}

			}//////////////////////////////////////////3回講座以上

			if(this[29] !=''){//////////////////////////////////////////4回講座以上
				csvDate4 = this[29];
					// if (csvDate4.substr(1,1) == '/' && csvDate4.substr(2,2) == 1 || csvDate4.substr(2,2) == 2 || csvDate4.substr(2,2) == 3 || csvDate4.substr(2,2) == 4 || csvDate4.substr(2,2) == 5 || csvDate4.substr(2,2) == 6 || csvDate4.substr(2,2) == 7 || csvDate4.substr(2,2) == 8 || csvDate4.substr(2,2) == 9 ){//1～9月までで1～9日までに0を追加
					// 	csvDate4Day = '0'+ csvDate4.substr(2,2);
					// }else if(csvDate4.substr(1,1) == '/' && csvDate4.substr(2,2) != 1 || csvDate4.substr(2,2) != 2 || csvDate4.substr(2,2) != 3 || csvDate4.substr(2,2) != 4 || csvDate4.substr(2,2) != 5 || csvDate4.substr(2,2) != 6 || csvDate4.substr(2,2) != 7 || csvDate4.substr(2,2) != 8 || csvDate4.substr(2,2) != 9 ){
					// 	csvDate4Day = csvDate4.substr(2,2);
					// }else if(csvDate4.substr(1,1) != '/' && csvDate4.substr(3,2) == 1 || csvDate4.substr(3,2) == 2 || csvDate4.substr(3,2) == 3 || csvDate4.substr(3,2) == 4 || csvDate4.substr(3,2) == 5 || csvDate4.substr(3,2) == 6 || csvDate4.substr(3,2) == 7 || csvDate4.substr(3,2) == 8 || csvDate4.substr(3,2) == 9 ){//10～12月までで1～9日までに0を追加
					// 	csvDate4Day = '0'+ csvDate4.substr(3,2);
					// }else if(csvDate4.substr(1,1) != '/' && csvDate4.substr(3,2) != 1 || csvDate4.substr(3,2) != 2 || csvDate4.substr(3,2) != 3 || csvDate4.substr(3,2) != 4 || csvDate4.substr(3,2) != 5 || csvDate4.substr(3,2) != 6 || csvDate4.substr(3,2) != 7 || csvDate4.substr(3,2) != 8 || csvDate4.substr(3,2) != 9 ){
					// }

					if (csvDate4.substr(1,1) == '/'){
						if(csvDate4.substr(2,2) == 1 || csvDate4.substr(2,2) == 2 || csvDate4.substr(2,2) == 3 || csvDate4.substr(2,2) == 4 || csvDate4.substr(2,2) == 5 || csvDate4.substr(2,2) == 6 || csvDate4.substr(2,2) == 7 || csvDate4.substr(2,2) == 8 || csvDate4.substr(2,2) == 9){
							csvDate4Day = '0'+ csvDate4.substr(2,2);
						}else{
							csvDate4Day = csvDate4.substr(2,2);
						}
					}else{
						if(csvDate4.substr(1,1) != '/' && csvDate4.substr(3,2) == 1 || csvDate4.substr(3,2) == 2 || csvDate4.substr(3,2) == 3 || csvDate4.substr(3,2) == 4 || csvDate4.substr(3,2) == 5 || csvDate4.substr(3,2) == 6 || csvDate4.substr(3,2) == 7 || csvDate4.substr(3,2) == 8 || csvDate4.substr(3,2) == 9 ){
							csvDate4Day = '0'+ csvDate4.substr(3,2);
						}else{
							csvDate4Day = csvDate4.substr(3,2);
						}
					}

					// if (csvDate4.substr(0,2) != 10 ||csvDate4.substr(0,2) != 11 ||csvDate4.substr(0,2) != 12 ){//1～9月までに0を追加
					// 	csvDate4Month = '0'+ csvDate4.substr(0,1);
					// }else {
					// 	csvDate4Month = '0'+ csvDate4.substr(0,2);
					// }
					if(csvDate4.substr(0,2) == 10 ||csvDate4.substr(0,2) == 12 || csvDate4.substr(0,2) == 11 ){
						csvDate4Month = csvDate4.substr(0,2);
					}else{
						csvDate4Month = '0'+ csvDate4.substr(0,1);
					}

					csvDate4Year = this[79];
					csvDate4Year = csvDate4Year.substr(0,4);
					Date4 = csvDate4Year +'-'+ csvDate4Month +'-'+ csvDate4Day;
					//Date4 = 2015 +'-'+ csvDate4Month +'-'+ csvDate4Day;

					if(this[7] == 'technique'){
						url4 = '/school/forest/technique/'+'#'+this[1];
					}else if(this[7] == 'technique2'){
						url4 = '/school/forest/technique2/'+'#'+this[1];
					}else if(this[7] == 'photographing'){
						url4 = '/school/forest/photographing/'+'#'+this[1];
					}

					if(this[82] == 'icon_kogi' && this[83] == '' && this[84] == '' ){
						className4 = this[75] +' '+ this[82] +' '+this[7] ;
					}else{
						className4 = this[75] +' '+this[7] ;
					}

					if(csvDate4Month == month){
						csvEvent.push({ "title": this[74], "start": Date4 ,"subtext": this[12], "url": url4 ,"className":className4});
					}else if(csvDate4Month == month2){
						csvEvent2.push({ "title": this[74], "start": Date4 ,"subtext": this[12], "url": url4 ,"className":className4});
					}else if(csvDate4Month == month3){
						csvEvent3.push({ "title": this[74], "start": Date4 ,"subtext": this[12], "url": url4 ,"className":className4});
					}else if(csvDate4Month == month4){
						csvEvent4.push({ "title": this[74], "start": Date4 ,"subtext": this[12], "url": url4 ,"className":className4});
					}

			}//////////////////////////////////////////4回講座以上

			if(this[33] !=''){//////////////////////////////////////////5回講座
				csvDate5 = this[33];
					// if (csvDate5.substr(1,1) == '/' && csvDate5.substr(2,2) == 1 || csvDate5.substr(2,2) == 2 || csvDate5.substr(2,2) == 3 || csvDate5.substr(2,2) == 4 || csvDate5.substr(2,2) == 5 || csvDate5.substr(2,2) == 6 || csvDate5.substr(2,2) == 7 || csvDate5.substr(2,2) == 8 || csvDate5.substr(2,2) == 9 ){//1～9月までで1～9日までに0を追加
					// 	csvDate5Day = '0'+ csvDate5.substr(2,2);
					// }else if(csvDate5.substr(1,1) == '/' && csvDate5.substr(2,2) != 1 || csvDate5.substr(2,2) != 2 || csvDate5.substr(2,2) != 3 || csvDate5.substr(2,2) != 4 || csvDate5.substr(2,2) != 5 || csvDate5.substr(2,2) != 6 || csvDate5.substr(2,2) != 7 || csvDate5.substr(2,2) != 8 || csvDate5.substr(2,2) != 9 ){
					// 	csvDate5Day = csvDate5.substr(2,2);
					// }else if(csvDate5.substr(1,1) != '/' && csvDate5.substr(3,2) == 1 || csvDate5.substr(3,2) == 2 || csvDate5.substr(3,2) == 3 || csvDate5.substr(3,2) == 4 || csvDate5.substr(3,2) == 5 || csvDate5.substr(3,2) == 6 || csvDate5.substr(3,2) == 7 || csvDate5.substr(3,2) == 8 || csvDate5.substr(3,2) == 9 ){//10～12月までで1～9日までに0を追加
					// 	csvDate5Day = '0'+ csvDate5.substr(3,2);
					// }else if(csvDate5.substr(1,1) != '/' && csvDate5.substr(3,2) != 1 || csvDate5.substr(3,2) != 2 || csvDate5.substr(3,2) != 3 || csvDate5.substr(3,2) != 4 || csvDate5.substr(3,2) != 5 || csvDate5.substr(3,2) != 6 || csvDate5.substr(3,2) != 7 || csvDate5.substr(3,2) != 8 || csvDate5.substr(3,2) != 9 ){
					// }
					if (csvDate5.substr(1,1) == '/'){
						if(csvDate5.substr(2,2) == 1 || csvDate5.substr(2,2) == 2 || csvDate5.substr(2,2) == 3 || csvDate5.substr(2,2) == 4 || csvDate5.substr(2,2) == 5 || csvDate5.substr(2,2) == 6 || csvDate5.substr(2,2) == 7 || csvDate5.substr(2,2) == 8 || csvDate5.substr(2,2) == 9){
							csvDate5Day = '0'+ csvDate5.substr(2,2);
						}else{
							csvDate5Day = csvDate5.substr(2,2);
						}
					}else{
						if(csvDate5.substr(1,1) != '/' && csvDate5.substr(3,2) == 1 || csvDate5.substr(3,2) == 2 || csvDate5.substr(3,2) == 3 || csvDate5.substr(3,2) == 4 || csvDate5.substr(3,2) == 5 || csvDate5.substr(3,2) == 6 || csvDate5.substr(3,2) == 7 || csvDate5.substr(3,2) == 8 || csvDate5.substr(3,2) == 9 ){
							csvDate5Day = '0'+ csvDate5.substr(3,2);
						}else{
							csvDate5Day = csvDate5.substr(3,2);
						}
					}

					if (csvDate5.substr(0,2) != 10 ||csvDate5.substr(0,2) != 11 ||csvDate5.substr(0,2) != 12 ){//1～9月までに0を追加
						csvDate5Month = '0'+ csvDate5.substr(0,1);
					// }else {
					// 	csvDate5Month = '0'+ csvDate5.substr(0,2);
					}
					if(csvDate5.substr(0,2) == 10 ||csvDate5.substr(0,2) == 12 || csvDate5.substr(0,2) == 11 ){
						csvDate5Month = csvDate5.substr(0,2);
					}else{
						csvDate5Month = '0'+ csvDate5.substr(0,1);
					}

					csvDate5Year = this[80];
					csvDate5Year = csvDate5Year.substr(0,4);
					Date5 = csvDate5Year +'-'+ csvDate5Month +'-'+ csvDate5Day;
					//Date5 = 2015 +'-'+ csvDate5Month +'-'+ csvDate5Day;

					if(this[7] == 'technique'){
						url5 = '/school/forest/technique/'+'#'+this[1];
					}else if(this[7] == 'technique2'){
						url5 = '/school/forest/technique2/'+'#'+this[1];
					}else if(this[7] == 'photographing'){
						url5 = '/school/forest/photographing/'+'#'+this[1];
					}

					if(this[82] == 'icon_kogi' && this[83] == '' && this[84] == '' ){
						className5 = this[75] +' '+ this[82] +' '+this[7] ;
					}else{
						className5 = this[75] +' '+this[7] ;
					}

					if(csvDate5Month == month){
						csvEvent.push({ "title": this[74], "start": Date5 ,"subtext": this[12], "url": url5 ,"className":className5});
					}else if(csvDate5Month == month2){
						csvEvent2.push({ "title": this[74], "start": Date5 ,"subtext": this[12], "url": url5 ,"className":className5});
					}else if(csvDate5Month == month3){
						csvEvent3.push({ "title": this[74], "start": Date5 ,"subtext": this[12], "url": url5 ,"className":className5});
					}else if(csvDate5Month == month4){
						csvEvent4.push({ "title": this[74], "start": Date5 ,"subtext": this[12], "url": url5 ,"className":className5});
					}

			}//////////////////////////////////////////5回講座

		}
	});

	var firstCal = year + '-' + month + '-01';//カレンダー1
	var firstCal2 = year2 + '-' + month2 + '-01';//カレンダー2
	var firstCal3 = year3 + '-' + month3 + '-01';//カレンダー3
	var firstCal4 = year4 + '-' + month4 + '-01';//カレンダー4

	var mobile_flag = navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0;//モバイルフラグ

	$('#calendar01').fullCalendar({
		defaultDate: firstCal,
		titleFormat: {
			month:'YYYY年 MM月',
		},
		dayNames: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
		dayNamesShort: ['日','月','火','水','木','金','土'],
		editable: true,
		draggable: 'false',
		disableDragging: 'false',
		eventStartEditable:'false',
		dragScroll :'false',
		eventDrop:'false',
		firstDay:1,
		weekMode: 'false',
		eventMouseover: function(event){
			if(!mobile_flag) {
				$(this).css({'position':'absolute','z-index':'10','min-width':'350px'});
				var outHeight = $(this).outerHeight();
				outHeight = outHeight + 5;
				$(this).parent().parent('tr').css('height',outHeight);
				//$(this).parent().parent('tr').css('height','32px');
				//$(this).find('.subtext').css({'display':'block'});
				$(this).find('.subtext').css({'display':'block'});
			}
		},
		eventMouseout: function(event){
			if(!mobile_flag) {
				$(this).css({'position':'relative','z-index':'0','min-width':'0'});
				$(this).parent().parent('tr').css('height','auto');
				//$(this).find('.subtext').css({'display':'none'});
				$(this).find('.subtext').css({'display':'none'});
			}
		},
		events: csvEvent,
	});//fullCalendar

	$('#calendar02').fullCalendar({
		defaultDate: firstCal2,
		titleFormat: {
			month:'YYYY年 MM月',
		},
		dayNames: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
		dayNamesShort: ['日','月','火','水','木','金','土'],
		editable: true,
		draggable: 'false',
		disableDragging: 'false',
		eventStartEditable:'false',
		dragScroll :'false',
		eventDrop:'false',
		firstDay:1,
		weekMode: 'false',
		eventMouseover: function(event){
			if(!mobile_flag) {
				$(this).css({'position':'absolute','z-index':'10','min-width':'350px'});
				var outHeight = $(this).outerHeight();
				outHeight = outHeight + 5;
				$(this).parent().parent('tr').css('height',outHeight);
				//$(this).parent().parent('tr').css('height','32px');
				//$(this).find('.subtext').css({'display':'block'});
				$(this).find('.subtext').css({'display':'block'});
			}
		},
		eventMouseout: function(event){
			if(!mobile_flag) {
				$(this).css({'position':'relative','z-index':'0','min-width':'0'});
				$(this).parent().parent('tr').css('height','auto');
				//$(this).find('.subtext').css({'display':'none'});
				$(this).find('.subtext').css({'display':'none'});
			}
		},
		events: csvEvent2,
	});//fullCalendar

	$('#calendar03').fullCalendar({
		defaultDate: firstCal3,
		titleFormat: {
			month:'YYYY年 MM月',
		},
		dayNames: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
		dayNamesShort: ['日','月','火','水','木','金','土'],
		editable: true,
		draggable: 'false',
		disableDragging: 'false',
		eventStartEditable:'false',
		dragScroll :'false',
		eventDrop:'false',
		firstDay:1,
		weekMode: 'false',
		eventMouseover: function(event){
			if(!mobile_flag) {
				$(this).css({'position':'absolute','z-index':'10','min-width':'350px'});
				var outHeight = $(this).outerHeight();
				outHeight = outHeight + 5;
				$(this).parent().parent('tr').css('height',outHeight);
				//$(this).parent().parent('tr').css('height','32px');
				//$(this).find('.subtext').css({'display':'block'});
				$(this).find('.subtext').css({'display':'block'});
			}
		},
		eventMouseout: function(event){
			if(!mobile_flag) {
				$(this).css({'position':'relative','z-index':'0','min-width':'0'});
				$(this).parent().parent('tr').css('height','auto');
				//$(this).find('.subtext').css({'display':'none'});
				$(this).find('.subtext').css({'display':'none'});
			}
		},
		events: csvEvent3,
	});//fullCalendar

	$('#calendar04').fullCalendar({
		defaultDate: firstCal4,
		titleFormat: {
			month:'YYYY年 MM月',
		},
		dayNames: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
		dayNamesShort: ['日','月','火','水','木','金','土'],
		editable: true,
		draggable: 'false',
		disableDragging: 'false',
		eventStartEditable:'false',
		dragScroll :'false',
		eventDrop:'false',
		firstDay:1,
		weekMode: 'false',
		eventMouseover: function(event){
			if(!mobile_flag) {
				$(this).css({'position':'absolute','z-index':'10','min-width':'350px'});
				var outHeight = $(this).outerHeight();
				outHeight = outHeight + 5;
				$(this).parent().parent('tr').css('height',outHeight);
				//$(this).parent().parent('tr').css('height','32px');
				//$(this).find('.subtext').css({'display':'block'});
				$(this).find('.subtext').css({'display':'block'});
			}
		},
		eventMouseout: function(event){
			if(!mobile_flag) {
				$(this).css({'position':'relative','z-index':'0','min-width':'0'});
				$(this).parent().parent('tr').css('height','auto');
				//$(this).find('.subtext').css({'display':'none'});
				$(this).find('.subtext').css({'display':'none'});
			}
		},
		events: csvEvent4,
	});//fullCalendar

function holiday(){//祝日セット
	$("td[data-date = '2016-01-01']").css("color", "red");
	$("td[data-date = '2016-01-11']").css("color", "red");
	$("td[data-date = '2016-02-11']").css("color", "red");
	$("td[data-date = '2016-03-21']").css("color", "red");
	$("td[data-date = '2016-04-29']").css("color", "red");
	$("td[data-date = '2016-05-03']").css("color", "red");
	$("td[data-date = '2016-05-04']").css("color", "red");
	$("td[data-date = '2016-05-05']").css("color", "red");
	$("td[data-date = '2016-07-18']").css("color", "red");
	$("td[data-date = '2016-09-19']").css("color", "red");
	$("td[data-date = '2016-09-22']").css("color", "red");
	$("td[data-date = '2016-10-10']").css("color", "red");
	$("td[data-date = '2016-11-03']").css("color", "red");
	$("td[data-date = '2016-11-23']").css("color", "red");
	$("td[data-date = '2016-12-23']").css("color", "red");
}
holiday();

function classId(){
	$('.technique .subtext').prepend('<span>実践</span>');
	$('.technique2 .subtext').prepend('<span>レベルアップ</span>');
	$('.photographing .subtext').prepend('<span>撮影</span>');
}
classId();

});//scvFunction



}
