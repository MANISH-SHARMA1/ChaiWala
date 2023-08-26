const { error, success } = require("../utils/responseWrapper");
const IteaHero = require("../models/IteaHero");

const heroController = async (req, res) => {
  const { imgUrl } = req.body;

  try {
    if (!imgUrl) {
      res.send(error(400, "All fields are required"));
    }

    const heros = await IteaHero.create({
      imgUrl,
    });

    res.send(success(200, heros));
  } catch (e) {
    res.send(error(400, e));
  }
};

const herogetController = async (req, res) => {
  try {
    const data = await IteaHero.find({});
    res.send(success(200, data));
  } catch (e) {
    res.send(error(400, e));
  }
};

module.exports = { heroController, herogetController };
