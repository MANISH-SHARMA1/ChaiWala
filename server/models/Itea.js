const mongoose = require("mongoose");

const IteaSchema = mongoose.Schema({
  imgUrl: String,
});

module.exports = mongoose.model("iTea", IteaSchema);