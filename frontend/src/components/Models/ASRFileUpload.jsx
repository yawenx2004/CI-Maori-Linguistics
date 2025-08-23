/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './ModelStyles.scss';

export default function ASRFileUpload(props) {
  const [uploadedFilename, setUploadedFilename] = useState(null);
  const [runMode, setRunMode] = useState(null);

  const onDrop = ([file]) => {
    if (file) {
      setUploadedFilename(file.name);
      console.log('Accepted file: ', file);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      'audio/wav': ['.wav'],
      'audio/mpeg': ['.mp3'],
      'video/mp4': ['.mp4'],
    },
  });

  const handleSubmit = () => {
    console.log('Submitting file: ', uploadedFilename);
    // TODO
  };

  return (
    <div className="model-selection">
      <select
        value={runMode || 'AutoSep'}
        onChange={(e) => setRunMode(e.target.value)}
      >
        <option value="autoSep">AutoSep</option>
        <option value="humanSep">HumanSep</option>
      </select>
      <p>
        Upload audio or video for transcription. We accept&nbsp;
        <strong>.wav</strong>
        ,&nbsp;
        <strong>.mp3</strong>
        , and&nbsp;
        <strong>.mp4</strong>
          &nbsp; files.
      </p>

      <div
        {...getRootProps({
          className: `dropzone-container ${uploadedFilename ? 'has-file' : ''}`,
        })}
        role="button"
        tabIndex={0}
      >
        <input {...getInputProps()} />
        {uploadedFilename ? (
          <div className="uploaded-file">
            <p>
              ✅
              {' '}
              <strong>{uploadedFilename}</strong>
            </p>
            <button
              className="remove-file"
              onClick={() => setUploadedFilename(null)}
            >
              &#xD7;
            </button>
          </div>
        ) : (
          <p>
            Drag & drop your file here or
            {' '}
            <span className="highlight">click to browse</span>
          </p>
        )}
      </div>
      <div className="button-container">
        <button onClick={handleSubmit} disabled={!uploadedFilename}>
          Submit
        </button>
      </div>
    </div>
  );
}
