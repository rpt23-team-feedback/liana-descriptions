const moment = require('moment');
const utils = require('./clock-utils');

describe('clock helper: get seconds to', () => {
  it('should return a number', () => {
    const formatted = moment().add(1000, 'seconds').format('YYYY[-]MM[-]DD[ ]HH[:]mm[:]ss');
    const diff = utils.getSecondsTo(formatted);
    expect(typeof diff).toBe('number');
  });

  it('should return 999 when given a time 1000 seconds from now', () => {
    const formatted = moment().add(1000, 'seconds').format('YYYY[-]MM[-]DD[ ]HH[:]mm[:]ss');
    const diff = utils.getSecondsTo(formatted);
    expect(diff).toBe(999);
  });
})