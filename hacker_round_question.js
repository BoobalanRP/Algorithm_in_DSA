
let a = [4, 5, 10, 11, 1,22];
let k = 4;
let maximum = 0;

for (let i = 0; i < a.length-k+1  ; i++) {
  let add = 0;
  for (let j = i; j < i + k; j++) {
    add = add + a[j];
  }
  if (add > maximum) {
    maximum = add;
  }
}

console.log(maximum);
