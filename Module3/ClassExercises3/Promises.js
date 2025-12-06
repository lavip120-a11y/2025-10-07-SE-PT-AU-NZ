const promise1 = new Promise((resolve, reject) => {

    let number = Math.floor(Math.random() * 50);
    console.log(number);
    if(number%2) //zero of boolean is false so 
        resolve(true)
    else
        reject(true);  //resolve and reject are callerback 
})
//how to handle a promise = created a promise using new promise, passed to callback functions and the logic determines whether it is a proper outcome or not

.then((result)=> console.log("successful outcome")) //is tied to the resolve
.catch((result) => console.log("failure or unsuccessful")) //is tied to the reject
.finally(()=> console.log("Promise fulfilled"));

//created a promise - 2 possible outcomes successful or unsuccsessful outcome.


// example promise. settles after 250ms with success or failure depending on random number
const promise = new Promise((resolve, reject) => { // resolve/reject are callback functions
if (Math.random() > 0.5) setTimeout( () => resolve('Random number ok'), 250 ) // success
else setTimeout( () => reject('Random number too low'), 250 ) // failure
}); //can end with a semicolon

promise // consume the promise by responding to outcomes when they happen
.finally( () => console.log('Wait is over, promise has settled.') ) // always prints - doesnt matter where you put finally it will always come last
.then( (result) => console.log('Success! ' + result ) ) // prints resolve msg
.catch( (error) => console.log('Error! ' + error ) ) // prints reject msg