//only works for runtime errors...compile time issues are the responsibility of the developer

try{  //if an error occurs it throws it to catch and catch tells it what to do with it.  Put all the code that may be prone to erro goes in here
    console.log("Print first line");
console.log("Print first line");
console.log("Print first line");
console.log("Print first line");


getCPUFans(); //when printing it stops here because it can not understand this - getCPUFans is not defined
//use try catch and finally to handle errors

}
catch(error) { //catch requires a parameter
console.log(`error occured: ${error}`); //error occured, substitute this error
    }
finally { //any statement that wraps up the execution or wraps up the code and continues execution of the code

console.log("Print first line");
console.log("Print first line");
console.log("Print first line");
console.log("Print first line");
console.log("Print first line");
console.log("Finished execution of the function");
}

// try {
// const error = "mismatched quotes'
// } catch (error) {
// console.log('will not catch above error')
// }
// // SyntaxError: Invalid or unexpected token - doesn't go to catch block

try {
noSuchVariable;
} catch (error) { // error is just a variable name. 'error', 'err' or 'e' are all commonly used
console.log('caught an error: '+ error.message) // all errors have a message property
}
// caught an error: noSuchVariable is not defined
console.log('even though an error occurred above, it was caught so code continues');

try {
setTimeout( () => noSuchVariable, 1000 ); //asynchronous code cannot be caught using try catch block
} catch (error) { // error is just a variable name. 'error', 'err' or 'e' are all commonly used
console.log('only synchronous errors! ' + error.message) // all errors have a message property
}
console.log('prints synchronous code then throws uncaught asynchronous error after 1 sec' );