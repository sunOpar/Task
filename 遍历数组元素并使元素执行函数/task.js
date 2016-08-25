function each(arr,fn){
	for(var i in arr){
		fn(arr[i],i);
	}
}
// 例子
var arr = ['java', 'c', 'php','html'];
function output(item,index){
	console.log(index + ':' + item);
}
each(arr,output);