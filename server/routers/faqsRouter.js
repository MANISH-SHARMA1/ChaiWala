const router = require("express").Router();
const faqsController = require("../controllers/faqsController");

router.post("/", faqsController.faqsController);
router.get("/", faqsController.faqsGetController);

module.exports = router;
