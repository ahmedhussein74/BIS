const Admin = require("../models/AdminModel");

const getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find(req.query);
    res.json(admins);
  } catch (error) {
    console.log(error);
  }
};

const addAdmin = async (req, res) => {
  try {
    const admin = new Admin(req.body);
    const newAdmin = await admin.save();
    res.json(newAdmin);
  } catch (error) {
    console.log(error);
  }
};

const updateAdmin = async (req, res) => {
  try {
    const UpdatedAdmin = await Admin.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.json(UpdatedAdmin);
  } catch (error) {
    console.log(error);
  }
};

const deleteAdmin = async (req, res) => {
  try {
    const DeletedAdmin = await Admin.findByIdAndDelete(req.params.id);
    res.json(DeletedAdmin);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAdmins, addAdmin, updateAdmin, deleteAdmin };
