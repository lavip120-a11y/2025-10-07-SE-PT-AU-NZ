/*const doubleQuotes = "String that can include 'single quotes'"
const singleQuotes = 'String that can include "double quotes"'
const backTicks = `String that can include variables - ${singleQuotes}`*/

let string1 = "sample string in 'double' quotes";
let string2 = 'sample string in "single" quotes';
let string3 = `sample string in backticks`;

let numberofStudents = 6;

console.log(string1);
console.log(string2);
console.log(string3);

console.log("The number of students in this cohort is " + numberofStudents); //variable name is numberofStudents
console.log(`The number of students in this cohort is ${numberofStudents}`); //${}` (backtick) will do the same thing as above

let isChecked = true; //Boolean only has 2 values, true or false
let isToggleOn = false;

console.log(isChecked); //print the value
console.log(isToggleOn);

isChecked = !isChecked // ! Not Operator.  Will change the value to false
isToggleOn = !isToggleOn //will change to true
console.log(isChecked);
console.log(isToggleOn);

if (isChecked) {
    console.log("Is checked true");
} else {
    console.log("is checked false");
}
let x = 10; //if x is 10, or a negative, or a string it is true. If it is NaN, null or 0 it is false. 0 is always false
if (x) {
    console.log("x is true");
} else {
    console.log("x is false");
}

let age = null; //if user has not entered an age
if (age) {
    //write logic to proceed further
} else {
    console.log("Please enter age");
} 

let nameOfPerson; //define variable. no value is assigned with the = operator
console.log(nameOfPerson); // will return undefined

let location; // no assigned value, therefore undefined
let birthyear = null; // explicitly assigned null value
console.log(location);
if (birthyear == location) {
    console.log("age and location are the same values");
}
if (birthyear === location) {
    console.log("age and location are the same types");
} else console.log("age and location are not the same type");

console.log(`${location} == ${birthyear} ? ${location == birthyear}`) // true (uses == to check value equivalence)
console.log(`${location} === ${birthyear} ? ${location === birthyear}`) // false (uses === to check type equality)