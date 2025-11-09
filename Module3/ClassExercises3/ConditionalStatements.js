let x = 40;
let y = 30;
let arr1 = ["Mirza", "Smith", "satish"];
let arr2 = ["bruce", "wills", "satish"]

let result = x > y ? console.log("x is greater than y") : console.log("x is not greather than y");
//condition ? execute statement : statement. If the condition is true the statement after ? will execute if false statement after 2nd ?  You can write many statements instead of using if else. :(else)

console.log(result);

console.log( NaN ? 'NaN is true' : 'NaN is false' ) // NaN is false
console.log( 0 ? 'zero is true' : 'zero is false' ) // zero is false
console.log( "hello" ? 'hello is true' : 'hello is false' ) // hello is true

console.log( !undefined ) // true - convert value to boolean then negate it (opposite)
console.log( !!"" ) // false - convert value to boolean then negate/toggle twice

if ("Apple" > "Mango") { //strings compared letter by letter - a is the lowest in the alphabet. it then moves long the line of letters
    console.log("Apple is greater than Mango");
    } else console.log("Avocado is greater than apple");

     