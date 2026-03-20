const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, trim: true, required: true },
  description: { type: String, trim: true, required: true },
  image: { type: String, required: false },
  // foreign key needs ObjectId type and a 'ref' to the referenced schema
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" }, //defining the foreign key for relationship
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("post", postSchema);
