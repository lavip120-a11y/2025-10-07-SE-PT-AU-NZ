const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const likeSchema = new Schema({
  emoji: { type: String, trim: true, required: true },
  // foreign key needs ObjectId type and a 'ref' to the referenced schema
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" }, //defining the foreign key for relationship
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "post",
    required: false,
  },
  commentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "comment",
    required: false,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("like", likeSchema);
