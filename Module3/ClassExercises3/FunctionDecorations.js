function printGreeting(name) { //Simple undecorated function
    console.log('Hello, ' + name);
}
printGreeting('Undecorated');

function loggingTimingDecorator(originalFunction) { // same decorator function as before
return function () { // BUT now the returned function doesn't name its arguments from here
console.time('Function timer'); //start a timer
console.log(`\nExecuting function ...`) //log a message
//const result = originalFunction(name); // WON'T work as name is now undefined
//const result = originalFunction.call(this, ...arguments) // WILL work, no matter how many args
const result = originalFunction.apply(this, arguments) // and so does this - try out both
console.log(arguments); // [Arguments] { '0': 8 }
console.timeEnd('Function timer'); // stop the timer
return result; // return the result of running the original function
}
}
let decoratedPrintGreeting = loggingTimingDecorator(printGreeting);
decoratedPrintGreeting("Decorated");

//Decorators and forwarding - Caching
function slow(x) {
// there can be a time-consuming job here, like adding up to a large number
let random = 0, goal = Math.floor(Math.random() * x * 1_000_000); // random large number
console.log(`slow(${x}): randomly generated goal for ${x * 1_000_000} is ${goal}`);
for (let i = 0; i < goal; i++) random++;
return random; // return large number after counting to it
}
function cachingDecorator(origFunction) { // decorator takes a function as parameter
const cache = new Map(); // can also include outer environment variables via a closure
return function(x) { // decorator returns same function with extra bits - caching
if (cache.has(x)) { // if the key exists in the cache,
console.log('returned cached value for ' + x); return cache.get(x); // read and return the result from it
}
let result = origFunction(x) // otherwise, call the original function and store the result
cache.set(x, result); // then cache (remember) the result for next time
return result;
};
}
const fast = cachingDecorator(slow) // we can decorate the original slow function to use caching and make it fast
const fastTimed = loggingTimingDecorator(fast) // we can decorate the fast version to include timing for testing
fastTimed(8) // first time will still be slow because it's uncached
fastTimed(8) // but every time after this will be much faster because result is cached

let decoratedCachingFunction = cachingDecorator(slow); //decorated the slow function
let loggingDecoratedandCachingFunction = loggingTimingDecorator(decoratedCachingFunction);
console.log(loggingDecoratedandCachingFunction(4));
console.log(loggingDecoratedandCachingFunction(4));