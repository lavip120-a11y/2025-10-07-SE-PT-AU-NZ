let pizza = {
  mixdough() {
    console.log("Mixing dough");
    return this; //this keyword refers to the object itself.
  },
  putinoven() {
    console.log("inside the oven");
    return this; //requires context to do method chaining.  if i want to change order 
    // i must have return this for each object (waitfor ready()
  },
  waitforready() {
    console.log("waiting for 30mins");
  },
};

pizza.mixdough().putinoven().waitforready();
