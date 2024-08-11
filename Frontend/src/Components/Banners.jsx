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
    <div className="bg-blue-500 text-white p-4 text-center rounded-md shadow-md">
      <p className="mb-2 text-lg">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-white hover:text-gray-200"
      >
        Click Here
      </a>
      <p className="mt-2 text-sm">{countdown} seconds left</p>
    </div>
  );
};

export default Banner;
