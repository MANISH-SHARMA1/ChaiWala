const router = require("express").Router();
const blogController = require("../controllers/blogController")

router.post("/", blogController.blogController)
router.get("/", blogController.blogGetController)

module.exports = router;