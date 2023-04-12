const Coupon = require("../models/CouponModel");

const getCoupons = async (req, res) => {
  try {
    const coupons = await Coupon.find(req.query);
    res.json(coupons);
  } catch (error) {
    console.log(error);
  }
};

const addCoupon = async (req, res) => {
  try {
    const coupon = new Coupon(req.body);
    const newCoupon = await coupon.save();
    res.json(newCoupon);
  } catch (error) {
    console.log(error);
  }
};

const updateCoupon = async (req, res) => {
  try {
    const UpdatedCoupon = await Coupon.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.json(UpdatedCoupon);
  } catch (error) {
    console.log(error);
  }
};

const deleteCoupon = async (req, res) => {
  try {
    const DeletedCoupon = await Coupon.findByIdAndDelete(req.params.id);
    res.json(DeletedCoupon);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getCoupons, addCoupon, updateCoupon, deleteCoupon };
