"use strict";
const Mongoose = require("mongoose"); //import the package
// if the connection fails, try 127.0.0.1 instead of localhost below
const uri = process.env.DB_URI || "mongodb://localhost:27017/myFirstDatabase"; //URL of mongodb database

// Connect to MongoDB
Mongoose.connect(uri) //its a promise - asynchronous
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log("MongoDB Error:" + error.message));

// Get the default connection and information
const db = Mongoose.connection;

// Bind connection to error event (to get notification of connection errors) and listen on events
db.on("error", console.error.bind(console, "MongoDBconnection error:"));

exports.Mongoose = Mongoose;
