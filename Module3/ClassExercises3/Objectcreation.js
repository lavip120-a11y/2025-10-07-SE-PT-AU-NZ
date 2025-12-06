// Different ways of creating objects

// Object literal.
let student = {
    firstName: "Mirza",
    location: "Auckland",
    printFirstName() { //method inside an object
        console.log(this.firstName);
    },
};

//Function constructor

function Student(firstName, location) {
    this.firstName = firstName;
    this.location = location;

}

let student1 = new Student("Bill", "Sydney");
let student2 = new Student("Willy", "Wellington");

//Classes

class StudentClass { //class 
    constructor(firstName, location) {
        this.firstName = firstName;
        this.location = location;
        this.region = "Oceania";
    }
    hasShortName() {
        return this.firstName.length <= 3 ? true : false;
    }
    printFirstName() {
        console.log(this.firstName);
    }
}
//objects
let student3 = new StudentClass("John", "Hamilton");
let student4 = new StudentClass("Steve", "Tasman");

// a class is like a template or blueprint
class ExampleClass {
// each instance of the class will have any properties
prop1 = 'value1';
prop2 = 'value2';
constructor() {
// constructor function creates a new instance of this class
}
method1() {
// methods are functions of the class
}
}