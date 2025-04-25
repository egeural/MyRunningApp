import React, { useState } from 'react';

function VO2Calculator() {
  const [pulse, setPulse] = useState('');
  const [gender, setGender] = useState('male');
  const [hrMax, setHrMax] = useState('');
  const [hrRest, setHrRest] = useState('');
  const [result, setResult] = useState(null);
  const [showInfo, setShowInfo] = useState(false);


  const calculate = () => {
    const p = parseFloat(pulse);
    const max = parseFloat(hrMax);
    const rest = parseFloat(hrRest);

    if (isNaN(p) || isNaN(max) || isNaN(rest)) {
      alert('Please enter valid numeric values.');
      return;
    }

    // Method 1: Step Test
    let stepVo2 = 0;
    if (gender === 'male') stepVo2 = 111.33 - 0.42 * p;
    else stepVo2 = 65.81 - 0.1847 * p;

    // Method 2: HRmax / HRrest
    const ratio = max / rest;
    const hrVo2 = 15 * ratio;

    setResult({
      stepVo2: stepVo2.toFixed(2),
      hrVo2: hrVo2.toFixed(2)
    });
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>🫁 VO₂ Max Estimator (Step Test vs HR Method)</h2>

      <div style={{ margin: '1rem 0' }}>
        <label>Step Test Pulse (1-min post 3min stepping): </label><br />
        <input value={pulse} onChange={(e) => setPulse(e.target.value)} type="number" />
      </div>

            <button
        onClick={() => setShowInfo(true)}
        style={{
          marginTop: '0.5rem',
          fontSize: '0.9rem',
          padding: '0.4rem 0.8rem',
          cursor: 'pointer'
        }}
      >
        What is the Step Test?
      </button>

      {showInfo && (
        <div style={{
          position: 'fixed',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'white',
          border: '1px solid #ccc',
          borderRadius: '10px',
          padding: '1.5rem',
          zIndex: 999,
          maxWidth: '400px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
        }}>
          <h4>🪜 Step Test Instructions</h4>
          <p style={{ fontSize: '0.95rem', textAlign: 'left' }}>
            1. Use a 12-inch (30 cm) high step or platform. <br />
            2. Step up and down at a consistent pace (24 steps/minute) for exactly 3 minutes. <br />
            3. Sit down immediately after. <br />
            4. Count your pulse for 1 minute, starting within 5 seconds of finishing. <br />
            5. Enter that value as your “Step Test Pulse.”
          </p>
          <button
            onClick={() => setShowInfo(false)}
            style={{
              marginTop: '1rem',
              backgroundColor: '#eee',
              padding: '0.5rem 1rem',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Got it!
          </button>
        </div>
      )}


      <div style={{ margin: '1rem 0' }}>
        <label>Gender: </label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <hr />

      <div style={{ margin: '1rem 0' }}>
        <label>HRmax (Your max heart rate during a workout): </label><br />
        <input value={hrMax} onChange={(e) => setHrMax(e.target.value)} type="number" />
      </div>

      <div style={{ margin: '1rem 0' }}>
        <label>HRrest (Your resting heart rate): </label><br />
        <input value={hrRest} onChange={(e) => setHrRest(e.target.value)} type="number" />
      </div>

      <button onClick={calculate} style={{ marginTop: '1rem', padding: '0.75rem 1.5rem' }}>
        Compare VO₂ max
      </button>

      {result && (
        <div style={{ marginTop: '2rem' }}>
          <h3>📊 Results:</h3>
          <p><strong>Step Test VO₂ max:</strong> {result.stepVo2} mL/kg/min</p>
          <p><strong>HR Formula VO₂ max:</strong> {result.hrVo2} mL/kg/min</p>

          <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
            Comparing these methods helps you understand your aerobic fitness from both a recovery and physiological stress perspective.
          </p>
        </div>
      )}
    </div>
  );
}

export default VO2Calculator;
