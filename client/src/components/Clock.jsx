import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getSecondsTo, convertSeconds } from '../../../project-utils/clock-utils';
import styles from '../styles/topStyledComponents.js';

const Clock = (props) => {

  const [secondsTotal, setSecondsTotal] = useState(getSecondsTo(props.countdown));

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

  const [times, setTimes] = useState(convertSeconds(secondsTotal));
  const [daysLeft, setDaysLeft] = useState(times[0]);
  const [hoursLeft, setHoursLeft] = useState(times[1]);
  const [minutesLeft, setMinutesLeft] = useState(times[2]);
  const [secondsLeft, setSecondsLeft] = useState(times[3]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsTotal(secondsTotal => (secondsTotal - 1));
    }, 1000);

    return (() => {
      clearInterval(interval);
    });
  }, []);

  useEffect(() => {
    setTimes(convertSeconds(secondsTotal));
    setDaysLeft(times[0]);
    setHoursLeft(times[1]);
    setMinutesLeft(times[2]);
    setSecondsLeft(times[3]);
  }, [secondsTotal]);

  return (
    <styles.Clock>
      <table>
        <tbody>
          <tr>
            <td>
              <styles.Window className="daysLeft"><styles.Count>{daysLeft < 10 ? `0${daysLeft}` : daysLeft}</styles.Count> days</styles.Window>
            </td>
            <td>
              <styles.Window className="hoursLeft"><styles.Count>{hoursLeft < 10 ? `0${hoursLeft}` : hoursLeft}</styles.Count> hours</styles.Window>
            </td>
            <td>
              <styles.Window className="minutesLeft"><styles.Count>{minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft}</styles.Count> min</styles.Window>
            </td>
            <td>
              <styles.Window className="secondsLeft"><styles.Count>{secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}</styles.Count> sec</styles.Window>
            </td>
          </tr>
        </tbody>
      </table>
    </styles.Clock>
  );
};

export default Clock;
