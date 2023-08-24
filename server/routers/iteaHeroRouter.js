const router = require("express").Router();
const iTeaHeroController = require("../controllers/IteaHeroController");

router.post("/", iTeaHeroController.heroController);
router.get("/", iTeaHeroController.herogetController);

module.exports = router;
