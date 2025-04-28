import React from 'react';

function LoginWithStrava() {
  const clientID = '156869'; 
  // This redirect URI needs to be URL encoded properly
  const redirectURI = encodeURIComponent('https://egeural.github.io/MyRunningApp/#/exchange_token');
  
  const stravaAuthURL = `https://www.strava.com/oauth/authorize?client_id=${clientID}&response_type=code&redirect_uri=${redirectURI}&approval_prompt=force&scope=read,activity:read`;

  return (
    <div style={{ marginTop: '2rem', textAlign: 'center', fontFamily: 'Roboto, sans-serif' }}>
      <a href={stravaAuthURL}>
        <button style={{
          padding: '1rem 2rem',
          fontSize: '16px',
          borderRadius: '8px',
          backgroundColor: '#fc4c02',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 'bold'
        }}>
          Connect with Strava
        </button>
      </a>
    </div>
  );
}

export default LoginWithStrava;