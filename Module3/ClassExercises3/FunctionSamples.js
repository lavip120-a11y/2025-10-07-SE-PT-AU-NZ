// 'function' keyword followed by the custom function name, then ()
function helloWorld() // we can include parameters inside the () as function variables
{ // function body is enclosed with curly brackets (braces)
console.log('hello world'); // can be one or multiple statements inside the function
}

helloWorld(); // once the function is defined, we need to call it to make it run/execute

// function checkAge returns a value when called
function checkAge(age) {
if (age >= 18) {
return 'adult'; // if the condition is true, return this string and exit
}
return 'non-adult'; // if the condition was false, return this string and exit
}
//let result ? // calling a function

console.log( checkAge(21) ) // adult
console.log( checkAge(13) ) // non-adult