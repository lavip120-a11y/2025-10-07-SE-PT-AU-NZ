const express = require("express"); //require the express
const app = express(); //call the express that creates the backend application

require("dotenv").config(); //dotenv - it will read information from .env file.

let dbConnect = require("./dbConnect");
let userRoutes = require("./routes/userRoutes");
let postRoutes = require("./routes/postRoutes");
let commentRoutes = require("./routes/commentRoutes");
let likeRoutes = require("./routes/likeRoutes");

// parse requests of content-type - application/json
app.use(express.json()); //send request and response in json format

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MongoDB application." });
});

app.use("/api/users", userRoutes); //will attach the routes to the web server instance
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8080; // process inbuilt class of node.js that accesses information from env file.

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
