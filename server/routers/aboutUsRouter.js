const router = require("express").Router();
const aboutUsController = require("../controllers/aboutUsController");

router.post("/", aboutUsController.aboutUsController);
router.get("/", aboutUsController.aboutUsControllerGet);

module.exports = router;
