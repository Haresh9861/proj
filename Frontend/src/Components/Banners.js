import React, { useState, useEffect } from 'react';

const Banner = ({ description, link, timeLeft, isVisible }) => {
  const [countdown, setCountdown] = useState(timeLeft);

  useEffect(() => {
    if (isVisible && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isVisible, countdown]);

  if (!isVisible || countdown <= 0) return null;

  return (
    <div className="banner">
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Click Here</a>
      <p>{countdown} seconds left</p>
    </div>
  );
};

export default Banner;
