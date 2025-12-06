// Task 1: Create 6 JS functions which print the pizza processing statements and call those functions in sequence. Use a mix of
// function declarations, expressions and arrow functions.

// function preparingPizza() {  //function declaration syntax
// console.log("Started preparing pizza");
// }
// preparingPizza();

// function madeBase() {
// console.log("Made the base");
// }
// madeBase();

// sauceCheese = function() {  //function expression syntax
// console.log("Added the sauce and Cheese");
// }
// sauceCheese();

// pizzaToppings = function() {
// console.log("Added the pizza toppings");
// }
// pizzaToppings();

// const cookingPizza = () => {console.log("Cooked the pizza");}  //arrow function syntax
// cookingPizza();

// const pizzaReady = () => {console.log("Pizza is ready");}
// pizzaReady();

// Task 2: Make the functions asynchronous by using setTimeout with different time durations, maintaining the right order.

// function preparingPizza() {  //function declaration syntax
// console.log("Started preparing pizza");
// }
// let timer = setTimeout(preparingPizza, 1000);

// function madeBase() {
// console.log("Made the base");
// }
// let timer1 = setTimeout(madeBase, 2000);

// sauceCheese = function() {  //function expression syntax
// console.log("Added the sauce and Cheese");
// }
// let timer2 = setTimeout(sauceCheese, 3000);

// pizzaToppings = function() {
// console.log("Added the pizza toppings");
// }
// let timer3 = setTimeout(pizzaToppings, 4000);

// const cookingPizza = () => {console.log("Cooked the pizza");}  //arrow function syntax
// let timer4 = setTimeout(cookingPizza, 5000);

// const pizzaReady = () => {console.log("Pizza is ready");}
// let timer5 = setTimeout(pizzaReady, 6000);

// Task 3: Modify the asynchronous functions to use Promises and achieve the required result. pg 58

// function preparingPizza() {  //function declaration syntax
// let timer = new Promise((resolve) => {
//     setTimeout(() => resolve("Started preparing pizza"), 1000);
// });
// };
// console.log(timer);

// function madeBase() {
// let timer1 = new Promise((resolve) => {
//     setTimeout(() => resolve("Made the base"), 2000);
// });
// //};
// console.log(timer1);

// sauceCheese = function() {  //function expression syntax
// let myPromise = new Promise((resolve) => {
//     setTimeout(() => resolve(sauceCheese), 3000);
// });
// };
// console.log("Added the sauce and Cheese");

// pizzaToppings = function() {
// let myPromise = new Promise((resolve) => {
//     setTimeout(() => resolve(pizzaToppings), 4000);
// });
// };
// console.log("Added the pizza toppings");


// const cookingPizza = () => {console.log("Cooked the pizza");  //arrow function syntax
// let myPromise = new Promise((resolve) => {
//     setTimeout(() => resolve(cookingPizza), 5000);
// });
// };

// const pizzaReady = () => {console.log("Pizza is ready");
// let myPromise = new Promise((resolve) => {
//     setTimeout(() => resolve(pizzaReady), 6000);
// });
// };

// Task 4: Modify the functions to use async/await and achieve the required result. vid 1.20

async function preparingPizza() {  //function declaration syntax using async
    let timer = new Promise((resolve) => {
    setTimeout(() => resolve("Started preparing pizza"), 1000);
    });
       
    let result = await timer;
    console.log(result);
}

preparingPizza();

async function madeBase() {
let timer1 = new Promise((resolve) => {
    setTimeout(() => resolve("Made the base"), 2000);
});
let result = await timer1;
    console.log(result);
}

madeBase();

let sauceCheese = async () => {  
let timer2 = new Promise((resolve) => {
    setTimeout(() => resolve("Added the sauce and Cheese"), 3000);
});
let result = await timer2;
    console.log(result);
}
sauceCheese();


let pizzaToppings = async () => {
let timer3 = new Promise((resolve) => {
    setTimeout(() => resolve("Added the pizza toppings"), 4000);
});
let result = await timer3;
console.log(result);
};

pizzaToppings();

let cookingPizza = async () => {  //arrow function syntax
let timer4 = new Promise((resolve) => {
    setTimeout(() => resolve("Cooked the pizza"), 5000);
});

let result = await timer4;
console.log(result);
}
pizzaToppings();

const pizzaReady = async function () {
    const timer5 = new Promise((resolve) => {
setTimeout(() => resolve("Pizza is ready"), 6000);
    });
    const result = await timer5;
console.log(result);
 
};
pizzaReady();
