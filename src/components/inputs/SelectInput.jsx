import React from 'react';
import '../styles/SelectInput.css';

export default function SelectInput({ name, label, value, onChange, error, options }) {
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="error">{error}</span>}
    </div>
  );
}
