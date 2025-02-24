import React, { useState } from 'react';
import Form from './components/Form';
import ProgressBar from './components/ProgressBar';
import SuccessMessage from './components/SuccessMessage';
import './components/styles/App.css';

export default function App() {
  const [progress, setProgress] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleProgress = (newProgress) => {
    setProgress(newProgress);
  };

  const handleSuccess = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <div className="App">
      <ProgressBar progress={progress} />
      <Form onProgress={handleProgress} onSuccess={handleSuccess} />
      {showSuccess && <SuccessMessage />}
    </div>
  );
}