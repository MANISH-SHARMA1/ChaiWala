const { error, success } = require("../utils/responseWrapper");
const reviewSchema = require("../models/FlavorsReview");

const reviewController = async (req, res) => {
  const { review, name, email } = req.body;

  try {
    if (!review || !name || !email) {
      res.send(error(400, "All fields are required"));
    }

    const reviews = await reviewSchema.create({
      review,
      name,
      email,
    });

    res.send(success(200, reviews));
  } catch (e) {
    res.send(error(400, e));
  }
};

module.exports = { reviewController };
