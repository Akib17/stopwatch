import React from 'react';

const Lap = (props) => {
    return (
        <div className="mt-5">
            {
                props.laps.map((lap, ind) => (
                    <li key={ind} className="list-group-item border-top-0 border-right-0 border-left-0 w-50 border-bottom d-flex">
                        <h5 className="font-weight-normal">
                            <span className="text-success">Min {lap.min} </span>
                            <span className="text-primary mx-4">Sec {lap.sec} </span>
                            <span className="text-danger">Millisec {lap.mili} </span>
                        </h5>
                    </li>
                ))
            }
        </div>
    );
};

export default Lap;