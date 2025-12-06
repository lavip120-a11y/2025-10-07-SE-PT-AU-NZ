//Question6

const westley = { //object with key value pairs
name: 'Westley', //list of properties
numFingers: 5
}
const rugen = {
name: 'Count Rugen',
numFingers: 6
}
const inigo = {
firstName: 'Inigo', 
lastName: 'Montoya', //a) Complete the inigo object by adding a lastName property.
greeting(person) {
let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}.`; //included lastname in the greeting. 
console.log(greeting + this.getCatchPhrase(person));
},
// b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead
// prints his famous catch phrase to the console. HINT: see https://www.imdb.com/title/tt0093779/characters/nm0001597.
// getCatchPhrase(person) {
//     if (person.numFingers == 6) {
//      return 'You killed my father. Prepare to die.'; //if condition is true return this string
//     } else {
//     return 'Nice to meet you.'; //otherwise return this
//   }
// } 
// }

// c) Update getCatchPhrase to use arrow function syntax and a conditional operator.

getCatchPhrase : (person) => person.numFingers == 6 ? 'You killed my father. Prepare to die.' : 'Nice to meet you.',
}; 

inigo.greeting(westley) //function called using variable names
inigo.greeting(rugen)


// 7. The following object represents a basketball game and keeps track of the score as the game progresses.
// a) Modify each of the methods so that they can be ‘chained’ together and the last line of the example code works

const basketballGame = {
score: 0,
fouls: 0,  // c) Add a new object property to keep track of the number of fouls 
freeThrow() {  
console.log(this.score++);
console.log(this.fouls+=1);  //and a method to increment it, similar but separate to the score. 
return this;
},
basket() {
console.log(this.score += 2);
return this;
},
threePointer() {
console.log(this.score += 3);
return this;
},
halfTime() {
console.log('Halftime score is '+this.score, 'and foul count is '+this.fouls); //Include the foul count in the half time and full time console messages
return this;
},
fullTime() { // b) Add a new method to print the full time final score
    console.log(this.fouls += 7);
console.log('Fulltime score is ' +this.score, 'final foul count is '+this.fouls);
} //Include the foul count in the half time and full time console messages
};

//modify each of the above object methods to enable function chaining as below:
//basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime().fullTime();

// d) Test your object by chaining all the method calls together in different combinations.
//basketballGame.basket().basket().basket().basket().halfTime();
basketballGame.basket().freeThrow().freeThrow().halfTime().freeThrow().basket().threePointer().fullTime();


// 8. The object below represents a single city.

const sydney = {
name: 'Sydney',
population: 5_121_000,
state: 'NSW',
founded: '26 January 1788',
timezone: 'Australia/Sydney'
}
// a) Write a function that takes an object as an argument and uses a for...in loop to access and print to the 
// console each of those object properties and their values. Test it using the sydney object below.
function singleCity(object) {
for (let key in object) {
    console.log(`${key}: ${object[key]}`);
}
}
singleCity(sydney);

// b) Create a new object for a different city with different properties and call your function again with the new object.

const auckland = {
name: 'Auckland',
language: 'English',
country: 'New Zealand',
landmark: 'One tree hill',
timezone: 'Auckland, New Zealand'
}
singleCity(auckland);

// 9. Use the following variables to understand how JavaScript stores objects by reference.

let teamSports = ['Hockey', 'Cricket', 'Volleyball']; //array
let dog1 = 'Bingo'; //string
let cat1 = { name: 'Fluffy', breed: 'Siberian' }; //object

//a) Create a new moreSports variable equal to teamSports and add some new sport values to it (using push and unshift)
// let moreSports = {}; //Shallow Copy - new object replicates the structure of teamSports. turning an array into an object
// for (let key in teamSports) {  //looped over teamsports array and created an object
//     moreSports[key] = teamSports[key];
// }
// // moreSports.push("Rugby"); //adding rugby to the end of the object values using push
// // moreSports.unshift("Netball", "Polocross"); //adding 2 other sports to the beginning of the object values list
// console.log(moreSports); //printing to confirm it worked.

// b) Create a new dog2 variable equal to dog1 and give it a new value ???????? why isnt it writing both?

let dog2 = dog1; //creating a new dog2 variable by copying dog1 by reference
dog2 = 'English Stafforshire'; //added a new value 
console.log("dog2; " +  dog2); 

// c) Create a new cat2 variable equal to cat1 and change its name property

//let cat2 = cat1; // new cat2 variable
//cat2.name = "Bubsy"; // changed name property

// d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
// changed? Why?  
console.log(teamSports); // it has the additions made to its shallowcopy because it refers to the memory location for moreSports
console.log(dog1); //referencing dog1 stored value and not the new value added to dog2 - string value is independent
console.log(cat1); // cat 1 has printed with the new name value given to cat2 because it is a object with key value pairs.

// e) Change the way the moreSports and cat2 variables are created to ensure the originals remain independent

let cat2 = {
...cat1, //using shallow copy object spread
name: 'Bubba'
}
console.log(cat2); //checking to see if it worked

let moreSports = [...teamSports]
moreSports.push('Rugby'); //I cant make this work
moreSports.unshift('Netball, Polocross');

console.log(moreSports); //printed to confirm that the original is maintained.  


// 10. The following constructor function creates a new Person object with the given name and age values.

function Person(name, age) { //define structure
this.name = name;
this.age = age;
this.canDrive = () => this.age >= 20; //can drive method
return this;
}
// a) Create a new person using the constructor function and store it in a variable

let Person1 = new Person("John", 35); //create new person using the constructor function

// b) Create a second person using different name and age values and store it in a separate variable

let Person2 = new Person("James", 53); //seperate variable with second person

// c) Print out the properties of each person object to the console
console.log(Person1);
console.log(Person2);

// d) Rewrite the constructor function as a class called PersonClass and use it to create a
// third person using different name and age values. Print it to the console as well.

class PersonClass {
constructor(name, age) {
    this.name = name;
    this.age = age;
    }
    canDrive() { //canDrive method
        return this.age >=20
    }
}
let PersonClass1 = new PersonClass("Roger", 17);
console.log(PersonClass1);

// e) Add a canDrive method to both the constructor function and the class that returns true 
// if the person is old enough to drive.

console.log(Person1.canDrive());
console.log(Person2.canDrive());
console.log(PersonClass1.canDrive());