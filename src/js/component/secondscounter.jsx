import React, { useState, useEffect } from "react";


const SecondsCounter = ({ time }) => {

    const [counterDisplay, setDisplay] = useState(time.toString().padStart(6, '0').split(''))

    useEffect(() => {
        setDisplay(time.toString().padStart(6, '0').split(''))
    }, [time])

    return (
        <div>
            <div className="jumbotron bg-dark">
                <div className="row d-flex pt-4">
                    <div className="col d-flex justify-content-center"><h1 className="title text-light">Elapsed Time</h1></div></div>
                <div className="row d-flex ">
                    <div className="col d-flex justify-content-center">
                        <span className="material-symbols-outlined">
                            schedule
                        </span>
                        <span className="counter">
                            {counterDisplay.map((digit, index) => {
                                return <div key={index} className="digit">{digit}</div>
                            })}
                        </span>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SecondsCounter;
