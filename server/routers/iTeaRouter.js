const router = require("express").Router();
const iTeaController = require("../controllers/iTeaController");

router.post("/", iTeaController.iTeaController);
router.get("/", iTeaController.iTeagetController);

module.exports = router;
