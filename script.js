let massMark = 85 ;
let massJohn = 90 ;
let heightMark = 1.75 ;
let heightJohn = 1.80 ; 
//Calculate the BMI
let BMIJohn = massJohn / (heightJohn*heightJohn) ; 
let BMIMark = massMark / (heightMark* heightMark) ;
//Print the BMS's 
console.log(BMIJohn);
console.log(BMIMark);
console.log(BMIJohn.toFixed(2));
console.log(BMIMark.toFixed(2));

// let higherBMI= BMIMark > BMIJohn ; 
// console.log("Mark's BMI is higher than John  "  + higherBMI );
if (BMIMark > BMIJohn) { 
  console.log('Mark\'s BMI is higher than John\'s BMI'); 
  } else { 
       console.log('Mark\'is BMI lower than John\'s BMI');
   }