// src/components/BusinessGrowthChart.js

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const levels = [
  { id: 1, label: 'Startup', budget: '$0 - $50k' },
  { id: 2, label: 'Small Business', budget: '$50k - $200k' },
  { id: 3, label: 'Medium Business', budget: '$200k - $500k' },
  { id: 4, label: 'Large Business', budget: '$500k - $1M' },
  { id: 5, label: 'Enterprise', budget: '$1M - $5M' },
  { id: 6, label: 'Corporation', budget: '$5M+' }
];

const BusinessGrowthChart = ({ onSelectLevel }) => {
  const data = levels.map(level => ({ name: level.label, budget: level.id }));

  const handleClick = (data) => {
    const selectedLevel = levels.find(level => level.label === data.activeLabel);
    if (selectedLevel) {
      onSelectLevel(selectedLevel);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
      <h2 style={{ fontSize: '2em', color: '#333' }}>Business Growth</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} onClick={handleClick}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="budget" fill="#7a5195" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BusinessGrowthChart;
