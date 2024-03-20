import React from 'react';
import DateRangePicker from '../sharedComponents/DateRange';
import TimerButton from '../sharedComponents/TimerButton';

const LandingPage = () => {


    return (
        <>  
        <p>Countdown Timer</p>
        
        
        <DateRangePicker/>
        <TimerButton/>
        </>
    )
}

export  default LandingPage;