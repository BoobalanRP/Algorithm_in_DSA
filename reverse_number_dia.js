let n = 4;
let string ="";
for  (let i=1; i<=n; i++){
   for ( let j=1; j<=n-i; j++){
    string += "."+".";
   }
   for (let k=1; k<=i ; k++){
    string += k +" ";
   }
   for (let l=i-1; l>=1; l--)
   {
    string += l +" ";
   }
   
   string +="\n"
}
// / reverse diamond 
for  (let i=n-1; i>=1; i--){
    for ( let j=1; j<=n-i; j++){
     string += " " + " ";
    }
    for (let k=1; k<=i ; k++){
     string += k +" ";
    }
    for (let l=i-1; l>=1; l--)
    {
     string += l +" ";
    }
    
    string +="\n"
 }
console.log(string);
