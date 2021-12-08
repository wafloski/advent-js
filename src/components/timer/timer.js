import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const texts = {
  start: 'start',
  pause: 'pause'
};

const OuterWrapper = styled.div`
  align-items: center;
  background: #2B2A30;
  display: flex;
  justify-content: center;
  margin: 0;
  min-height: 100vh;
  min-width: 100vw;
  padding: 0;
`;

const InnerWrapper = styled.div`
  align-items: center;
  border-radius: 50%;
  box-shadow: -5px 14px 44px #000000, 5px -16px 50px rgba(255, 255, 255, 0.15);
  display: flex;
  width: 518px;
  height: 518px;
  justify-content: center;
  position: relative;
`;

const TimerWrapper = styled.div`
  align-items: center;
  background: radial-gradient(71.4% 71.4% at 51.7% 28.6%, #3A393F 0%, #17171A 100%);
  border-radius: 50%;
  box-shadow: inset 0px 0px 114px rgba(0, 0, 0, 0.45);
  color: white;
  display: flex;
  flex-direction: column;
  height: 500px;
  justify-content: center;
  position: relative;
  width: 500px;
  z-index: 2;
`;

const Time = styled.div`
  display: flex;
  font-family: "bebas";
  font-size: 196px;
  margin: 30px auto;
  position: relative;
  top: 30px;
`;

const Input = styled.input`
  border: 0;
  border-bottom: 1px dashed white;
  background: none;
  color: white;
  font-family: "bebas";
  font-size: 196px;
  height: 170px;
  width: 150px;
  text-align: center;
  outline: none;
  
  &:disabled {
    border-bottom: none;
  }
`;

const Start = styled.button`
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  letter-spacing: 10px;
  line-height: 20px;
  background: none;
  color: white;
  opacity: .5;
  border: none;
  text-transform: uppercase;
  margin-bottom: 20px;
  
  &:hover {
    opacity: 1;
  }
`;

const Settings = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  opacity: 1;
  color: #fff;

  :hover {
    opacity: 1;
  }
`;

const Timer = () => {
  const [isRunning, setRunning] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);
  const [remainingTime, setRemainingTime] = useState(minutes * 60 + seconds);
  const [initialTime, setInitialTime] = useState(remainingTime);

  useEffect(() => {
    if (!isRunning) return;
    let interval = setInterval(() => {
      clearInterval(interval);

      if (seconds === 0) {
        if (minutes > 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
          setRemainingTime(remainingTime - 1);
        } else {
          alert(`time's up!`);
          pauseTimer();
          setRemainingTime(0);
        }
      } else {
        setSeconds(seconds - 1);
        setRemainingTime(remainingTime - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [minutes, seconds, isRunning, remainingTime]);

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  const pauseTimer = () => setRunning(false);
  const startTimer = () => setRunning(true);

  return (
    <OuterWrapper>
      <InnerWrapper>
      <CountdownCircleTimer
        isPlaying={isRunning}
        duration={remainingTime}
        colors={[
          ['#004777', 0.33],
          ['#F7B801', 0.33],
          ['#A30000', 0.33],
        ]}
        trailColor="#333"
        strokeWidth={10}
        size={520}
      >
        <TimerWrapper>
          <Time>
            <div className="minutes">
              <Input type="text" value={formattedMinutes} disabled/>
            </div>
            <div className="colon">:</div>
            <div className="seconds">
              <Input type="text" value={formattedSeconds} disabled/>
            </div>
          </Time>
          {isRunning
            ? <Start onClick={pauseTimer}>{texts.pause}</Start>
            : <Start onClick={startTimer}>{texts.start}</Start>
          }
          <Settings>{remainingTime}</Settings>
        </TimerWrapper>
      </CountdownCircleTimer>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export default Timer;
