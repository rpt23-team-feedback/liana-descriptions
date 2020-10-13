const request = require('supertest');
const app = require('./app.js');
require('mysql2/node_modules/iconv-lite').encodingExists('foo');

describe('test the bundleId routing', () => {
  afterAll((done) => {
    done();
  })

  test('it should respond to a GET to \'/bundleInfo/bundleId\' for a bundle that exists', (done) => {
    return request(app)
      .get('/bundleInfo/49')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('{"id":49,"name":"blaze a trail","value":110,"logoURL":"https://unsplash.com/photos/Ixp4YhCKZkI","helper":"@shoot","minimum":3}');
      })
      .then(done());
  });

  test('it should respond to a GET to \'/bundleInfo/bundleId\' for a bundle that doesn\'t exist', (done) => {
    return request(app)
      .get('/bundleInfo/149')
      .then((response) => {
        expect(response.statusCode).toBe(404);
        expect(response.error.text).toBe('no such bundle, try a bundle from 1 - 100');
      })
      .then(done());
  });
});
