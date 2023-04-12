const router = require("express").Router();

const {
  getItems,
  addItem,
  updateItem,
  deleteItem,
} = require("../controllers/ItemController");

router.get("/", getItems);

router.post("/", addItem);

router.put("/:id", updateItem);

router.delete("/:id", deleteItem);

module.exports = router;
