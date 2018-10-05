const mongoose = require("mongoose");
const config = require('../config/database');

var adSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    "default": ""
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  currency: {
    type: String,
    "default": "$"
  },
  phone: {
    type: String,
    required: true
  },
  picUrl: {
    type: String,
    "default": null
  },
  isSelling: {
    type: Boolean,
    "default": true
  }
});

const Ad = module.exports = mongoose.model('Ad', adSchema);

module.exports.getAdById = function (id, cb) {
  Ad.findById(id, cb)
};


module.exports.getAll = function (cb) {
  Ad.find({}, cb);
};

module.exports.createAd = function (newAd, cb) {
  newAd.save(cb)
};