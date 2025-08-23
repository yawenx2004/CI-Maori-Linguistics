/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import Dropzone from '../Dropzone/Dropzone';

export default function ForcedAlignment() {
  const [audioFile, setAudioFile] = useState(null);
  const [transcriptFile, setTranscriptFile] = useState(null);
  const [dictionaryFile, setDictionaryFile] = useState(null);

  const handleSubmit = () => {
    console.log('Submitting files:', { audioFile, transcriptFile, dictionaryFile });
  };

  return (
    <div className="model-input bar-container">
      <div className="bar-container-title">
        <h3>Forced Alignment</h3>
      </div>

      <div className="bar-container-content">
        <p>Submit XXX files to do forced alignment.</p>
        <Dropzone
          label="Audio"
          accept={{
            'audio/wav': ['.wav'],
            'audio/mpeg': ['.mp3'],
            'video/mp4': ['.mp4'],
          }}
          file={audioFile}
          setFile={setAudioFile}
        />

        <Dropzone
          label="Text"
          accept={{ 'text/plain': ['.txt'] }}
          file={transcriptFile}
          setFile={setTranscriptFile}
        />

        <Dropzone
          label="Optional Dictionary"
          accept={{ 'text/plain': ['.dict', '.txt'] }}
          file={dictionaryFile}
          setFile={setDictionaryFile}
        />

        <div className="button-container">
          <button
            onClick={handleSubmit}
            disabled={!audioFile || !transcriptFile}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
