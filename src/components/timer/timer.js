import React, { useEffect, useState } from 'react';
import * as S from './timer.styles';
import { Countdown } from './countdown';

const Timer = () => {
  const [isRunning, setRunning] = useState(false);
  const [time, setTime] = useState(600);
  const [initialTime, setInitialTime] = useState(time);
  const [timerKey, setTimerKey] = useState(0);

  useEffect(() => {
    if (!isRunning) return;
    let interval = setInterval(() => {
      if (time === 1) {
        setRunning(false)
      }
      setTime(time - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time, isRunning, initialTime]);

  const handleReset = () => {
    setTime(initialTime);
    setTimerKey(timerKey + 1);
  };

  const handleSetTime = (timeToSet) => {
    setTimerKey(timerKey + 1);
    setTime(timeToSet*60);
    setInitialTime(timeToSet*60);
  };

  return (
    <S.OuterWrapper>
      <S.InnerWrapper>
        <Countdown
          time={time}
          isRunning={isRunning}
          handleSetTime={handleSetTime}
          setRunning={setRunning}
          handleReset={handleReset}
          id={timerKey}
        />
      </S.InnerWrapper>
    </S.OuterWrapper>
  )
}

export default Timer;
