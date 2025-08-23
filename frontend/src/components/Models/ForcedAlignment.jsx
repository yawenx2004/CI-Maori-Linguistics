/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './ModelStyles.scss';

export default function ForcedAlignment() {
  const [audioFile, setAudioFile] = useState(null);
  const [transcriptFile, setTranscriptFile] = useState(null);
  const [dictionaryFile, setDictionaryFile] = useState(null);

  const makeDropzone = (label, accept, file, setFile) => {
    const onDrop = ([acceptedFile]) => {
      if (acceptedFile) {
        setFile(acceptedFile);
        console.log(`${label} accepted:`, acceptedFile);
      }
    };

    const { getRootProps, getInputProps } = useDropzone({
      onDrop,
      multiple: false,
      accept,
    });

    const acceptedTypes = Object.values(accept)
      .flat()
      .join(', ');

    return (
      <div
        {...getRootProps({
          className: `dropzone-container ${file ? 'has-file' : ''}`,
        })}
        role="button"
        tabIndex={0}
      >
        <input {...getInputProps()} />
        {file ? (
          <div className="uploaded-file">
            <p>
              ✅
              {' '}
              <strong>{file.name}</strong>
            </p>
            <button
              className="remove-file"
              onClick={(e) => {
                e.stopPropagation();
                setFile(null);
              }}
            >
              ×
            </button>
          </div>
        ) : (
          <>
            <p>
              <strong>{label}</strong>
              : Drag & drop or
              {' '}
              <span className="highlight">click to browse</span>
            </p>
            <small className="accepted-types">
              Accepted:
              {' '}
              {acceptedTypes}
            </small>
          </>
        )}
      </div>
    );
  };

  const handleSubmit = () => {
    console.log('Submitting files:', {
      audio: audioFile,
      transcript: transcriptFile,
      dictionary: dictionaryFile,
    });
    // TODO
  };

  return (
    <div className="model-input bar-container">
      <div className="bar-container-title">
        <h3>Forced Alignment</h3>
      </div>

      <div className="bar-container-content">
        <p>Upload the required files for forced alignment:</p>

        {makeDropzone(
          'Audio',
          {
            'audio/wav': ['.wav'],
            'audio/mpeg': ['.mp3'],
            'video/mp4': ['.mp4'],
          },
          audioFile,
          setAudioFile,
        )}

        {makeDropzone(
          'Text',
          {
            'text/plain': ['.txt'],
          },
          transcriptFile,
          setTranscriptFile,
        )}

        {makeDropzone(
          'Optional Dictionary',
          {
            'text/plain': ['.dict', '.txt'],
          },
          dictionaryFile,
          setDictionaryFile,
        )}

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
