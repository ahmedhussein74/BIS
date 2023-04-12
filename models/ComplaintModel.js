const mongoose = require("mongoose");

const ComplaintSchema = new mongoose.Schema({
  value: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Complaint", ComplaintSchema);
