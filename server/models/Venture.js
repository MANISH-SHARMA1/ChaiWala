const mongoose = require("mongoose");

const ventureSchema = mongoose.Schema({
  title: String,
  description: String,
  imgUrl: String,
});

module.exports = mongoose.model("venture", ventureSchema);
