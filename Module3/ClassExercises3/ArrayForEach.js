const hobbits = ['Bilbo', 'Frodo', 'Samwise', 'Merry', 'Pippin'];

const students = [ //array of objects
    {firstName: "Mirza", location: "Auckland"}, //each item in an object
    {firstName: "Billy", location: "Wellington"},
    ]

for (let k = 0; k < hobbits.length; k++){ //length gives us the total number of items in an array
    console.log(hobbits[k]); //simply printing the array
    console.log(hobbits.indexOf("Samwise"));
}
//using forEach syntax.  forEach requires a function.  You dont have to give a name for a function (its a runtime function). 
// function has an item of an array and then an index for where to start, i.  
hobbits.forEach(function (item, i) {
    console.log("item = " + item + "i = " + i); //find out what i is and print in the same line
});
// simplified version of above using arrow function.  1 line of code does not require curly brackets
hobbits.forEach((item, i) => console.log('item ${item} and i ${i}'));

//let StudentFound = students.find((item, index) => { //find method, not using the index here just item.
 //   if (item.firstName == "Billy") return item; //internally checking if item.firstname equals Billy
//});

// can simplify above by the following: 
//let StudentFound = students.find((item) => item.firstName == "Billy");

//- forEach requires a Function and that will be executed on 
hobbits.forEach((hobbit, index) => { // usually we use an arrow function here
console.log(`#${index}: ${hobbit}`) // runs once for every item in array
});
//if you have 1 line of code you dont need {}, can remove them.

let StudentFound = students.find((item) => item.firstName == "Mirza");
console.log(StudentFound);

//find method

const products = [
{ id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' },
{ id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' },
{ id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants' }, 
{ id: 2, title: "Women's Hoodie", price: 54.95, category: 'Winter' },
{ id: 2, title: "Kids Hoodie", price: 35.95, category: 'Winter' },
];
// we usually use an arrow function - runs once for each array element until condition is true
let jeans = products.find(product => product.title == 'Denim Jeans') // returns matching item
let shirt = products.find(product => product.category == 'Shirts') // returns matching item
console.log(jeans) // { id: 3, title: 'Denim Jeans', price: 49.95, category:'Pants' }
console.log(shirt) // { id: 1, title: 'Sleeveless Tee', price: 23.95, category:'Shirts' }

//filter method returns all matching winter products.  Filter always returns an array  Find returns an object.

let winterproduct = products.find((product)=> product.category == "Winter");
let winterProducts = products.filter((product)=> product.category == "Winter"); 
let shirtProducts = products.filter((product)=> product.category == "Shirts");
let under50s = products.filter((product) => product.price < 50);

console.log(winterproduct);
console.log(winterProducts);
console.log(shirtProducts);
console.log(under50s);