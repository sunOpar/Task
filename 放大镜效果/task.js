var module = (function($){
	var _msg = {};
	var _doScroll = function(e){
		console.log('x坐标为：'+e.pageX+'y坐标为：'+e.pageY);
		// var coordinate = {
		// 	'needLeastx':803,
		// 	'needLeasty':150,
		// 	'currentx':e.pageX,
		// 	'currenty':e.pageY
		// 	'needMostx':803+showImg.width
		// 	'needMosty':150+showImg.height
		// };
		var coordinate = [_msg.showImgBound.left + _msg.scrollLeft,
						  _msg.showImgBound.top  + _msg.scrollTop,
						  e.pageX,
						  e.pageY,
						  _msg.showImgBound.right,
						  _msg.showImgBound.bottom
						 ];
		console.log(coordinate);
		if( coordinate[3] >= coordinate[1] &&
			coordinate[3] <= coordinate[5] &&
			coordinate[2] >= coordinate[0] &&
			coordinate[2] <= coordinate[4]
			){
			_showMagnifier(coordinate);
			coordinate=null;
		}
		else{
			_hideMagnifier();
		}
	}
	var _hideMagnifier = function(){
		_msg.magnifier.hide();
	}
	var _showMagnifier = function(coordinate){
		_msg.magnifier.show();
		_msg.magnifier.css({
			'top' :coordinate[3]-_msg.wrapHeight+'px',
			'left':coordinate[2]-_msg.wrapHeight/2+'px'
		});
		_msg.magnifier_img.css({
			'top':-(coordinate[3]-coordinate[1]-_msg.wrapHeight/3.2)*_msg.scale+'px',
			'left':-(coordinate[2]-coordinate[0]-_msg.wrapWidht/3.2)*_msg.scale+'px'
		});

	}
	var _bindMouse = function(){
		_msg.showImg.on('mousemove',function(e){
			_doScroll(e);
		});
		_msg.magnifier.on('mousemove',function(e){
			_doScroll(e);
		});
	}
	var _UnBindMouse = function(){
		_msg.showImg.off();
		_msg.magnifier.off();
	}
	var init = function(showImg,magnifier){
		_msg = {
			'showImg': showImg,
			'magnifier':magnifier,
			'magnifier_img': magnifier.children('img'),
			'wrapHeight'   : magnifier.height(),
			'wrapWidht'    : magnifier.width(),
 			'showImgBound' : showImg[0].getBoundingClientRect(),
 			'scale'		   : 1,
 			'scrollLeft'   : Math.max(document.documentElement.scrollLeft,  
　　                             document.body.scrollLeft),  
            'scrollTop'    : Math.max(document.documentElement.scrollTop,  
　　                             document.body.scrollTop) 
		}
		$(window).on('resize',function(){
			_msg.showImgBound = showImg[0].getBoundingClientRect();
		})
		_bindMouse();
		
	}
	var resizeImg = function(img1,img2,scale){
		_msg.scale = scale;
		var height = img1.height();
		var width = img1.width();
		img2.css({
			'height': height*scale+'px',
			'width' : width*scale+'px'
		});
	}
	return {
		'init':init,
		'resizeImg':resizeImg
	}
})(jQuery);