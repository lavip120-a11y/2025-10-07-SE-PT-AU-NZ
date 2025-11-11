let student = { //student object or property of an object or a key
    firstName: "William",
    location: "New Zealand",
    sing: function() {  //object (sing) can have a function
         console.log("I sing"); //definition 
    },
    sing2(){
console.log("Sing2 method");
    },
    printStudentDetails() {
        console.log(`Hello, My name is ${this.firstName} and I live in ${this.location}`);
    },
};
//using the 'this' call word
student.printStudentDetails();

//a function that is a property of an object is called its method.

const user = {
name: 'Bilbo Baggins',
printThis() {
console.log(this); // 'this' is the current object
return this; // if we return it, we can 'chain' object methods together
},
printGreeting() {
console.log(`Hello, I'm ${this.name}`); // 'this' is the current object
},
};
user.printThis().printGreeting(); // methods chained together, works because printThis returns this