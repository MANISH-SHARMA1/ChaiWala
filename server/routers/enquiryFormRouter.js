const router = require("express").Router();
const enquiryFormController = require("../controllers/enquiryFormController");

router.post("/", enquiryFormController.enquiryFormController);
module.exports = router;
