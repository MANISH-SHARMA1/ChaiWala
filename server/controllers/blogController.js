const { error, success } = require("../utils/responseWrapper");
const blogSchema = require("../models/Blog");

const blogController = async (req, res) => {
  const { imgUrl, heading } = req.body;

  try {
    if (!imgUrl || !heading) {
      res.send(error(400, "All fields are required."));
    }
    const blog = await blogSchema.create({
      imgUrl,
      heading,
    });

    res.send(success(200, blog));
  } catch (e) {
    res.send(error(400, e));
  }
};

const blogGetController = async (req, res) => {
  try {
    const data = await blogSchema.find({});
    res.send(success(200, data));
  } catch (e) {
    res.send(error(400, e));
  }
};

module.exports = { blogController, blogGetController };
