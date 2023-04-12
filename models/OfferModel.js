const mongoose = require("mongoose");

const OfferSchema = new mongoose.Schema({
  value: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Offer", OfferSchema);
