<?php include('create_table.php'); 
$MySQLRecordSet = mysql_query('SELECT * FROM particles');
$art = array(); 
$arti = array(); 
$arts = array(); 
$ariel = array('','','','','','','','');
$res = mysql_num_rows($MySQLRecordSet);

for ($i=1;$i<=$res;$i++){
	
	$MySQLRecordSet2 = mysql_query("SELECT * FROM particles WHERE id = '$i'");
	$resn = mysql_fetch_row($MySQLRecordSet2);
	
	array_push($arti, $resn);
	
}
$art = array_reverse($arti);

$co = (count($art)+1)/5;                      
$cou = ceil($co);                             // заокруглити до більшого - загальна кількість сторінок

$result = count($art);                        // загальна кількість тем у масиві
for ($j=0;$j<$cou;$j++){
	$archik = array();
	
	array_push($arts, $archik);               // додаються менші масиви за кількістю сторінок у великий
	for ($i=0;$i<5;$i++){
		if (($j*5+$i)<$result) {
		array_push($arts[$j], $art[$j*5+$i]);  // додаються теми по 5 на сторінку
		
		}
		if (($j*5+$i)==$result) {
		array_push($arts[$j], $ariel);
		
		}
		if (($j*5+$i)>$result) {
		array_push($arts[$j], $ariel);       // якщо на останню сторінку не вистачає тем, додаю порожній масив.
		                                     // Це таке придумала замість foreach
		}
	}
}
$particles_json = json_encode($arts); 
echo $particles_json;

?>