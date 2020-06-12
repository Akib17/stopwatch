import React, { useState } from 'react';

const Controller = (props) => {
    const [start, setStart] = useState(true)
    const [pause, setPause] = useState(false)
    const [lap, setLap] = useState(false)
    const [reset, setReset] = useState(false)

    const startHandler = () => {
        setStart(false)
        setPause(true)
        setLap(true)
        props.start()
    }

    const pauseHandler = () => {
        setPause(false)
        setStart(true)
        setReset(true)
        props.pause()
    }

    const lapHandler = () => {
        props.lap()
    }

    const resetHandler = () => {
        setStart(true)
        setReset(false)
        setPause(false)
        setLap(false)
        props.reset()
    }

    const getController = () => {
        let output = null
        if (start && !reset) {
            return (
                output = <button onClick={() => startHandler()} className="px-4 btn btn-info">Start</button>
            )
        } else if (pause && lap) {
            return (
                output =
                <div>
                    <button onClick={() => pauseHandler()} className="btn btn-primary px-4">Pause</button>
                    <button onClick={() => lapHandler()} className="btn btn-warning mx-4 px-4">Lap</button>
                </div>
            )
        } else if (start && reset) {
            return (
                <div>
                    <button onClick={() => startHandler()} className="btn btn-info px-4">Start</button>
                    <button onClick={() => resetHandler()} className="btn btn-danger mx-4 px-4">Reset</button>
                </div>
            )
        }
        return output
    }

    return (
        <div className="my-5">
            {getController()}
        </div>
    );
};

export default Controller;