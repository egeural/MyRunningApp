import React, { useEffect, useState } from 'react';
import ActivityCard from '../components/ActivityCard';
import ActivityCharts from '../components/ActivityCharts';
import Vo2Calculator from '../components/VO2Calculator';
import HeartRatePaceChart from '../components/HeartRatePaceChart';
import { Vo2Button, RecoveryButton, ReferencesButton } from '../components/Buttons';

function ExchangeToken() {
  const [athleteInfo, setAthleteInfo] = useState(null);
  const [activities, setActivities] = useState([]);
  const [showVo2Modal, setShowVo2Modal] = useState(false);
  const [showRecoveryModal, setShowRecoveryModal] = useState(false);
  const [showReferencesModal, setShowReferencesModal] = useState(false);

  useEffect(() => {
    // For hash router, we need to parse after the # symbol
    const hashParams = new URLSearchParams(window.location.hash.substring(window.location.hash.indexOf('?')));
    const code = hashParams.get('code');
    
    console.log('Extracted auth code:', code);
  
    if (code) {
      fetch('https://myrunningapp.onrender.com/exchange_token', {  // Added /exchange_token endpoint
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.access_token) {
            setAthleteInfo(data.athlete);
  
            fetch('https://myrunningapp.onrender.com/get_activities', {  // Changed to Render URL instead of localhost
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ access_token: data.access_token }),
            })
              .then((res) => res.json())
              .then((activitiesData) => setActivities(activitiesData));
          }
        });
    }
  }, []);

  return (
    <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'Roboto, sans-serif' }}>
      <h2>Connecting with Strava...</h2>

      {athleteInfo && (
        <div style={{ marginTop: '2rem' }}>
          <h3>Welcome, {athleteInfo.firstname}!</h3>
          <p>You're now connected to Strava 🧡</p>
        </div>
      )}

      {activities.length > 0 && (
        <>
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
          <Vo2Button onClick={() => setShowVo2Modal(true)} />
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
          <br />
          <br />
          <RecoveryButton onClick={() => setShowRecoveryModal(true)} />
          {showRecoveryModal && (
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
                  onClick={() => setShowRecoveryModal(false)}
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
              <h2>🛌 Top Recovery Tips</h2>
              <ul style={{ textAlign: 'left', marginTop: '1rem', lineHeight: '1.6' }}>
                <li>Rehydrate and refuel immediately after runs.</li>
                <li>Prioritize sleep for body healing.</li>
                <li>Do light activities like walks or easy spins.</li>
                <li>Stretch or practice yoga regularly.</li>
                <li>Use foam rolling or massages.</li>
                <li>Take rest days seriously.</li>
                <li>Monitor fatigue levels and adjust training.</li>
                <li>Maintain a healthy, balanced diet.</li>
                <li>Include low-impact cross-training (cycling, swimming).</li>
                <li>Always listen to your body signals!</li>
              </ul>
            </div>
          )}
          <br />
          <br />
          <ReferencesButton onClick={() => setShowReferencesModal(true)} />
          {showReferencesModal && (
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
                  onClick={() => setShowReferencesModal(false)}
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
              <h2>📚 References</h2>
              <ul style={{ textAlign: 'left', marginTop: '1rem', lineHeight: '1.6' }}>
                <li>
                  Essentials of Exercise Physiology (Katch et al., 2011) — Used for VO₂ Max estimation and Step Test methods.
                </li>
                <li>
                  Pace and Heart Rate Study (Zuniga et al., 2012) — Used for understanding heart rate vs pace relationship.
                </li>
                <li>
                  <a
                    href="https://run4prs.co/2017/04/03/effort-based-running-dont-let-your-watch-rule-your-run/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Run4PRs Coaching: Effort Based Running
                  </a>{' '}
                  — Used for Effort Level scale.
                </li>
                <li>
                  <a
                    href="https://stories.strava.com/articles/top-10-recovery-tips-for-runners"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Strava Stories: Top 10 Recovery Tips for Runners
                  </a>{' '}
                  — Used for Recovery advice.
                </li>
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default ExchangeToken;
