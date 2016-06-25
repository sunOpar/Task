$(function(){
	$('.musplay-wrap').delegate($('div'),'click',function(e){
		var that = $(e.target);
		if(that.hasClass('musplayon')){
			that.removeClass('musplayon');
			that.addClass('musplayoff');
			$('.playleft').addClass('playleft-on');
			$('.playright').addClass('playright-on');
			$('.music-source')[0].play();
		}
		else if(that.hasClass('musplayoff')){
			that.removeClass('musplayoff');
			that.addClass('musplayon');
			$('.playleft').removeClass('playleft-on');
			$('.playright').removeClass('playright-on');
			$('.music-source')[0].pause();
		}
	});
	$('.music-source')[0].addEventListener('ended',function(){
		var that =  $('.musplayoff');
			that.removeClass('musplayoff');
			that.addClass('musplayon');
			$('.playleft').removeClass('playleft-on');
			$('.playright').removeClass('playright-on');
			$('.music-source')[0].pause();
			$('.music-source')[0].load();
	},false);

});