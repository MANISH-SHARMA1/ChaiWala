const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  imgUrl: String,
  heading: String,
});

module.exports = mongoose.model("blog", blogSchema);
