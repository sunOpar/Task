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
	function init(){
		var small = document.querySelector('.small');
		console.log(small);
		EventUtil.addHandler(small,'click',function(e){
			change(e);
		});
	}
	function change(e){
		console.log(e.target.getAttribute('class'));
		changeSize(e);
	}
	function changeSize(e){
		e.target.setAttribute('class','toBig');
		console.log(e.target.getAttribute('class'));
	}
	addLoadEvent(init);
})();