/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import './ModelStyles.scss';

import ASRFileUpload from './ASRFileUpload';
import ASRRecordAudio from './ASRRecordAudio';

export default function ASR(props) {
  const [inputType, setInputType] = useState(null);

  return (
    <div className="model-input bar-container">
      <div className="bar-container-title">
        <h3>Automatic Speech Recognition</h3>
      </div>

      <div className="bar-container-content">
        <p>ASR transforms a video or audio recording into a transcription of the words spoken in it.</p>

        <select
          value={inputType || ''}
          onChange={(e) => setInputType(e.target.value)}
          required
        >
          <option value="" disabled>
            Select input type
          </option>
          <option value="fileUpload">File upload</option>
          <option value="recordAudio">Record audio</option>
        </select>

        {inputType === null ? (
          <p>Please select an input type above to proceed.</p>
        ) : (
          inputType === 'fileUpload' ? (
            <ASRFileUpload />
          ) : (
            <ASRRecordAudio />
          )
        )}
      </div>
    </div>
  );
}
