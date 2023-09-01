const mongoose = require("mongoose");

const flavorsReview = mongoose.Schema({
  item: String,
  review: String,
  name: String,
  email: String,
});

module.exports = mongoose.model("review", flavorsReview);
