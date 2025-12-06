function printGreeting(name) { //Simple undecorated function
    console.log('Hello, ' + name);
}
printGreeting('Undecorated');

function Sum(a, b) {
    return a + b;
}
//wrapper decoration
function loggingTimingDecorator(originalFunction) { // decorator takes a function as a parameter
return function () { // return function(name) { ...making the parameter generic allows the decorator to be applied to many parameters
   // returns that function with extra bits - timing and logging
console.time('Function timer'); //start a timer in the console
console.log(`\nExecuting function ...`) //log a message
//const result = originalFunction(); // call original function (WON'T work if name is undefined)
//const result = originalFunction.call(this, ...arguments) // WILL work, no matter how many args
const result = originalFunction.apply(this, arguments) // and so does this - try out both
//console.log(arguments); // [Arguments] { '0': 8 }
console.timeEnd('Function timer'); // stop the timer
return result; // return the result of running the original function
};
}
let decoratedPrintGreeting = loggingTimingDecorator(printGreeting); // will show how much time it takes to run a function
decoratedPrintGreeting("Decorated");
let sumDecorated = loggingTimingDecorator(Sum);
console.log(sumDecorated(2, 3));

//Decorators and forwarding - Caching
function slow(x) {
// there can be a time-consuming job here, like adding up to a large number
let random = 0, goal = Math.floor(Math.random() * x * 1_000_000); // random large number
console.log(`slow(${x}): randomly generated goal for ${x * 1_000_000} is ${goal}`);
for (let i = 0; i < goal; i++) random++;
return random; // return large number after counting to it
} //the above is complex logic

function cachingDecorator(origFunction) { // decorator takes a function as parameter
const cache = new Map(); // can also include outer environment variables via a closure
return function() { // decorator returns same function with extra bits - caching (accepts the value x)
    //remove the x to make the decoration generic and then on line 36? remove it also
if (cache.has(x)) { // if the key exists in the cache, (checks to see if the key exists or not)
console.log('returned cached value for ' + x); return cache.get(x); // read and return the result from it
} // can execute the code with the return function and exits
let result = origFunction.apply(this, arguments); // otherwise, call the original function and store the result
cache.set(x, result); // then cache (remember) the result for next time
return result;
};
}
// const fast = cachingDecorator(slow) // we can decorate the original slow function to use caching and make it fast
// const fastTimed = loggingTimingDecorator(fast) // we can decorate the fast version to include timing for testing
// fastTimed(8) // first time will still be slow because it's uncached
// fastTimed(8) // but every time after this will be much faster because result is cached

let decoratedCachingFunction = cachingDecorator(slow); //decorated the slow function
let loggingDecoratedandCachingFunction = loggingTimingDecorator(decoratedCachingFunction); //redecorated with logging function
//console.log(decoratedCachingFunction(4)); //requires the actual number, i call 4
//console.log(decoratedCachingFunction(4));
console.log(loggingDecoratedandCachingFunction(4)); //first time slow is called
console.log(loggingDecoratedandCachingFunction(4)); //second time it uses the caching and takes less time

//this is simply an object and functions inside an object is a method

// let worker = {
// getMultiplier() {
// return Math.floor(Math.random() * 1_000_000); // large random number
// },

// slow(x) {
// let random = 0, goal = x * this.getMultiplier(); // needs context to work
// for (let i = 0; i < goal; i++) random++;
// console.log(`worker.slow(${x}): randomly generated goal is ${goal}`);
// return random; // return large number
// }
// };
// worker.slow(5) // works, context comes from before the dot, ie. worker
// worker.fast = cachingDecorator(worker.slow) // without call/apply, context is lost
// worker.fast(3) // TypeError: Cannot read properties of undefined (reading 'getMultiplier')