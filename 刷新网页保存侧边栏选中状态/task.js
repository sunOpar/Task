var changeUrl ={
		//截取url中末尾
		getUrl: function(targetUrl){
			console.log("targetUrl"+targetUrl);
			if(targetUrl.search(/personal-center[a-zA-Z0-9-_#\/]+/)>-1){
				var url = targetUrl.match(/personal-center[a-zA-Z0-9-_#\/]+/).toString();
				url = url.replace(/personal-center[#\/]{0,1}/,'');
				console.log('url为：'+url);
				return url;
			}else{
				
				return false;
			}
		},
		//判断截取的url与本地是否对应
		match:function(sliceUrl,targetUrl){
			for(var i = 0, len = targetUrl.length; i < len; i++){
				if(targetUrl[i] == sliceUrl){
					console.log('成功');
					return true;
				}
				else{
					console.log('当前截取的url为：'+sliceUrl);
					console.log('数组中的url为：'+targetUrl[i]);
				}
			}
		},
		//给预制对应的sidebar增加样式
		changeSidebar:function(sliceUrl){
			var ele = $('.'+sliceUrl);
			console.log(sliceUrl);
			console.log(ele);
			ele.addClass('on-myList');
		},
		init:function(windowsUrl,targetUrl){
			var i = targetUrl.length > 0? targetUrl.length:0;
			if(i == 0){
				return;
			}
			else{
				var sliceUrl = this.getUrl(windowsUrl);
				if(sliceUrl){
					var a = this.match(sliceUrl,targetUrl);
					if(a){
						this.changeSidebar(sliceUrl);
					}
				}
				else{
					return;
				}
			}
		}
	}