const Category = require("../models/CategoryModel");

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find(req.query);
    res.json(categories);
  } catch (error) {
    console.log(error);
  }
};

const addCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    const newCategory = await category.save();
    res.json(newCategory);
  } catch (error) {
    console.log(error);
  }
};

const updateCategory = async (req, res) => {
  try {
    const UpdatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.json(UpdatedCategory);
  } catch (error) {
    console.log(error);
  }
};

const deleteCategory = async (req, res) => {
  try {
    const DeletedCategory = await Category.findByIdAndDelete(req.params.id);
    res.json(DeletedCategory);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getCategories, addCategory, updateCategory, deleteCategory };
