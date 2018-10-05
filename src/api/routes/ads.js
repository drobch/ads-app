const express = require('express');
const router = express.Router();
const Ad = require('../models/ad');



router.get('/ads', (req, res, next) => {
  console.log('get');
  Ad.getAll((err, ads) => {
    if(err) throw err;
    res.send(ads);
  })
});

router.get('/ads/:id', (req, res, next) => {
  Ad.getAdById(req.params.id, (err, ad) => {
    if(err) throw err;
    res.send(ad);
  })
});

router.post('/ads', (req, res, next) => {
  let newAd = new Ad({
    title: req.body.title,
    phone: req.body.phone,
    price: req.body.price,
    currency: req.body.currency,
    picUrl: req.body.picUrl,
    description: req.body.description,
    isSelling: req.body.isSelling
  });
  
  Ad.createAd(newAd, (err, ad) => {
    if (err) {
      console.log(ad);
      res.json({success: false, msg: 'Failed to add an advertisement'})
    } else {
      res.json(ad);
    }
  })
});

module.exports = router;