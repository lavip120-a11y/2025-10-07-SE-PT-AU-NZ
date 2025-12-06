let waitForPromise = async () => {
    try {

let promise1 = new Promise((resolve, reject) => //asynchronous code
    setTimeout(() => reject(10), 4000) //can either reject or resolve because you have both parameters

)

let result = await promise1;
console.log(`promise result ${result}`); //synchoronus code

} catch (error) {
    console.log("Promise rejected and result below");
    console.log(error);
}
};

waitForPromise(); //call the function