const toobig = 1e350 // 1 * 10350 - overflows storage

console.log(toobig) // Infinity
console.log(Number.MAX_VALUE) // 1.7976931348623157e+308

if(toobig < Number.MAX_VALUE) console.log("Number inside the range");
else console.log("Number outside the range");

const point1 = 0.1;
const point2 = 0.2;

console.log(result.toFixed(2));
