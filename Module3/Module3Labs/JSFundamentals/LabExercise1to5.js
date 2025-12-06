// 1. What are the results of these expressions? (answer first, then use console.log() to check)

console.log("" + 1 + 0); // empty string converts to 0 = 10 correct
console.log("" - 1 + 0); // empty string converts to 0 = -1 correct
console.log(true + false); // 1 + 0 = 1 explicit conversion correct
console.log(!true); // not operator - not true = false correct
console.log(6 / "3"); // 6 divided by 3 = 2 correct
console.log("2" * "3"); //2x3=6 automatically converting numbers to string correct
console.log(4 + 5 + "px"); // string - add 4 and 4 then concatenate with px = 9px Implicit Conversion correct
console.log("$" + 4 + 5); // string - concatenate $ to 4 and 5 = $45 correct
console.log("4" - 2); // 2 correct
console.log("4px" - 2); // NaN 
console.log(" -9 " + 5); // -95 string concatenation because of + operand
console.log(" -9 " - 5); //-14  implicit concersion automatic conversion of string to number
console.log(null + 1); //converted to a number 0 + 1 = 1 correct
console.log(undefined + 1); // undefined is NaN, so cannot be added to a number.
console.log(undefined == null); //true both convert to 0 correct
console.log(undefined === null); //false, null is an object and undefined is undefined, not strictly equal type
console.log(" \t \n" - 2); //// tab and nextline and then place -2 correct answer but newline not nextline

//2. Which of the below are not giving the right answer? Why are they not correct? How can we fix them?
let three = "3"
let four = "4"
let thirty = "30"
//what is the value of the following expressions?
let addition = three + four // 34 concatenation of string fix it by converting to a number using parseInt() and then adding
let multiplication = three * four // 12 string to number as with 2 below
let division = three / four // 0.75
let subtraction = three - four // -1
let lessThan1 = three < four // true - not an empty string boolean conversion
let lessThan2 = thirty < four // true - not an empty string boolean conversion

console.log(addition);
console.log(parseInt(three, 10) + (parseInt(four, 10))); //I did it!!! took many trials and errors
console.log(multiplication);
console.log(division);
console.log(subtraction);
console.log(lessThan1);
console.log(lessThan2);

//3. Which of the following console.log messages will print? Why? Type Conversions

if (0) console.log('#1 zero is true') //0 flase zero value
if ("0") console.log('#2 zero is true') //string, if zero counts as a non empty string then it is true
if (null) console.log('null is true') //0 false no value
if (-1) console.log('negative is true') //true, non zero number
if (1) console.log('positive is true')  //true, also a non zero number

//4. Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a
// and b. What does the ‘+=’ do? 
// '+=' is addition assignment/concatenation for plus equal 

let a = 2, b = 3; //  let declaration with variables - is this the right language?
let result = `${a} + ${b} is `; //string text and expression. backticks are template literals allowing for multiline strings and interpolation
(a + b <10) ? console.log('less than 10') : console.log('greater than 10'); //the condition, value if true and value if false
// if (a + b < 10) {
// result += 'less than 10';
// } else {
// result += 'greater than 10';
{ //I put this code inside curly brackets so that i could reassign a & b (blockscope)
let a = 5, b = 12; 
let result = `${a} + ${b} is `; 
(a + b <10) ? console.log('less than 10') : console.log('greater than 10');
};

// 5. Rewrite the following function. Test each version to make sure they work the same.

//function getGreeting(name) {
//return 'Hello ' + name + '!';
//}

//a) function expression syntax

// first attempt works

/*getGreeting("Roger"); // Declare a variable

function getGreeting(name) { // creating a function using expression syntax
console.log("Hello" + name + '!');
}
*/

// second attempt works

/*const getGreeting = function (name) { //which one is the right one
console.log("Hello" + name + "!");
};

getGreeting("Roger"); //Pass the parameter to it 
*/

// b) arrow function syntax. 
const getGreeting = (name) => "Hello" + name + "!"; 
console.log(getGreeting("Roger")); //printing to see if it works

