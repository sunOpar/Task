<<<<<<< HEAD
function User_index(ul,addTop){
	this.ul = ul;
	this.addTop = addTop;
	this.doanimate();
	this.bindmouse();
}
User_index.prototype.doanimate = function(){
		var that = this;
		this.timer = setInterval(function(){
			var vtop = parseInt(that.ul.css('top'),10);
			if(vtop <= (-that.addTop-3)){
				vtop = -3;
			}
				that.ul.css({
					top:vtop-1
				})
		},30);
}
User_index.prototype.bindmouse = function(){
	var that = this;
		this.ul.on('mouseenter mouseleave',function(e){
			if(e.type == 'mouseenter'){
				clearInterval(that.timer);
			}
			else if(e.type == 'mouseleave'){
				that.doanimate(9);
				console.log(111);
			}
		});
=======

function User_index(ul,addTop,originTop){
  this.ul = ul;
  this.addTop = addTop;
  this.originTop = originTop||0;
  this.doanimate();
  this.bindmouse();
  this.change();
}
User_index.prototype.change = function(){
  var that = this;
  $(window).on('hashchange',function(){
    clearInterval(that.timer);
    console.log(that);
  });
}

User_index.prototype.doanimate = function(){
    var that = this;
    that.timer = setInterval(function(){
      var vtop = parseInt(that.ul.css('top'),10) || 0;
      if(vtop <= (-that.addTop+5)){
        console.log('重启，当前top值为：',vtop);
        console.log('需要的top值为：',-that.addTop);
        vtop = that.originTop;
      }
      that.ul.css({
        top:vtop-1
      })
    },30);
}
User_index.prototype.bindmouse = function(){
  var that = this;
    that.ul.on('mouseenter mouseleave',function(e){
      if(e.type == 'mouseenter'){
        clearInterval(that.timer);
      }
      else if(e.type == 'mouseleave'){
        that.doanimate();
      }
    });
>>>>>>> 51b6b2c92a193d8b8689d76c31b7c8c48c1d3fc4
}
