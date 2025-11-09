//Property existence test
const phone = {
  model: "iPhone 11",
  colour: "black",
};

if (phone.colour) {
  console.log(`My ${phone.model} is ${phone.colour}`); // prints message
}

if (phone.storage) {
  // undefined counts as false, so the below won't print
  console.log(`My ${phone.model} has ${phone.storage}GB`);
}

// conditional expressions. This is a different way to right the above synatx
phone.colour
  ? console.log(`My ${phone.model} is ${phone.colour}`)
  : console.log("phone colour doesnt exist");
phone.storage
  ? console.log(`My ${phone.model} is ${phone.storage}`)
  : console.log("phone doesnt have storage property");
//anything that is written before a ? is an expression and an expression always returns an expression
//if phone.color exists
