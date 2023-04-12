const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  logo: {
    contentType: String,
    data: Buffer,
  },
  address: {
    type: String,
    reuired: true,
  },
});

module.exports = mongoose.model("Client", ClientSchema);
