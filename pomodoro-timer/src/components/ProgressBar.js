import React from 'react';

const ProgressBar = ({ progress }) => {
  const progressBarStyle = {
    width: `${progress}%`,
    height: '20px',
    backgroundColor: 'green',
  };

  return (
    <div style={{ width: '100%', backgroundColor: '#ddd' }}>
      <div style={progressBarStyle}></div>
    </div>
  );
};

export default ProgressBar;
