const express = require('express');
const db = require('../db/index.js');
const Bundles = require('../db/models/bundles.model.js');

const app = express();
const port = 3663;

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
