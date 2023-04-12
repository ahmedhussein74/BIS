const Qr = require("../models/QrModel");

const getQrs = async (req, res) => {
  try {
    const qrs = await Qr.find(req.query);
    res.json(qrs);
  } catch (error) {
    console.log(error);
  }
};

const addQr =
  (upload.single("logo"),
  async (req, res) => {
    try {
      const qr = new Qr({
        img: {
          data: fs.readFileSync(
            path.join(__dirname, "../upload/" + req.file.filename)
          ),
          contentType: "image/" + req.file.filename.split(".").pop(),
        },
        address: req.body.address,
      });
      const newQr = await qr.save();
      res.json(newQr);
    } catch (error) {
      console.log(error);
    }
  });

const updateQr =
  (upload.single("logo"),
  async (req, res) => {
    try {
      const UpdatedQr = await Qr.findByIdAndUpdate(
        req.params.id,
        {
          img: {
            data: fs.readFileSync(
              path.join(__dirname, "../upload/" + req.file.filename)
            ),
            contentType: "image/" + req.file.filename.split(".").pop(),
          },
          address: req.body.address,
        },
        {
          new: true,
        }
      );
      res.json(UpdatedQr);
    } catch (error) {
      console.log(error);
    }
  });

const deleteQr = async (req, res) => {
  try {
    const DeletedQr = await Qr.findByIdAndDelete(req.params.id);
    res.json(DeletedQr);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getQrs, addQr, updateQr, deleteQr };
