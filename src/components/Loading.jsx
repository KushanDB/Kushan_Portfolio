import React, { useEffect, useState } from "react";

const Loading = ({ onLoadingComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out animation after 3 seconds
    const timer = setTimeout(() => {
      setFadeOut(true);
      // Call the callback after fade animation completes
      setTimeout(() => {
        onLoadingComplete();
      }, 800);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div className={`loading-container ${fadeOut ? "fade-out" : ""}`}>
      <div className="loading-content">
        <h1 className="loading-name">
          <span className="name-part">Kushan</span>
          <span className="name-space"> </span>
          <span className="name-part">Jayathunga</span>
        </h1>
        <div className="loading-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
      <div className="loading-line"></div>
    </div>
  );
};

export default Loading;
