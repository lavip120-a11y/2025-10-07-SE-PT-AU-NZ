let timerID = setInterval(() => console.log("Processing..."), 1000); //executes every second and will not stop
setTimeout(() => clearInterval(timerID), 10 * 1000);

function printMessage(msg) {
console.log(`Message: ${msg}`)
}
// function to be executed, then milliseconds to delay, then arguments for function
let timerId = setTimeout(printMessage, 1000, 'prints after 1 sec') // Message: prints after 1 sec
let cancelledTimerId = setTimeout(printMessage, 1000, 'timeout cancelled so never prints')
clearTimeout(cancelledTimerId); // printMessage function is cancelled before delay of 1 second

setTimeout( () => console.log("log statement inside arrow function"), 500 )
// prints 'log statement inside arrow function' after 0.5 seconds

function repeatInterval(delay, limit)
{
let counter = 1; // part of the outer environment record for repeatInterval
// intervalTimer is a reference to interval, to allow it to be cancelled
let intervalTimer = setInterval(function repeatThis() {
console.log('repeatInterval: repeated '+counter+' of '+limit+' times');
if (counter == limit) clearInterval(intervalTimer); // cancel interval after execution limit
counter++; // keep track of how many times the interval has executed, in outer environment
}, delay); // delay is milliseconds between intervals
}
repeatInterval(2000, 10); // make the interval repeat every 2 seconds for a max of 10 times