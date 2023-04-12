const router = require("express").Router();

const {
  getReviews,
  addReview,
  updateReview,
  deleteReview,
} = require("../controllers/ReviewController");

router.get("/", getReviews);

router.post("/", addReview);

router.put("/:id", updateReview);

router.delete("/:id", deleteReview);

module.exports = router;
