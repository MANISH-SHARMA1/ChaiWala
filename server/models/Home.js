const mongoose = require("mongoose");

const homeSchema = mongoose.Schema({
  imgUrl: String,
  title: String,
  subTitle: String,
  description: String,
});

module.exports = mongoose.model("home", homeSchema);
