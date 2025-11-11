let student = {
    name: "Bruce",
    location: "Sydney",
};
let person = {}; //empty object

person.name = "William"; //you can add properties later by using the property name and assigning the data
person.age = 48;
person.location = "Melbourne";

console.log(student);
console.log(person);

//object created using constructor
const product = new Object(); //creates a new empty object or you can use this, const user = {} its the same

const user = { // user object contained within curly braces
name: 'joe', // string property with key 'name' and value 'joe'
age: 20, // numeric property with key 'age' and value 20
'has a dog': true // multi-word property key 'has a dog' with boolean value true
};

console.log(user.name); // get object property called name and log it
let dogOwner = user['has a dog']; // get value of property 'has a dog' and assign to new variable
user.age = 21; // set (or assign) new value to object property called age
user.location = 'NSW'; // create new object property called location and set (assign) a value
delete user.location; // delete property of user object called location
console.log(user);
console.log(user["has a dog"]); //where the property key name has spaces you use the square brackets

const object = {
2: 'value of numeric property',
'2': 'value of string property'
}
console.log(object); // { '2': 'value of string property' } since 2 and ‘2’ are same

for(let j in user)
{
    console.log(`key ${j} of object value is ${user[j]}`);
}