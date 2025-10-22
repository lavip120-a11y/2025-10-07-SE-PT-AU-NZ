function Sum(a, b){
    return a + b;
}
function Multiply(a, b){
    return a * b;
}
function Subtract(a, b){
    return a - b;
}
function Divide(a, b){
    return a / b;
}

console.log(Sum(5, 1));
console.log(Subtract(8, 3));
console.log(Divide(12, 4));
console.log(Multiply(Sum(2, 3), Sum(11, 5)));


function greet(name) {
    return "Hello" + name;
}

console.log(greet("John"));