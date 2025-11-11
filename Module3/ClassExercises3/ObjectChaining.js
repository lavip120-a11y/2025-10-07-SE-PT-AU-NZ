let pizza = {
  mixdough() {
    console.log("Mixing dough");
    return this;
  },
  putinoven() {
    console.log("inside the oven");
    return this;
  },
  waitforready() {
    console.log("waiting for 30mins");
  },
};

pizza.mixdough().putinoven().waitforready();
