console.log("Print in the console"); //Console statement to print the line
console.log("Print second line"); // use node Sample.js to run in the console - you dont need semi colon. 
// You can put all statements in 1 line and should seperate by semicolon.  
// Best practice is to have on seperate lines

/* Function to add two numbers and 
return the result of the addition of the numbers
This is the multiline comment*/

function Sum(a,b) {
    return a + b;
}

let person1 = "Arshad"; 
// You cannot use a number as the first digit of a variable,

person1 = {name: "Arshad", age: 30}; // JASON object
person1 = false; //Boolean
console.log(person1); //JavaScript will let anything be assigned to data type
console.log(1 / 0); //infinity
console.log(-1 / 0); //negative infinity
console.log("Mirza" / 45); // NaN 
console.log("Amazon" * 60); // NaN

let one = 1;
let two = 1;
let three = 1;
let four = 4;
// standard BODMAS order of operations - use brackets to override
// below is: 1 + 2 - ( (3 * 2) / 1 ) = 3 - 6
console.log(one + two - (three * two) / one); // -3
console.log(one + (two - three) * (two / one)); //-1

// to increment by one (all the same):
one = one + 1; // new value of one is previous value + 1
one += 1; // shorthand - add 1 to previous (also *=)
one++; // increment previous value (by 1)

// to decrement by one (all the same):
two = two - 1; // new value of two is previous value - 1
two -= 1; // shorthand - minus 1 from previous (also /=)
two--; // decrement previous value (by 1)

//three = three + 1;
//three *= 1;
three++; // increment by 1
console.log(three); //4

//four = four - 1;
four -= 1; //decrement by 1
four --;
console.log(four); //3