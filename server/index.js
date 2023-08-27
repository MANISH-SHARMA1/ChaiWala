const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./dbConnect");
const authRouter = require("./routers/authRouter");
const postsRouter = require("./routers/postRouter");
const enquiryRouter = require("./routers/enquiryRouter");
const careerRouter = require("./routers/careerRouter");
const distributorship = require("./routers/distributorshipRouter");
const enquiryForm = require("./routers/enquiryFormRouter");
const flavors = require("./routers/flavorsRouter");
const venture = require("./routers/ventureRouter");
const aboutUs = require("./routers/aboutUsRouter");
const homeRouter = require("./routers/homeRouter");
const heroRouter = require("./routers/heroRouter");
const iteaHeroRouter = require("./routers/iteaHeroRouter");
const iTeaRouter = require("./routers/iTeaRouter");
const blogRouter = require("./routers/blogRouter");
const flavorReviewRouter = require("./routers/flavorsReviewRouter");
const orderRouter = require("./routers/orderRouter");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config("./env");
const app = express();

//middleware
app.use(express.json());
app.use(morgan("common"));
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use("/auth", authRouter);
app.use("/post", postsRouter);
app.use("/enquiry", enquiryRouter);
app.use("/career", careerRouter);
app.use("/distributorship", distributorship);
app.use("/enquiryForm", enquiryForm);
app.use("/flavors", flavors);
app.use("/venture", venture);
app.use("/aboutUs", aboutUs);
app.use("/home", homeRouter);
app.use("/hero", heroRouter);
app.use("/iteaHero", iteaHeroRouter);
app.use("/iTea", iTeaRouter);
app.use("/blog", blogRouter);
app.use("/reviewFlavor", flavorReviewRouter);
app.use("/order", orderRouter);
app.get("/", (req, res) => {
  res.send("Ok from server");
});

const PORT = process.env.PORT || 4001;
dbConnect();
app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
