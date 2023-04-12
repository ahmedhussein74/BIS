const User = require("../models/UserModel");

const getUsers = async (req, res) => {
  try {
    const users = await User.find(req.query);
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

const addUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const newUser = await user.save();
    res.json(newUser);
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const UpdatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(UpdatedUser);
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const DeletedUser = await User.findByIdAndDelete(req.params.id);
    res.json(DeletedUser);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getUsers, addUser, updateUser, deleteUser };
