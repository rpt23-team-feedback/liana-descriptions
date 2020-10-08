const db = require('../index');
const seed = require('../../project-utils/seed');
const Bundles = require('../models/bundles.model');
require('mysql2/node_modules/iconv-lite').encodingExists('foo');

describe('database seeding', () => {
  beforeAll(() => {
    seed();
  });

  afterAll((done) => {
    db.close();
    done();
  })

  test('it should have 100 entries', () => {
    return Bundles.findAll()
      .then((results) => {
        expect(results.length).toBe(100);
      })
  })

  test('it should have the right 100th entry', () => {
    () => {
      Bundles.findOne({
        where: {
          id: 100,
        },
      })
      .then((results) => {
        Bundles.close();
        expect(results.dataValues.id).toBe(100);
        expect(results.dataValues.name).toBe('i go batty for you!');
        expect(results.dataValues.value).toBe(183);
        expect(results.dataValues.logoURL).toBe('https://unsplash.com/photos/YcfCXxo7rpc');
        expect(results.dataValues.helper).toBe('@causam');
        expect(results.dataValues.minimum).toBe(6);
      });
    };
  });
});
