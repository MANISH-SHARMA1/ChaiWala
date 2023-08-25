const mongoose = require("mongoose");

const IteaHeroSchema = mongoose.Schema({
  imgUrl: String,
});

module.exports = mongoose.model("iTeaHero", IteaHeroSchema);
