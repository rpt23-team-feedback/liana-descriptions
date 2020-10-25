const moment = require('moment');

const getSecondsTo = (timesUp) => {
  let start  = moment();
  let end = moment(timesUp);
  let diff = end.diff(start, 'seconds');
  if (parseInt(diff)) {
    return diff;
  } else {
    console.log('reformat your time string to \'YYYY-MM-DD HH:mm:ss\'');
  }
};

const convertSeconds = (n) => {
  let days = Math.floor(n / 86400);
  n -= days * 86400;
  let hours = Math.floor(n / 3600);
  n -= hours * 3600;
  let minutes = Math.floor(n / 60);
  n -= minutes * 60;
  let seconds = n;

  const convertedTimes = [days, hours, minutes, seconds];
  return convertedTimes;
};


convertSeconds(getSecondsTo('2020-11-15 01:02:45'));

module.exports = {
  getSecondsTo,
  convertSeconds,
};
