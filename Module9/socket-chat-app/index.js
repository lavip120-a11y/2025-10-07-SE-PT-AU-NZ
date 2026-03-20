const express = require("express");
const app = express();
//creating a socket.io
const http = require("http");
const { Server } = require("socket.io");
//creating a server that hosts socket.io
const server = http.createServer(app);
const io = new Server(server);
//sending index.html to any client server which will load in their browser - dirname shows where index.html is filed
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
//user has connected on this connection - socket listening on the event
io.on("connection", (socket) => {
  console.log("a user connected");

  socket.emit("welcome", "Welcome to the chat"); //sends a message to the person who connected.
  socket.broadcast.emit("user connected", socket.nickname + " joined the chat"); //broadcasting to connected users on connection - but not the person who connected
  //io.emit("connection", "a user connected"); sends to all and socket.broadcast.emit sends to all except the person doing it

  socket.on("choose nickname", (nickname) => {
    //nickname
    socket.nickname = nickname;
    socket.broadcast.emit("user connected", nickname + " has joined the chat");
  });

  socket.on("chat message", (msg) => {
    // chat message
    console.log("message: " + msg);
    socket.broadcast.emit("chat message", socket.nickname + ":" + msg); //adding the nickname to the message
  });
  socket.on("typing", (nickname) => {
    //user is typing
    socket.broadcast.emit("user typing", nickname + " is typing");
  });

  socket.on("disconnect", () => {
    //user disconnected
    console.log("A user disconnected");
    socket.broadcast.emit(
      "user disconnected",
      socket.nickname + "left the chat",
    ); //sending a message to all users that A User has disconnected.
  });
});

//listening on this port number
server.listen(3000, () => {
  console.log("listening on *:3000");
});
//the backend will create the socket.io instance and socket io instance will listen on the incoming connections
