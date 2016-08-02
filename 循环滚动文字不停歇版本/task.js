
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
}
