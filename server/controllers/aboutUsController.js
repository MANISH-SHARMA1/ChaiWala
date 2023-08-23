const aboutUsModel = require("../models/AboutUs");
const { error, success } = require("../utils/responseWrapper");

const aboutUsController = async (req, res) => {
  const {
    headerImg,
    cupImg,
    description,
    founderImg,
    visionImg,
    missionImg,
    coFounderImg,
  } = req.body;

  try {
    if (
      !headerImg ||
      !cupImg ||
      !description ||
      !founderImg ||
      !visionImg ||
      !missionImg ||
      !coFounderImg
    ) {
      res.send(error(400, "All fields are required"));
    }
    console.log(
      headerImg,
      cupImg,
      description,
      founderImg,
      visionImg,
      missionImg,
      coFounderImg
    );

    const aboutUs = await aboutUsModel.create({
      headerImg,
      cupImg,
      description,
      founderImg,
      visionImg,
      missionImg,
      coFounderImg,
    });
    res.send(success(200, aboutUs));
  } catch (e) {
    res.send(error(400, e));
  }
};

const aboutUsControllerGet = async (req, res) => {
  try {
    const aboutUs = await aboutUsModel.find({});
    res.send(success(200, aboutUs));
  } catch (e) {
    res.send(error(400, e));
  }
};

module.exports = { aboutUsController, aboutUsControllerGet };
