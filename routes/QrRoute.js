const router = require("express").Router();

const {
  getQrs,
  addQr,
  updateQr,
  deleteQr,
} = require("../controllers/QrController");

router.get("/", getQrs);

router.post("/", addQr);

router.put("/:id", updateQr);

router.delete("/:id", deleteQr);

module.exports = router;
