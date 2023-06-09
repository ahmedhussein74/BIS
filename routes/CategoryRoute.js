const router = require("express").Router();

const {
  getCategories,
  addCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/CategoryController");

router.get("/", getCategories);

router.post("/", addCategory);

router.put("/:id", updateCategory);

router.delete("/:id", deleteCategory);

module.exports = router;
