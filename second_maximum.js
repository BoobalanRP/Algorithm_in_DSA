
let a = [7,5,8,12,2,1,15,56]

   let max = a[0];
   let secondmax = a[0];
 
   for (let i = 1; i < a.length; i++) {
     if (a[i] > max) {
       secondmax = max;
       max = a[i];
     } 
   
   }
 
  console.log(secondmax);