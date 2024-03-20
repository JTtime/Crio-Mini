import React, { useEffect, useState } from "react";
import "./DateRange.css";

const DateRangePicker = () => {
  //   const [startDate, setStartDate] = useState(null);
  //   const [endDate, setEndDate] = useState(null);
  //   const [isOpen, setIsOpen] = useState(false);
  const [dateValue, setDateValue] = useState(new Date());
  

  useEffect(() => {
    console.log(dateValue);
  }, [dateValue]);

  const changeDateValue = (e) => {
    setDateValue(e.target.value)

  }

  const handleDateRangeSelected = (start, end) => {
    setStartDate(start);
  };
  return (
    <>
      <label for="meeting-time">CountDown Timer</label>

      <input
        type="datetime-local"
        id="meeting-time"
        name="meeting-time"
        // value="2018-06-12T19:30"
        value={dateValue}
        onChange={changeDateValue}
        min="2000-06-07T00:00"
        max="2032-06-14T00:00"
        
      />
      
    </>
  );
};

export default DateRangePicker;
