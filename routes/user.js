const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

router.get('/new', (req, res) => {
  res.render('/users/new');
});

router.post('/create', (req, res) => {
  // create a user here
  // then redirext
  console.log('body', req.body);
  return User.create(req.query).then(user => {
    console.log(`User created: ${user._id}`);
    res.redirect('/');
  });
});

router.get('/edit', (req, res) => {
  res.render('users/edit');
});

router.patch('/update', (req, res) => {
    res.send('users/update');
});

router.get('/show', (req, res) => {
  res.render('users/show');
});

router.delete('/destroy', (req, res) => {
    res.send('at user destroy');
});

module.exports = router;
