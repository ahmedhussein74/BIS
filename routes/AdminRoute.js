const router = require("express").Router();

const {
  getAdmins,
  addAdmin,
  updateAdmin,
  deleteAdmin,
} = require("../controllers/AdminController");

router.get("/", getAdmins);

router.post("/", addAdmin);

router.put("/:id", updateAdmin);

router.delete("/:id", deleteAdmin);

module.exports = router;
