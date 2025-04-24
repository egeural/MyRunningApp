import React from 'react';
import LoginWithStrava from './LoginWithStrava';
import ExchangeToken from './ExchangeToken';

function App() {
  const path = window.location.pathname;

  if (path === '/exchange_token') {
    return <ExchangeToken />;
  }

  return (
    <div>
      <h1>Welcome to Ege's Running App</h1>
      <LoginWithStrava />
    </div>
  );
}

export default App;
