const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const userRoutes = require('../routes/user');
const tweetRoutes = require('../routes/tweet');
const homeRoutes = require('../routes/home');

app.set('view engine', 'ejs');

app.use(bodyParser());

// relative paths, saves need to include userid on each
app.use('/user', userRoutes);
app.use('/tweet', userRoutes);

module.exports = app;
