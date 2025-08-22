import React from 'react';

export default function ModelPlaceholder(props) {
  return (
    <div className="bar-container bar-container-content">
      <p>Please select a task from the left bar to get started.</p>
      <ul>
        <li>
          <strong>ASR (Automatic Speech Recognition):</strong>
          {' '}
          Transforms a video or audio recording into a transcription of the words spoken in it
        </li>
        <li>
          <strong>TTS (Text-to-speech):</strong>
          {' '}
          Takes a written sentence and synthesizes an audio recording of its words as pronounced by an artificial voice
        </li>
        <li>
          <strong>Parser:</strong>
        </li>
        <li>
          <strong>Spell Check:</strong>
        </li>
        <li>
          <strong>Forced Alignment:</strong>
        </li>
      </ul>
      <p>
        For more detailed descriptions of each task, go to the
        {' '}
        <a href="/about">About</a>
        {' '}
        page.
      </p>
    </div>
  );
}
