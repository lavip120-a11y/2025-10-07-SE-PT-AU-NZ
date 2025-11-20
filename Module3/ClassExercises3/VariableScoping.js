let x = 10 //global variable

if (x == 10) {
let k = 20; //this variable cannot be accessed out of this block
x = x + 5;
}

function processData() {
    let i = 40;
    if (i == 40)
 {
    let z = 50;
    i += 1;
 }
}
i = 50

//lexical environment

let globalVariableCat = 'cat';
function myFunction() {
let localVariableDog = 'dog'
return 'global function with local scope variable '+localVariableDog;
}
console.log(localVariableDog) // ReferenceError: localVariableDog is not defined
// globalEnvironment = {
// environmentRecord: {
// globalVariableCat: 'cat', // has no access to localVariableDog
// myFunction: <reference to function object>,
// }
// outer: null // there is no parent environment here
// }
// localMyFunctionEnvironment = {
// environmentRecord: {
// localVariableDog: 'dog'
// },
// outer: globalEnvironment // can still access everything in global
// }