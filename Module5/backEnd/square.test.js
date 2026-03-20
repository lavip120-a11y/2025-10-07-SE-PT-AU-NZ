const {square} = require('./square'); // Import the square function from square.js
//square is a function that takes a number as input and returns the square of that number.

test('square 2 to get 4', () => { // Test case to check if squaring 2 returns 4
    expect(square(2)).toBe(4); // Expect the result of square(2) to be 4 - tobe is a matcher that checks for exact equality
});

test('square 5 to get 25', () => { // Test case to check if squaring 5 returns 25
    expect(square(5)).toBe(25); // Expect the result of square(5) to be 25
});

test('square 25 to get 125', () => { // Test case to check if squaring 25 returns 125
    expect(square(25)).toBe(625); // Expect the result of square(25) to be 125
});

