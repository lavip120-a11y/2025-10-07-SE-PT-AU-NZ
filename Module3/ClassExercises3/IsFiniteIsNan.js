//use a lot for validation to check
let number1 = "Mirza145"; //alpha numeric string - not a number
let number4 = "145Mirza"; //
let number2 = Infinity;
let number3 = 1234; //proper number
// isNan checks for not a number
if (isNaN(number1)) console.log("number is not a number");
else console.log("number is a number");
// isFinite checks to see if it is Finite or not
if(isFinite(number4)) console.log("It's a finite number");
else console.log("it's not a finite number");


console.log(isNaN(NaN)) // true
console.log(NaN == NaN) // false

//IsFinite(value) converts its arguement to a number and returns true if its a regular number.

console.log(isFinite(1/3)) // true, regular number
console.log(isFinite("string")) // false, because converts to NaN
console.log(isFinite(Infinity)) // false, because represents infinite number

//parseInt (integer) and parseFloat (floatingpoint)

console.log(+"100px"); //Not a valid number.  
// Tries to calculate the numbers but as soon as it identified that it is not a number it stops the calculation
console.log(Number("100px")); //Not a number

//parseInt tries to convert whatevers possible
console.log(parseInt("100px")); //100 then stops
console.log(parseInt("px100")); //it picks up the first two are not number so it stops the conversion
console.log(parseInt("100x250")); //parse int works from left to right.
console.log( parseInt("150px") ) // 150 - stops at 'px'
// converting a floating point number
console.log( parseFloat("2.5em") ) // 2.5 - stops at 'em'
console.log( parseFloat("12.34.56") ) // 12.34 - stops at second invalid decimal
console.log( parseInt("a123") ) //Nan - cannot parse an a so stops