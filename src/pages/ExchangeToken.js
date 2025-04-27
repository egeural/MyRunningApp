import React, { useEffect, useState } from 'react';
import ActivityCard from '../components/ActivityCard';
import ActivityCharts from '../components/ActivityCharts';
import Vo2Calculator from '../components/VO2Calculator';
import HeartRatePaceChart from '../components/HeartRatePaceChart';


function ExchangeToken() {
  const [athleteInfo, setAthleteInfo] = useState(null);
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState(null);
  const [showVo2Modal, setShowVo2Modal] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    console.log('Sending this code to backend:', code);

    if (code) {
      fetch('http://localhost:5000/exchange_token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.access_token) {
            console.log('🎉 Access Token:', data.access_token);
            console.log('🏃 Athlete:', data.athlete);
            setAthleteInfo(data.athlete);

            fetch('http://localhost:5000/get_activities', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ access_token: data.access_token }),
            })
              .then((res) => res.json())
              .then((activitiesData) => {
                console.log('📊 Activities:', activitiesData);
                setActivities(activitiesData);
              })
              .catch((err) => {
                console.error('Error fetching activities:', err);
                setError('Failed to fetch activities.');
              });
          }
        })
        .catch((err) => {
          console.error('Error:', err);
          setError(err.message);
        });
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
        <>
          <button
            onClick={() => setShowVo2Modal(true)}
            style={{
              marginTop: '2rem',
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              borderRadius: '8px',
              border: '1px solid #ccc',
              backgroundColor: '#f3f3f3',
              cursor: 'pointer',
            }}
          >
            🫁 Open VO₂ Max Tools
          </button>

          {showVo2Modal && (
            <div
              style={{
                position: 'fixed',
                top: '10%',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: '#fff',
                padding: '2rem',
                zIndex: 1000,
                width: '90%',
                maxWidth: '600px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                borderRadius: '12px',
                overflowY: 'auto',
                maxHeight: '80vh',
              }}
            >
              <div style={{ textAlign: 'right' }}>
                <button
                  onClick={() => setShowVo2Modal(false)}
                  style={{
                    fontSize: '1.2rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  ❌
                </button>
              </div>
              <h2>🫁 VO₂ Max Tools</h2>
              <Vo2Calculator />
            </div>
          )}

          <ActivityCharts data={activities} />

          <br />
          <br />

          <HeartRatePaceChart data={activities} />

          <br />
          <br />

          <div style={{ marginTop: '2rem' }}>
            <h3>Your Recent Activities</h3>
            {activities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        </>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default ExchangeToken;
