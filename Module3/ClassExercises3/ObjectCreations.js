function User(first, last) { // constructor function - defined the structure of an object
this.first = first;  //create a new property assign the value
this.last = last;
this.hasShortName = () => this.first.length <= 3; //define a method
//another way to write it is: this.hasShortName = () => { if (this.first.Length <= 3) return true;};
}

// we can create multiple users with different names
let user1 = new User('Tim', 'Smith'); // need to use 'new'
console.log(user1); // User { first: 'Tim', last: 'Smith' }
console.log(user1.hasShortName()); // true

//i can create another user using contructor instead of cloning - this is the ideal way to do it.

let user2 = new User("Mirza", "Arshad"); //user2 and 3 are seperate objects
let user3 = new User("Will", "Smith");

console.log(user2);
console.log(user3);

//class is better than constructor
class Users {
constructor(first, last) {
this.first = first;
this.last = last;
}

hasShortName() {
return this.first.length >= 3
}
}

let users2 = new Users('Tina', 'Smith') // need to use 'new'
console.log(users2) // User { first: 'Tina', last: 'Smith' }
console.log(users2.hasShortName()) // false