import React, { useState } from 'react';
import LoopingText from './components/LoopingText';
import Settings from './components/Settings';
import Timer from './components/Timer';
 

function App() {
  // State for work and break durations
  const [workDuration, setWorkDuration] = useState(10);
  const [breakDuration, setBreakDuration] = useState(5);

  // Handler for settings change
  const onSettingsChange = (settings) => {
    setWorkDuration(settings.workDuration);
    setBreakDuration(settings.breakDuration);
  };

  return (
    <div className="App">
      <h1>Pomodoro Timer</h1>
      <Settings onSettingsChange={onSettingsChange} />
      <Timer workDuration={workDuration} breakDuration={breakDuration} />
      
      <LoopingText text="inserting AI task here...." />

    </div>
  );
}

export default App;
