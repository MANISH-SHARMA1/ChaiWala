const Flavors = require("../models/Flavors");
const { success, error } = require("../utils/responseWrapper");

const flavorsController = async (req, res) => {
  const { name, price, imgUrl, description } = req.body;
  try {
    if (!name || !price || !imgUrl || !description) {
      return res.send(error(400, "All fields are required"));
    }
    const flavor = await Flavors.create({
      name,
      price,
      imgUrl,
      description,
    });
    return res.send(success(200, flavor));
  } catch (error) {
    console.log(error);
  }
};

const getflavors = async (req, res) => {
  try {
    const data = await Flavors.find({});
    res.send(success(200, data));
  } catch (e) {
    res.send(error(400, e));
  }
};

const getflavorsId = async (req, res) => {
  try {
    const _id = req.params.id;
    console.log("id", _id);
    const data = await Flavors.find({ _id });
    res.send(success(200, data));
  } catch (e) {
    console.log(e);
    res.send(error(400, e));
  }
};
module.exports = { flavorsController, getflavors, getflavorsId };
