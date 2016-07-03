var module = (function($){
	var _$body = $('body');
	var foo = function(){
		console.log(_$body);
	}
	return {
		foo: foo
	}
})(jQuery)