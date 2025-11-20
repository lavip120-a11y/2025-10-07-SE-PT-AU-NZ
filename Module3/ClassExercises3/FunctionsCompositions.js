function TopFunction(x) //function calling another function - closure
{
    return function (y) {
        return x + y;
    };
}
function printName(){
console.log("Prints a name");
}
function delayPrintlines() {
    setTimeout(() => console.log("printing...."), 2000);
}

function FunctionCaller(originalFunc) {
    console.log(`calling the function ${originalFunc.name}`);
    originalFunc();
}
FunctionCaller(printName); //decorated print name