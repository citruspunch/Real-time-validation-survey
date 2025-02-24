import React from 'react';
import '../styles/CheckboxInput.css';

export default function CheckboxInput({ name, label, checked, onChange, error }) {
  return (
    <div className="input-group">
      <label htmlFor={name}>
        <input
          type="checkbox"
          id={name}
          name={name}
          checked={checked}
          onChange={onChange}
        />
        {label}
      </label>
      {error && <span className="error">{error}</span>}
    </div>
  );
}