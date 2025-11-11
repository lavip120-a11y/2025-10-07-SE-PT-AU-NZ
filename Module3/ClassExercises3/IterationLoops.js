let myGoal = 10; //iterate to 10

for(let k = 0; k < myGoal; k++) //k is equal to 0, the condition to execute the loop, k 
// less than my goal, iterate ++, for each incrementation until it reaches my goal.
{
console.log(`iteration of ${k} of ${myGoal}`); // im printing the value if k and the value of my goal until it gets to 10 and stop the loop
}

const phone = {
model: 'iPhone 11', //these are the 3 keys
colour: 'black',
storage: 64
}

for (let key in phone) { // iterates over each property in the phone object, stores in ‘key’ variable
console.log('key: ' + key); // prints each object property name (key) in turn
console.log('value: ' + phone[key]); // prints each object value in turn
}


