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