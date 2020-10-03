const express = require('express');
const db = require('../db/index.js');
const morgan = require('morgan');
const Bundles = require('../db/models/bundles.model.js');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({
  extended: true,
}));

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
      const bundle = results.dataValues;
      return bundle;
    } else {
      res.status(404).send('no such bundle, try a bundle from 1 - 100');
    }
  })
  .then((bundle) => {
    if (bundle) {
      res.send(JSON.stringify(bundle));
    }
  })
  .catch((err) => {
    res.status(500).send('something went wrong on our end; wait a bit & try again');
  });
});

module.exports = app;
