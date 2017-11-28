mui.init({
	preloadPages:[{
		url:"../main/main.html",
		id:"main.html"
	}]
})
var login_btn = null;
mui.plusReady(function(){
	login_btn = document.getElementById("login_btn");
	login_btn.addEventListener("tap",function(){
		var main = plus.webview.getWebviewById("main.html");
		mui.fire(main,'createPage',{})
		mui.openWindow("../main/main.html","main.html")
	})
})