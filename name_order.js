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
//console.log(array_student_obj[0].name);
   let x = "maruthan";
  let  found=false;
   for(i =0; i<array_student_obj.length; i++){
   
    if(x == array_student_obj[i].name ){
    found = true;
     break;
    }
   }
   if(found){
    console.log(x +" is found");
   }
   else{
    console.log(x +" is not found");
   }