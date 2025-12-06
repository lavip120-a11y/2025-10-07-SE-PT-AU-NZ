const n = 1.23456; // primitive floating point number
console.log(n.toFixed(2)); // 1.23 - fixed to 2 decimal places
console.log(n.toFixed(4)); // 1.2346
console.log(n.toPrecision(10)); // 1.234560000 - fills or rounds to the exact number of digits

const hello = 'hello world' // primitive string
const Welcome = "Welcome";
console.log(hello.toUpperCase()); // HELLO WORLD
console.log(hello.endsWith('world')); // true
console.log(Welcome.toLowerCase);

if(hello.startsWith("hello")) //if and else
     console.log("success");
else console.log("failure");

hello.startsWith("hello") ? console.log("success") : console.log("failure"); //conditional operators

// //learning different ways to capitilise
function ucFirstLetters(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

console.log(ucFirstLetters('los angeles')) 

//use of split map charAt toUppercase & slice..join.. geez theres gotta be a simpler way to capitalise each letter
// function ucFirstLetters(string) {
//   return string.split(' ').map(word =>
//     word.charAt(0).toUpperCase() + word.slice(1)
//   ).join(' ')
// }

// console.log(ucFirstLetters('los angeles')); 


// // regex and replace
// function capitalizeFirstLetter(string) {
//   return string.replace(/^./, string[0].toUpperCase())
// }

// // Example usage
// const example2 = 'javascript'
// console.log(capitalizeFirstLetter(example2)) // Output: Javascript