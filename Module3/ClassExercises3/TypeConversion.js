let isChecked = false;
let number = 546;
let number2 = 467;
console.log(isChecked);
console.log(number + number2); //adds two numbers
console.log(String(isChecked)); //explicit conversion
console.log(String(number) + String(number2)); // (converts to number) and then (appends)

console.log( String(false) ) // false - string form of boolean

//implicit conversion
console.log( "1" + 2 + 3 ) // 123 - string ‘1’ is concatenated with number 2 then number 3
console.log( 1 + 2 + "3" ) // 33 - number 1 is added to number 2 then concatenated with string ‘3’