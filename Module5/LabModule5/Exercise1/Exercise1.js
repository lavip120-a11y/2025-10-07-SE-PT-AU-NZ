console.log("Welcome");

const express = require('express'); //importing the express package and assigning it to a variable
const app = express('./app'); // creating an app using the express package 

const app1 = express('');
const app2 = express('');

const port = 3002; // setting a port number 
const port1 = 3003;
const port2 = 3004;

app.get('/', (req, res) => { //accessing the webpage using get (/indicates the endpoint), and sending a response
res.send('Welcome to Module 5!')
});

app1.get('/', (req, res) => { 
res.send('Welcome to port1 response!')
});

app2.get('/', (req, res) => { 
res.send('Welcome to port2 response!')
});

app.listen(port, () => { //activates the web server
console.log("Web server for Exercise1 Module5 started..");
});

app1.listen(port1, () => { 
console.log("Web server for port1 started..");
});

app2.listen(port2, () => { 
console.log("Web server for port2 started..");
});