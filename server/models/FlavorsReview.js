const mongoose = require("mongoose");

const flavorsReview = mongoose.Schema({
  review: String,
  name: String,
  email: String,
});

module.exports = mongoose.model("review", flavorsReview);
