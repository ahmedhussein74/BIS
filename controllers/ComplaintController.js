const Complaint = require("../models/ComplaintModel");

const getComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find(req.query);
    res.json(complaints);
  } catch (error) {
    console.log(error);
  }
};

const addComplaint = async (req, res) => {
  try {
    const complaint = new Complaint(req.body);
    const newComplaint = await complaint.save();
    res.json(newComplaint);
  } catch (error) {
    console.log(error);
  }
};

const updateComplaint = async (req, res) => {
  try {
    const UpdatedComplaint = await Complaint.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.json(UpdatedComplaint);
  } catch (error) {
    console.log(error);
  }
};

const deleteComplaint = async (req, res) => {
  try {
    const DeletedComplaint = await Complaint.findByIdAndDelete(req.params.id);
    res.json(DeletedComplaint);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getComplaints,
  addComplaint,
  updateComplaint,
  deleteComplaint,
};
