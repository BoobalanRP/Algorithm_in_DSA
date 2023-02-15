
  // number print like staircase

  let n = 5;
  let string = "";
  for (let i = 1; i <=n; i++) {
      string+=i;
      string+="\n";
          for(let j=1; j<=i; j++){
          string+=" "+ " " ;
        }
  }
  for (let i = n-1 ; i>=1; i--) {
    string += i+" ";
    string+="\n";
   for( let j=n+n-1; j>=i; j-- ){
    string+=" "+ " " ;
   }
  
  }
      console.log(string);

      