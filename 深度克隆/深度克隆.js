function getClass(obj){//得到对象类型
  return Object.prototype.toString.call(obj).slice(8,-1);
}
function cloneObject(src){
  var result = getClass(src) === Array ? []:{};//为【for-in】循环做准备
    for(var key in src){
      if(typeof src[key] === 'object' && src[key] !== null){
        result[key] = arguments.callee(src[key]);
      }
      else{
        result[key] = src[key];
      }
    }
    return result;
}
var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};
// 例子
var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";
console.log(abObj.a);        //2
console.log(abObj.b.b1[0]);  //Hello
console.log(tarObj.a);       //1
console.log(tarObj.b.b1[0]); //hello