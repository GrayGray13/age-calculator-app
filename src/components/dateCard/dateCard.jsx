import React from 'react';
import DateInputForm from "../dateInputForm/dateInputForm.jsx";
import DateOutput from "../dateOutput/dateOutput.jsx";
import './dateCard.scss';

const DateCard = () => {
    return (
        <div className="row d-flex justify-content-center">
            <div className="card p-5">
                <DateInputForm />
                <DateOutput/>
            </div>
        </div>
    );
};

export default DateCard;