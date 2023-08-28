const { error, success } = require("../utils/responseWrapper");
const venture = require("../models/Venture");

const ventureController = async (req, res) => {
  const { title, description, imgUrl } = req.body;
  try {
    if (!title || !description) {
      return res.send(error(401, "All fields are required"));
    }

    const ventures = await venture.create({
      title,
      description,
      imgUrl,
    });

    return res.send(success(200, ventures));
  } catch (e) {
    return res.send(error(400, e))
  }
};

const ventureControllerget = async (req, res) => {
  try {
    const data = await venture.find({});
    res.send(success(200, data));
  } catch (e) {
    res.send(error(400, e));
  }
};

module.exports = { ventureController, ventureControllerget };
