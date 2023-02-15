let a = [2,4,5,7,8,2,10,2,2];
let x = 8;
let found =0;
for(let i=0; i<=a.length; i++){
  if(x == a[i]){
      found++;
  }
  
}
if(found == 0){
  output_str = x + " " + "not found";
}
else if( found == 1){
  output_str = x + " " + "is found 1 time"
}
else{
  output_str = x + " " + "is found" + found +" times";
}

console.log(output_str);
