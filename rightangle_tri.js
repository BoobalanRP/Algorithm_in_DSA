
const n=5;
let string  = "";
for(let i=1; i<=n; i++) {
    for(let k=1; k<=i-1; k++){
        string +=" "+" ";
    }
    for (j=i; j<=n; j++){
        string += j + " ";
    }
    string +="\n";
 }
 console.log(string);