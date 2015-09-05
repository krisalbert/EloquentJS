function countBs(str){
  var counter = 0;
  for(var x=0; x<str.length; x++){
    if(str[x].toLowerCase()==="b"){
      counter++;
    }
  }
  return counter;
}

var countChar = function(str, char){
  var counter =0;
  for(var x=0; x<str.length; x++){
    if(str[x].toLowerCase()===char.toLowerCase()){
      counter++;
    }
  }
  return counter;
}
  
  
console.log(countBs("BBC"));
// → 2
console.log(countChar("Kakkerlak", "K"));
// → 4