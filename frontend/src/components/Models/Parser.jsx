/* eslint-disable no-promise-executor-return */
/* eslint-disable no-await-in-loop */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '../../utils/config';
import TextInputForm from '../TextInputForm/TextInputForm';

export default function Parser(props) {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (result) {
      console.log('Parser updated result:', result);
    }
  }, [result]);

  const handleSubmit = async () => {
    setResult(null);
    console.log('Incoming Parser request:', text);
    try {
      // start parser task
      const taskRes = await fetch(`${API_BASE_URL}/start-parser`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ args: [text] }),
      });
      const taskData = await taskRes.json();
      const taskId = taskData.parser_task_id;

      // poll status until complete
      let status = null;
      while (status !== 'SUCCESS') {
        const statusRes = await fetch(`${API_BASE_URL}/status/parser/${taskId}`);
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
      console.log('Error submitting parser task:', error);
    }
  };

  return (
    <div className="model-input bar-container">
      <div className="bar-container-title">
        <h3>Parser</h3>
      </div>

      <div className="bar-container-content">
        <p>Enter text for parsing:</p>
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
