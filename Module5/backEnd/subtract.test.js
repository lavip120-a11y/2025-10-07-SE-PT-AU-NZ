const {Subtract} = require("./subtract"); // Import the Subtract function from subtract.js

test('testing subtract of 5 and 2 to be 3', () => { // Test case to check if subtracting 2 from 5 returns 3 
    expect(Subtract(5, 2)).toBe(3); // Expect the result of Subtract(5, 2) to be 3
});

