let studentMap = new Map(); //empty map
let objectStore = { location: "Auckland" }; 

studentMap.set("firstName", "Mirza");  
studentMap.set(true, "yes");
studentMap.set(objectStore, { Profession:"Trainer"}); //using variable as a key to get the item 

console.log(studentMap);
console.log(studentMap.size); //total items inside a map
console.log(studentMap.get(true)); //returns yes
console.log(studentMap.get(objectStore));

const exampleMap = new Map() // create new empty map object
exampleMap.set(1, 'number one') // 'set' adds a new key-value pair to the map
exampleMap.set('1', 'string one') // maps support keys of different types
exampleMap.set(true, 'true') // can have boolean keys
exampleMap.set({name: 'John'}, {phone: '0412345678'}) // object keys also valid
exampleMap.set('1', 'second string one') // overwrites previous value if key exists
console.log(exampleMap.size) // 4 - number of items in the map
console.log(exampleMap)
// Map(4) { 1 => 'number one', '1' => 'second string one', true => 'true',
//{ name: 'John' } => { phone: '0412345678' } 

console.log( exampleMap.get('1') ) // second string one - gets value for matching key
console.log( exampleMap.get(2) ) // undefined - key doesn't exist so no value
console.log( exampleMap.has(1) ) // true - key does exist
console.log( exampleMap.delete(true) ) // true - removes item and returns true if successful

exampleMap.clear() // removes all items from map
console.log( exampleMap ) // Map(0) {}