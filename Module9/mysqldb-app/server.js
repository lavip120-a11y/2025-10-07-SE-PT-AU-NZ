const express = require("express");
const app = express();
require("dotenv").config(); //need dotenv so dbConnect can access .env information to run

let dbConnect = require("./dbConnect");
let userRoutes = require("./routes/userRoutes");
let postRoutes = require("./routes/postRoutes");
let commentRoutes = require("./routes/commentRoutes");
let likeRoutes = require("./routes/likeRoutes");
let exercise4Routes = require("./routes/exercise4Routes"); //exercise 4 microservice routes

// parse requests of content-type - application/json
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome to MySQL Database application." });
});

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api", exercise4Routes); //exercise 4 microservice routes

// set port, listen for requests clear
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
