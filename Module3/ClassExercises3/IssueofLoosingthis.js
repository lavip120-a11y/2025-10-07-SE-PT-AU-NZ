const user = {
    name: "John",
    sayHi() {
        console.log(`Hi,${this.name}`);
    },
};
//setTimeout(user.sayHi, 2000);
setTimeout(() => user.sayHi(), 2000); // solution 1 to avoid loosing the context

//solution2 bound
const boundSayHi = user.sayHi.bind(user) // new function reference with user context explicitly bound
setTimeout( boundSayHi, 1000 ) // works! Hi, John