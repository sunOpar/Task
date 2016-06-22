var EventUtil = {
	addHandler:function(element,type,handler){
		if(element.addEventListener){
			element.addEventListener(type,handler,false);
		}
		else if(element.attachEvent){
			element.attachEvent('on'+type,handler);
		}
		else{
			element['on'+type]=handler;
		}
	},
	removeHandler:function(element,type,handler){
		if(element.removeEventListener){
			element.removeEventListener(type,handler,false);
		}
		else if(element.detachEvent){
			element.detachEvent('on'+type,handler);
		}
		else{
			element['on'+type]=null;
		}
	}
}
function addLoadEvent(fn){
	var oldonload = window.onload;
	if(typeof window.onload != 'funciton'){
		window.onload = fn;
	}
	else{
		window.onload = function(){
			oldonload();
			fn();
		}
	}
}
(function(){
	
	function change(e){
		console.log(e.target.getAttribute('class'));
		createBg();
		changeSize(e);
	}
	// 更改缩略图显示大小
	function changeSize(e){
		e.target.classList.toggle('toBig');
		console.log(e.target.getAttribute('class'));
	}
	// 创建背景
	function createBg(){
		var wrap = document.createElement('div');
		var bg = document.createElement('div');
		var img = document.createElement('img');
		img.setAttribute('src','big.jpg');
		var size = getSize(document.body);
		img.style.width = size[0]*0.8+'px';
		img.style.height = size[1]*0.8 + 'px';
		img.setAttribute('top',size[1]*0.1+'px');
		img.setAttribute('left',size[0]*0.1+'px');
		img.classList.add('big');
		wrap.classList.add('bg-wrap');
		bg.classList.add('bg');
		wrap.appendChild(bg);
		wrap.appendChild(img);
		document.body.appendChild(wrap);
	}
	function getSize(obj){
		var size = [];
		size[0] = obj.clientWidth;
		size[1] = obj.clientHeight;
		return size;
	}
	// 获取页面缩略图，增加点击事件
	function init(){
		var small = document.querySelector('.small');
		console.log(small);
		EventUtil.addHandler(small,'click',function(e){
			change(e);
		});
	}
	addLoadEvent(init);

})();