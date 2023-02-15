// reverse diamond

let n = 5;
for(let i = 1; i <=n ; i++) {
//	//spaces + sequence of numbers
	console.log( getSpaces((n-i )) + getNumSequence(i)+ getNumRevSequence(i-1));
}
for(let j = n-1; j >=1 ; j--) {
	//	//spaces + sequence of numbers
		console.log( getSpaces((n-j )) + getNumSequence(j)+ getNumRevSequence(j-1));
	}
function getSpaces(n) {
	let str = "";
	for(let j = 1; j <= n ; j++) {    
		str +=  "  ";
	}
	return str;
}
function getNumSequence(n) {
	
	let numseq_str = "";
	for(let i = 1; i <= n; i++) {
            numseq_str += i+" ";
	
   }
return numseq_str;
}
function getNumRevSequence(n){
	let num ="";
	for(let i = n; i>=1; i--){
		num += i +" ";
	}
	return num;
}



