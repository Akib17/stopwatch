import React from 'react';
import './Digit.css'

const Digit = (props) => {
    return (
        <div>
            <h1 className="font-weight-normal digit display-4 mx-3 mt-4">
                <span style={{ borderColor: props.color, color: props.color}}> {props.value < 10 ? `0${props.value}` : props.value} </span>
            </h1>
        </div>
    );
};

export default Digit;