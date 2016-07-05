var listenTop = (function($){
		var _cooridinate = -Infinity;
		var _flag = true;
		var msg = {};
		var init = function(obj){
			msg = obj;
			$(window).on('scroll',function(){
				_doscroll($(this));
			})
		var _doscroll = function(){
			if(msg.ele[0].getBoundingClientRect().top <= 0){
				msg.ele.addClass(msg.needClass);
				msg.ele.css('width',msg.width+'px');
				if(_flag){
					_cooridinate = $(this).scrollTop();
					_flag = false;				
				}
				if($(this).scrollTop()<_cooridinate){
					msg.ele.removeClass(msg.needClass);
					_flag = true;				
				}
			}
		}
		}
		return{
			'init':init
		}
	})(jQuery);