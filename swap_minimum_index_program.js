// function swapMin(arr) {
   
//     let minIndex = arr.indexOf(Math.min(...arr));
  
    
//     [arr[0], arr[minIndex]] = [arr[minIndex], arr[0]];
  
//     return arr;
//   }
  
 
  // let a = [48, 1, 4, 7];
  // console.log(swapMin(a));
let a = [48,7,10,8,9];


let minIndex = 0;
for (let i = 1; i < a.length; i++) {
  if (a[i] < a[minIndex]) {
    minIndex = i;
  }
}
// another method to splice the minimum index
// let temp = a[0];
// a[0] = a[minIndex];
// a[minIndex] = temp;

a[0] = a.splice(minIndex,1,a[0])[0];
console.log(a);


