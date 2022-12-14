const mongoose = require("mongoose");

const objectSchema = mongoose.Schema({
  userId: { type: String, require: true },
  title: { type: String, require: true },
  imageUrl: { type: String, require: true },
  description: { type: String, require: true },
});

module.exports = mongoose.model("object", objectSchema);
