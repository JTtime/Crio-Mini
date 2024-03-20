import React, { useState } from "react";
import "./DateRange.css";

const DateRangePicker = ({ onDateSelected }) => {
  const [dateValue, setDateValue] = useState(new Date());
  const [error, setError] = useState("")

  const changeDateValue = (e) => {
    const selectedDateTime = new Date(e.target.value);
    const currentDateTime = new Date();
    const maxDateTime = new Date();
    maxDateTime.setDate(maxDateTime.getDate() + 100); // Set maximum date 100 days from now
  
    if (selectedDateTime < currentDateTime) {
      // Prevent selecting past dates
      setError("Please select a future date.");
      setDateValue(getCurrentDateTimeString());
    } else if (selectedDateTime.getDate() > maxDateTime.getDate()) {
      // Prevent selecting dates more than 100 days from now
      setError("Please select a date within the next 100 days.");
      setDateValue(getCurrentDateTimeString());
    } else {
      setError("");
      setDateValue(e.target.value);
      onDateSelected(e.target.value); // Call the parent function with the selected date
    }
  };
  

  function getCurrentDateTimeString() {
    const now = new Date();
    const year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    // Ensure month and day have leading zeros if necessary
    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }

    // Ensure hours and minutes have leading zeros if necessary
    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  return (
    <>
      <label htmlFor="meeting-time">CountDown Timer</label>

      <input
        type="datetime-local"
        id="meeting-time"
        name="meeting-time"
        value={dateValue}
        onChange={changeDateValue}
        min={getCurrentDateTimeString()}
        max="2032-06-14T00:00"
      />
      <div>{error}</div>
    </>
  );
};

export default DateRangePicker;
