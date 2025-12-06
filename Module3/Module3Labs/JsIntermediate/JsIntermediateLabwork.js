// 1. Create a function that takes a string as a parameter and returns the string with the first character of each word changed
// into a capital letter

function ucFirstLetters(string) {
  return string
    .split(" ")
    .map(
      (
        word // splitting the string using a space '' as the seperator
      ) => word.charAt(0).toUpperCase() + word.slice(1) //finding the first letter of each word, applying the uppercase, slicing at index 1
    )
    .join(" "); // rejoining the string with a space
}
console.log(ucFirstLetters("los angeles"));
console.log(ucFirstLetters("geez this is tough")); //Test it with different strings.

// 2. Create a function truncate(str, max) that truncates a given string of text if its total length is greater than the max length.
// It should return either the truncated text, with an ellipsis (...) added to the end if it was too long, or the original text otherwise.

// function truncate(string, max) { //create a function truncate(string, max), text to truncate and number of letters to remain
//     return string.slice(0, max) + '...'; // code to be executed/returned. slice(start and end index to return) and concatenate ...
//     }
// console.log(truncate('This text will be truncated if it is too long', 25)); // This text will be truncat...

// b) Write another variant of the truncate function that uses a conditional operator. condition ? expressionIfTrue : expressionIfFalse
const truncate = (string, max) =>
  string.length > max ? string.slice(0, max) + "..." : string; //if the string is longer than the max reduce it and add ... otherwise keep the entire string
console.log(truncate("This text will be truncated if it is too long", 25));

// 3. Use the following animals array for the below tasks. Test each one by printing the result to the console.
const animals = ["Tiger", "Giraffe"];
animals.push("Elephant", "Lion"); // a) Add 2 new values to the end
animals.unshift("Gorilla", "Monkey"); // b) Add 2 new values to the beginning
animals.sort(); // c) Sort the values alphabetically

// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the middle of the animals array with newValue
function replaceMiddleAnimal(newValue) {
  //function declaration
  //const middle = (animals.length / 2) - 1 //testing length of array to find the middle...
  return animals.splice(2, 1, newValue); //using splice method to remove item 2, remove just the 1 item and replace it with newValue
}
replaceMiddleAnimal("Rhinceros"); //execute/calling the function, passing a value to the parameter
console.log(animals);

// e) Write a function findMatchingAnimals(beginsWith) that returns a new array containing all the animals
// that begin with the beginsWith string. Try to make it work regardless of upper/lower case.

function findMatchingAnimals(beginsWith) {
  //function declaration with name and parameter
  return animals.filter((animal) =>
    animal.toLowerCase().startsWith(beginsWith.toLowerCase())
  ); //filter through each animal and returns those that meet the condition.
} // changing all letters to lowercase to deal with upper and lowercase,
console.log(findMatchingAnimals("R"));

// 4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like 'margin-left' into
// camel-cased 'marginLeft'. The function should remove all dashes, and uppercase the first letter of each word after a dash.

// function camelCase(cssProp) {
// return cssProp.replace(/-(.)/g, (match, afterDash) => afterDash.toUpperCase()); //convert to lowercase, looks for the dash, and whats after it.
// //   return afterDash.toUpperCase(); //replaces the dash and what comes after it with an uppercase letter
// }

// function camelCase(cssProp) {
//   return cssProp.split('-').map((word, index) => { //split in two using the dash,
//     if (index === 0) return word.toLowerCase();
//     return word.charAt(0).toUpperCase() + word.slice(1); //capatalise the first letter after the dash, slice the rest of the word
//   }).join(''); } //join back together

// function camelCase(cssProp) {
//   let index = cssProp.indexOf('-'); //finding the dash index
//   return cssProp.slice(0, index) + cssProp.charAt(index + 1).toUpperCase() + cssProp.slice(index +2);
//first slice from 0 to the dash index, charAt find the letter after the dash, to UpperCase changes it to uppercase,
// slice starts at 2 after the dash and returns the rest of the word, it is all joined together by the concatenation
// }

// b) Create variants of the camelCase function that use different types of for loops,

// for of loop
// function camelCase(cssProp) {
//   let result = ""; // result will take the outcomes
//   let CapitalaftertheDash = false; //creating a variable, if its false do nothing, if its true apply Uppercase...

//   for (const char of cssProp) { //looping through the string
//     if (char === "-") { //is there a dash
//       CapitalaftertheDash = true; // if there is a dash, apply the condition - capitalise the following letter
//     } else {
//       result += CapitalaftertheDash ? char.toUpperCase() : char;
//       CapitalaftertheDash = false; // if true the next letter will be made uppercase otherwise it stays as is.
//     }
//   }
//   return result; //return the outcome
// }

