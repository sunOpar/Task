$(document).ready(function(){
		var windowsUrl = location.hash.toLowerCase();
		console.log(windowsUrl);
		var targetUrl = ['n1','n2','n3','n4','n5','n6','n7','n8'];
		changeUrl.init(windowsUrl,targetUrl);
	});
	var changeUrl ={
		//截取url中末尾
		getUrl: function(targetUrl){
			console.log(targetUrl);
			var url = targetUrl.match(/#\w+/).toString();
			url = url.replace('#','');
			console.log(url);
			return url;
		},
		//判断截取的url与本地是否对应
		match:function(sliceUrl,targetUrl){
			for(var i = 0, len = targetUrl.length; i < len; i++){
				if(targetUrl[i] == sliceUrl){
					console.log('成功');
					return true;
				}
				else{
					console.log(targetUrl[i]);
				}
			}
		},
		changeSidebar:function(sliceUrl){
			var ele = $('.'+sliceUrl);
			console.log(sliceUrl);
			console.log(ele);
			var li = $(ele.children('li'));
			console.log(li.html());
			li.addClass('on-myList');
			console.log(li.attr('class'));
		},
		init:function(windowsUrl,targetUrl){
			var i = targetUrl.length > 0? targetUrl.length:0;
			if(i == 0){
				return;
			}
			else{
				var sliceUrl = this.getUrl(windowsUrl);
				console.log('浏览器地址为：'+sliceUrl);
				console.log('target:'+targetUrl);
				var a = this.match(sliceUrl,targetUrl);
				if(a){
					console.log('执行了');
					this.changeSidebar(sliceUrl);
				}
			}
		}
	}