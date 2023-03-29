let a = [8, 4, 3, 1, 7];

// find the first minimum value
let min1 = a[0];
for (let i = 1; i < a.length; i++) {
  if (a[i] < min1) {
    min1 = a[i];
  }
}

// find the second minimum value
let min2 = a[0];
for (let i = 1; i < a.length; i++) {
  if (a[i] < min2 && a[i] !== min1) {
    min2 = a[i];
  }
}

// rearrange the array
for (let i = 0; i < a.length; i++) {
  if (a[i] === min1) {
    a.splice(i, 1); // remove the first minimum value from the array
    a.unshift(min1); // add it to the beginning of the array
    break; // exit the loop
  }
}

for (let i = 0; i < a.length; i++) {
  if (a[i] === min2) {
    a.splice(i, 1); // remove the second minimum value from the array
    a.splice(1, 0, min2); // add it to the second position in the array
    break; // exit the loop
  }
}

console.log(a);