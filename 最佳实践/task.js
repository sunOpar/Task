// ajax请求open添加url
 /**
 * 向get请求的url末尾添加查询字符串参数
 * @param {String} url   被添加的字符串
 * @param {String} name  参数名
 * @param {mix} value    参数值
 */
function addUrlParam(url,name,value){
	url+=(url.indexOf('?')==-1? "?":"&");
	url+=encodeURIComponent(name)+"="+encodeURIComponent(value);
	return url;
}
// 跨浏览器事件
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
// 增加load事件
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
// 判断数据类型
function check(obj){
  return Object.prototype.toString.call(obj).slice(7,-1);
}
// 给原型增加方法
Function.prototype.method = function (name, func){
	if(! this.prototype[name]){
		this.prototype[name] = func;
	}
	return this;
}
Number.method('integer',function(){
	return Math[this < 0 ? 'ceil' : 'floor'](this);
});
// (-10/3).integer();