let cost = 20;

let total = (cost * 4) / 50;
console.log(total);

let studentName = "Willy";

let fullName = studentName + " sobers";
console.log(fullName);

let apple = {
    color: "red",
    size: "medium",
    quantity: 5,
    radius : 1.36,
    diameter: 45.6,

    valueOf() {
        return this.quantity
    }, 
    toString() {
        return this.color + " royal gala";
    }
}

let totalSales = (apple * 4) / 2;
//console.log(totalSales);

let totalDimensionsOfApple = (apple * 4) / 2;
console.log(totalSales);

let fullNameofApple = apple + " sobers";
console.log(fullNameofApple);