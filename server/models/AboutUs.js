const mongoose = require("mongoose");

const aboutUs = mongoose.Schema({
  headerImg: String,
  cupImg: String,
  description: String,
  founderImg: String,
  visionImg: String,
  missionImg: String,
  coFounderImg: String,
});

module.exports = mongoose.model("aboutUs", aboutUs);
