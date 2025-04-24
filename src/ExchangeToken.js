import React, { useEffect, useState } from 'react';

function ExchangeToken() {
  const [athleteInfo, setAthleteInfo] = useState(null);
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    console.log("Sending this code to backend:", code);

    if (code) {
      fetch('http://localhost:5000/exchange_token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code })
      })
        .then(res => res.json())
        .then(data => {
          if (data.access_token) {
            console.log('🎉 Access Token:', data.access_token);
            console.log('🏃 Athlete:', data.athlete);
            setAthleteInfo(data.athlete);

            fetch('http://localhost:5000/get_activities', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ access_token: data.access_token })
            })
              .then(res => res.json())
              .then(activitiesData => {
                console.log('📊 Activities:', activitiesData);
                setActivities(activitiesData);
              })
              .catch(err => {
                console.error('Error fetching activities:', err);
                setError('Failed to fetch activities.');
              });
          } else {
            throw new Error("Token exchange failed");
          }
        })
        .catch(err => {
          console.error('Error:', err);
          setError(err.message);
        });
    }   else {
        throw new Error("Token exchange failed");
      }
  }, []);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Connecting with Strava...</h2>

      {athleteInfo && (
        <div style={{ marginTop: '2rem' }}>
          <h3>Welcome, {athleteInfo.firstname}!</h3>
          <p>You're now connected to Strava 🧡</p>
        </div>
      )}

      {activities.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <h3>Your Recent Activities</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {activities.map(activity => (
              <li key={activity.id} style={{ marginBottom: '1rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
                <strong>{activity.name}</strong><br />
                Distance: {(activity.distance / 1000).toFixed(2)} km<br />
                Moving Time: {Math.round(activity.moving_time / 60)} min<br />
                Avg Speed: {(activity.average_speed * 3.6).toFixed(2)} km/h
              </li>
            ))}
          </ul>
        </div>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default ExchangeToken;
