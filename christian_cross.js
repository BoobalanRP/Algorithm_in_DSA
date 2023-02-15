
let n = 4;
let string = "";
for (let i = 1; i <=n ; i++){
    for(let j=1; j<=n; j++){
       string +=" " + " ";
    }
    for(let k=1; k<=1; k++){
        string += k+ " ";
    }
  string +="\n"
}
for (let i = 1; i<=n; i++){
    string += n +" " ;
}
for(let k=1; k<=1; k++){
    string += k + " ";
}
for (let i = 1; i<=n; i++){
    string += n +" ";
}
string +="\n"
for (let i = 1; i <=n ; i++){
    for(let j=1; j<=n; j++){
       string +=" "+" ";
    }
    for(let k=1; k<=1; k++){
        string += k+ " ";
    }
  string +="\n"
}
console.log(string);
