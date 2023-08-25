const enquiryUser = require("../models/Enquiry");
const { error, success } = require("../utils/responseWrapper");

const enquiryController = async (req, res) => {
  const {
    name,
    email,
    contactNumber,
    investmentSize,
    occupation,
    age,
    city,
    state,
    pinCode,
    question,
  } = req.body;
  try {
    if (
      !name ||
      !email ||
      !contactNumber ||
      !investmentSize ||
      !occupation ||
      !city ||
      !state ||
      !pinCode
    ) {
      return res.send(error(400, "All fields are required"));
    }

    const oldUser = await enquiryUser.findOne({ email });
    if (oldUser) {
      return res.send(error(400, "User is already registered"));
    }

    const user = await enquiryUser.create({
      name,
      email,
      contactNumber,
      investmentSize,
      occupation,
      age,
      city,
      state,
      pinCode,
      question,
    });
    return res.send(
      success(201, {
        user,
      })
    );
  } catch (error) {
    console.log("errorrrr: ", error);
  }
};

module.exports = { enquiryController };
