import React, { useState, useEffect } from "react";

const TimerButton = () => {
  const [timer, setTimer] = useState(false);

  return (
    <>
      <button onClick={()=>{setTimer(!timer)}}>{!timer ? "Start timer" : "Cancel timer"}</button>
    </>
  );
};

export default TimerButton;
