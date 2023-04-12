const router = require("express").Router();

const {
  getOffers,
  addOffer,
  updateOffer,
  deleteOffer,
} = require("../controllers/OfferController");

router.get("/", getOffers);

router.post("/", addOffer);

router.put("/:id", updateOffer);

router.delete("/:id", deleteOffer);

module.exports = router;
