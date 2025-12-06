// 6. Use the Function prototype to add a new delay(ms) function to all functions, which can be used to delay the call to that
// function by ms milliseconds. pg 31-36, Mdn Function.
// a) Use the example multiply function below to test it with, as above, and assume that all delayed functions will take two parameters
// b) Use apply to improve your solution so that delayed functions can take any number of parameters
// c) Modify multiply to take 4 parameters and multiply all of them, and test that your delay prototype function still works.

Function.prototype.delay = function (ms) {
  //a Function method which stores a delay function on function.prototype
  const multiplyFunction = this; // variable name storing the original function - this refers to multiply

  return function () {
    // takes any parameters/arguments
    const result = arguments;
    setTimeout(function () {
      //delays the printing
      multiplyFunction.apply(this, result);
    }, ms); //apply calls multiply and allows any number of parameters
  };
};
function multiply(a, b, c, d) {
  //modified to accept 4 parameters
  console.log(a * b * c * d); // multiply all 4 parameters
}

multiply.delay(500)(5, 5, 5, 5); // prints 625 after 500 milliseconds

// 7. The following DigitalClock class uses an interval to print the time every second once started, until stopped. pg 37-47

class DigitalClock {
  constructor(prefix) {
    //storing prefix
    this.prefix = prefix;
  }
  display() {
    let date = new Date(); //new date object
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];

