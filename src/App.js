import React from 'react';
import LoginWithStrava from './components/LoginWithStrava';
import ExchangeToken from './pages/ExchangeToken';
import runPhoto from './photos/RUNN.jpg'; 

function App() {
  const path = window.location.pathname;

  if (path === '/exchange_token') {
    return <ExchangeToken />;
  }

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Welcome to Ege's Running App</h1>
      <img
        src={runPhoto}
        style={{
          maxWidth: '25%',
          borderRadius: '12px',
          marginTop: '1.5rem'
        }}
      />
      <LoginWithStrava />
    </div>
  );
}

export default App;
