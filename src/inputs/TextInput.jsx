import React from 'react';
import './styles/TextInput.css';

export default function TextInput({ name, label, value, onChange, error }) {
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
}
