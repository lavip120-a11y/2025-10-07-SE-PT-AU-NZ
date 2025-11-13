// 1. What are the results of these expressions? (answer first, then use console.log() to check)

console.log("" + 1 + 0); // empty string converts to 0 = 10 correct
console.log("" - 1 + 0); // empty string converts to 0 = -1 correct
console.log(true + false); // 1 + 0 = 1 explicit conversion correct
console.log(!true); // not operator - not true = false correct
console.log(6 / "3"); // 6 divided by 3 = 2 correct
console.log("2" * "3"); //2x3=6 automatically converting numbers to string correct
console.log(4 + 5 + "px"); // string - add 4 and 4 then concatenate with px = 9px Implicit Conversion correct
console.log("$" + 4 + 5); // string - concatenate $ to 4 and 5 = $9 Implicit Conversion Wrong its a string $45
console.log("4" - 2); // 2 correct
console.log("4px" - 2); // NaN no answer
console.log(" -9 " + 5); // -4 wrong, should have been a string 
console.log(" -9 " - 5); //-14 was off by a number but correct method
console.log(null + 1); //converted to a number 0 + 1 = 1 correct
console.log(undefined + 1); // undefined is NaN, so cannot be added to a number, so this is Nan correct
console.log(undefined == null); //true both convert to 0 correct
console.log(undefined === null); //false, null is an object and undefined is undefined correct
console.log(" \t \n" - 2); //// tab and nextline and then place -2 correct answer but newline not nextline
