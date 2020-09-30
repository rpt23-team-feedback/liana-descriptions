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
      console.log(results.dataValues);
      const bundle = results.dataValues;
      return bundle;
    } else {
      return null;
    }
  })
  .then((bundle) => {
    res.send(JSON.stringify(bundle));
  })
});