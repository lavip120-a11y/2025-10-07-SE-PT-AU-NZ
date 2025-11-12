
//use a lot for validation
let number1 = "Mirza145";
let number2 = Infinity;
let number3 = 1234;

if (isNaN(number1)) console.log("number is not a number");
else console.log("number is a number");

if(isFinite(number1)) console.log("It's a finite number");
else console.log("it's not a finite number");


console.log(isNaN(NaN)) // true
console.log(NaN == NaN) // false


console.log(isFinite(1/3)) // true, regular number
console.log(isFinite("string")) // false, because converts to NaN
console.log(isFinite(Infinity)) // false, because represents infinite number

console.log(+"100px"); //Not a valid number.  
// Tries to calculate the numbers but as soon as it identified that it is not a number it stops the calculation
console.log(Number("100px"));

console.log(parseInt("100px"));
console.log(parseInt("px100")); //it picks up the first two are not number so it stops the conversion
console.log(parseInt("100x250"));

console.log( parseInt("150px") ) // 150 - stops at 'px'
console.log( parseFloat("2.5em") ) // 2.5 - stops at 'em'
console.log( parseFloat("12.34.56") ) // 12.34 - stops at second invalid decimal