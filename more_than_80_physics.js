let array_student_obj 
 = [{name:"Nanda",
	 age:19,
	 salary: 10000, 
	 marks:{
			maths:80, 
			physics: 78, 
			chemistry:90
		}
	 },
	 {name:"Deepika",
	 age:18,
	 salary: 10000, 
	 marks:{
			maths:95, 
			physics: 95, 
			chemistry:89
		}
	 },
	 {name:"Boopalan",
	 age:21,
	 salary: 10000, 
	 marks:{
			maths:76, 
			physics: 81, 
			chemistry:76
		}
	 },{name:"Karthi",
	 age:22,
	 salary: 10000, 
	 marks:{
			maths:67, 
			physics: 51, 
			chemistry:39
		}
	 }];


let max = array_student_obj[0].age;
let student_max = array_student_obj[0].name;

for(let i=1; i<array_student_obj.length; i++){
  if(max < array_student_obj[i].age){
    max = array_student_obj[i].age;
    student_max = array_student_obj[i].name;
  }
  
}
console.log(student_max +" "+"age is"+" " +max);