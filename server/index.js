const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./dbConnect");
const authRouter = require("./routers/authRouter");
const postsRouter = require("./routers/postRouter");
const enquiryRouter = require("./routers/enquiryRouter");
const careerRouter = require("./routers/careerRouter");
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
app.get("/", (req, res) => {
  res.send("Ok from server");
});

const PORT = process.env.PORT || 4001;
dbConnect();
app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
