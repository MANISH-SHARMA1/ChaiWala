const router = require("express").Router();
const ventureController = require("../controllers/ventureController");

router.post("/",  ventureController.ventureController);
router.get("/", ventureController.ventureControllerget)

module.exports = router