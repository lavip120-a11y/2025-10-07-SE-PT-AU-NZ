// this function returns the sum of two numbers
function sum(a, b) {
}
// Create the Test
if (sum(2, 4) > 8) {
throw new Error('Test failed');
}
if (sum(-11, 11) == 0) {
    console.log("Test Passed");
}
// Write the Code
function sum(a, b) {
return a + b;
}
// Specification for Multiply
function Multiply(a, b) {}
if (Multiply(3, 4) != 12) {
    throw new Error("Test Failed");
}
function Multiply(a, b) {
    return a * b;
}
// Specification for subtraction
function Subtract(a, b) {}
if (Subtract(12, 13) != -1) {
    throw new Error("Test Failed");
}
function Subtract(a, b) {
    return a - b;
}
//Specification for divide
function divide(a, b) {}
if (divide(5, 2) != 2.5) {
    throw new Error("Test Failed");
}
function divide(a, b) {
    return a / b;
}
console.log('All tests passed.');

