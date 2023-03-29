let a = [4, 3, 17, 10, 11, 12];
let add = 0;

for (let i = 0; i < a.length; i++) {
  if (a[i] % 2 === 0) {
    add += a[i];
  }
}

console.log(add);