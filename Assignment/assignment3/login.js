window.onload = loginLoad;
const querystring = window.location.search;
const urlParams = new URLSearchParams(querystring);
const user = urlParams.get("username");
const pass = urlParams.get("password");
console.log(user);
console.log(pass);

function loginLoad(){
	var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
}
function checkLogin(){
	let username = document.getElementById('username').value;
	let password = document.getElementById('password').value;
	if(username != user || password != pass )
	{
	alert("Invalid Username or Password");
	return false;
	}
	else
	{
		alert("Success");
	}
}

			