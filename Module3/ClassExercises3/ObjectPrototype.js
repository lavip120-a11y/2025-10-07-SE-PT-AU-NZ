let animal = { eats: true, sleeps: true, legs: 4, mammal: true }; // inherits from Object prototype
let animalPrototype = Object.getPrototypeOf(animal); // recommended way to get prototype
console.log(animal);
console.log(Object.getPrototypeOf(animal));
//console.log(animalPrototype); // BUT printing it via console.log is incomplete
//console.log(Object.getOwnPropertyNames(animalPrototype)); // prints all prototype (Object) properties

console.log(Object.getOwnPropertyNames(animal));

let rabbit = {
    jumps: true,
};

Object.setPrototypeOf(rabbit, animal); // this inherits rabbit from animal

console.log(`rabbit can jumps ${rabbit.jumps} and it eats ${rabbit.eats} and it sleeps ${rabbit.sleeps} and it has legs ${rabbit.legs}`);
console.log(Object.getPrototypeOf(rabbit));
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(rabbit)));

let rabbit1 = { jumps: true };
Object.setPrototypeOf(rabbit1, animal); // NEW recommended way, uses default property descriptor settings

let rabbit2 = Object.create(animal, { // creates a new object from prototype, with custom properties
jumps: { // name of custom 'own' property for rabbit object
value: true, // property descriptor to set the property value
enumerable: true // property descriptor to make this enumerable - otherwise jumps won’t be in for...in
}
});
console.log(rabbit1, rabbit2); // { jumps: true } - only prints 'own' properties, not inherited ones
console.log(rabbit1.legs, rabbit2.legs); // 4 - inherited properties do exist
for (let prop in rabbit1) console.log(`${prop} is ${rabbit1[prop]}`) // own properties, then inherited ones
for (let prop in rabbit2) console.log(`${prop} is ${rabbit2[prop]}`) // own properties, then inherited ones