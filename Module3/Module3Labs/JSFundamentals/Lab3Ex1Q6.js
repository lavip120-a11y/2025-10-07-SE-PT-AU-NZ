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
