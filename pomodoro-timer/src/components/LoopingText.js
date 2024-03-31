// LoopingText.js
import React, { useEffect, useState } from 'react';

const LoopingText = ({ text }) => {
  const [loopedText, setLoopedText] = useState('');
  const [direction, setDirection] = useState(1); // Direction of the loop (1: increasing, -1: decreasing)
  const [length, setLength] = useState(1); // Length of the loop

  useEffect(() => {
    const interval = setInterval(() => {
      if (loopedText.length === text.length-1) {
        setDirection(-1); // Change direction to decrease length
      } else if (loopedText.length === 23) {
        setDirection(1); // Change direction to increase length
      }

      if (direction === 1) {
        setLoopedText((prevLoopedText) => prevLoopedText + text[prevLoopedText.length]);
      } else {
        setLoopedText((prevLoopedText) => prevLoopedText.slice(0, -1));
      }
    }, 350); // Adjust the interval duration as needed

    return () => clearInterval(interval);
  }, [loopedText, text, direction]);

  return <h3>{loopedText}</h3>;
};

export default LoopingText;
