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

let Person2 = new Person("James", 53);

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