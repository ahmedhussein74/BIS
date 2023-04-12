const Review = require("../models/ReviewModel");

const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find(req.query);
    res.json(reviews);
  } catch (error) {
    console.log(error);
  }
};

const addReview = async (req, res) => {
  try {
    const review = new Review(req.body);
    const newReview = await review.save();
    res.json(newReview);
  } catch (error) {
    console.log(error);
  }
};

const updateReview = async (req, res) => {
  try {
    const UpdatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.json(UpdatedReview);
  } catch (error) {
    console.log(error);
  }
};

const deleteReview = async (req, res) => {
  try {
    const DeletedReview = await Review.findByIdAndDelete(req.params.id);
    res.json(DeletedReview);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getReviews, addReview, updateReview, deleteReview };
