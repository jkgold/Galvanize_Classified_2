'use strict';
require('dotenv').config()
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const classifieds = require('./app/routes/classifieds');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', express.static(path.join(__dirname + '/app/public/')));
app.use('/classifieds', classifieds);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
