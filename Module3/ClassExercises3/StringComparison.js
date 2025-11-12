let String1 = "Apple"; //each alphabet has a code stored in JavaScript
let String2 = "Banana";

if(String1 > String2) console.log("String1 is greater");

console.log( 'Z'.codePointAt(0) ) // 90
console.log( 'A'.codePointAt(0) )

for(let k = 65; k<91; k++)
    console.log(String.fromCodePoint(k));

console.log( String.fromCodePoint(90) ) // Z
