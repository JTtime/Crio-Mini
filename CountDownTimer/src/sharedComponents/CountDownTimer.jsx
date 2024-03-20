import React, { useState, useEffect } from 'react';
import './CountDownTimer.css'; // Import CSS file for styling

const CountdownTimer = ({ timerDuration, onTimerEnd, reduceTime }) => {
  const [timeLeft, setTimeLeft] = useState(timerDuration);

  useEffect(() => {
    let countdownInterval;
    console.log('timer duration', timerDuration)
    if (timerDuration <= 0) {
      clearInterval(countdownInterval);
      onTimerEnd(); // Trigger the function in the parent component
    } else {
      countdownInterval = setInterval(() => {
        // setTimeLeft(timeLeft => timeLeft - 1000);
        reduceTime();
      }, 1000);
    }
    return () => clearInterval(countdownInterval);
  }, [timeLeft, onTimerEnd, timerDuration]);


  const days = Math.floor(timerDuration / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timerDuration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timerDuration % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timerDuration % (1000 * 60)) / 1000);

  return (
    <div className="countdown-container">
      <div className="countdown-square">{days}</div>
      <div className="countdown-square">{hours}</div>
      <div className="countdown-square">{minutes}</div>
      <div className="countdown-square">{seconds}</div>
    </div>
  );
};

export default CountdownTimer;
