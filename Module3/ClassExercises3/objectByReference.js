let x = 10; //defined variables with values are stored in javaScript in a block of memory
let y = x; // if x = 10 and then y = x, y = 10 

//copy by value only happens for primitive types

let student = {
    firstname : "Mirza",
    country: "New Zealand",
};

let student2 = student;

console.log(student);
console.log(student2);

student2.country = "Australia";

console.log(student);
console.log(student2);
//copy by reference happens for complex types like objects

let person1 = { name: 'Anna' }; // object - stored by reference
let person2 = person1; // person2 points to same memory location as person1
person1.name = 'Brian';
console.log(person2.name); // Brian, even though we changed person1.name
let person3 = 'Carly'; // string - stored by value
let person4 = person3; // person4 points to separate memory location than person3, but both store same value
person3 = 'David';
console.log(person4); // still Carly, since person3 and person4 are string primitives and store independant values


