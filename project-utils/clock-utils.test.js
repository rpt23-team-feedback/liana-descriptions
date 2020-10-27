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

  it('should accept a date formatted YYYY[-]MM[-]DD[ ]HH[:]mm[:]ss as input', () => {
    const formatted = moment().add(1000, 'seconds').format('YYYY[-]MM[-]DD[ ]HH[:]mm[:]ss');
    const diff = utils.getSecondsTo(formatted);
    expect(diff).not.toBeFalsy();
  });

  it('should not accept non-date values as input', () => {
    const diff = utils.getSecondsTo('apple');
    expect(diff).not.toBeTruthy();
  });
});

describe('clock helper: convert seconds to', () => {
  it('should return an array', () => {
    const convertedArray = utils.convertSeconds();
    expect(Array.isArray(convertedArray)).toBe(true);
  });

  it('should return [1, 1, 1, 1] when given 90061 (86400 + 3600 + 60 + 1)', () => {
    const conv = utils.convertSeconds(90061);
    const exp = [1, 1, 1, 1];
    expect(conv).toEqual(expect.arrayContaining(exp));
    expect(exp).toEqual(expect.arrayContaining(conv));
  });

  it('should return NaN for each value in the array when a number is not input', () => {
    const conv = utils.convertSeconds();
    expect(conv[0]).toEqual(NaN);
    expect(conv[1]).toEqual(NaN);
    expect(conv[2]).toEqual(NaN);
    expect(conv[3]).toEqual(NaN);
  });

  it('should return 0 for each value in the array when 0 is input', () => {
    const conv = utils.convertSeconds(0);
    expect(conv[0]).toEqual(0);
    expect(conv[1]).toEqual(0);
    expect(conv[2]).toEqual(0);
    expect(conv[3]).toEqual(0);
  });
});
