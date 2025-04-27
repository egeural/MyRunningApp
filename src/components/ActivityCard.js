import React, { useState } from 'react';
import effortScale from '../photos/runLevel.webp'; 

function ActivityCard({ activity }) {
  const distanceKm = (activity.distance / 1000).toFixed(2);
  const timeMin = (activity.moving_time / 60).toFixed(2);
  const avgSpeed = (activity.average_speed * 3.6).toFixed(2);
  const pace = (timeMin / distanceKm).toFixed(2);
  const type = activity.type;
  const [showEffortModal, setShowEffortModal] = useState(false);
  const [effortLevel, setEffortLevel] = useState(null);

  const icon = type === "Run" ? "🏃‍♂️" :
               type === "Ride" ? "🚴‍♀️" :
               type === "Swim" ? "🏊‍♂️" : "🔥";

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '12px',
      padding: '1rem',
      marginBottom: '1rem',
      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
      backgroundColor: '#fff',
      textAlign: 'left',
      fontFamily: 'Roboto, sans-serif'
    }}>
      <h3>{icon} {activity.name}</h3>
      <p><strong>Distance:</strong> {distanceKm} km</p>
      <p><strong>Time:</strong> {timeMin} min</p>
      <p><strong>Avg Speed:</strong> {avgSpeed} km/h</p>
      <p><strong>Pace:</strong> {pace} min/km</p>
      <button
        onClick={() => setShowEffortModal(true)}
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#eee',
          border: '1px solid #ccc',
          borderRadius: '8px',
          cursor: 'pointer',
          fontFamily: 'Roboto, sans-serif'
        }}
      >
        Rate Effort
      </button>
      {showEffortModal && (
        <div style={{
          position: 'fixed',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#fff',
          padding: '2rem',
          zIndex: 1000,
          width: '90%',
          maxWidth: '500px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          borderRadius: '12px',
          overflowY: 'auto',
          maxHeight: '80vh',
          fontFamily: 'Roboto, sans-serif'
        }}>
          <div style={{ textAlign: 'right' }}>
            <button onClick={() => setShowEffortModal(false)} style={{
              fontSize: '1.2rem',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'Roboto, sans-serif'
            }}>
              ❌
            </button>
          </div>
          <h3>How did this run feel?</h3>
          <img src={effortScale} alt="Effort Scale" style={{ width: '100%', marginBottom: '1rem', borderRadius: '8px' }} />
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(level => (
              <button
                key={level}
                onClick={() => {
                  setEffortLevel(level);
                  setShowEffortModal(false);
                }}
                style={{
                  margin: '0.5rem',
                  padding: '0.75rem 1rem',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  fontSize: '1.1rem',
                  backgroundColor: '#f3f3f3',
                  border: '1px solid #ccc',
                  cursor: 'pointer',
                  fontFamily: 'Roboto, sans-serif'
                }}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      )}
      {effortLevel && (
        <p style={{ marginTop: '1rem', fontStyle: 'italic', fontFamily: 'Roboto, sans-serif' }}>
          Effort Level: {effortLevel}/10
        </p>
      )}
    </div>
  );
}

export default ActivityCard;