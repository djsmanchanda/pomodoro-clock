import React, { useState } from 'react';
import styles from '../styles/Settings.module.css'; // Make sure to create and import your CSS module for styling

const Settings = ({ onSettingsChange }) => {
  const [workDuration, setWorkDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);

  const handleWorkDurationChange = (e) => setWorkDuration(e.target.value);
  const handleBreakDurationChange = (e) => setBreakDuration(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSettingsChange({ workDuration, breakDuration });
  };

  return (
    <div className={styles.settings}>
      <form onSubmit={handleSubmit}>
        <div className={styles.settingItem}>
          <label>Work Duration (minutes): {workDuration}</label>
          <input
            type="range"
            min="15"
            max="30"
            value={workDuration}
            onChange={handleWorkDurationChange}
            className={styles.slider}
          />
        </div>
        <div className={styles.settingItem}>
          <label>Break Duration (minutes): {breakDuration}</label>
          <input
            type="range"
            min="1"
            max="15"
            value={breakDuration}
            onChange={handleBreakDurationChange}
            className={styles.slider}
          />
        </div>
        <button type="submit" className={styles.button}>Save Settings</button>
      </form>
    </div>
  );
};

export default Settings;