// for loop
// function camelCase(cssProp) {
//   let result = ""; // result will take the outcomes
//   let CapitalaftertheDash = false; //creating a variable, if its false do nothing, if its true apply the condition...

//   for (let i = 0; i < cssProp.length; i++) { //looping through the string
//     if (cssProp[i] === "-") { //is there a dash
//       CapitalaftertheDash = true; // if there is a dash, apply the condition - capitalise the following letter
//     } else {
//       result += CapitalaftertheDash ? cssProp[i].toUpperCase() : cssProp[i];
//       CapitalaftertheDash = false; // if true the next letter will be made uppercase otherwise it stays as is.
//     }
//   }
//   return result; //return the outcome
// }

// c) with and without the conditional operator.  condition ? expressionIfTrue : expressionIfFalse

function camelCase(cssProp) {
  let aftertheDash = false; //creating a variable, if its false do nothing, if its true apply the condition...

  return cssProp
    .split("")
    .map((char) =>
      char === "-"
        ? ((aftertheDash = true), "")
        : aftertheDash
        ? ((aftertheDash = false), char.toUpperCase())
        : char
    )
    .join("");
} //split the string to an array, map alters each element in the array, checks if - is present, if so aftertheDash makes the following letter uppercase, if not a dash leave it alone, join converts back to a string.
//comma allows for 2 expressions

console.log(camelCase("margin-left")); // marginLeft
console.log(camelCase("background-image")); // backgroundImage
console.log(camelCase("display")); // display

// 5. Decimal number operations in JavaScript can lead to unexpected results, as in the following:
let twentyCents = 0.2;
let tenCents = 0.1;
console.log(`${twentyCents} + ${tenCents}`);
// We can sometimes avoid this using the toFixed function to force the number of decimal places as below, but it’s not always useful:
let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen); //why is this not working?

// a) Explain why the above code returns the wrong answer:
// it is not calculating, it is concatenating, toFixed converts a number to a string ... it has to be converted back to a number

// b) Create a function currencyAddition(float1, float2) which safely adds the two
// decimal numbers float1 and float2 and returns the correct float result.

function currencyAddition(float1, float2) {
  //function, name and parameters
  return (parseFloat(float1) + parseFloat(float2)).toFixed(2); //using parseFloat to parse into a floating point number and toFixed to round to two decimal points
}
console.log(currencyAddition(0.2, 0.1)); // printing the values to be calculated. started with toFixed at the end of (.20, .10) - it also returned the same result - does it matter where it goes?

// c) Create a function currencyOperation(float1, float2, operation) which safely performs the given
// operation (either +, -, / or *) on the two numbers and returns the correct float result.

function currencyOperation(float1, float2, operation) {
  f1 = Math.round(float1 * 100);
  f2 = Math.round(float2 * 100); // multiplying float values by 100 to represent cents - not sure if this is needed.
  let result;
  switch (
    operation //applying the switch statement
  ) {
    case "add":
      result = f1 + f2;
      break;
    case "subtract":
      result = f1 - f2;
      break;
    case "multiply":
      result = f1 * f2;
      break;
    case "divide":
      result = f1 / f2;
      break;
  }
  return result / 100; //.. converting back to dollars
}
const floatResult = currencyOperation(0.2, 0.1, "subtract"); //passing values to CurrencyOperation and assigning it to floatResult
console.log(floatResult); //printing floatResult

// d) (Extension) Extend the above function to include a fourth argument numDecimals
// which allows the operation to support different amounts of decimal places from 1 to 10.
// HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with
// different values as well as the below:

// console.log(0.3 == currencyAddition(0.1, 0.2)) // true
// console.log(0.3 == currencyOperation(0.1, 0.2, '+')) // true

// 6. Create a function unique(duplicatesArray) which takes an array parameter that may include duplicates.
// Your function should return an array containing only the unique values from duplicatesArray.
function unique(duplicatesArray) {
  //function, name and paramater
  return [...new Set(colours)]; //return a new set that takes unique values from colour array and spread returns a new array
  return [...new Set(testScores)];
  return [...new Set(gems)];
}
// Test with the following arrays and create another one of your own.
const colours = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "red",
  "blue",
  "yellow",
];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
const gems = [
  "emerald",
  "amethyst",
  "quartz",
  "citrine",
  "amethyst",
  "ruby",
  "emerald",
];
console.log(unique(colours)); // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
//console.log(unique(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]
//console.log(unique(gems));

