const router = require("express").Router();
const careerController = require("../controllers/careerController");

router.post("/", careerController.careerController);

module.exports = router;
