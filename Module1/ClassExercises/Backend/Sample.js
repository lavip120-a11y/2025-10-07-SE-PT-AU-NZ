console.log("Hello World");
console.log("This is JavaScript");
console.log("I'm learning");

function PrintLinesToConsole() {
  console.log("Hello World");
  console.log("This is JavaScript");
  console.log("I'm learning");
}
//a function should be called//

PrintLinesToConsole();

//The function can be called many times by using the name and brackets//

function Sum() {
  console.log(2 + 3);
  console.log(11 + 5);
}

function Sum(a, b) {
  //function is logic written once but called many times, it can be used many times//
  console.log(a + b);
}
Sum(2, 3);
Sum(11, 5);

//the function takes the value and copies it into the parameters and calculates the data passed//

function Sum(a, b) {
  //doesnt print, returns the value to the caller and displays//
  return a + b;
}
Sum(2, 3);
Sum(11, 5);

//complex logic//

function Sum(a, b) {
  return a - b;
}
function Multiply(a, b) {
  return a * b;
}
function Subtract(a, b) {
  return a - b;
}
function Divide(a, b) {
  return a / b;
}

console.log(Sum(10, 20));
console.log(Multiply(Sum(2, 3), Sum(11, 5)));

// call a function //
