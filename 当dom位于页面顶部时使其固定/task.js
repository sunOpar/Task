<<<<<<< HEAD
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
=======
(function(){
	var listenTop = (function($){
		var msg = {};
		var count = 0;
		var _cooridinate = -Infinity;
		var _cooridinate_bottom = -Infinity;
		var _scroll = -Infinity;
		var _topv = -Infinity;
		var _flag = true;
		var init = function(obj){
			setTimeout(function(){
			msg = obj;
			//记录包裹层相对于页面的位置
			_cooridinate = msg.ele[0][0].getBoundingClientRect().top+$(window).scrollTop();
			$(window).on('scroll',function(){
				_doscroll($(this));
			})	
			},250);
			
		}
		var _doscroll = function(that){
			//当滚轮大于页面位置时，进行操作，否则取消
			console.log($(window).scrollTop());	
			if(that.scrollTop()> _cooridinate){
				if(_flag){
					_topv = parseFloat(msg.ele[1].css('top'));
				}
				msg.ele[1].addClass(msg.needClass[0]);
				msg.ele[2].addClass(msg.needClass[0]+' '+msg.needClass[1]);
				msg.ele[3].addClass(msg.needClass[2]);
			}else {
				msg.ele[1].removeClass(msg.needClass[0]);
				msg.ele[2].removeClass(msg.needClass[0]+' '+msg.needClass[1]);
				msg.ele[3].removeClass(msg.needClass[2]);
			}
			//如果列表底部相对于窗口头部的距离大于包裹层的高度，首先记录那一瞬间的滚轮值，
			if(msg.ele[0][0].getBoundingClientRect().bottom <= msg.ele[1][0].getBoundingClientRect().bottom){
				if(_flag){
					_cooridinate_bottom = that.scrollTop()>1660? 1660:that.scrollTop();

					console.log('当前滚轮值：'+_cooridinate_bottom);
					_flag = false;
				}
				_scroll = that.scrollTop();
			}
			//如果当前滚轮值大于那个滚轮值，那么对列表及其他组件进行上下位移，位移距离为当前滚轮与记录滚轮的差
			if(that.scrollTop()>=_cooridinate_bottom){
				msg.ele[1].css('top',_topv-(that.scrollTop()-_cooridinate_bottom)+'px');
				msg.ele[2].css('top',-(that.scrollTop()-_cooridinate_bottom)+'px');
			}
			//否则还原
			else{
				msg.ele[1].css('top',_topv);
				msg.ele[2].css('top',0);
			}
				
			
>>>>>>> 51b6b2c92a193d8b8689d76c31b7c8c48c1d3fc4
		}
		return{
			'init':init
		}
<<<<<<< HEAD
	})(jQuery);
=======
	})(jQuery);
	
	listenTop.init({
		'ele': [$('.question_list'),$('.type_choose'),$('.ask-search-wrap'),$('.askList')],
		'needClass': ['fix-choose','fix-search','add-ask-margin']
		
	});
})();
>>>>>>> 51b6b2c92a193d8b8689d76c31b7c8c48c1d3fc4
