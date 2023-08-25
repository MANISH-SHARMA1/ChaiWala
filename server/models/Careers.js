const mongoose = require("mongoose");

const careersSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  contactNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  jobDescription: {
    type: String,
    // required: true,
  },
});

module.exports = mongoose.model("career", careersSchema);
