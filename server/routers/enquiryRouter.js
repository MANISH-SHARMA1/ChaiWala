const router = require("express").Router();
const enquiry = require("../controllers/enquiryController");

router.post("/", enquiry.enquiryController);

module.exports = router;
