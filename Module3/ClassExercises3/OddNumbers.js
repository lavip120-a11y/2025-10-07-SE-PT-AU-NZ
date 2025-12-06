function isOdd(number) {
    return number % 2;
}

function getListOfOddNumbers(number) {

    if(isOdd(number % 2))
        console.log("Number is odd");
    else console.log("Number is even");
}
getListOfOddNumbers(3);
getListOfOddNumbers(5);
getListOfOddNumbers(2);

//Borrowing using the call method (call is like binding)
function isOdd(number) { return number % 2; } // returns true if number is odd, false otherwise

function getOddNumbers() {
// arguments is not an array, but it 'borrows' the filter function from Array by using call
return [].filter.call(arguments, isOdd); // arguments is context, isOdd is parameter for filter
}

let results = getOddNumbers(10, 1, 3, 4, 8, 9);
console.log(results); // [ 1, 3, 9 ] (array of all odd arguments)

