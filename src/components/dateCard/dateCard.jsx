import React from 'react';
import DateInputForm from "../dateInputForm/dateInputForm.jsx";
import DateOutput from "../dateOutput.jsx";

const DateCard = () => {
    return (
        <div className="row">
            <div className="card px-5">
                <DateInputForm />
                <DateOutput/>
            </div>
        </div>
    );
};

export default DateCard;