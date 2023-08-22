const mongoose = require("mongoose");

const EnquiryFormSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  pinCode: {
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
  outlet: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("EnquiryForm", EnquiryFormSchema);
