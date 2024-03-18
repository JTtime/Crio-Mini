import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import "./calendar.css"; // Import CSS file for styling

const DateRangePicker = ({
  onDateRangeSelected,
  startDate,
  endDate,
  yearRange,
}) => {
  const [selectedStartDate, setSelectedStartDate] = useState(startDate);
  const [selectedEndDate, setSelectedEndDate] = useState(endDate);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [showCalendar, setShowCalendar] = useState(false);
  const [showYearSelector, setShowYearSelector] = useState(false);
  const calendarRef = useRef();
  const yearSelectorRef = useRef();

  const handleDateClick = (date) => {
    if (!selectedStartDate || selectedEndDate) {
      setSelectedStartDate(date);
      setSelectedEndDate(null);
    } else {
      if (date >= selectedStartDate) {
        setSelectedEndDate(date);
        onDateRangeSelected(selectedStartDate, date);
        setShowCalendar(false);
      } else {
        setSelectedEndDate(selectedStartDate);
        setSelectedStartDate(date);
      }
    }
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
    if (currentMonth === 11) setCurrentYear((prevYear) => prevYear + 1);
  };

  const handlePrevMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    if (currentMonth === 0) setCurrentYear((prevYear) => prevYear - 1);
  };

  const handleYearSelection = (year) => {
    setCurrentYear(year);
    setShowYearSelector(false);
  };

  const handleOutsideClick = (event) => {
    if (calendarRef.current && !calendarRef.current.contains(event.target)) {
      setShowCalendar(false);
    }
    if (
      yearSelectorRef.current &&
      !yearSelectorRef.current.contains(event.target)
    ) {
      setShowYearSelector(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="date-range-picker">
      <input
        type="text"
        placeholder="Select Date Range"
        readOnly
        value={
          selectedStartDate && selectedEndDate
            ? `${selectedStartDate.toDateString()} - ${selectedEndDate.toDateString()}`
            : ""
        }
        onFocus={() => setShowCalendar(true)}
      />
      {showCalendar && (
        <div ref={calendarRef} className="calendar-popover">
          <div className="calendar-header">
            <button onClick={handlePrevMonth}>&lt;</button>
            <h3>
              {new Date(currentYear, currentMonth).toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
            </h3>
            <button onClick={handleNextMonth}>&gt;</button>
            <button onClick={() => setShowYearSelector(true)}>
              {currentYear}
            </button>
          </div>
          <div className="calendar">
            <div className="days">
              {[
                ...Array(
                  new Date(currentYear, currentMonth + 1, 0).getDate(),
                ).keys(),
              ].map((index) => {
                const currentDate = new Date(
                  currentYear,
                  currentMonth,
                  index + 1,
                );
                const isInRange =
                  selectedStartDate &&
                  selectedEndDate &&
                  currentDate >= selectedStartDate &&
                  currentDate <= selectedEndDate;
                const isStart =
                  selectedStartDate &&
                  currentDate.toDateString() ===
                    selectedStartDate.toDateString();
                const isEnd =
                  selectedEndDate &&
                  currentDate.toDateString() === selectedEndDate.toDateString();

                return (
                  <div
                    key={index}
                    className={`day ${isInRange ? "in-range" : ""} ${isStart ? "start" : ""} ${isEnd ? "end" : ""}`}
                    onClick={() => handleDateClick(currentDate)}
                  >
                    {index + 1}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      {showYearSelector &&
        ReactDOM.createPortal(
          <div ref={yearSelectorRef} className="year-selector-popover">
            {[...Array(yearRange[1] - yearRange[0] + 1).keys()].map((index) => (
              <div
                key={index}
                className="year"
                onClick={() => handleYearSelection(yearRange[0] + index)}
              >
                {yearRange[0] + index}
              </div>
            ))}
          </div>,
        )}
    </div>
  );
};

DateRangePicker.propTypes = {
  onDateRangeSelected: PropTypes.func.isRequired,
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  yearRange: PropTypes.arrayOf(PropTypes.number),
};

DateRangePicker.defaultProps = {
  startDate: null,
  endDate: null,
  yearRange: [new Date().getFullYear() - 100, new Date().getFullYear() + 100],
};

export default DateRangePicker;
