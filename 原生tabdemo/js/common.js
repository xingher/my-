//设置系统拦背景颜色
function setStatusBarBackground(){
plus.navigator.setStatusBarBackground('#108ee9');
	
}

var _openw = null;
		/*
		 * url:页面路径
		 * id：页面id
		 * styles：页面的样式
		 * extras：向新页面传的参数
		 * */
function creatNewPage (url,id,styles,extras){
	console.log(url)
	if(_openw == null){
		_openw = true;
		var newPage = plus.webview.create(url,id,styles,extras);
		newPage.addEventListener("loaded",function(){
			newPage.show("pop-in",300,function(){
				_openw = null;
			});
		});
	}else{
		console.log("已经在创建了")
	}
}
