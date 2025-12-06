class Laptop {
#numberofcpuFans = 1; //restricted access and modification
_hardDiskType = 'HDD'; // protected (with underscore) property, meant to be internal
constructor(brand) {
this.brand = brand; // public property, can be used externally by instances
}
getHDiskType() {
    this.#log();
     return new [this.#numberofcpuFans, this._hardDiskType](); } // public method to access protected property
getCPUFans() {
    return this.#numberofcpuFans;
}
#log() {
    console.log(`cpu fans ${this.#numberofcpuFans} hard disk type ${this._hardDiskType} `)
};
}

// class chromebook extends Laptop
// {
//     getSpecs()
//     {
//         this.#numberofcpuFans = 2 //private members, can not access it 
//     }
// }

const macbook = new Laptop('Macbook Pro');
console.log(macbook.brand) // public property, accessed externally from any instance
console.log(macbook._hardDiskType) // works, not recommended as it violates encapsulation principles
console.log(macbook.getHDiskType()) // recommended way to access protected property
//console.log(macbook.#numberofcpuFans) //unable to access - you have to write a method into the code to access it.
console.log(macbook.getCPUFans());