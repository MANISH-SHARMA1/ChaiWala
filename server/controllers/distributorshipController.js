const distributorship = require("../models/Distributorship");
const { error, success } = require("../utils/responseWrapper");

const distributorshipController = async (req, res) => {
  const {
    name,
    address,
    contactNumber,
    alternateContactNumber,
    email,
    experience,
    annualTurnover,
    capitalEmployed,
    businessDetail,
    vantage,
    businessLocation,
    businessIndustry,
    godown,
    technicalFacilities,
  } = req.body;
  try {
    if (
      !name ||
      !address ||
      !contactNumber ||
      !email ||
      !experience ||
      !annualTurnover ||
      !capitalEmployed ||
      !businessDetail ||
      !vantage ||
      !businessLocation ||
      !businessIndustry ||
      !godown ||
      !technicalFacilities
    ) {
      return res.send(error(401, "All fields are required"));
    }

    const oldUser = await distributorship.findOne({ email });
    if (oldUser) {
      return res.send(error(401, "User is already registered"));
    }

    const distributor = await distributorship.create({
      name,
      address,
      contactNumber,
      alternateContactNumber,
      email,
      experience,
      annualTurnover,
      capitalEmployed,
      businessDetail,
      vantage,
      businessLocation,
      businessIndustry,
      godown,
      technicalFacilities,
    });

    res.send(success(200, distributor));
  } catch (error) {
    console.log(error);
  }
};

module.exports = {distributorshipController};
