/* eslint-disable react/prop-types */
import React from 'react';
import './TextInputFormStyles.scss';

export default function TextInputForm({
  placeholder = 'Type something...',
  value,
  onChange,
}) {
  return (
    <div>
      <textarea
        className="text-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
