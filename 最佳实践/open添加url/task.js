/**
 * 向get请求的url末尾添加查询字符串参数
 * @param {String} url   被添加的字符串
 * @param {String} name  参数名
 * @param {mix} value    参数值
 */
function addUrlParam(url,name,value){
	url+=(url.indexOf('?')==-1? "?":"&");
	url+=encodeURIComponent(name)+"="+encodeURIComponent(value);
	return url;
}