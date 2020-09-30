const express = require('express');
const db = require('../db/index.js');
const Bundles = require('../db/models/bundles.model.js');

const app = express();
const port = 3663;

app.use(express.urlencoded({
  extended: true,
}));

db.sync({ force: false })
  .then(() => {
    console.log('db synced: ', db);
    app.listen(port, () => {
      console.log(`dockside at port ${port}`);
    })
  })
  .then(() => {
    Bundles.findOne({
      where: {
        id: 100,
      },
    })
    .then((results) => {
      console.log('results: ', results.dataValues);
    });
  })
  .catch((err) => {
    console.log('your error: ', err);
  });

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