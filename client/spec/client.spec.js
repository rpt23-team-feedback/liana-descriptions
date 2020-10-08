const enzyme = require('enzyme');
require('mysql2/node_modules/iconv-lite').encodingExists('foo');

describe('basic rendering', () => {
  test('it loads', () => {
    expect(true).toBe(true);
  })
});
