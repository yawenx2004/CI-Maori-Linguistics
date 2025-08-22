import React, { useState } from 'react';
import './BottomBarStyles.scss';

export default function BottomBar(props) {
  const [showTasks, setShowTasks] = useState(false);

  return (
    <div className="bar-container bottom-bar">
      <div
        className="bar-container-title"
        onClick={() => setShowTasks((prev) => !prev)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setShowTasks((prev) => !prev)}
      >
        <h3>
          {showTasks ? '▼' : '▲'}
          {' '}
          Tasks in progress
        </h3>
      </div>
      <div className={`bar-container-content bottom-bar${showTasks ? ' open' : ''}`}>
        <p>Task 1</p>
        <p>Task 2</p>
      </div>
    </div>
  );
}
