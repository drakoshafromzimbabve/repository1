<?php                                                     // тут методом пост повинен перекинутись шматок масиву або ж окремі його елементи і вивестись нижче, у центральному блоці
if ( (isset($_POST['vrse18']))&&(isset($_POST['vrse19']))&&(isset($_POST['vrse20']))&&(isset($_POST['vrse21']))&&(isset($_POST['vrse22']))&&(isset($_POST['vrse23']))&&(isset($_POST['vrse24']))&&(isset($_POST['vrse25'])) ) {
	$vrse18 = $_POST['vrse18'];
	$vrse19 = $_POST['vrse19'];
	$vrse20 = $_POST['vrse20'];
	$vrse21 = $_POST['vrse21'];
	$vrse22 = $_POST['vrse22'];
	$vrse23 = $_POST['vrse23'];
	$vrse24 = $_POST['vrse24'];
	$vrse25 = $_POST['vrse25'];
}           
?>
<html>
<head>
<link rel="stylesheet" href="library_view_blocks.css" type="text/css"/>
<script src="for_themeArray_ajax.js" language="javascript"></script>
<script src="ajax_framework2.js" language="javascript"></script>
</head>
<body class = "bodystyle">
<div class = "header_div">
<p style = "text-align:center;">Сайт зі статтями</p>
<img src = "cat.jpg" width="144" height="108" style = "right:5px; top:7px; position:absolute;"/>
</div>
<div class = "center_left_div">
<div class = "article_div" style = "align:center;" id = "articlediv">
<p> <?php echo "$vrse19"; ?> </p> <br></br>
<p align="center"><font size="<?php echo "$vrse23"; ?>" color="<?php echo "$vrse24"; ?>"><?php echo "$vrse20"; ?></font></p> <br></br>
<p align="center"><font color="<?php echo "$vrse25"; ?>"><?php echo "$vrse22"; ?></font></p> <br></br>
</div>
<p>center_left</p>
</div>
<div class = "left_div">
<p>left</p>
</div>
</body>
</html>