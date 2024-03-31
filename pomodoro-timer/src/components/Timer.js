import React, { useEffect, useState } from 'react';
import styles from '../styles/TimerDisplay.module.css'; // Updated and correct path

const Timer = () => {
  const [time, setTime] = useState(25 * 60); // Starting with 25 minutes
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          // Stop the timer at 0 to prevent negative values
          if (prevTime <= 0) {
            clearInterval(interval);
            return 0; // Keep the time fixed at 0 once it runs out
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    // Cleanup function to clear the interval when the component unmounts or the timer is paused/reset
    return () => clearInterval(interval);
  }, [isRunning]); // Removed 'time' from dependency array to avoid resetting the interval unnecessarily

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setTime(25 * 60); // Reset time to 25 minutes
    setIsRunning(false); // Ensure the timer is not running after reset
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className={styles.timer}>
        <h2 className={styles.timeDisplay}>{formatTime(time)}</h2>
        <button className={`${styles.button} ${styles.start}`} onClick={startTimer}>Start</button>
        <button className={`${styles.button} ${styles.pause}`} onClick={pauseTimer}>Pause</button>
        <button className={`${styles.button} ${styles.reset}`} onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;
