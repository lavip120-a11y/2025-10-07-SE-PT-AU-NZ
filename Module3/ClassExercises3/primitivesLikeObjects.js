let cost = 20; //data assigned to this variable is a number

let total = (cost * 4) / 50; //mathematic operation
console.log(total);

let studentName = "Willy"; //string

let fullName = studentName + " sobers"; // plus operator on a variable that holds string date 
console.log(fullName);

//
let apple = { //two methods for inside an object that are default in javaScript
// to represent an object like a number you have to implement valueOf method. for a string you implement to string
    color: "red",
    size: "medium",
    quantity: 5,
    radius : 1.36,
    diameter: 45.6,

    valueOf() {
    return this.quantity + this.radius + this.diameter; // i can also add more and *3
    }, 
    toString() { //to string method for representing an object like a string use toString
        return this.color + " royal gala";
    },
};

let totalSales = (apple * 4) / 2; //wont work because object is being used like a primitive - Nan (no number in mathematic operation)
//console.log(totalSales);

//let totalSales = (apple.quantity * 4) / 2; //will work because apple.quantity has a number assigned

let totalDimensionsOfApple = (apple * 4) / 2; //
console.log(totalSales);

let fullNameofApple = apple + " sobers"; // will not work because object and string.  
// change to apple.color, by accessing an individual property it can work.  
console.log(fullNameofApple);