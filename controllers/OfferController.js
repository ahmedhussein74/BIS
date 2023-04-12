const Offer = require("../models/OfferModel");

const getOffers = async (req, res) => {
  try {
    const offers = await Offer.find(req.query);
    res.json(offers);
  } catch (error) {
    console.log(error);
  }
};

const addOffer = async (req, res) => {
  try {
    const offer = new Offer(req.body);
    const newOffer = await offer.save();
    res.json(newOffer);
  } catch (error) {
    console.log(error);
  }
};

const updateOffer = async (req, res) => {
  try {
    const UpdatedOffer = await Offer.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.json(UpdatedOffer);
  } catch (error) {
    console.log(error);
  }
};

const deleteOffer = async (req, res) => {
  try {
    const DeletedOffer = await Offer.findByIdAndDelete(req.params.id);
    res.json(DeletedOffer);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getOffers, addOffer, updateOffer, deleteOffer };
