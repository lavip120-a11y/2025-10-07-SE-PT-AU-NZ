function TopFunction(x) //function calling another function - closure
{
    return function (y) {
        return x + y;
    };
}
function printName(){
console.log("Prints a name");
}
function delayPrintlines() { //another function that delays printing by 2secs
    setTimeout(() => console.log("printing...."), 2000);
}

function FunctionCaller(originalFunc) { //function accepting another function as an argument
    console.log(`calling the function ${originalFunc.name}`); //print the function
    originalFunc();
}
FunctionCaller(printName); //decorated print name
FunctionCaller(delayPrintlines); //does the same thing