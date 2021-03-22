import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getSecondsTo, convertSeconds } from '../../../project-utils/clock-utils';

const Clock = () => {

  // initialize second count with absolute limit
  const [secondsTotal, setSecondsTotal] = useState(getSecondsTo('2021-04-22 23:59:59'));

  // fetch item's countdown expiration time
  useEffect(() => {
    const config = {
      url: `http://54.193.6.166:3663/bundleInfo/${props.id}`,
    }
    if (props.id >= 1 && props.id <= 100) {
      axios(config)
      .then(({ data }) => {
        if (data) {
          setSecondsTotal(getSecondsTo(data.timesUp));
        }
      })
      .catch((err) => {
        console.log('err: ', err);
      });
    }
  }, []);

  // initialize individual time counts
  const [times, setTimes] = useState(convertSeconds(secondsTotal));
  const [daysLeft, setDaysLeft] = useState(times[0]);
  const [hoursLeft, setHoursLeft] = useState(times[1]);
  const [minutesLeft, setMinutesLeft] = useState(times[2]);
  const [secondsLeft, setSecondsLeft] = useState(times[3]);

  // tick
  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsTotal(secondsTotal => (secondsTotal - 1));
    }, 1000);

    return (() => {
      clearInterval(interval);
    });
  }, []);

  // update individual time counts
  useEffect(() => {
    setTimes(convertSeconds(secondsTotal));
    setDaysLeft(times[0]);
    setHoursLeft(times[1]);
    setMinutesLeft(times[2]);
    setSecondsLeft(times[3]);
  }, [secondsTotal]);

  return (
    <div>
      <div className="daysLeft">{daysLeft} days left</div>
      <div className="hoursLeft">{hoursLeft} hours left</div>
      <div className="minutesLeft">{minutesLeft} minutes left</div>
      <div className="secondsLeft">{secondsLeft} seconds left</div>
    </div>
  );
};

export default Clock;
