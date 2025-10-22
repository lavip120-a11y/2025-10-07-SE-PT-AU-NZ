console.log("Mirza");
console.log("Mirza123");
// store and reuse data - put in place holder 
// const - you must declare the data at the same time 

var trainerName = "Mirza"; 
let cohortLocation = "Online/remote";
const countryLocation = "Australia/New Zealand";
const numberofStudents = "6";

console.log(trainerName); // print above data using variable "trainerName"
console.log(cohortLocation);
console.log(countryLocation);
console.log(numberofStudents);

trainerName = "XYZ"; //changing the value of trainerName.  You cannot reassign Const
cohortLocation = "Sydney"; 

console.log(trainerName); //modified values above will be printed
console.log(cohortLocation);

// Using a block 

function Sum(a, b) {
 let studentName = "John";
    console.log(cohortLocation);
    if (studentName == "Mirza") {
        let courseName = "Software engineering";
        console.log(cohortLocation);
        console.log(studentName);
        } else {
            console.log("inside else block");
            console.log(studentName);
        }
        //console.log(courseName);
    return a + b;
}
   
Sum(10, 5);
