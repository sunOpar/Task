function Trim(str) {
  return str.replace(/^\s*|\s*$/,'');
}
// 例子
var str = '   hi!   ';
var s = Trim(str);