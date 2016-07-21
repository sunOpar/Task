var module = (function($){
	var _msg = {};
	var _coordinate = [];
	var _doScroll = function(e){
		// var _coordinate = {
		// 	'needLeastx':803,
		// 	'needLeasty':150,
		// 	'currentx':e.pageX,
		// 	'currenty':e.pageY
		// 	'needMostx':803+showImg.width
		// 	'needMosty':150+showImg.height
		// };
		_coordinate[2] = e.pageX;
		_coordinate[3] = e.pageY;
		console.log(_coordinate);
		if( _coordinate[3] >= _coordinate[1] &&
			_coordinate[3] <= _coordinate[5] &&
			_coordinate[2] >= _coordinate[0] &&
			_coordinate[2] <= _coordinate[4]
			){
			_showMagnifier(_coordinate);
		}
		else{
			_hideMagnifier();
		}
	}
	var _hideMagnifier = function(){
		_msg.magnifier.hide();
	}
	var _showMagnifier = function(_coordinate){
		_msg.magnifier.show();
		console.log(_msg.wrapHeight);
		// 放大镜的位置应该是其圆心与鼠标相等
		_msg.magnifier.css({
			'top' :_coordinate[3]-_msg.wrapHeight/2+'px',
			'left':_coordinate[2]-_msg.wrapWidth/2+'px'
		});
		// 图片移动的距离为鼠标当前距离减去图片的top位置和left位置
		// 而初始位置需要根据图片而定
		_msg.magnifier_img.css({
			'top':-(_coordinate[3]-_coordinate[1]-_msg.wrapHeight/3)*_msg.scale+'px',
			'left':-(_coordinate[2]-_coordinate[0]-_msg.wrapHeight/3)*_msg.scale+'px'
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
			'wrapWidth'    : magnifier.width(),
 			'showImgBound' : showImg[0].getBoundingClientRect(),
 			'scale'		   : 1,
 			'scrollLeft'   : Math.max(document.documentElement.scrollLeft,  
　　                             document.body.scrollLeft),  
            'scrollTop'    : Math.max(document.documentElement.scrollTop,  
　　                             document.body.scrollTop) 
		}
		_coordinate = [_msg.showImgBound.left + _msg.scrollLeft,
						  _msg.showImgBound.top  + _msg.scrollTop,
						  0,
						  0,
						  _msg.showImgBound.right  + _msg.scrollLeft,
						  _msg.showImgBound.bottom + _msg.scrollTop
						 ];
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