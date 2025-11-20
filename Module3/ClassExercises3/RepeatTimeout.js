//nested set time out

function repeatTimeout(delay, limit)
{
let counter = 1;
// setTimeout only happens once, so we don't need the reference to cancel it
setTimeout(function repeatThis(current) { // named function, so we can refer to it recursively
console.log('repeatTimeout: repeated ' + current + ' of ' + limit + ' times');
// we do need to call setTimeout recursively so that it repeats executing the function
if (current < limit) setTimeout(repeatThis, delay, current+1) // repeat if limit not reached
}, delay, counter);
}
repeatTimeout(2000, 10); // make the timeout repeat every 2 seconds for a max of 10 times