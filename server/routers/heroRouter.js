const router = require("express").Router();
const heroController = require("../controllers/heroController");

router.post("/", heroController.heroController);
router.get("/", heroController.herogetController);

module.exports = router;
