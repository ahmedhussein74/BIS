const mongoose = require("mongoose");

const CouponSchema = new mongoose.Schema({
  value: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Coupon", CouponSchema);
