import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function HeartRatePaceChart({ data }) {
  // Convert activities into { pace, avgHR } points
  const chartData = data
    .filter(activity => activity.average_speed && activity.average_heartrate) // only valid entries
    .map(activity => {
      const paceInMinPerKm = (1000 / activity.average_speed) / 60; // converting m/s to min/km
      return {
        pace: parseFloat(paceInMinPerKm.toFixed(2)), 
        heartRate: activity.average_heartrate
      };
    });

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3>❤️ Heart Rate vs 🏃 Pace</h3>
      <ResponsiveContainer width="100%" height={400}>
  <ScatterChart>
    <CartesianGrid />
    <XAxis 
      dataKey="pace" 
      name="Pace (min/km)" 
      reversed 
      label={{ value: 'Pace (min/km)', position: 'insideBottom', offset: -10 }}
    />
    <YAxis 
      dataKey="heartRate" 
      name="Heart Rate (bpm)" 
      label={{ value: 'Heart Rate (bpm)', angle: -90, position: 'insideLeft' }}
    />
    <Tooltip content={({ active, payload }) => {
      if (active && payload && payload.length) {
        const dataPoint = payload[0].payload;
        return (
          <div style={{
            backgroundColor: 'white',
            border: '1px solid #ccc',
            padding: '0.75rem',
            borderRadius: '8px',
            fontSize: '0.9rem'
          }}>
            <p><strong>Pace (min/km):</strong> {dataPoint.pace}</p>
            <p><strong>Heart Rate (bpm):</strong> {dataPoint.heartRate}</p>
            <p><strong>Zone:</strong> {getHeartRateZone(dataPoint.heartRate)}</p>
          </div>
        );
      }
      return null;
    }} />
    <Scatter name="Runs" data={chartData} fill="#82ca9d" />
  </ScatterChart>
</ResponsiveContainer>

    </div>
  );
}

export default HeartRatePaceChart;



function getHeartRateZone(hr) {
    if (hr < 120) return 'Zone 1 - Recovery';
    if (hr < 140) return 'Zone 2 - Endurance';
    if (hr < 160) return 'Zone 3 - Tempo';
    if (hr < 180) return 'Zone 4 - Threshold';
    return 'Zone 5 - VO₂ Max';
  }
  