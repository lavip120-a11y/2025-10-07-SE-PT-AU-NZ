// this function returns the sum of twonumbers
function sum(a, b) {}
// Create the Test
if (sum(2, 4) != 6) {
  throw new Error("Test failed");
}
if (sum(-1, -10) == -11) {
  console.log("Test Passed");
}
// Write the Code
function sum(a, b) {
  return a + b;
}
//Specification for Multiply
function Multiply(a, b) {}

if (Multiply(3, 4) != 12) {
  throw new Error("Test Failed");
}

function Multiply(a, b) {
  return a * b;
}
console.log("All tests passed.");
