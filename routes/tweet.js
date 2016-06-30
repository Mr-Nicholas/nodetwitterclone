const express = require('express');
const router = express.Router();

const newCtrl = (req, res) => {
  res.send('tweet/new');
};

const createCtrl = (req, res) => {
  res.send('tweet/create');
};

const showCtrl = (req, res) => {
  res.send('tweet/show');
};

const delCtrl = (req, res) => {
  res.send('destroy ctrl');
};

router.get('/new', newCtrl);
router.post('/create', createCtrl);
router.get('/show', showCtrl);
router.delete('/destroy', delCtrl);

module.exports = router;
