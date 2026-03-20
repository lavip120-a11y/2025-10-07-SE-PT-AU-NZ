let express = require("express");
let router = express.Router();

let Controllers = require("../controllers"); // index.js
// Adds a GET route to return all likes
router.get("/", (req, res) => {
  Controllers.likeController.getLikes(res);
});
// Adds a GET route to return all user likes
router.get("/users/:uid/likes", (req, res) => {
  Controllers.likeController.getUserLikes(req, res);
});
// Adds a POST route to create a new like
router.post("/create", (req, res) => {
  Controllers.likeController.createLike(req.body, res);
});
// Adds a PUT route to update a like
router.put("/:id", (req, res) => {
  Controllers.likeController.updateLike(req, res);
});
// Adds a DELETE route to delete a like
router.delete("/:id", (req, res) => {
  Controllers.likeController.deleteLike(req, res);
});

module.exports = router;
