<?php 
if (isset($_POST['adminpass'])) {
	$adminpass = $_POST['adminpass'];
	if (md5($adminpass) == 'c3b5292da08f09fb88d56dc9b32c5fea') {
include('redactor_view.php');
}
else {
	echo ('Неправильний пароль');
} 
}
?>