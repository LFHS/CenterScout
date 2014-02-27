var username = "";
var password = "";

new Konami(function() {
	// Flappy Braille
	(function(){var%20FB={score:0,best_score:0,play:false,delay:200,collision_char:9760,braille:{dots:[[0,3],[1,4],[2,5],[6,7]],base:10240},space:{width:100,braille_width:0,pipes_interval:3,pipes_start:15,pipes:[],frame:%22%22,set_braille_width:function(){this.braille_width=Math.ceil(this.width/2)},generate_pipes:function(){this.pipes=[];for(i=this.pipes_start;i%3Cthis.width;i+=this.pipes_interval){this.pipes[i]=Math.floor(Math.random()*4)}},move:function(){if(FB.play){var%20e=[];var%20t=0;FB.space.pipes.forEach(function(n,r){if(r%3E0){e[r-1]=n;if(r==FB.me.x){FB.score+=1}}t=r-1});if(t+FB.space.pipes_interval%3CFB.space.width){e[t+FB.space.pipes_interval]=Math.floor(Math.random()*4)}FB.space.pipes=e;FB.space.paint();FB.delay-=1}setTimeout(FB.space.move,FB.delay)},get_dot:function(e,t,n){var%20r=0;if(n==FB.me.y%26%26t+e*2==FB.me.x){r+=Math.pow(2,FB.braille.dots[n][t])}if(FB.space.pipes[t+e*2]===parseInt(FB.space.pipes[t+e*2])%26%26FB.space.pipes[t+e*2]!==n){if(r%3E0){throw%22FBCollision%22}r+=Math.pow(2,FB.braille.dots[n][t])}return%20r},paint:function(){var%20e=%22%22;for(var%20t=0;t%3CFB.space.braille_width;t++){var%20n=FB.braille.base;try{for(var%20r=0;r%3C2;r++){for(var%20i=0;i%3C4;i++){n+=FB.space.get_dot(t,r,i)}}}catch(s){if(s==%22FBCollision%22){n=FB.collision_char;FB.game_over()}}e+=String.fromCharCode(n)}this.show(e)},show:function(e){this.frame=(%220%22+FB.best_score).slice(-2)+String.fromCharCode(FB.braille.base)+(%220%22+FB.score).slice(-2)+e;if(FB.level_id){document.getElementById(FB.level_id).innerHTML=this.frame}else{history.replaceState({},%22%22,%22%23%22+this.frame)}}},me:{x:5,y:1,move_up:function(){if(FB.play%26%26this.y%3E0){this.y-=1}},move_down:function(){if(FB.play%26%26this.y+1%3C4){this.y+=1}}},input:{keys:{UP:38,DOWN:40,RIGHT:39,LEFT:37,press:function(e){switch(e.keyCode){case%20FB.input.keys.UP:FB.me.move_up();break;case%20FB.input.keys.DOWN:FB.me.move_down();break;case%20FB.input.keys.LEFT:FB.start();break;case%20FB.input.keys.RIGHT:FB.pause();break}FB.space.paint()}}},pause:function(){this.play=!this.play},game_over:function(){this.play=false;if(this.score%3Ethis.best_score){this.best_score=this.score;document.getElementById(%22messager%22).contentWindow.postMessage({FB:this.score},%22*%22)}if(!document.getElementById(%22FBShare%22)){share=document.createElement(%22a%22);share.href=%22javascript:FB.tweet();%22;share.id=%22FBShare%22;share.style.fontFamily=%22monospace%22;share.style.position=%22fixed%22;share.style.fontSize=%2218px%22;share.style.left=%220%22;share.style.zIndex=%2299999%22;share.style.padding=%2210px%22;share.style.textDecoration=%22underline%22;share.style.color=%22%23666%22;share.style.display=%22inline-block%22;share.style.backgroundColor=%22rgba(255,255,255,0.9)%22;share.innerHTML=%22Tweet%20your%20score%20!%22;document.body.insertBefore(share,document.body.firstChild)}},tweet:function(){var%20e=%22http://twitter.com/intent/tweet%3Ftext=%22+FB.space.frame.substr(0,20)+%22%26url=%22+encodeURIComponent(%22http://flappybraille.ndre.gr%22)+%22%26hashtags=flappybraille%22;window.open(e,%22Tweet%20my%20score%22)},receive_score:function(e){if(!isNaN(parseInt(e.data.FB))){FB.best_score=parseInt(e.data.FB);FB.space.paint()}},init:function(e){this.level_id=e;this.space.set_braille_width();this.space.generate_pipes();var%20t=document.createElement(%22iframe%22);t.src=%22//flappybraille.ndre.gr/score.html%22;t.frameBorder=0;t.style.display=%22none%22;t.id=%22messager%22;document.body.appendChild(t);document.addEventListener(%22keydown%22,this.input.keys.press);window.addEventListener(%22message%22,this.receive_score,false);setTimeout(this.space.move,this.delay);this.space.paint()},start:function(){this.score=0;if(this.delay%3C200){this.space.generate_pipes()}this.delay=200;this.me.y=1;this.play=true;this.space.paint()}};FB.init();window.FB = FB;})();
}).load();

console.log("%c Hey! If you're interested in how the site works, you should check out the source code on GitHub! https://github.com/LFHS/CenterScout/", 'background: #222; color: #bada55');

function loginToLFHS(url) {
	var form = document.createElement("form");
	form.setAttribute("method", "POST");
	form.setAttribute("action", "https:///www.lakeforestschools.org/login/index.aspx");
	
	var loginData = {
		Email: username, // Why is a student's ID put in a field called Email :v
		password: password,
		rememberMe: 'false',
		LinkID: '',
		Referrer: url, // Why not use the Referrer HTTP header?
		pageaction: 'Login'
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
