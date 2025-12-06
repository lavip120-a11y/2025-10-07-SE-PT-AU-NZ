console.log("First");
console.log("Second");

setTimeout(() => console.log("Third"), 2000); //delayed code execution by 2 seconds
//setTimeout will always give a slight delay and therefore those conse without will print first 

// function printThirdLine() //you can add the function above ... 
// {
// console.log("Third"); //delay by 2 seconds
// }

console.log("Fourth");
console.log("Fifth");
console.log("Sixth");

function Sum(a,b) {
console.log(a+b);

let timerID = setTimeout(Sum, 2000, 10, 20); //reference to timer

for (let i= 0; i < 10; i++)
if (i == 5) {
    clearInterval(timerID);
    console.log("Processing stopped..");
    break; //breaks the loop - exit a loop
}
}

clearTimeout(timerID); //clears or stops the execution of set timeout function - nothing will run.
