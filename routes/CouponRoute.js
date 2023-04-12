const router = require("express").Router();

const {
  getCoupons,
  addCoupon,
  updateCoupon,
  deleteCoupon,
} = require("../controllers/CouponController");

router.get("/", getCoupons);

router.post("/", addCoupon);

router.put("/:id", updateCoupon);

router.delete("/:id", deleteCoupon);

module.exports = router;
