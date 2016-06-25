$(function(){
 function lala(){
	$('#target').animate({
		marginTop: -20 +'px'
	},500,function(){
		var length = $('li').length;
		console.log(length);		
		var fir = $($('li')[0]);
		var parent = $('ul');
		fir.insertAfter($($('li')[length-1]));
		// parent.append(fir);
		$('#target').css('marginTop',0);	
	});
	}
setInterval(function(){
lala();},1000);
});