var EventUtil = {
	addHandler: function(element, type, handler) {
		if (element.addEventListener) {
			element.addEventListener(type, handler, false);
		} else if (element.attachHandler) {
			element.attachHandler('on' + type, handler);
		} else {
			element['on' + type] = handler;
		}
	},
	removeHandler: function(element, type, handler) {
		if (element.removeEventLinstener) {
			element.removeEventLinstener(type, handler, false);
		} else if (element.detachHandler) {
			element.detachHandler('on' + type, handler);
		} else {
			element['on' + type] = null;
		}
	},
	getEvent: function(event){
		return event? event:window.event;
	},
	getTarget:function(event){
		return event.target || event.srcElement;
	},
	preventDefault:function(event){
		if(event.preventDefault){
			event.preventDefault();
		}
		else{
			event.returnValue = false;
		}
	},
	stopPropagation:function(event){
		if(event.stopPropagation){
			event.stopPropagation();
		}
		else{
			event.cancelBubble = true;			
		}
	}
};
function addLoadEvent(func) {
	var oldonload = window.onload;
	if(typeof window.onload != 'function'){
		window.onload = func;
	}
	else{
		window.onload = function(){
			oldonload();
			func();
		};
	}
}
