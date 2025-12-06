class Animal {
constructor(name) {
this.speed = 0; this.name = name; this.type = "animal";
}
run(speed) {
this.speed = speed;
console.log(`${this.name} runs with speed ${this.speed} kph.`);
}
describe() {
console.log(`${this.name} is a ${this.type}`);
}
stop() {
this.speed = 0;
console.log(`${this.name} stands still.`);
}
}

class Rabbit extends Animal {
constructor(name, earLength) {
super(name); // call the constructor function of the parent, inherited Animal class
this.earLength = earLength; // adds custom properties only for instances of Rabbit
this.type = "Rabbit";
}
hide() { // custom function, also inherits from Animal
console.log(`${this.name} hides!`);
}
//method overriding
stop() {
    super.stop(); // call the parent(Animal) stop
    this.hide(); //calls the Rabbit hide
}
}
let wildanimal = new Animal("some wild animal")

let bunny = new Rabbit('bunny', 8); // bunny contains properties and methods from Animal and Rabbit
bunny.run(9); // bunny runs with speed 9 kph. //call
bunny.hide(); // bunny hides!
bunny.stop(); //bunny stands still
bunny.describe();
console.log( bunny.earLength ) // 8

