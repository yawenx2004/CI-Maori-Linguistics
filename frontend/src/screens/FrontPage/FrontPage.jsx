/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './FrontPageStyle.scss';

// import models & components
import ASR from '../../components/Models/ASR';
import ForcedAlignment from '../../components/Models/ForcedAlignment';
import Parser from '../../components/Models/Parser';
import SpellCheck from '../../components/Models/SpellCheck';
import TTS from '../../components/Models/TTS';
import ModelPlaceholder from '../../components/Models/ModelPlaceholder';
import BottomBar from '../../components/BottomBar/BottomBar';

function FrontPage(props) {
  const [selectedTask, setSelectedTask] = useState(null);
  const tasks = ['ASR', 'TTS', 'Parser', 'Spell Check', 'Forced Alignment'];

  return (
    <div className="front-page">
      <div className="left-bar">
        <div className="bar-container">
          <div className="bar-container-title">
            <h3>Select a task</h3>
          </div>
          <div className="task-selector">
            {tasks.map((task) => (
              <label key={task} className="task-options">
                <input
                  type="radio"
                  value={task}
                  checked={selectedTask === task}
                  onChange={() => setSelectedTask(task)}
                />
                {task}
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className="right-bar">
        {!selectedTask ? (
          <ModelPlaceholder />
        ) : (
          <>
            {selectedTask === 'ASR' && <ASR />}
            {selectedTask === 'Forced Alignment' && <ForcedAlignment />}
            {selectedTask === 'Parser' && <Parser />}
            {selectedTask === 'Spell Check' && <SpellCheck />}
            {selectedTask === 'TTS' && <TTS />}
          </>
        )}
      </div>
      <BottomBar />
    </div>
  );
}

export default FrontPage;
