const teeProduct = { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' }
 // key and value are just variable names, could be anything
 for (let [key, value] of Object.entries(teeProduct)) {
 console.log(`${key}: ${value}`) // id: 1, title: Sleeveless Tee, price: 23.95 ...
 }

 let x = 10;
 let y = 20;
 
// console.log(`x: ${x} and y is ${y}`);  
// let temp; //traditional way to store, swapped variables using all this code
//  temp = y;
//  y = x;
//  x = temp;
//  console.log(`x: ${x} and y is ${y}`); 
 console.log(`x: ${x} and y is ${y}`);
 [y, x] = [x, y] ; //this is the same as above but using destructuring - very simple
 console.log(`x: ${x} and y is ${y}`);

 //swap variables
 let student = 'James', teacher = 'Andrew';
[student, teacher] = [teacher, student]

console.log(student) // Andrew
console.log(teacher) // James