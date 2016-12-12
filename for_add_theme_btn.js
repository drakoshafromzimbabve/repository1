function createObject() {
var request_type3;
var browser3 = navigator.appName;
if(browser3 == "Microsoft Internet Explorer"){
request_type3 = new ActiveXObject("Microsoft.XMLHTTP");
}else{
request_type3 = new XMLHttpRequest();
}
return request_type3;
}
var http3 = createObject();
var nocache3 = 0;                   // підготовка до передачі даних на сервер


var themeArray = new Array();


function func_add_theme_btn() {   // при натиску на кнопку Додати тему


if (document.getElementById('articlediv').hasChildNodes()) {
		for (var i = 0; i < document.getElementById('articlediv').childNodes.length; ++i) {
			if (document.getElementById('articlediv').childNodes[i] == document.getElementById('div3id')) {
    document.getElementById('articlediv').removeChild(document.getElementById('div3id'));
			}
  }
	}                    // видалили контейнер для перегляду теми, якщо він вже є
	
	if (document.getElementById('bt_tn') == undefined) {
	var bttn = document.createElement('input');
bttn.id = 'bt_tn';
bttn.type = 'button';
bttn.value = "Зберегти тему";
bttn.onclick = fu_dodaty;
document.getElementById('articlediv').appendChild(bttn);  // додали кнопку Зберегти тему
	}

	if (document.getElementById('redactfooterdiv').hasChildNodes()) {
		for (var i = 0; i < document.getElementById('redactfooterdiv').childNodes.length; ++i) {
			if (document.getElementById('redactfooterdiv').childNodes[i] == document.getElementById('fo2')) {
    document.getElementById('redactfooterdiv').removeChild(document.getElementById('fo2'));
			}
  }
	}                    // видалили форму, якщо вона вже є
	
	var forma2 = document.createElement('form');
forma2.id = 'fo2';
forma2.action = "javascript:func_add_theme()";
forma2.method = "post";
document.getElementById('redactfooterdiv').appendChild(forma2);  // додали форму

var inptitle = document.createElement('input');
inptitle.type = "text";
inptitle.name = 'inptitleinp';
inptitle.id = 'inp_title_inp';
inptitle.value = 'Введіть заголовок';
document.getElementById('fo2').appendChild(inptitle);      // додали поле для заголовка

var psel1 = document.createElement('p');
psel1.value = 'Виберіть розмір шрифта заголовка';
var sel1 = document.createElement('select');
sel1.name = "rank1";
sel1.id = "rank1";
var option1_0 = document.createElement('option');
option1_0.class = "1_0ball";
option1_0.innerHTML = '20pt';
var option1_1 = document.createElement('option');
option1_1.class = "1_1ball";
option1_1.innerHTML = '24pt';
var option1_2 = document.createElement('option');
option1_2.class = "1_2ball";
option1_2.innerHTML = '28pt';
var option1_3 = document.createElement('option');
option1_3.class = "1_3ball";
option1_3.innerHTML = '32pt';
var option1_4 = document.createElement('option');
option1_4.class = "1_4ball";
option1_4.innerHTML = '36pt';
var option1_5 = document.createElement('option');
option1_5.class = "1_5ball";
option1_5.innerHTML = '40pt';
document.getElementById('fo2').appendChild(psel1);
psel1.appendChild(sel1);
sel1.appendChild(option1_0);
sel1.appendChild(option1_1);
sel1.appendChild(option1_2);
sel1.appendChild(option1_3);
sel1.appendChild(option1_4);
sel1.appendChild(option1_5);                              // додали вибір розміру шрифта для заголовка

var psel2 = document.createElement('p');
psel2.value = 'Виберіть колір шрифта';
var sel2 = document.createElement('select');
sel2.name = "rank2";
sel2.id = "rank2";
var option2_0 = document.createElement('option');
option2_0.class = "2_0ball";
option2_0.innerHTML = 'чорний';
var option2_1 = document.createElement('option');
option2_1.class = "2_1ball";
option2_1.innerHTML = 'синій';
var option2_2 = document.createElement('option');
option2_2.class = "2_2ball";
option2_2.innerHTML = 'темно-червоний';
var option2_3 = document.createElement('option');
option2_3.class = "2_3ball";
option2_3.innerHTML = 'білий';
var option2_4 = document.createElement('option');
option2_4.class = "2_4ball";
option2_4.innerHTML = 'темно-зелений';
var option2_5 = document.createElement('option');
option2_5.class = "2_5ball";
option2_5.innerHTML = 'сірий';
document.getElementById('fo2').appendChild(psel2);
psel2.appendChild(sel2);
sel2.appendChild(option2_0);
sel2.appendChild(option2_1);
sel2.appendChild(option2_2);
sel2.appendChild(option2_3);
sel2.appendChild(option2_4);
sel2.appendChild(option2_5);                          // додали вибір кольору шрифта для заголовка

var psel2a = document.createElement('p');
psel2a.value = 'Виберіть колір шрифта для тексту';
var sel2a = document.createElement('select');
sel2a.name = "rank2a";
sel2a.id = "rank2a";
var option2_0a = document.createElement('option');
option2_0a.class = "2_0balla";
option2_0a.innerHTML = 'чорний';
var option2_1a = document.createElement('option');
option2_1a.class = "2_1balla";
option2_1a.innerHTML = 'синій';
var option2_2a = document.createElement('option');
option2_2a.class = "2_2balla";
option2_2a.innerHTML = 'темно-червоний';
var option2_3a = document.createElement('option');
option2_3a.class = "2_3balla";
option2_3a.innerHTML = 'білий';
var option2_4a = document.createElement('option');
option2_4a.class = "2_4balla";
option2_4a.innerHTML = 'темно-зелений';
var option2_5a = document.createElement('option');
option2_5a.class = "2_5balla";
option2_5a.innerHTML = 'сірий';
document.getElementById('fo2').appendChild(psel2a);
psel2a.appendChild(sel2a);
sel2a.appendChild(option2_0a);
sel2a.appendChild(option2_1a);
sel2a.appendChild(option2_2a);
sel2a.appendChild(option2_3a);
sel2a.appendChild(option2_4a);
sel2a.appendChild(option2_5a);                          // додали вибір кольору шрифта для тексту

var inptext1 = document.createElement('textarea');
inptext1.name = 'inptextarea1';
inptext1.id = 'inp_text_area1';
inptext1.value = 'Коротко опишіть тему';
document.getElementById('fo2').appendChild(inptext1);             // додали поле для тексту

var inptext2 = document.createElement('textarea');
inptext2.name = 'inptextarea2';
inptext2.id = 'inp_text_area2';
inptext2.value = 'Тут можна розвинути тему';
document.getElementById('fo2').appendChild(inptext2);             // додали поле для тексту

var sub3 = document.createElement('input');
sub3.type = "submit";
sub3.id = 'sub3';
sub3.value = 'Розмістити в темі';
forma2.appendChild(sub3);                                // додали кнопку, що відправляє дані форми в func_add_theme
}


