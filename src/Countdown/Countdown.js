import React from 'react';
import Digit from '../Digit/Digit';

const Countdown = (props) => {
    return (
        <div className="d-flex">
            <Digit value={props.time.min} color="lightgreen" />
            <Digit value={props.time.sec} color="skyblue" />
            <Digit value={props.time.mili} color="salmon" />
        </div>
    );
};

export default Countdown;