    if (hours < 10) hours = "0" + hours; //if less than 10 start with a 0 as in 01
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`); //logging the time using prefix
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.display(); //show the time
    this.timer = setInterval(() => this.display(), 1000); //interval of 1 second
  }
}
// a) Create a new class PrecisionClock that inherits from DigitalClock and adds the parameter precision – the number of ms
// between 'ticks'. This precision parameter should default to 1 second if not supplied.
class PrecisionClock extends DigitalClock {
  //added new class that inherits from DigitalClock
  constructor(prefix, precision = 1000) {
    //added parameter - the number of milliseconds between ticks
    super(prefix); //calls the constructor function from the parent
    this.precision = precision; //adding a custom property for PrecisionClock
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), this.precision); // changing start to use precision
    console.log(`the number of ${this.precision} ms between 'ticks'`); //checking what this.precision returns
  }
}

// b) Create a new class AlarmClock that inherits from DigitalClock and adds the parameter wakeupTime in the format hh:mm.
// When the clock reaches this time, it should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should
// default to 07:00 if not supplied.

class AlarmClock extends DigitalClock {
  //added new class that inherits display, stop and start from DigitalClock
  constructor(prefix, wakeupTime) {
    //added wakeupTime parameter
    super(prefix); //calls the constructor function from the parent
    if (wakeupTime === undefined) {
      //when a parameter is undefined 07:00 is the default
      wakeupTime = "07:00";
    }
    this.wakeupTime = wakeupTime; //adding a custom property for AlarmClock
  }

  //override start to only include hour and minute from display
  start() {
    this.timer = setInterval(() => {
      const time = new Date();
      const timeNow = time.toTimeString().slice(0, 5); //converts datetimestring to just the time, slice takes 5 character
      console.log(`${this.prefix} ${timeNow}`);
      if (timeNow === this.wakeupTime) {
        console.log("Wake Up");
        clearInterval(this.timer);
      }
    }, 1000);
  }
}
const myClock = new DigitalClock("my clock:");
myClock.start();
const betweenTicks = new PrecisionClock("between ticks");
betweenTicks.start();
const alarm = new AlarmClock("Alarm");
alarm.start();

// 8. Using the following starter code, create a decorator function to validate function arguments as strings.
// Test it by decorating the given orderItems function below. 51 =>

function orderItems(...itemName) { //original function changed to accept multiple arguments
return `Order placed for: ${itemName.join(", ")}`;
}
// create a decorated version of the original function
// a) Create a decorator function validateStringArg(fn) which will validate an argument passed to fn to ensure that it is a string, throwing an error if not

function validateStringArg(fn) {  // Decorator validating arguments are strings
     return function (...items) { // b) Extend orderItems to use the ... rest operator, allowing multiple item name arguments, and include them all in the returned string
        for (const item of items ) { 
            if (typeof item !== "string") {  // c) Extend the decorator function to validate as strings all arguments passed to fn
                throw new Error("Provide a string");
            }
        }
        return fn(...items); //if it is a string, return the items
    };
}
const validatedOrderItem = validateStringArg(orderItems);
// d) When testing the decorated function, use try-catch blocks to handle errors thrown for non-string arguments
try { //if no error it will print 
console.log(validatedOrderItem("Apple Watch", "Apple Phone")); // should run the function
} catch (err) {
    console.log("Failed initial test", err.message);
}
try { //if error it will print the error message
console.log(validatedOrderItem(123)); // should throw an error AND does
}
catch (err) {
console.log("Failed second test", err.message);
    } 


// 9. We can delay execution of a function using setTimeout, where we need to provide both the callback function and the delay
// after which it should execute. 52-62
// a) Create a promise-based alternative randomDelay() that delays execution for a random amount of time (between 1 and 20 seconds)
// and returns a promise we can use via .then(), as in the starter code below

function randomDelay() {
    return new Promise((resolve, reject) => { //starts the promise
        const delay = Math.floor(Math.random() * 20000) + 1000; // delay using math.floor(rounding) and math.random(generates a random number up to 20secs, minimum delay is 1 second)
        console.log(`delay for ${delay / 1000} seconds`); //printing the delay for testing purposes
        setTimeout(() => { 
// b) If the random delay is even, consider this a successful delay and resolve the promise,
// and if the random number is odd, consider this a failure and reject it
            if (delay % 2 === 0) {
            resolve(delay); //ends the promise
            }
            else {
                reject(delay);
            }
        }, delay);
    });
}
// c) Update the testing code to catch rejected promises and print a different message
// d) Try to update the then and catch messages to include the random delay value 
randomDelay().then((delay) => console.log(`Successful delay ${delay / 1000}, promise resolved`)) 
.catch((delay) => console.log(`failed delay ${delay / 1000}, promise not resolved`)); 


// 10.Fetch is a browser-based function to send a request and receive a response from a server, which uses promises to handle
// the asynchronous response. The below fetchURLData uses fetch to check the response for a successful status code, and returns
//  a promise containing the JSON sent by the remote server if successful or an error if it failed.
// (To run this code in a node.js environment, follow the instructions in the comments before the function.)
// run 'npm init' and accept all the defaults
// run 'npm install node-fetch' //npm warn deprecated node-domeexception@1.0.0: Use your platforms DOMException instead, 3 packages are looking for funding
// run 'npm pkg set type=module'

import fetch from 'node-fetch'
globalThis.fetch = fetch
// a) Write a new version of this function using async/await //pg 58 & vid 37mins sat
//add await
async function fetchURLData(url) { //async declaration function
try {
  let response = await fetch(url); // calling fetch to get info from url and storing it in response
  
if (response.status === 200) { //checking status is 200
return await response.json(); //return the response in JSON format
} else { //otherwise
throw new Error(`Request failed with status ${response.status}`); //returns an error and stops
}
} catch (err) {
  throw err;
}
}
// b) Test both functions with valid and invalid URLs
fetchURLData('https://jsonplaceholder.typicode.com/todos/1') //calling the async function
.then(data => console.log(data)) //if the promise resolves this will print the data that is returned
.catch(error => console.error(error.message)); // if the promise is rejected this one prints

fetchURLData('https://jsonplacehol,typical.com')
.then(data => console.log(data))
.catch(error => console.log(error.message));

// c) (Extension) Extend your new function to accept an array of URLs and fetch all of them, using Promise.all to combine the results.