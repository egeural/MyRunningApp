import React from 'react';

function ActivityCard({ activity }) {
  const distanceKm = (activity.distance / 1000).toFixed(2);
  const timeMin = (activity.moving_time / 60).toFixed(2);
  const avgSpeed = (activity.average_speed * 3.6).toFixed(2);
  const pace = (timeMin/distanceKm ).toFixed(2);
  const type = activity.type;

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
      textAlign: 'left'
    }}>
      <h3>{icon} {activity.name}</h3>
      <p><strong>Distance:</strong> {distanceKm} km</p>
      <p><strong>Time:</strong> {timeMin} min</p>
      <p><strong>Avg Speed:</strong> {avgSpeed} km/h</p>
      <p><strong>Pace:</strong> {pace} min/km</p>
    </div>
  );
}

export default ActivityCard;
