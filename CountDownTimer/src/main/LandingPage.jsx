import React, { useState } from "react";
import DateRangePicker from "../sharedComponents/DateRange";
import TimerButton from "../sharedComponents/TimerButton";
import CountdownTimer from "../sharedComponents/CountDownTimer";

const LandingPage = () => {
  const [timer, setTimer] = useState("timerOff");
  const [timerDuration, setTimerDuration] = useState(0);
  //   const timerDuration = 5000;

  const handleTimerEnd = () => {
    console.log("timer end");
    setTimer("timerOver");
  };

  const handleTimerButtonClick = () => {
    console.log("timer status", timer);

    if (timer == "timerOn") {
      setTimer("timerOff");
      setTimerDuration(0);
    } else {
      setTimerDuration(5000);
      setTimer("timerOn");
    }
  };

  const reduceTime = () => {
    setTimerDuration((timeLeft) => timeLeft - 1000);
  };

  const handleDateSelected = (selectedDate) => {
    const currentDate = new Date();
    const selectedDateDay = new Date(selectedDate)
    console.log("selected Date",selectedDate)
    if (selectedDateDay.getDate() > currentDate + 100) {
      console.log("100 days");
    } else {
      const selectedDateTime = new Date(selectedDate);
      const now = new Date();
      const timeDifference = selectedDateTime.getTime() - now.getTime();
      setTimerDuration(timeDifference > 0 ? timeDifference : 0);
      if (timerDuration > 0) {
        setTimer("timerOn");
      } else {
        setTimer("timerOff");
      }
    }
  };

  return (
    <>
      {/* <p>Countdown Timer</p> */}

      <DateRangePicker onDateSelected={handleDateSelected} />
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
