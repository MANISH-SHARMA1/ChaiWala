const mongoose = require("mongoose");

const flavorsSchema = mongoose.Schema({
  name: String,
  price: String,
  imgUrl: String,
  description: String,
});

module.exports = mongoose.model("flavors", flavorsSchema);
