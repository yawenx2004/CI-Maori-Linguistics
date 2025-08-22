/* eslint-disable no-promise-executor-return */
/* eslint-disable no-await-in-loop */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '../../utils/config';
import TextInputForm from '../TextInputForm/TextInputForm';

export default function TTS(props) {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (result) {
      console.log('TTS updated result:', result);
    }
  }, [result]);

  const handleSubmit = async () => {
    setResult(null);
    console.log('Incoming TTS request:', text);
    try {
      // start TTS task
      const taskRes = await fetch(`${API_BASE_URL}/start-tts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ args: [text] }),
      });
      const taskData = await taskRes.json();
      const taskId = taskData.tts_task_id;

      // poll status until complete
      let status = null;
      while (status !== 'SUCCESS') {
        const statusRes = await fetch(`${API_BASE_URL}/status/tts/${taskId}`);
        const statusData = await statusRes.json();
        status = statusData.status;

        if (status === 'SUCCESS') {
          setResult(statusData.result);
          setText('');
          break;
        }

        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    } catch (error) {
      console.log('Error submitting TTS task:', error);
    }
  };

  return (
    <div className="model-input bar-container">
      <div className="bar-container-title">
        <h3>Text to Speech</h3>
      </div>

      <div className="bar-container-content">
        <p>Enter text for speech audio:</p>
        <p>XXX describe constraints of text file; also right now it just inverts the text for you & logs it in the console.</p>
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
