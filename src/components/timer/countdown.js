import * as S from "./timer.styles";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import React, {useState} from "react";
import moment from "moment";

const texts = {
  start: 'Start',
  pause: 'Pause',
  reset: 'Reset',
  setTime: 'Set time',
  saveTime: 'Save time'
};

export const Countdown = ({
  isRunning,
  time,
  setRunning,
  handleSetTime,
  handleReset,
  id,
}) => {
  const [isEditMode, setEditMode] = useState(false);
  const [editedTime, setEditedTime] = useState(0);

  const pauseTimer = () => setRunning(false);
  const startTimer = () => setRunning(true);
  const resetTimer = () => handleReset();

  const handleEditMode = () => setEditMode(!isEditMode);
  const handleSaveTime = () => {
    handleSetTime(editedTime);
    setEditMode(false);
  }
  const handleTimeChange = (e) => setEditedTime(e.target.value);

  return (
    <CountdownCircleTimer
      key={id}
      isPlaying={isRunning}
      duration={time}
      colors={[
        ['#004777', 0.33],
        ['#F7B801', 0.33],
        ['#A30000', 0.33],
      ]}
      trailColor="#333"
      strokeWidth={10}
      size={520}
    >
      {({ remainingTime }) => {
        let minutes = moment.duration(remainingTime * 1000).minutes();
        let seconds = moment.duration(remainingTime * 1000).seconds();

        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
        return (<S.TimerWrapper>
          <S.Time>
            <div className="minutes">
              {!isEditMode
                ? <S.Input type="text" value={formattedMinutes} disabled/>
                : <S.Input type="number" value={editedTime} onChange={handleTimeChange}/>
              }
            </div>
            <div className="colon">:</div>
            <div className="seconds">
              <S.Input type="text" value={formattedSeconds} disabled/>
            </div>
          </S.Time>
          {isRunning
            ? <S.ActionButton onClick={pauseTimer}>{texts.pause}</S.ActionButton>
            : <div>
                <S.ActionButton onClick={resetTimer}>{texts.reset}</S.ActionButton>
                {time ? <S.ActionButton onClick={startTimer}>{texts.start}</S.ActionButton> : null}
              </div>
          }
          {isEditMode
            ? <S.Settings onClick={handleSaveTime}>{texts.saveTime}</S.Settings>
            : <S.Settings onClick={handleEditMode}>{texts.setTime}</S.Settings>
          }
        </S.TimerWrapper>);
      }}
    </CountdownCircleTimer>
  );
};
