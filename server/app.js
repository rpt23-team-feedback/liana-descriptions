const cors = require('cors');
const db = require('../db/index');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const Bundles = require('../db/models/bundles.model');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({
  extended: true,
}));
app.use(cors());
app.use(express.static(__dirname + '/../client/dist'));

// GET routing
app.get('/bundleInfo/:bundleId', (req, res) => {
  const id = req.params.bundleId;
  return Bundles.findOne({
    where: {
      id
    },
  })
  .then((results) => {
    if (results) {
      return bundle = results.dataValues;
    } else {
      res.status(404).send('no such bundle, try a bundle from 1 - 100');
    }
  })
  .then((bundle) => {
    if (bundle) {
      const strung = JSON.stringify(bundle);
      res.send(strung);
    }
  })
  .catch((err) => {
    res.status(500).send('something went wrong on our end; wait a bit & try again');
  });
});

app.use('*', (req,res) =>{
  res.sendFile(path.join(__dirname + '/../client/dist/index.html'));
});

module.exports = app;
