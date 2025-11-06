let x = 40;
let y = 30;
let arr1 = ["Mirza", "Smith", "satish"];
let arr2 = ["bruce", "wills", "satish"]

let result = x > y ? 50 : 100; //conditional statements - if x is greater than y, after ? will execute but if not after colon will execute
console.log(result);

console.log( NaN ? 'NaN is true' : 'NaN is false' ) // NaN is false
console.log( 0 ? 'zero is true' : 'zero is false' ) // zero is false
console.log( "hello" ? 'hello is true' : 'hello is false' ) // hello is true

console.log( !undefined ) // true - convert value to boolean then negate it (opposite)
console.log( !!"" ) // false - convert value to boolean then negate/toggle twice

if ("Apple" > "Mango") {
    console.log("Apple is greater than Mango");
    } else console.log("Avocado is greater than apple");

    