import React, { useState } from 'react';
import styles from '../styles/Settings.module.css'; // Ensure CSS module is imported correctly

const Settings = ({ onSettingsChange }) => {
  // State hooks for work and break durations
  const [workDuration, setWorkDuration] = useState(10);
  const [breakDuration, setBreakDuration] = useState(5);

  // Handlers for changing work and break durations
  // Convert event value to number to ensure correct data type is maintained
  const handleWorkDurationChange = (e) => setWorkDuration(Number(e.target.value));
  const handleBreakDurationChange = (e) => setBreakDuration(Number(e.target.value));

  // Submit handler for saving settings
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Pass the updated settings back to the parent component
    // Ensure the values are passed as numbers for proper handling
    onSettingsChange({
      workDuration: Number(workDuration),
      breakDuration: Number(breakDuration)
    });
  };

  return (
    <div className={styles.settings}>
      <form onSubmit={handleSubmit}>
        <div className={styles.settingItem}>
          <label htmlFor="work-duration">Work Duration (minutes): {workDuration}</label>
          <input
            id="work-duration"
            type="range"
            min="5"
            max="15"
            value={workDuration}
            onChange={handleWorkDurationChange}
            className={styles.slider}
          />
        </div>
        <div className={styles.settingItem}>
          <label htmlFor="break-duration">Break Duration (minutes): {breakDuration}</label>
          <input
            id="break-duration"
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
