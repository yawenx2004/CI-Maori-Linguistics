/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

import TextInputForm from '../TextInputForm/TextInputForm';

export default function TTS(props) {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    console.log(text);
  };

  return (
    <div className="model-input bar-container">
      <div className="bar-container-title">
        <h3>Text to Speech</h3>
      </div>

      <div className="bar-container-content">
        <p>Enter text for speech audio:</p>
        <TextInputForm
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="button-container">
          <button
            disabled={text === ''}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
