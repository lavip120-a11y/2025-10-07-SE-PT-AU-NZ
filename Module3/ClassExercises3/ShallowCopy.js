let person = {};
person["firstname"] = "Mirza";
person["age"] = 40;

console.log(person);

//shallow copy - create an empty object as above....

const user = { name: 'Elliot', age: 27 };

const userClone = {}; // empty object, refers to different memory location
const userClone2 = {...user, age: 55, location: 'New Zealand'}; //spread syntax to clone objects
//you can override values or add new properties in the cloned object

for (let key in user) { // iterate over user properties
userClone[key] = user[key]; // re-create them in userClone
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

