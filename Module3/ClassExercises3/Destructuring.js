
//define 3 different variables - works left to right and assigns - it only copies 1 by 1 and leaves the rest
let [, , student1, student2, student3] = ["Mirza", "William", "Smith"]; //Destructuring an array
// if you add commas it will skip
console.log(student1);
console.log(student2);
console.log(student3);

let [l, m, n] = "xyz"; // Destructuring a string

console.log(l);
console.log(m);
console.log(n);

//destructures by copying items into variables
const mj = ['Michael', 'Jordan']
const [mjFirst, mjLast] = mj // destructure (unpack) array on right into separate variables on left

console.log(mjFirst, mjLast) // Michael Jordan

//ignoring using commas
const [jcFirst, jcLast, , , jcPlace] = ['Julius', 'Caesar', 'Consul', 'of the', 'Roman', 'Republic']
console.log(`${jcFirst} ${jcLast} is a ${jcPlace}`) // Julius Caesar is a Roman

//it works with any iterable on the right-side
const [a, b, c] = "abc"; // strings are iterable, so can break into characters
const [ one, two, three ] = new Set([1, 2, 3]); // Sets are iterable, so can be destructured
const [ [type, quantity] ] = new Map([ ['apple', 4] ]); // Maps are iterable too
 // now we have 8 individual variables: a, b, c, one, two, three, type, quantity
console.log(a, b, c, one, two, three, type, quantity); // a b c 1 2 3 apple 4

//it assigns anything to the left hand side
const monarch = {}; // empty object
[ monarch.title, monarch.name ] = "King Charles".split(' '); // store array pieces in object properties
console.log(monarch); // { title: 'King', name: 'Charles' }


let customer = { //this is an object
    customerName: "William Shakespeare", 
    location: "England",
    country: "United Kingdom",
    DOB: "1600-01-01",
 };

 //copy syntax from above using {} for object destructuring
 let {customerName, location } = customer; //whatever the key name specified will be printed
 console.log(customerName);
 console.log(location);

 // Destructuring for defining functions with smart parameters
 function processOrder({DOB, country}) {
    if (DOB < "1900-01-01") {
    }
if (country == "United Kingdom") {
    }
     }
    
processOrder(customer); //pass customer object - its not printing because they 