// 5. Rewrite the following function. Test each version to make sure they work the same.

//function getGreeting(name) {
//return 'Hello ' + name + '!';
//}

//a) function expression syntax

// first attempt works

/*getGreeting("Roger"); // Declare a variable

function getGreeting(name) { // creating a function using expression syntax
console.log("Hello" + name + '!');
}
*/

// second attempt works

/*const getGreeting = function (name) { //which one is the right one
console.log("Hello" + name + "!");
};

getGreeting("Roger"); //Pass the parameter to it 
*/

// b) arrow function syntax. 
const getGreeting = (name) => "Hello" + name + "!"; 
console.log(getGreeting("Roger")); //printing to see if it works

