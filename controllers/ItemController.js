const fs = require("fs");
const path = require("path");
const { upload } = require("../index");
const Item = require("../models/ItemModel");

const getItems = async (req, res) => {
  try {
    const items = await Item.find(req.query);
    res.json(items);
  } catch (error) {
    console.log(error);
  }
};

const addItem =
  (upload.single("logo"),
  async (req, res) => {
    try {
      const item = new Item({
        name: req.body.name,
        price: req.body.price,
        img: {
          data: fs.readFileSync(
            path.join(__dirname, "../upload/" + req.file.filename)
          ),
          contentType: "image/" + req.file.filename.split(".").pop(),
        },
        clientId: req.body.clientId,
        categoryId: req.body.categoryId,
        offerId: req.body.offerId,
      });
      const newItem = await item.save();
      res.json(newItem);
    } catch (error) {
      console.log(error);
    }
  });

const updateItem =
  (upload.single("logo"),
  async (req, res) => {
    try {
      const UpdatedItem = await Item.findByIdAndUpdate(
        req.params.id,
        {
          name: req.body.name,
          price: req.body.price,
          img: {
            data: fs.readFileSync(
              path.join(__dirname, "../upload/" + req.file.filename)
            ),
            contentType: "image/" + req.file.filename.split(".").pop(),
          },
          clientId: req.body.clientId,
          categoryId: req.body.categoryId,
          offerId: req.body.offerId,
        },
        {
          new: true,
        }
      );
      res.json(UpdatedItem);
    } catch (error) {
      console.log(error);
    }
  });

const deleteItem = async (req, res) => {
  try {
    const DeletedItem = await Item.findByIdAndDelete(req.params.id);
    res.json(DeletedItem);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getItems, addItem, updateItem, deleteItem };
