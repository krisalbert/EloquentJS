var range = function(num1, num2, range){
  var arr = [];
  
  if(num2>num1){
    range = range || 1;
      for(var x=num1;x<=num2;x+=range){
        arr.push(x);
    }
  }
  else {
    range = range || -1;
      for(var x=num1;x>=num2;x+=range){
          arr.push(x);
      }
  }
  return arr;
}

var sum = function(arr){
  var sum=0;
  for(var x=0; x<arr.length;x++){
    sum+=arr[x];
  }
  return sum;
}

console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]