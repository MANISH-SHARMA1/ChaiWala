const mongoose = require("mongoose");

const distributorshipSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: Number,
    required: true,
  },
  alternateContactNumber: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  annualTurnover: {
    type: Number,
    required: true,
  },
  capitalEmployed: {
    type: Number,
    required: true,
  },
  businessDetail: {
    type: String,
    required: true,
  },
  vantage: {
    type: String,
    required: true,
  },
  businessLocation: {
    type: String,
    required: true,
  },
  businessIndustry: {
    type: String,
    required: true,
  },
  godown: {
    type: String,
    required: true,
  },
  technicalFacilities: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("distributorship", distributorshipSchema);
