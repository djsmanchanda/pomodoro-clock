// ProgressBar.js
import React from 'react';
import styles from '../styles/ProgressBar.module.css';

const ProgressBar = ({ currentTime, totalDuration }) => {
    // Calculate progress as a percentage
    const progress = ((totalDuration - currentTime) / totalDuration) * 100;

    return (
        <div className={styles.progressBarContainer}>
            <div className={styles.progressBar} style={{ width: `${progress}%` }}></div>
        </div>
    );
};

export default ProgressBar;
