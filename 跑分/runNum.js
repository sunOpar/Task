var runNum = (function($){
	var _msg = {},
	var init = function(obj){
		_msg = obj;
		_runNum();
	},
	var _runNum = function(){
		var ele = _msg.ele;
		var num = _msg.reachNum;
		if(num){
			var startNum = 0;
			var count = 1;
			var runTime = _msg.runTime;
			var oneTime = (runTime/num);

			if(oneTime<20){
				count = _balanceTime(oneTime);
				oneTime = 20;
			}
			var timer = setInterval(runNum,oneTime);
			function runNum(){
				ele.text((startNum+=count)+'人');
				if(startNum >= num){
					ele.text((num)+'人');
					clearInterval(timer);
				}
			}	
		}
	},
	var _balanceTime = function(time){
		time = Math.floor(20/oneTime);
		return time;
	},
	return {
		'init':init
	}
})(jQuery);
