const mongoose = require("mongoose");

const QrSchema = new mongoose.Schema({
  img: {
    contentType: String,
    data: Buffer,
  },
  address: {
    type: String,
    reuired: true,
  },
});

module.exports = mongoose.model("Qr", QrSchema);
