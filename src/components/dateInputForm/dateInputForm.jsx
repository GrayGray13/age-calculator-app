import React from 'react';
import './dateInputForm.scss';
import DownArrow from '../../assets/images/icon-arrow.svg';

const DateInputForm = () => {
    return (
        <form action="" className="row mx-0">
            <div className="col-md-2 px-0 text-start">
                <label htmlFor="dayInput" className="form-label">Day</label>
                <input type="number" className="form-control" id="dayInput" placeholder="DD"/>
            </div>
            <div className="col-md-2 px-0 text-start">
                <label htmlFor="monthInput" className="form-label">Month</label>
                <input type="number" className="form-control" id="monthInput" placeholder="MM"/>
            </div>
            <div className="col-md-2 px-0 text-start">
                <label htmlFor="yearInput" className="form-label">Year</label>
                <input type="number" className="form-control" id="yearInput" placeholder="YYYY"/>
            </div>
            <div className="row">
                <hr className="mt-4 col-md-9"/>
                <button className="btn col-md-3">
                    <img src={DownArrow} alt="arrow submit button"/>
                </button>
            </div>

        </form>
    );
};

export default DateInputForm;