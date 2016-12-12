function createObject() {
var request_type2;
var browser2 = navigator.appName;
if(browser2 == "Microsoft Internet Explorer"){
request_type2 = new ActiveXObject("Microsoft.XMLHTTP");
}else{
request_type2 = new XMLHttpRequest();
}
return request_type2;
}
var http2 = createObject();
var nocache2 = 0;

function fu_onload() {
nocache2 = Math.random();
http2.open('get', 'add_table-particles_sql.php?&nocache2 = '+nocache2);
http2.onreadystatechange = insertReply;
http2.send(null);
}

function insertReply() {
	
if(http2.readyState == 4){ 
var response = http2.responseText;
var parson = JSON.parse(response); 
  
var num = parson.length;                                 // кількість сторінок
var newElem1 = document.createElement("table");
newElem1.id = 'ne1';
document.getElementById('articlediv').appendChild(newElem1);
for ($i = 0; $i < parson[0].length; $i++) {            // там елементів буде 5 на сторінці, але для наглядності

var newRow1=newElem1.insertRow($i);
var newCell1 = newRow1.insertCell(0);
newCell1.width="1000";

var bt = document.createElement("input");
bt.type = 'button';
bt.value = parson[0][$i][2];
bt.id = 'bt'+parson[0][$i][0];
if (bt.id == 'bt') {
	bt.style.visibility = 'hidden';
}
var p7 = document.createElement("p");
p7.style="font-size: 18pt";
p7.innerHTML = parson[0][$i][2];
newCell1.appendChild(p7);
var p8 = document.createElement("p");
p8.innerHTML = parson[0][$i][3];
newCell1.appendChild(p8);

newCell1.appendChild(bt);


bt.onclick = func_theme;                              // почепили функцію при кліку на кожну кнопку з темою
	
}


if (parson.length > 1) {
	var forma7 = document.createElement('form');

document.getElementById('mainfooterdiv').appendChild(forma7);
	for ($a = 1; $a <= parson.length; $a++) {
var sub2 = document.createElement('input');
sub2.type = "button";
sub2.value = $a;
sub2.id = 'sub2'+$a;
forma7.appendChild(sub2);
sub2.onclick = doSomething;
	}

} 
 }
 }
 
function func_theme(e) {  
	var response = http2.responseText;
    var parson = JSON.parse(response); 
		 e = e || window.event;
         var el = e.target || e.srcElement;
		  
		 for ($a = 0; $a < parson.length; $a++) {          // перебираємо кількість сторінок
		 for ($k = 0; $k < parson[$a].length; $k++) {          // перебираємо по кількості тем на сторінці
		 if ('bt'+parson[$a][$k][0] == el.id) {
			 
			 document.getElementById('inp18').value = parson[$a][$k][0];
			 document.getElementById('inp19').value = parson[$a][$k][1];
			 document.getElementById('inp20').value = parson[$a][$k][2];
			 document.getElementById('inp21').value = parson[$a][$k][3];
			 document.getElementById('inp22').value = parson[$a][$k][4];
			 document.getElementById('inp23').value = parson[$a][$k][5];
			 document.getElementById('inp24').value = parson[$a][$k][6];
			 document.getElementById('inp25').value = parson[$a][$k][7];
			 
		 document.forms["f22"].submit();                          // відправляємо масив даних щодо конкретної теми методом post на сторінку library_view.php

	 }
		 }
		 }
		}
		 
	 
	 function doSomething(e) {                                // перемикачі сторінок
	 var response = http2.responseText;
     var parson = JSON.parse(response); 

	 e = e || window.event;
     var el2 = e.target || e.srcElement;
	 document.getElementById('articlediv').removeChild(document.getElementById('ne1')); 
	 var newElem1=document.createElement("table");
	 newElem1.id = 'ne1';
	 document.getElementById('articlediv').appendChild(newElem1);
    
	 for ($a = 1; $a <= parson.length; $a++) {
		 
		 if(el2.id == 'sub2'+$a) {
			 
			 
 for ($i = 0; $i <= 5; $i++) {
	 
var newRow1=newElem1.insertRow($i);

var newCell1 = newRow1.insertCell(0);
newCell1.width="1000";

var bt = document.createElement("input");
bt.type = 'button';

var p7 = document.createElement("p");
p7.style="font-size: 18pt";
p7.innerHTML = parson[$a-1][$i][2];
newCell1.appendChild(p7);
var p8 = document.createElement("p");
p8.innerHTML = parson[$a-1][$i][3];
newCell1.appendChild(p8);
bt.value = parson[$a-1][$i][2];
bt.id = 'bt'+parson[$a-1][$i][0];
if (bt.id == 'bt') {
	bt.style.visibility = 'hidden';
}
newCell1.appendChild(bt);
bt.onclick = func_theme;

 }
 
		 }
		
	 }
	
}