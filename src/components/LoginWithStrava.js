import React from 'react';


// THE STRAVA CONNECTION
function LoginWithStrava() {
  const clientID = '156869'; 
  const redirectURI = 'http://localhost:3000/exchange_token';

  const stravaAuthURL = `https://www.strava.com/oauth/authorize?client_id=${clientID}&response_type=code&redirect_uri=${redirectURI}&approval_prompt=force&scope=read,activity:read`;

  return (
    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
      <a href={stravaAuthURL}>
        <button style={{
          padding: '1rem 2rem',
          fontSize: '16px',
          borderRadius: '8px',
          backgroundColor: '#fc4c02',
          color: 'black',
          border: 'none',
          cursor: 'pointer'
        }}>
          Connect with Strava
        </button>
      </a>
    </div>
  );
}

export default LoginWithStrava;
