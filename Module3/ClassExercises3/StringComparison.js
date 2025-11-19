let String1 = "Apple"; //each alphabet has a code stored in JavaScript
let String2 = "Banana";

if(String1 < String2) console.log("String1 is greater"); //we dont usually do this kind of comparison

console.log( 'Z'.codePointAt(0) ) // 90 - returns the numeric code position representing the letters
console.log( 'A'.codePointAt(0) ) // 65
console.log( 'a'.codePointAt(0) ) // 97

for(let k = 65; k < 91; k++) //loop through staring at 65 and increase value until reaching 91
    console.log(String.fromCodePoint(k)); // prints the alphabet starting from 65. k is the parameter used to loop through

console.log( String.fromCodePoint(90) ) // Z - this does the opposite, it returns the corresponding letter for 90
