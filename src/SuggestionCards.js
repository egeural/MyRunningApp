import React from 'react';


//NOW THIS CLASS IS EFFECTLESS
function SuggestionCards({ runData }) {
  const hrReserve = runData.maxHR - runData.restingHR;
  const intensity = (runData.avgHR - runData.restingHR) / hrReserve;

  let message = '';
  let color = '';

  if (intensity > 0.85) {
    message = "You pushed really hard — consider an easy day tomorrow.";
    color = "#ff4d4d"; 
  } else if (intensity > 0.7) {
    message = "Solid run! You're training at a good intensity.";
    color = "#f9c74f"; 
  } else {
    message = "Nice and easy — great for recovery!";
    color = "#90be6d"; 
  }

  return (
    <div style={{
      backgroundColor: color,
      padding: '1.5rem',
      borderRadius: '12px',
      color: '#222',
      maxWidth: '400px',
      margin: '2rem auto',
      boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
    }}>
      <h2>Post-Run Feedback</h2>
      <p>{message}</p>
      <p><strong>Distance:</strong> {runData.distance} km</p>
      <p><strong>Duration:</strong> {runData.duration} minutes</p>
      <p><strong>Avg HR:</strong> {runData.avgHR} bpm</p>
    </div>
  );
}

export default SuggestionCards;
