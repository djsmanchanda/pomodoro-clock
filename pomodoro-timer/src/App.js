import React from 'react';
import History from './components/History'; // Optional
import ProgressBar from './components/ProgressBar';
import SessionCounter from './components/SessionCounter';
import Settings from './components/Settings';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <h1>Pomodoro Timer</h1>
      <Settings />
      <Timer />
      <ProgressBar progress={50} /> {/* Example progress */}
      <SessionCounter sessionsCompleted={3} />
      <History /> {/* Optional */}
    </div>
  );
}

export default App;
