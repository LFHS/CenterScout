var username = "";
var password = "";

window.location.hash = "";

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

var easteregg = new Konami();
function flap() {
	(function(){var FB={score:0,best_score:0,play:false,delay:200,collision_char:9760,braille:{dots:[[0,3],[1,4],[2,5],[6,7]],base:10240},space:{width:100,braille_width:0,pipes_interval:3,pipes_start:15,pipes:[],frame:"",set_braille_width:function(){this.braille_width=Math.ceil(this.width/2)},generate_pipes:function(){this.pipes=[];for(i=this.pipes_start;i<this.width;i+=this.pipes_interval){this.pipes[i]=Math.floor(Math.random()*4)}},move:function(){if(FB.play){var e=[];var t=0;FB.space.pipes.forEach(function(n,r){if(r>0){e[r-1]=n;if(r==FB.me.x){FB.score+=1}}t=r-1});if(t+FB.space.pipes_interval<FB.space.width){e[t+FB.space.pipes_interval]=Math.floor(Math.random()*4)}FB.space.pipes=e;FB.space.paint();FB.delay-=1}setTimeout(FB.space.move,FB.delay)},get_dot:function(e,t,n){var r=0;if(n==FB.me.y&&t+e*2==FB.me.x){r+=Math.pow(2,FB.braille.dots[n][t])}if(FB.space.pipes[t+e*2]===parseInt(FB.space.pipes[t+e*2])&&FB.space.pipes[t+e*2]!==n){if(r>0){throw"FBCollision"}r+=Math.pow(2,FB.braille.dots[n][t])}return r},paint:function(){var e="";for(var t=0;t<FB.space.braille_width;t++){var n=FB.braille.base;try{for(var r=0;r<2;r++){for(var i=0;i<4;i++){n+=FB.space.get_dot(t,r,i)}}}catch(s){if(s=="FBCollision"){n=FB.collision_char;FB.game_over()}}e+=String.fromCharCode(n)}this.show(e)},show:function(e){this.frame=("0"+FB.best_score).slice(-2)+String.fromCharCode(FB.braille.base)+("0"+FB.score).slice(-2)+e;if(FB.level_id){document.getElementById(FB.level_id).innerHTML=this.frame}else{history.replaceState({},"","#"+this.frame)}}},me:{x:5,y:1,move_up:function(){if(FB.play&&this.y>0){this.y-=1}},move_down:function(){if(FB.play&&this.y+1<4){this.y+=1}}},input:{keys:{UP:38,DOWN:40,RIGHT:39,LEFT:37,press:function(e){switch(e.keyCode){case FB.input.keys.UP:FB.me.move_up();break;case FB.input.keys.DOWN:FB.me.move_down();break;case FB.input.keys.LEFT:FB.start();break;case FB.input.keys.RIGHT:FB.pause();break}FB.space.paint()}}},pause:function(){this.play=!this.play},game_over:function(){this.play=false;if(this.score>this.best_score){this.best_score=this.score;document.getElementById("messager").contentWindow.postMessage({FB:this.score},"*")}if(!document.getElementById("FBShare")){share=document.createElement("a");share.href="javascript:FB.tweet();";share.id="FBShare";share.style.fontFamily="monospace";share.style.position="fixed";share.style.fontSize="18px";share.style.left="0";share.style.zIndex="99999";share.style.padding="10px";share.style.textDecoration="underline";share.style.color="#666";share.style.display="inline-block";share.style.backgroundColor="rgba(255,255,255,0.9)";share.innerHTML="Tweet your score !";document.body.insertBefore(share,document.body.firstChild)}},tweet:function(){var e="http://twitter.com/intent/tweet?text="+FB.space.frame.substr(0,20)+"&url="+encodeURIComponent("http://flappybraille.ndre.gr")+"&hashtags=flappybraille";window.open(e,"Tweet my score")},receive_score:function(e){if(!isNaN(parseInt(e.data.FB))){FB.best_score=parseInt(e.data.FB);FB.space.paint()}},init:function(e){this.level_id=e;this.space.set_braille_width();this.space.generate_pipes();var t=document.createElement("iframe");t.src="//flappybraille.ndre.gr/score.html";t.frameBorder=0;t.style.display="none";t.id="messager";document.body.appendChild(t);document.addEventListener("keydown",this.input.keys.press);window.addEventListener("message",this.receive_score,false);setTimeout(this.space.move,this.delay);this.space.paint()},start:function(){this.score=0;if(this.delay<200){this.space.generate_pipes()}this.delay=200;this.me.y=1;this.play=true;this.space.paint()}};FB.init();window.FB = FB;})();
}
easteregg.code = flap;
easteregg.load();
