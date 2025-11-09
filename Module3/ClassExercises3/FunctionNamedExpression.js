// function named expression syntax for creating a function
//declare a variable
HelloFunction("Mirza", "Auckland", "New Zealand");


const sample = function () {  //define a function
    console.log("Sample function");
};

sample(); 
//to call the function above use the name of the variable 
// - it becomes the name of the function because there is no named parameter() 

const sayHello = function (name) { //when i call this function it has a parameter so i use that when i call it
    console.log("Hello" + name);
    console.log(arguments[0]);
};

sayHello("Mirza"); //Pass the parameter to it 

function HelloFunction(name, place, country) {
    console.log("Hello" + name);
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
};
const sayHelloArrow = () => {    //omit the function word and use the arrow which is equal to or greater than
    console.log("hello arrow function");
};
sayHelloArrow(); 

const sayHi = (name) => { //function body with a paramter
    console.log("Hello" + name);
    console.log(arguments[0]);
};

sayHi("Arshad"); //when you call it, it defines the data

const Add = (x, y) => x + y; // => this does the exact same thing as if it has curly brackets and name

console.log(Add(10, 5)); // it will add and not print without adding console.log


const subtract1 = (a, b) => a - b; // most concise version of the below
const subtract2 = (a, b) => { return a - b }; // does the same thing as above

const sayHiExpression = function() {
console.log('Hi');
console.log(arguments);
}

function sayHiDeclaration() {
console.log('Hi');
console.log(arguments);
}

const sayHiArrow = () => { // arrow function syntax, more concise
console.log('Hi');
console.log(arguments);
}

