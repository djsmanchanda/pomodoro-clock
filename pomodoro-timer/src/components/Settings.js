import React, { useState } from 'react';

const Settings = ({ onSettingsChange }) => {
  const [workDuration, setWorkDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSettingsChange({ workDuration, breakDuration });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Work Duration (minutes):</label>
        <input
          type="number"
          value={workDuration}
          onChange={(e) => setWorkDuration(e.target.value)}
        />
      </div>
      <div>
        <label>Break Duration (minutes):</label>
        <input
          type="number"
          value={breakDuration}
          onChange={(e) => setBreakDuration(e.target.value)}
        />
      </div>
      <button type="submit">Save Settings</button>
    </form>
  );
};

export default Settings;
