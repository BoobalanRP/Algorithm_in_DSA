let n = 4;

for (let i = 1; i <= n; i++) {
  let string = "";
  for (let j = n; j > i; j--) {
    string += "  ";
  }
  for (let k = i; k >= 1; k--) {
    string += k +" ";
  }

  console.log(string);
}
