import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getSecondsTo, convertSeconds } from '../../../project-utils/clock-utils';

const Clock = (props) => {

  const [secondsTotal, setSecondsTotal] = useState(getSecondsTo(props.countdown));

  useEffect(() => {
    const config = {
      url: `http://localhost:3663/bundleInfo/${props.id}`,
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