import React, { useState, useEffect } from "react";

const TimerButton = ({ timer, handleTimerButtonClick}) => {
  // const [timer, setTimer] = useState(false);

  

  return (
    <>
      <button onClick={handleTimerButtonClick}>
        {timer == "timerOff" || timer == "timerOver" ? "Start timer" : "Cancel timer"}
      </button>
    </>
  );
};

export default TimerButton;
