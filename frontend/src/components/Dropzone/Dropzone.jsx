/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React from 'react';
import { useDropzone } from 'react-dropzone';
import '../Models/ModelStyles.scss';

/**
 * Dropzone component
 * @param {string} label - Label to display inside the dropzone
 * @param {Object} accept - Accepted MIME types and extensions
 * @param {File|null} file - Current uploaded file
 * @param {Function} setFile - Setter for uploaded file state
 */
export default function Dropzone({
  label, accept, file, setFile,
}) {
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

  const acceptedTypes = Object.values(accept).flat().join(', ');

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
}
