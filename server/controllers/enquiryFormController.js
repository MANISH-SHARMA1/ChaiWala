const enquiryForm = require("../models/EnquiryForm");
const { error, success } = require("../utils/responseWrapper");

const enquiryFormController = async (req, res) => {
  const {
    name,
    email,
    mobile,
    country,
    state,
    city,
    pinCode,
    investmentSize,
    occupation,
    outlet,
    age,
    question,
  } = req.body;

  try {
    if (
      !name ||
      !email ||
      !mobile ||
      !country ||
      !state ||
      !state ||
      !city ||
      !pinCode ||
      !investmentSize ||
      !occupation ||
      !outlet ||
      !age ||
      !question
    ) {
      return res.send(error(400, "All fields are required"));
    }

    const oldUser = await enquiryForm.findOne({ email });
    if (oldUser) {
      return res.send(error(400, "User is already registered"));
    }

    const user = await enquiryForm.create({
      name,
      email,
      mobile,
      country,
      state,
      city,
      pinCode,
      investmentSize,
      occupation,
      outlet,
      age,
      question,
    });
    return res.send(success(200, { user }));
  } catch (error) {
    console.log(error);
  }
};

module.exports = { enquiryFormController };
