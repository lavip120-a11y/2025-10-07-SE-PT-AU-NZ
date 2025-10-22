let students = ["John", "Bill", "Smith", "Tom"];

let cars = ["Audi", "Mercedes", "Toyota", "BMW"]
let countries = new Array();
countries.push("New Zealand");
countries.unshift("Australia");

console.log(countries);

console.log(students);

console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);

students.push("James");
// students.unshift('James') - adds James at the beginning of the array

// declare an array 

console.log(cars);
cars[2] = "Mitsubishi";
console.log(cars);

let rivers = ['Mississippi', 'Amazon', 'Nile'];
let lastRiver = rivers.pop();
console.log(lastRiver); // Nile
console.log(rivers); // [ 'Mississippi', 'Amazon' ]

let firstRiver = rivers.shift();
console.log(firstRiver); // Mississippi
console.log(rivers); // [ 'Amazon' ]

let volcanoes = [ 'Mount Vesuvius', 'Mount Etna', 'Mount Fuji' ];
let fujiIndex = volcanoes.indexOf('Mount Fuji');
console.log(fujiIndex); // 2 (indexes start at 0)
console.log(volcanoes.indexOf("Mount Etna"))

console.log(countries.length)

// practice

