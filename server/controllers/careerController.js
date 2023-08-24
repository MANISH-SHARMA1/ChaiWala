const careerUser = require("../models/Careers");
const { error, success } = require("../utils/responseWrapper");

const careerController = async (req, res) => {
  const {
    name,
    email,
    contactNumber,
    qualification,
    profile,
    experience,
    city,
    state,
    jobDescription,
  } = req.body;
  try {
    if (
      !name ||
      !email ||
      !contactNumber ||
      !qualification ||
      !profile ||
      !experience ||
      !city ||
      !state
    ) {
      return res.send(error(400, "All fields are required"));
    }

    const oldUser = await careerUser.findOne({ email });
    console.log("oldUser", oldUser);
    if (oldUser) {
      return res.send(error(400, "User is already registered"));
    }

    const user = await careerUser.create({
      name,
      email,
      contactNumber,
      qualification,
      profile,
      experience,
      city,
      state,
      jobDescription,
    });

    return res.send(success(200, user));
  } catch (error) {
    console.log(error);
  }
};

module.exports = { careerController };
