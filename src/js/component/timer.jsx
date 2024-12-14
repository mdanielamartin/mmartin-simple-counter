import React, { useState } from "react";
import Display from "./display";


const Timer = () => {
    const [hour, setHour] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');
    const [activeStart, setStart] = useState(false)
    const [activeStop, setStop] = useState(true);
    const [activeResume, setResume] = useState(true);
    const [activeReset, setReset] = useState(true);
    const [action, setAction] = useState(null);

    const handleStart = () => {
        setStart(true)
        setStop(false)
        setReset(false)
        setAction(0)
    }
    const handleReset = () => {
        setStart(false)
        setStop(true)
        setResume(true)
        setReset(true)
        setAction(3)
    }
    const handleStop = () => {
        setResume(false)
        setAction(1)
    }
    const handleResume = () => {
        setResume(true)
        setAction(2)
    }
    const validateHour = (e) => {
        if (isNaN(parseInt(e.target.value))) {
            setHour('')
            return
        }
        if (parseInt(e.target.value) >= 0 && parseInt(e.target.value) <= 24) {
            setHour(e.target.value)
        }
    }
    const validateMinutes = (e) => {
        if (isNaN(parseInt(e.target.value))) {
            setMinutes('')
            return
        }
        if (parseInt(e.target.value) >= 0 && parseInt(e.target.value) <= 59) {
            setMinutes(e.target.value)
        }
    }
    const validateSeconds = (e) => {
        if (isNaN(parseInt(e.target.value))) {
            setSeconds('')
            return
        }
        if (parseInt(e.target.value) >= 0 && parseInt(e.target.value) <= 59) {
            setSeconds(e.target.value)
        }
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 col-sm-12 bg-secondary py-3 d-flex justify-content-center align-items-center">
                    <div className="input-block">
                        <label htmlFor='hours'>Hours</label>
                        <input type="number" placeholder="00" value={hour.padStart(2, '0')} onChange={validateHour} id='hours'></input>
                    </div>
                    <div className="input-block">
                        <label htmlFor='minutes'>Minutes</label>
                        <input type='number' placeholder="00" value={minutes.padStart(2, '0')} onChange={validateMinutes} id='minutes'></input>
                    </div>
                    <div className="input-block">
                        <label htmlFor='seconds'>Seconds</label>
                        <input type='number' placeholder="00" value={seconds.padStart(2, '0')} onChange={validateSeconds} id='seconds'></input>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12 bg-light border border-dark py-3 d-flex justify-content-between align-items-center button-group ">
                    <button type="button" className="btn btn-success" disabled={activeStart} onClick={handleStart}>Start</button>
                    <button type="button" className="btn btn-danger" disabled={activeStop} onClick={handleStop}>Stop</button>
                    <button type="button" className="btn btn-warning" disabled={activeResume} onClick={handleResume}>Resume</button>
                    <button type="button" className="btn btn-dark" disabled={activeReset} onClick={handleReset}>Reset</button>
                </div>
            </div>
            <div className="row d-flex justify-center">
                <Display task={action} time={{ 'hour': hour, 'minutes': minutes, 'seconds': seconds }} />
            </div>
        </div>


    )
}

export default Timer;
