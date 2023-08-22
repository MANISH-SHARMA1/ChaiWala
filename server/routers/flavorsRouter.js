const router = require("express").Router();
const flavorsController = require("../controllers/flavorsController");

router.post("/", flavorsController.flavorsController);
router.get("/", flavorsController.getflavors)

module.exports = router;
