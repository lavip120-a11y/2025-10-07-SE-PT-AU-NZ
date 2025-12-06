//1. makeCounter below is a decorator function
//b) Modify makeCounter so that it takes an argument startFrom specifying where the counter starts from (instead of always starting from 0)
// c) Modified makeCounter to take another argument incrementBy, which specifies how much each call to counter() should increase the counter value by.

function makeCounter(startFrom = 0, incrementBy = 2) { 
let currentCount = startFrom; //variable declared and value of 0 changed to reflect where the counter starts from instead

return function() {  //returns a function that increments a counter.
currentCount += incrementBy; //increments currentCount by incrementBy 

console.log(currentCount)
return currentCount; 
};
}

let counter1 = makeCounter(3, 2); //function named expression - variable referring to a function definition
counter1(); // 1
counter1(); // 2
let counter2 = makeCounter(1, 1); //a) creating a second counter, counter 2 using makeCounter function
counter2(); // a) test to see if counter 2 remains independent to counter1
counter2();
counter1();
  

// 2. The following delayMsg function is intended to be used to delay printing a message until some time has passed.
// a) What order will the four tests below print in? Why?
// 4,3,2,1 because the milliseconds defined will be printed in order of shorted time delay to longest time delay

// function delayMsg(msg)
// {
// console.log(`This message will be printed after a delay: ${msg}`)
// }
// setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
// setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
// delayMsg('#4: Not delayed at all')

// b) Rewrite delayMsg as an arrow function

const delayMsg = (msg) =>
  console.log(`This message will be printed after a delay: ${msg}`); 

setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
delayMsg("#4: Not delayed at all");

// c) Add a fifth test which uses a large delay time (greater than 10 seconds)
// d) Use clearTimeout to prevent the fifth test from printing at all.

let cancelledFifthTest = setTimeout(delayMsg, 20000, '#5: Cancelled timeout');
clearTimeout(cancelledFifthTest); 


// 3. 'Debouncing' is a concept that refers to 'putting off' the execution of multiple, fast-timed,
// similar requests until there's a brief pause, then only executing the most recent of those
// requests. See https://www.techtarget.com/whatis/definition/debouncing
// It's often used to handle fast-firing scrolling events in a browser, or to prevent multiple server
// requests being initiated if a user clicks repeatedly on a button.

// a) Create a debounce(func) decorator, which is a wrapper that takes a function func and
// suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second
// pause, the most recent call to func should be executed and any others ignored.
// b) Extend the debounce decorator function to take a second argument ms, which defines the
// length of the period of inactivity instead of hardcoding to 1000ms

function debounce(func, ms = 1000) { //create debounce(func) decorator 
let cancelTimerId;

return function (...args) { 
  clearTimeout(cancelTimerId);

cancelTimerId = setTimeout(() => {func.apply(this, args);
}, ms);
};
}
function printMe(msg) { // c) Extend debounce to allow the original debounced function printMe to take an argument
// msg which is included in the console.log statement.
console.log(`print message: ${msg}`);
} 

const extendprintMe = debounce(printMe, 2000); //create this debounce function for a) //aside from 1000 this is original

//fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls

setTimeout(() => extendprintMe('Help'), 100);
setTimeout(() => extendprintMe('Me'), 200);
setTimeout(() => extendprintMe('Rhonda'), 300); 


// 4. The Fibonacci sequence of numbers is a famous pattern where the next number in the sequence is the sum of the previous 2. e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
// a) Write a function printFibonacci() using setInterval that 
function printFibonacci(limit) {
    let num1 = 0;  //start with 0
    let num2 = 1; // next number is 1
    
const interval = setInterval(() => { // look at line 56 for clearinterval
  console.log(num1) // start with num1 & applies the method in sequence .

 const sequence = num1 + num2;
        num1 = num2;
        num2 = sequence; 
      if (sequence > limit) {
        clearInterval(interval);
        // c) Extend one of the above functions to accept a limit argument, which tells it how many numbers to print before stopping.
//have to call clear interval to stop - use a variable saying the limit.
      }
      }, 1000);
}
        printFibonacci(10); 
        
// b) Write a new version printFibonacciTimeouts() that uses nested setTimeout calls to do the same thing
//call another set time out 

function printFibonacciTimeouts(limit) {
    let num1 = 0;  //start with 0
    let num2 = 1; // next number is 1
    
function repeat() { 
  console.log(num1); // start with num1 & applies the method in sequence .

 const sequence = num1 + num2;
        num1 = num2;
        num2 = sequence; 

      if (sequence <= limit) {
        setTimeout(repeat, 1000);
      } 
      repeat();
}
}
        printFibonacciTimeouts(10); 



// 5. The following car object has several properties and a method which uses them to print a
// description. When calling the function normally this works as expected, but using it from within setTimeout fails. Why?
let car = {
  make: "Porsche",
  model: "911",
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};
car.description(); //works because when decription is called, its 'this' is set to car object
//setTimeout(car.description, 200); //fails because the this context is not correctly passed to the function. 
// It passes car and description seperately and refers to the global object?

// a) Fix the setTimeout call by wrapping the call to car.description() inside a function
setTimeout(() => {car.description();}, 200) //arrow function

// b) Change the year for the car by creating a clone of the original and overriding it
const car2 = {...car, year: 1970}; //cloned car object and changed the year

// c) Does the delayed description() call use the original values or the new values from b)? Why?
// it calls the original values because it refers to car.description and not the cloned car2??

// d) Use bind to fix the description method so that it can be called from within setTimeout without a wrapper function
const usingBind = car.description.bind(car)  //new function reference with car context bound
setTimeout( usingBind, 3000 ); 

// e) Change another property of the car by creating a clone and overriding it, and test that setTimeout still uses the bound value from d)

const car3 = {...car, make: "Ford"}; //it is printing  Ford in the original car object
car3.description();
