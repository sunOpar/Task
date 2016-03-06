function simpleTrim(str) {
  var start,end;
  for(var i = 0;i < str.length;i++){
      if(str.charAt(i) == ' ') {
        continue;
      }
      else{
          start = i;
          break;
      }
  }
  for(var j = (str.length-1); j > 1;j--){
    if(str.charAt(j) == ' '){
      continue;
    }
    else{
      end = j;
      break;
    }
  }
  return str.substring(i,(j+1));
}
// 例子
var str = '   hi!   ';
var s = simpleTrim(str);
