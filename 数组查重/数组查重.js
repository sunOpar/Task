 function uniqArray(arr){
    for(var i=0;i<arr.length;i++){
      for(var j=1;j<(arr.length);j++){
        if(i != j){
          if(arr[i]==arr[j]){
            arr.splice(j,1);
          }
        }
      }
    }
    return arr;
 }
 var a = [1,3,5,7,5,3];
 var b = uniqArray(a);