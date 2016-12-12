<?php
$db = mysql_connect("localhost", "root", "usbw");
mysql_select_db("forsite",$db);
$result1 = mysql_query("CREATE TABLE IF NOT EXISTS particles (id INT NOT NULL AUTO_INCREMENT,
create_date DATE NOT NULL,
content0 LONGTEXT NOT NULL,
content1 LONGTEXT NOT NULL,
content2 LONGTEXT NOT NULL,
content3 LONGTEXT NOT NULL,
content4 LONGTEXT NOT NULL,
content5 LONGTEXT NOT NULL,
PRIMARY KEY (id))",$db) or die (mysql_error());
?>