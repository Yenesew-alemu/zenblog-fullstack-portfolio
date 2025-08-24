// /client/src/components/LoadingSpinner.jsx
import React from 'react';

function LoadingSpinner() {
  const spinnerStyle = {
    border: '4px solid rgba(0, 0, 0, 0.1)',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    borderLeftColor: '#0d6efd', // Or your template's accent color
    animation: 'spin 1s ease infinite',
    margin: '50px auto',
  };

  const keyframes = `
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div style={spinnerStyle}></div>
    </>
  );
}

export default LoadingSpinner;