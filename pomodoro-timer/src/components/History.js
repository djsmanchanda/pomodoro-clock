import React, { useEffect, useState } from 'react';

const History = () => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const storedSessions = JSON.parse(localStorage.getItem('sessions')) || [];
    setSessions(storedSessions);
  }, []);

  return (
    <div>
      <h3>Session History</h3>
      <ul>
        {sessions.map((session, index) => (
          <li key={index}>{`Session on ${session.date}: ${session.duration} minutes`}</li>
        ))}
      </ul>
    </div>
  );
};

export default History;
