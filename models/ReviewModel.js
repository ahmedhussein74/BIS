const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  value: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Review", ReviewSchema);
