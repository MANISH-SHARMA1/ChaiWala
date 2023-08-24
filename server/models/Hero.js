const mongoose = require("mongoose");

const heroSchema = mongoose.Schema({
  imgUrl: String,
});

module.exports = mongoose.model("hero", heroSchema);