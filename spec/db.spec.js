const db = require('../db/index.js');
const seed = require('../project-utils/seed.js');
const Bundles = require('../db/models/bundles.model.js');
require('iconv-lite').encodingExists('foo');

describe('database seeding', () => {
  test('it should have 100 entries', () => {
    seed()
    .then(() => {
      Bundles.findOne({
        where: {
          id: 100,
        },
      })
      .then((results) => {
        expect(results.dataValues.id).toBe(100);
        expect(results.dataValues.name).toBe('i go batty for you!');
        expect(results.dataValues.value).toBe(183);
        expect(results.dataValues.logoURL).toBe('https://unsplash.com/photos/YcfCXxo7rpc');
        expect(results.dataValues.helper).toBe('@causam');
        expect(results.dataValues.minimum).toBe(6);
      })
    })
  });
});
