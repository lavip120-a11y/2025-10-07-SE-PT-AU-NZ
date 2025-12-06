let person = {}; //empty property
person["firstname"] = "Mirza"; //add property
person["age"] = 40; //keys have to be in a string because they are an array

console.log(person);

//shallow copy - create an empty object as above....which is a user clone

const user = { name: 'Elliot', age: 27 };

const userClone = {}; // empty object, refers to different memory location
const userClone2 = {...user, age: 55, location: 'New Zealand'}; //spread syntax to clone objects
//you can override values or add new properties in the cloned object

for (let key in user) { // iterate over user properties
userClone[key] = user[key]; // re-create them in userClone - for each key it fetches the value on the left and right
}
userClone.age= 30;

userClone2.age = 50;

console.log(userClone); // { name: 'Elliot', age: 27 }
console.log(user)
console.log(userClone2);

//it is simpler to use a spread syntax

const vehicle = { make: "Toyota", model: "Camry" };

const mergedUserVehicle = { //mutliple objects in a single object
    ...user, 
    ...vehicle,
    region: "South Pacific",
    sales: 4000,
};
console.log(mergedUserVehicle);

