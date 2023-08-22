// const router = require("express").Router();
// const cloudinary = require("../utils/cloudinary");
// const upload = require("../utils/multer");
const Flavors = require("../models/Flavors");
const { success, error } = require("../utils/responseWrapper");

// router.post("/", upload.single("image")),
//   async (req, res) => {
//     try {
//       const result = await cloudinary.uploader.upload(req.file.path);
//       const flavors = new Flavors({
//         name: req.body.name,
//         profile_img: result.secure_url,
//         cloudinary_id: result.public_id,
//       });

//       await flavors.save();
//       res.send(success(200, flavors));
//     } catch (error) {
//       console.log(error);
//     }
//   };

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

const id = new Flavors.Types.ObjectId();

const getflavors = async (req, res) => {
  const data = Flavors.find({ id });
  res.send(success(200, data));
};
module.exports = { flavorsController, getflavors };
