console.log("sync1");
console.log("synch2");


let waitForPromise = async () => {
    try {

let promise1 = new Promise((resolve) => 
    setTimeout(() => resolve(10), 4000)).then((result) => console.log(result));

await promise1;

let result = await promise1;
console.log(`promise result ${result}`);
} catch (error) {
    console.log(error);
}
};

waitForPromise();