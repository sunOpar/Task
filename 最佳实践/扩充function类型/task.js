Function.prototype.method = function (name, func){
	this.prototype[name] = func;
	return this;
}
Number.method('integer',function(){
	return Math[this < 0 ? 'ceil' : 'floor'](this);
});
(-10/3).integer();