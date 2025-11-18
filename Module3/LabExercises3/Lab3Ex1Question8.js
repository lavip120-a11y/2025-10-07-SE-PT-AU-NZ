// 8. The object below represents a single city.

const sydney = {
name: 'Sydney',
population: 5_121_000,
state: 'NSW',
founded: '26 January 1788',
timezone: 'Australia/Sydney'
}
// a) Write a function that takes an object as an argument and uses a for...in loop to access
// and print to the console each of those object properties and their values. Test it using
// the sydney object below.
for (let key in sydney) {
    console.log(`${key}: ${sydney[key]}`);
}

// b) Create a new object for a different city with different properties and call your function
// again with the new object.

const auckland = {
name: 'Auckland',
population: 1_7_000,
country: 'New Zealand',
founded: '1840',
timezone: 'Auckland, New Zealand'
}
for (let key in auckland) {
    console.log(`${key}: ${auckland[key]}`);
}