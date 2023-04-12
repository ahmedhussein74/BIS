const router = require("express").Router();

const {
  getComplaints,
  addComplaint,
  updateComplaint,
  deleteComplaint,
} = require("../controllers/ComplaintController");

router.get("/", getComplaints);

router.post("/", addComplaint);

router.put("/:id", updateComplaint);

router.delete("/:id", deleteComplaint);

module.exports = router;
