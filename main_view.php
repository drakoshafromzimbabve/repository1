<html>
<head>
<link rel="stylesheet" href="main_view_blocks.css" type="text/css"/>
<script src="for_admin_btn.js" language="javascript"></script>
<script src="ajax_framework2.js" language="javascript"></script>
</head>
<body onload="fu_onload();" class = "bodystyle">
<div class = "header_div" id = "mainheaderdiv">
<p style = "text-align:center;">Сайт зі статтями</p>
<img src = "cat.jpg" width="144" height="108" style = "right:5px; top:7px; position:absolute;"/>
</div>
<div class = "left_div" id = "mainleftdiv">
<form action="javascript:func_admin_btn()" method="post">
<input type="submit" name="admin_btn" value="Сторінка 
адміністратора"/>
</form>
<p>Введіть пароль autovhid, щоб мати можливість додавати нові теми</p>
</div>
<div class = "center_left_div" id = "maincenterleftdiv">
<form action="library_view.php" method="post" enctype="multipart/form-data" class = "unvisible" id = "f2" name = "f22" style = "right:5px; top:0px; position:absolute;">
<input type="text" name="vrse18" size="20" maxlength="50" id = "inp18">
<input type="text" name="vrse19" size="20" maxlength="50" id = "inp19">
<input type="text" name="vrse20" size="20" maxlength="50" id = "inp20">
<input type="text" name="vrse21" size="20" maxlength="50" id = "inp21">
<input type="text" name="vrse22" size="20" maxlength="50" id = "inp22">
<input type="text" name="vrse23" size="20" maxlength="50" id = "inp23">
<input type="text" name="vrse24" size="20" maxlength="50" id = "inp24">
<input type="text" name="vrse25" size="20" maxlength="50" id = "inp25">
<input type="submit" name="knpka2" value="Видалити" id = "sbmtt"> 
</form>
<div class = "article_div" style = "align:center;" id = "articlediv">
<p>article_div</p>
</div>
</div>
<div class = "footer_div" id = "mainfooterdiv">
<p>footer</p>
</div>
</body>
</html>
