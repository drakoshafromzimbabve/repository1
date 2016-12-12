<?php include('create_table.php'); 
if ( (isset($_GET['part0']))&&(isset($_GET['part1']))&&(isset($_GET['part2']))&&(isset($_GET['part3']))&&(isset($_GET['part4']))&&(isset($_GET['part5'])) ) {
	$part0 = $_GET['part0'];
	$part1 = $_GET['part1'];
	$part2 = $_GET['part2'];
	$part3 = $_GET['part3'];
	$part4 = $_GET['part4'];
	$part5 = $_GET['part5'];
	$part0x = htmlspecialchars($part0);
	$part1x = htmlspecialchars($part1);
	$part2x = htmlspecialchars($part2);
	$part3x = htmlspecialchars($part3);
	$part4x = htmlspecialchars($part4);
	$part5x = htmlspecialchars($part5);
	$date_today = date("y.m.d");
	$strSQL = "INSERT INTO particles(create_date, content0, content1, content2, content3, content4, content5) VALUES('$date_today', '$part0x','$part1x','$part2x','$part3x','$part4x','$part5x')"; 
mysql_query($strSQL) or die(mysql_error());
}                                                         // зберегли масив з темою на сервері
?>