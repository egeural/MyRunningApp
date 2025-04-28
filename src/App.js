import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import LoginWithStrava from './components/LoginWithStrava';
import ExchangeToken from './pages/ExchangeToken';
import runPhoto from './photos/RUNN.jpg'; 

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/exchange_token" element={<ExchangeToken />} />
        <Route path="/" element={
          <div style={{ textAlign: 'center', padding: '2rem', fontFamily: 'Roboto, sans-serif' }}>
            <h1>Welcome to Ege's Running App</h1>
            <img
              src={runPhoto}
              style={{
                maxWidth: '25%',
                borderRadius: '12px',
                marginTop: '1.5rem'
              }}
              alt="Running"
            />
            <LoginWithStrava />
          </div>
        } />
      </Routes>
    </HashRouter>
  );
}

export default App;