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
