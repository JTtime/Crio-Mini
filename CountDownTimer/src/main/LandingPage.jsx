import React, { useState } from "react";
import DateRangePicker from "../sharedComponents/DateRange";
import TimerButton from "../sharedComponents/TimerButton";
import CountdownTimer from "../sharedComponents/CountDownTimer";

const LandingPage = () => {
  const [timer, setTimer] = useState("timerOff");
  const [timerDuration, setTimerDuration] = useState(5000);
  //   const timerDuration = 5000;

  const handleTimerEnd = () => {
    console.log("timer end");
    setTimer("timerOver");
  };

  const handleTimerButtonClick = () => {
    console.log("timer status", timer);

    if (timer == "timerOn") {
      setTimer("timerOff");
    } else {
      setTimerDuration(5000);
      setTimer("timerOn");
    }
  };

  const reduceTime = () => {
    setTimerDuration(timeLeft => timeLeft - 1000);
  }

  return (
    <>
      {/* <p>Countdown Timer</p> */}

      <DateRangePicker />
      <CountdownTimer
        timerDuration={timerDuration}
        onTimerEnd={handleTimerEnd}
        reduceTime={reduceTime}
      />
      <TimerButton
        timer={timer}
        handleTimerButtonClick={handleTimerButtonClick}
      />
    </>
  );
};

export default LandingPage;
