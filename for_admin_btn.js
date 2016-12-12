function func_admin_btn() {
	if (document.getElementById('fo1') == undefined) {
	var forma1 = document.createElement('form');
forma1.id = 'fo1';
forma1.action = "check_password.php";
forma1.method = "post";
document.getElementById('mainleftdiv').appendChild(forma1);
var inp1 = document.createElement('input');
inp1.type = "password";
inp1.name = 'adminpass';
inp1.id = 'inp1_pass';
forma1.appendChild(inp1);
var sub1 = document.createElement('input');
sub1.type = "submit";
sub1.id = 'sub1_sub';
sub1.value = 'Увійти';
forma1.appendChild(sub1);
}
}