require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up storage for uploaded images using multer
export const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "upload/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
export const upload = multer({ storage: storage });

// Routes
const QrRoute = require("./routes/QrRoute");
const ItemRoute = require("./routes/ItemRoute");
const UserRoute = require("./routes/UserRoute");
const AdminRoute = require("./routes/AdminRoute");
const OfferRoute = require("./routes/OfferRoute");
const ClientRoute = require("./routes/ClientRoute");
const CouponRoute = require("./routes/CouponRoute");
const ReviewRoute = require("./routes/ReviewRoute");
const CategoryRoute = require("./routes/CategoryRoute");
const ComplaintRoute = require("./routes/ComplaintRoute");

// middleware
app.use("/qr", QrRoute);
app.use("/item", ItemRoute);
app.use("/user", UserRoute);
app.use("/admin", AdminRoute);
app.use("/offer", OfferRoute);
app.use("/client", ClientRoute);
app.use("/coupon", CouponRoute);
app.use("/review", ReviewRoute);
app.use("/category", CategoryRoute);
app.use("/complaint", ComplaintRoute);

app.listen(process.env.PORT, () => {
  console.log("Server listining on port " + process.env.PORT);
  mongoose
    .connect(process.env.URL)
    .then((data) => {
      console.log("connect to database : ", data.connection.name);
    })
    .catch((err) => {
      console.log("Error : ", err);
    });
});
