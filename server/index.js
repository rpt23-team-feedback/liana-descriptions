const db = require('../db/index');
const Bundles = require('../db/models/bundles.model');
const app = require('./app');

const port = 3663;

db.sync({
  force: false,
  logging: false
})
  .then(() => {
    console.log('db synced: ', db);
    app.listen(port, () => {
      console.log(`dockside at port ${port}`);
    })
  })
  .catch((err) => {
    console.log('your error: ', err);
  });
