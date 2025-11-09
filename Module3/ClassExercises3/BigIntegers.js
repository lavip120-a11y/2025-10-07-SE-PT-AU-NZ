const bigint_valid = 1234567890123456789012345n; // properly prints its numbers
const bigint_invalid = 1234567890123456789012345; // too large for standard integers
console.log(bigint_valid);
console.log(bigint_invalid);

console.log(bigint_valid == bigint_invalid) // false

if (bigint_valid == bigint_invalid) { //if this calculation is true it will print equal, if not it will print not equal
console.log("both are equal");
} else {
    console.log("Not equal");
}

//if and else are used to put multiple statements/conditions
let x = 20;
let y = 30;
let z = 50;

if (x > y) { //conditions...any comparisons, less than, equal to (whatever is in the curly brackets will print)
    console.log("x is greater than y");
} else if(y > z) {
    console.log("y is greater than z");
} else if(z > x) {
    console.log("z is the greatest");
}
else {
    console.log("None of the conditions met");
}