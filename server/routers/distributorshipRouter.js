const router = require("express").Router();
const distributorshipController = require("../controllers/distributorshipController");

router.post("/", distributorshipController.distributorshipController);

module.exports = router;
