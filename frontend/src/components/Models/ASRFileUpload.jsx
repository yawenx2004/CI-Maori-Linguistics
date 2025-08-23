/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import Dropzone from '../Dropzone/Dropzone';
import './ModelStyles.scss';

export default function ASRFileUpload() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [runMode, setRunMode] = useState('AutoSep');

  const handleSubmit = () => {
    console.log('Submitting file:', uploadedFile);
    // TODO: send file for processing
  };

  return (
    <div className="model-selection">
      <select
        value={runMode}
        onChange={(e) => setRunMode(e.target.value)}
      >
        <option value="autoSep">AutoSep</option>
        <option value="humanSep">HumanSep</option>
      </select>

      <p>
        Upload audio or video for transcription. We accept
        {' '}
        <strong>.wav</strong>
        ,
        <strong>.mp3</strong>
        , and
        <strong>.mp4</strong>
        {' '}
        files.
      </p>

      <Dropzone
        label="Audio / Video"
        accept={{
          'audio/wav': ['.wav'],
          'audio/mpeg': ['.mp3'],
          'video/mp4': ['.mp4'],
        }}
        file={uploadedFile}
        setFile={setUploadedFile}
      />

      <div className="button-container">
        <button onClick={handleSubmit} disabled={!uploadedFile}>
          Submit
        </button>
      </div>
    </div>
  );
}
