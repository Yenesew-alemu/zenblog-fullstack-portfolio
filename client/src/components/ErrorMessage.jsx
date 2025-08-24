// /client/src/components/ErrorMessage.jsx
import React from 'react';

function ErrorMessage({ message }) {
  const errorStyle = {
    border: '1px solid #dc3545',
    color: '#dc3545',
    backgroundColor: '#f8d7da',
    padding: '15px',
    borderRadius: '5px',
    margin: '20px 0',
    textAlign: 'center',
  };

  return (
    <div style={errorStyle}>
      <p className="m-0"><strong>Error:</strong> {message || 'Something went wrong. Please try again later.'}</p>
    </div>
  );
}

export default ErrorMessage;