import React from 'react';
import './dateOutput.scss';

const DateOutput = () => {
    return (
        <div className="col">
            <div className="row mx-0 text-start row-squish">
                <h2 className="ps-0"><span>--</span>years</h2>
            </div>
            <div className="row mx-0 text-start row-squish">
                <h2 className="ps-0"><span>--</span>months</h2>
            </div>
            <div className="row mx-0 text-start row-squish">
                <h2 className="ps-0"><span>--</span>days</h2>
            </div>
        </div>
    );
};

export default DateOutput;