var username = "";
var password = "";

new Konami().load('https://www.youtube.com/watch?v=dQw4w9WgXcQ')

console.log("%c Hey! If you're interested in how the site works, you should check out the source code on GitHub! https://github.com/LFHS/CenterScout/", 'background: #222; color: #bada55');

function loginToLFHS(url) {
	var form = document.createElement("form");
	form.setAttribute("method", "POST");
	form.setAttribute("action", "/login/index.aspx");
	
	var loginData = {
		Email: username, // Why is a student's ID put in a field called Email :v
		password: password,
		rememberMe: 'false',
		LinkID: '',
		Referrer: '/students/index.aspx', // Why not use the Referrer HTTP header?
		pageaction: 'login'
	}

	for(var key in loginData) {
		if(loginData.hasOwnProperty(key)) {
			var hiddenField = document.createElement("input");
			hiddenField.setAttribute("type", "hidden");
			hiddenField.setAttribute("name", key);
			hiddenField.setAttribute("value", loginData[key]);

			form.appendChild(hiddenField);
		}
	}

	document.body.appendChild(form);
	form.submit();
}