// 7. Use the following array of book objects to practice the array functions for map, find and filter. 
// Test each of your answers to the below tasks.

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];
// a) Write a function getBookTitle(bookId) that uses the find function to return the
// title of the book object with the matching id.
function getBookTitle(bookId) {
  return (bookId = books.find((book) => book.title == "1984"));
}
console.log(getBookTitle());

// b) Write a function getOldBooks() that uses the filter function to return all book objects written before 1950.
function getOldBooks() {
  return (pre1950 = books.filter((book) => book.year < 1950));
}
console.log(getOldBooks());
// c) Write a function addGenre() that uses the map function to add a new genre property to all of the above books, with the value ‘classic’.
const addGenre = books.map((book) => { 
  //using a arrow function
  return { ...book, genre: "classic" }; // function body, cmaking a copy of the book object and adding genre
});
console.log(addGenre);
// d) (Extension) Write a function getTitles(authorInitial) that uses map and
// filter together to return an array of book titles for books written by authors whose
// names start with authorInitial.
// e) (Extension) Write a function latestBook() that uses find and forEach to get the
// book with the most recent publication date.

// 8. The following code creates a new Map object for storing names beginning with A, B, or C with their phone numbers.

const phoneBookABC = new Map(); //an empty map to begin with
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "0455221182");
// a) Create a new phoneBookDEF Map to store names beginning with D, E or F
const phoneBookDEF = new Map();
// b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
// is this what you mean by initialise? or something else?
phoneBookDEF.set("Donna", "0461257896");
phoneBookDEF.set("Eugene", "0461896643");
phoneBookDEF.set("Fred", "0461345987");
// c) Update the phone number for Caroline
phoneBookABC.set("Caroline", "0344668892");
// d) Write a function printPhoneBook(contacts) that prints the names and phone numbers in the given Map
function printPhoneBook(contacts) {
  return (contacts = phoneBookDEF);
}
console.log(printPhoneBook());

// e) Combine the contents of the two individual Maps into a single phoneBook Map
const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);  //using the spread operator to copy both phonebooks into a new map

// f) Print out the full list of names in the combined phone book
console.log(phoneBook);

// 9. Given the below salaries object, perform the following tasks.
let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};
// a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries
//was i supporse to use get and object.entries?

function sumSalaries(salaries) {
  //getting the object values and making them an array. using array.reduce to add the values.
  return Object.values(salaries).reduce((sum, salary) => sum + salary, 0);
  } // the sum total is added to the salary amd produces a new sum total until it reaches the end
console.log(sumSalaries(salaries));

// b) Write a function topEarner(salaries) that calculates and returns the name of the person earning the highest salary
function topEarner(salaries) {
  return Object.entries(salaries).reduce((top, [name, salary]) => (salary > top[1] ? [name, salary] : top), ["", -Infinity])[0];
} // use onject entries to convert to key value pairs, reduce loops through looking for top name and salary. 
// Check if salary is higher than to if so replace it, if not it stays the same.  "" indicates not allocated topearner yet, maximum salary starts at 0. 0 indicates only to return a name
console.log(topEarner(salaries));

// 10.The following code uses the Date object to print the current time and the number of hours
// that have passed today so far. Extend the code to do the following:

const today = new Date(); //current date
console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");

// a) Print the total number of minutes that have passed so far today
console.log(today.getMinutes() + " minutes have passed so far today");

// b) Print the total number of seconds that have passed so far today
console.log(today.getSeconds() + " seconds have passed so far today");

// c) Calculate and print your age as: 'I am x years, y months and z days old'

const birthDate = new Date("1993-03-19");
let age = today.getFullYear() - birthDate.getFullYear(); //year difference
let months = today.getMonth() - birthDate.getMonth(); //month difference
let days = today.getDate() - birthDate.getDate(); //day difference

console.log('I am ' + age + ' years, ' + months + ' months and ' + days + ' days old') 

// d) Write a function daysInBetween(date1, date2) which calculates and returns the amount of days in between the two given dates.

function daysInBetween(date1, date2) { // function takes 2 parameters
const startDate = new Date(date1); // convert to date object 
const endDate = new Date(date2);
const timePassed = endDate.getTime() - startDate.getTime(); //find the time passed between dates - getTime returns the number of milliseconds since epoch
const daysPassed = timePassed / (1000 * 60 * 60 * 24); // divided by milliseconds, seconds, hours, days (a full day in milliseconds)

return daysPassed;   
}
console.log(daysInBetween("2025-10-07", "2025-12-05")); //call