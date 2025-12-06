let promise1 = new Promise((resolve, reject) => {
    resolve(true);
});

let promise2 = new Promise((resolve, reject) => {
    reject(false);
});

let promise3 = new Promise((resolve, reject) => {
 setTimeout(() => resolve(true), 2000); //timing resolve after 2 seconds
});

let promise4 = new Promise((resolve, reject) => {
setTimeout(() => reject(false), 1000); //timing, reject after 1 second
});

//Promise.all rejects if any of the promise has negative outcome but is resolved if all are fulfilled. 
// Helpful for multi stepped application types to ensure all parts are completed with information required.

Promise.all([promise1, promise2])
.then((outcomes) => {
    console.log("Promise all"); 
    console.log(outcomes);
})
.catch((result) => {
    console.log("Promise all");
    console.log(result); //result obtained in line 23
});

Promise.allSettled([promise1, promise2])
.then((outcomes) => {
    console.log("Promise all settled"); 
    console.log(outcomes); //outcomes of all the promises
})
.catch((result) => {
    console.log("Promise all settled");
    console.log(result);
});

Promise.race([promise3, promise4])
.then((outcomes) => { //outcome will be false because of the setTimeout above which results after 1sec.
    console.log("Promise race"); 
    console.log(outcomes);
})
.catch((result) => {
    console.log("Promise race");
    console.log(result);
});

Promise.any([promise1, promise2, promise3, promise4]) //waits for all promises to complete
.then((outcomes) => {
    console.log("Promise any"); 
    console.log(outcomes);
})
.catch((result) => {
    console.log("Promise any");
    console.log(result);
});