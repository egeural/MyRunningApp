import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

function ActivityChart({ data }) {
  const chartData = data.map((activity, index) => ({
    name: activity.name || `Run ${index + 1}`,
    distance: parseFloat((activity.distance / 1000).toFixed(2)) // km
  }));

  return (
    <div style={{
      marginTop: '2vmax',
      width: '100%',
      height: 320,
      fontFamily: 'Roboto, sans-serif'
    }}>
      <h3 style={{ fontFamily: 'Roboto, sans-serif' }}>📊 Distance Chart</h3>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis
            domain={[0, 'auto']}
            allowDataOverflow={false}
            tickFormatter={(tick) => `${tick} km`}
          />
          <Tooltip formatter={(value) => `${value} km`} />
          <Line
            type="monotone"
            dataKey="distance"
            stroke="#8884d8"
            strokeWidth={3}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ActivityChart;