import React, { useEffect, useState } from 'react';
import styles from '../styles/Timer.module.css';
import ProgressBar from './ProgressBar';

const Timer = ({ workDuration }) => {
    const [time, setTime] = useState(workDuration * 60);
    const [isActive, setIsActive] = useState(false); // To track if the timer is active

    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime > 0 ? prevTime - 1 : 0);
            }, 1000); // Set interval to fire every 1000ms (1 second)
        } else {
            clearInterval(interval);
        }

        // Clear interval on component unmount to prevent memory leaks
        return () => clearInterval(interval);
    }, [isActive, time]);

    // Function to format time to MM:SS
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className={styles.timer}>
            <ProgressBar currentTime={time} totalDuration={workDuration * 60} />
            <h2>{formatTime(time)}</h2>
            <button onClick={() => setIsActive(!isActive)} className={styles.button}>
                {isActive ? 'Pause' : 'Start'}
            </button>
            <button onClick={() => { setTime(workDuration * 60); setIsActive(false); }} className={styles.button}>
                Reset
            </button>
        </div>
    );
};

export default Timer;
