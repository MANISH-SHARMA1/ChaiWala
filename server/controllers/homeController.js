const { error, success } = require("../utils/responseWrapper");
const home = require("../models/Home");

const homeController = async (req, res) => {
  const { imgUrl, title, subTitle, description } = req.body;

  try {
    if (!imgUrl || !title) {
      res.send(error(400, "All fields are required"));
    }

    const homee = await home.create({
      imgUrl,
      title,
      subTitle,
      description,
    });

    res.send(success(200, homee));
  } catch (e) {
    res.send(error(400, e));
  }
};

const homegetController = async (req, res) => {
  try {
    const data = await home.find({});
    res.send(success(200, data));
  } catch (e) {
    res.send(error(400, e));
  }
};

module.exports = { homeController, homegetController };
