const router = require("express").Router();
const reviewController = require("../controllers/flavorsReviewController")

router.post("/", reviewController.reviewController);

module.exports = router;