"use strict";

let Models = require("../models"); // just import the folder name and by default index.js will provide the likes

//getting a like
const getLikes = (res) => {
  // finds all likes
  Models.Like.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getUserLikes = (req, res) => {
  // finds all posts for a given user and populates with user details
  Models.Like.find({ userId: req.params.uid })
    .populate({ path: "userId" })
    .populate({ path: "postId" })
    .populate({ path: "commentId" })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createLike = (data, res) => {
  // creates a new like using JSON data POSTed in request body
  console.log(data); //debugging purposes

  new Models.Like(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateLike = (req, res) => {
  // updates the like matching the ID from the param using JSON data POSTed in request body
  console.log(req.body);
  Models.Like.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deleteLike = (req, res) => {
  // deletes the like matching the ID from the param
  Models.Like.findByIdAndDelete(req.params.id)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = { getLikes, createLike, updateLike, deleteLike, getUserLikes };
