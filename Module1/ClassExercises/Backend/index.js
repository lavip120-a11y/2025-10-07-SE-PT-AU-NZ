const Sentiment = require("sentiment");
const sentiment = new Sentiment();
const result = sentiment.analyze("Cats are stupid.");
console.log(result);
// Score:-2, Comparative:-0.66

//javascript should be at the bottom of the bottom within script
console.log("Hello World");

// let name = "Mosh"; //string literal
// let age = 30; //Number literal
let isAprroved = true; //Boolean Literal
let firstName = undefined; // undefined & null
let selectedColor = null; //can assign a color later on

//instead of declaring two variables, can reference person. {} object literal, between the curly braces we have 1 or more key value pairs.
let person = {
  name: "Mosh",
  age: 30,
};
//Dot notation - cleaner and easier
person.name = "John";
//bracket notation - useful when name is unknown initially
let selection = "name";
person[selection] = "Mary";

console.log(person);

//arrays to store lists
let selectedColors = ["red", "blue"]; //initialise and set it to empty array - can add some colors.
selectedColors[2] = "green"; // green will be aaded to the array - you can also change green to a number like 1 and it will be added to the array
console.log(selectedColors[0]); // you can return all selected colors or you can use the index to return
console.log(selectedColors.length);

function greet() {
  //can add name variable as a parameter inside() see below
  console.log("Hello World"); //body of function where statement defining logic
}
greet(); //indicates that this is a statement.

function greeting(name) {
  //here within the () is a parameter
  console.log("Hello " + name);
}
greeting("John"); //here within the () is the argument
greeting("Mary");

//performing a task to display something on a console
function greeting(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}
greeting("John", "Smith");
//Calculating a value
function square(number) {
  return number * number;
}
let number = square(2); //can also just pass console.log(square(2)); calling the log function and square of 2 function
console.log(number);
