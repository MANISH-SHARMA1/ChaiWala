const router = require("express").Router();
const homeController = require("../controllers/homeController");

router.post("/", homeController.homeController);
router.get("/", homeController.homegetController);

module.exports = router;
