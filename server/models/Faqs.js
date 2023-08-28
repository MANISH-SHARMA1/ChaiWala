const mongoose = require("mongoose");

const faqsSchema = mongoose.Schema({
  question: String,
  answer: String,
});

module.exports = mongoose.model("faqs", faqsSchema);
