//server application - back end application is always running - to access use browser with local server address 127.0.0.1:3000(portnumber) - this is the route
// import using express and assign it to a variable and then invoke the web server
const express = require('express'); //1. import the express
const app = require("./app"); //importing app.js instead of writing code here
const app1 = express(); //1. second web server

const myAppRouter = require("./routes/myAppRoutes"); //importing from routes into index.js and assign it to a variable
const secondAppRouter = require("./routes/secondAppRoutes");
const userRoutes = require("./routes/userRoutes"); //importing userRoutes
const calculatorRouter = require("./routes/calculatorRoutes");
const cors = require("cors"); //import cors

//port
const port = 3000; //3. listens on a port number - make sure it is not a standard port number like 80
const port2 = 3001; //2. web server cannot listen to the same port number so give a new one

//use
app.use(cors()); //tell express to use cors to resolve cors blocking policy
app.use(express.json()); //enabling application to use JSON format as incoming data // parse requests of content-type - application/json
app.use("/", express.static("public")); //middleware - tells system to fetch pages from the public directory on the root endpoint.
app.use("/", myAppRouter); //attached router back to the web server
app1.use("/", secondAppRouter); //attached router back to the web server
app.use("/users", userRoutes); //attaching userRoutes
app.use("/calculate", calculatorRouter); //another path - calculator routes is attached to web server

//get
app.get("/", (req, res) => { // 5. when someone accesses the web page, index file "/" when it gets a request a response is sent (1 route listening on the port)
    res.send("Welcome to my calculator application");
});

app.get("/about", (req, res) => { // if someone accesses /about the message returned is below. only using response
    res.send("This page is developed as part of a sample dempnstation of backend webservices");
});

app.get("/test", (req, res) => { //new endpoint.
    res.send('This route is for a test')
});

app1.get("/", (req, res) => { // 5. accessing the 2nd webserver using different port
    res.send("Welcome to my second webserver");
});
//listen
app.listen(port, ()=> { // 4. listen function accepts the port number and the function that acknowledges that the application is listening
    console.log("Web server started on port 3000..");
});

app1.listen(port2, ()=> { //4. second web server with listen function
console.log("second web server started on port 3001..");
});