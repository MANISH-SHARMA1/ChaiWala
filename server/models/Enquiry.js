const mongoose = require("mongoose");

const enquirySchema = mongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  contactNumber: {
    type: Number,
    required: true,
  },
  investmentSize: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  pinCode: {
    type: Number,
    required: true,
  },
  question: {
    type: String,
  },
});

module.exports = mongoose.model("enquiry", enquirySchema);
