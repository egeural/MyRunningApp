import React from 'react';

export function Vo2Button({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        marginTop: '2rem',
        padding: '0.75rem 1.5rem',
        fontSize: '1rem',
        borderRadius: '8px',
        border: '1px solid #ccc',
        backgroundColor: '#f3f3f3',
        cursor: 'pointer',
        fontFamily: 'Roboto, sans-serif',
      }}
    >
      🫁 Open VO₂ Max Tools
    </button>
  );
}

export function RecoveryButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        marginTop: '2rem',
        padding: '0.75rem 1.5rem',
        backgroundColor: '#cce5ff',
        border: '1px solid #99ccff',
        borderRadius: '8px',
        fontSize: '1rem',
        cursor: 'pointer',
        fontFamily: 'Roboto, sans-serif',
      }}
    >
      🛌 Recovery Tips
    </button>
  );
}

export function ReferencesButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        marginTop: '1rem',
        padding: '0.75rem 1.5rem',
        backgroundColor: '#ffe5b4',
        border: '1px solid #ffc107',
        borderRadius: '8px',
        fontSize: '1rem',
        cursor: 'pointer',
        fontFamily: 'Roboto, sans-serif',
      }}
    >
      📚 References
    </button>
  );
}