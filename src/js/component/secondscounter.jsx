import React from "react";


const SecondsCounter = ({ time }) => {
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
                        <span className="counter">{time}</span>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SecondsCounter;
