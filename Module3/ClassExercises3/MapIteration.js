 const recipeMap = new Map([ //define ecerything upfront
    ['flour', '1 cup'],
    ['milk', '1/2 cup'],
    ['eggs', 2],
    ['butter', '50g']
 ])

const recipeMap2 = new Map();
recipeMap2.set("flour", "1 cup");
recipeMap2.set("Milk", "1/2 cup");
recipeMap2.set("eggs", "2");
recipeMap2.set("butter", "50 g");

console.log(recipeMap);
console.log(recipeMap2);

 for (let ingredient of recipeMap.keys()) { //map has 3 ways to iterate through - keys
    console.log(ingredient); // flour, milk, eggs, butter
 }
 for (let quantity of recipeMap.values()) { //- iterating through values
    console.log(quantity); // 1 cup, 1/2 cup, 2, 50g
 }
 for (let item of recipeMap) { // same as recipeMap.entries() 3rd way is key value pairs (looks like an object but not)
    console.log(item); // ['flour', '1 cup'], (and so on)
 }
// map conversion to object
let recipeObject = Object.fromEntries(recipeMap); //object prints in key value pairs.
console.log(recipeObject);

 //converting object to map object
const priceObject = { banana: 1, pineapple: 2, watermelon: 5 } //this is an object
 const priceMap = new Map( Object.entries(priceObject) ) //create a map here
 console.log(priceMap) // Map(3) { 'banana' => 1, 'pineapple' => 2, 'watermelon' => 5 }
 console.log(priceMap.get('banana')) // will give value 1 - map method

 