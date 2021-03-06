import React from 'react'
import './components.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const Timer = (props) => {

    return (
        <div className="timer">
            <CountdownCircleTimer
                isPlaying
                duration={props.duration * 60}
                colors={[
                ['#004777', 0.33],
                ['#F7B801', 0.33],
                ['#A30000', 0.33],
                ]}
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}

export default Timer
