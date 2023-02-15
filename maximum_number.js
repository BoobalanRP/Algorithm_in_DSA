
let a = [5,80,70,4,88,12,3,1,77,7];
let x = 7;
let output_str="";
let found = false;
for(let i=0; i<=a.length; i++){
  if(x == a[i]){
    found = true;
    break;
  }
}
if(found){
  output_str = x  + " " + "is found in the array" ;
}
else{
  output_str = x + " " + "is not found in the array" ;
}
console.log(output_str);
