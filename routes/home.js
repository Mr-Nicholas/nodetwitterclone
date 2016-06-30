const express = require('express');
const router = express.Router();

const indexCtrl = (req, res) => {
  res.render('home/index');
};

const contactCtrl = (req, res) => {
  res.send('home/contact');
};

const aboutCtrl = (req, res) => {
  res.send('home/about');
};

router.get('/new', indexCtrl);
router.get('/contact', contactCtrl);
router.get('/about', aboutCtrl);

module.exports = router;
