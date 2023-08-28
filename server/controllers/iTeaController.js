const { error, success } = require("../utils/responseWrapper");
const iTea = require("../models/Itea");

const iTeaController = async (req, res) => {
  const { imgUrl } = req.body;

  try {
    if (!imgUrl) {
      res.send(error(400, "All fields are required"));
    }

    const heros = await iTea.create({
      imgUrl,
    });

    res.send(success(200, heros));
  } catch (e) {
    res.send(error(400, e));
  }
};

const iTeagetController = async (req, res) => {
  try {
    const data = await iTea.find({});
    res.send(success(200, data));
  } catch (e) {
    res.send(error(400, e));
  }
};

module.exports = { iTeaController, iTeagetController };
