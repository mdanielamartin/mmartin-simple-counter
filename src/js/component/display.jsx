import React, { useEffect, useState, useRef } from "react";


const Display = ({ task, time }) => {
    const [count, setCount] = useState({ hour: '00', minutes: '00', seconds: '00' })
    const [timeSeconds, setTimeSeconds] = useState(null)
    const intervalId = useRef(null);
    const [background, setBackground] = useState('bg-light')

    const countDown = () => {
        setTimeSeconds((prev) => {
            if (prev <= 0) {
                clearInterval(intervalId.current);
                setBackground('bg-danger');
                setTimeout(() => {
                    setBackground('bg-light')
                }, 3000)

                return 0
            }
            return prev - 1;
        })
    }
    useEffect(() => {
        if (task === 0) {
            const initSeconds = parseInt(time.hour) * 3600 + parseInt(time.minutes) * 60 + parseInt(time.seconds)
            setTimeSeconds(initSeconds);
            intervalId.current = setInterval(countDown, 1000)
        }
        if (task === 1) {
            clearInterval(intervalId.current);
        }

        if (task === 2) {
            intervalId.current = setInterval(countDown, 1000)
        }
        if (task === 3) {
            clearInterval(intervalId.current);
            setTimeSeconds(0);
        }
    }, [task])

    useEffect(() => {
        setCount({ hour: String(Math.floor(timeSeconds / 3600)).padStart(2, '0'), minutes: String(Math.floor(timeSeconds % 3600 / 60)).padStart(2, '0'), seconds: String(timeSeconds % 60).padStart(2, '0') })
    }, [timeSeconds])


    return (
        <div className={`col-12 ${background} py-3 d-flex justify-content-around`}>
            <div className="display d-flex justify-content-around">
                <div className="display-num">
                    <div>Hours</div>
                    <div>{count.hour}</div>
                </div>
                <div className="display-num">
                    <div>Minutes</div>
                    <div>{count.minutes}</div>
                </div>
                <div className="display-num">
                    <div>Seconds</div>
                    <div>{count.seconds}</div>
                </div>
            </div>
        </div>
    )
}

export default Display;
