const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    reuired: true,
  },
  img: { 
    contentType: String,
    data: Buffer,
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  offerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Offer",
  },
});

module.exports = mongoose.model("Item", ItemSchema);
