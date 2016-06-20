$(function(){
function wrap(){
	var x = 20;
	return function lala(){
		$('#target').animate({
			marginTop: -x +'px'
		},500,function(){
		var length = $('li').length;
		var fir = $('li')[0];
		console.log(fir);
		var parent = $('ul');
		parent.append(fir);
		$('#target').css('marginTop',0);	
		});
	}
}
var a = wrap();
setInterval(function(){
a();},5000);

});