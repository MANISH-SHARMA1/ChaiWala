const faqsSchema = require("../models/Faqs");
const { error, success } = require("../utils/responseWrapper");

const faqsController = async (req, res) => {
  const { question, answer } = req.body;

  try {
    if (!question || !answer) {
      res.send(error(400, "All fields are required"));
    }

    const faqs = await faqsSchema.create({
      question,
      answer,
    });

    res.send(success(200, faqs));
  } catch (e) {
    res.send(error(400, e));
  }
};

const faqsGetController = async (req, res) => {
  try {
    const data = await faqsSchema.find({});
    res.send(success(200, data));
  } catch (e) {
    res.send(error(400, e));
  }
};

module.exports = { faqsController, faqsGetController };
