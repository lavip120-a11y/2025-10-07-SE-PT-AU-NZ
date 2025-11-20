let newArray = ["Mirza", "Smith", "Mirza", "Smith", "Karl", "Karl"]; //passing an array to a new set will remove all duplicate values
let newSet = new Set(newArray); //set only stores unique values unlike array
console.log(newArray);
console.log(newSet);

newSet.add("Billy"); // adds value to set name
newSet.add("George");

console.log(newSet.size); //prints size of set
console.log(newSet);

// forOf, forEach in Set
const names = new Set(["Pedro", "Oliver", "Jack", "Mateo",])

for (let name of names) {
    console.log(name);
}

names.forEach((name) => console.log(name));

console.log(names.delete("Jack")); //true - successful delete
console.log(names.has("Jack")); // false - Jack no longer exists in the set
console.log(names.has("Mateo")); //true - Mateo does exist in set
names.clear(); //removes everything from the set
console.log(names); //set(0) {} because it is now cleared