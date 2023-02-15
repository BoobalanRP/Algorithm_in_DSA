//  symbol of w like using function



let n = 6;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j<= i; j++) {
    string += j+ " ";
  }
  for (let j = n; j > i; j--) {

	if(j == n){
		string += ".."+"";
	}
	else{
		string += ".."+"..";
	}
  }
  for (let k = i; (k >= 1) ; k--) {
    if(k!=n)
    { string += k +" ";
    }
  }
  string += "\n";
}
console.log(string);