function func_add_theme() {
	themeArray.splice(0, 6);
	
	
		themeArray.push(document.getElementById('inp_title_inp').value);
		themeArray.push(document.getElementById('inp_text_area1').value);
		themeArray.push(document.getElementById('inp_text_area2').value);
		themeArray.push(document.getElementById('rank1').value);
		if (document.getElementById('rank2').value == 'чорний') {
		themeArray.push('000000');
		}
		if (document.getElementById('rank2').value == 'синій') {
		themeArray.push('0000cc');
		}
		if (document.getElementById('rank2').value == 'темно-червоний') {
		themeArray.push('993300');
		}
		if (document.getElementById('rank2').value == 'білий') {
		themeArray.push('ffffff');
		}
		if (document.getElementById('rank2').value == 'темно-зелений') {
		themeArray.push('006600');
		}
		if (document.getElementById('rank2').value == 'сірий') {
		themeArray.push('cccccc');
		}
		if (document.getElementById('rank2a').value == 'чорний') {
		themeArray.push('000000');
		}
		if (document.getElementById('rank2a').value == 'синій') {
		themeArray.push('0000cc');
		}
		if (document.getElementById('rank2a').value == 'темно-червоний') {
		themeArray.push('993300');
		}
		if (document.getElementById('rank2a').value == 'білий') {
		themeArray.push('ffffff');
		}
		if (document.getElementById('rank2a').value == 'темно-зелений') {
		themeArray.push('006600');
		}
		if (document.getElementById('rank2a').value == 'сірий') {
		themeArray.push('cccccc');
		}

	

	var div3 = document.createElement('div');
	div3.id = 'div3id';
	document.getElementById('articlediv').appendChild(div3);
	var pz1 = document.createElement('p');
	document.getElementById('div3id').appendChild(pz1);
	pz1.style = "font-size:"+themeArray[3]+"; color:"+themeArray[4];
	var code1 = themeArray[0];
	pz1.innerHTML = 'theme= "'+
                      code1.replace(/\\/g, '\\\\')
                          .replace(/"/g, '\\"')
                          .replace(/[\n\r]/g, '\\n')+
                      '";';
	var br1 = document.createElement('br');
	document.getElementById('div3id').appendChild(br1);
	
	var pz2 = document.createElement('p');
	document.getElementById('div3id').appendChild(pz2);
	pz2.style = "color:"+themeArray[5];
	var code = themeArray[2];
	pz2.innerHTML = 'var myVariable= "'+
                      code.replace(/\\/g, '\\\\')
                          .replace(/"/g, '\\"')
                          .replace(/[\n\r]/g, '\\n')+
                      '";';
	var br2 = document.createElement('br');
	document.getElementById('div3id').appendChild(br2);
	
	document.getElementById('redactfooterdiv').removeChild(document.getElementById('fo2'));
		
}


function fu_dodaty() {

var part0 = themeArray[0];
var part1 = themeArray[1];
var part2 = themeArray[2];
var part3 = themeArray[3];
var part4 = themeArray[4];
var part5 = themeArray[5];
nocache3 = Math.random();
http3.open('get', 'add_theme_todb.php?part0='+part0+'&part1=' +part1+'&part2=' +part2+'&part3=' +part3+'&part4=' +part4+'&part5=' +part5+'&nocache3 = '+nocache3);
http3.onreadystatechange = insertReply3;
http3.send(null);
}                                                           // відправляє масив із темою на сервер у форматі JSON


function insertReply3() {
if(http3.readyState == 4){ 
var response = http3.responseText; 
document.getElementById('div3id').innerHTML = 'Тему збережено'+response;
 }
 }
  
  