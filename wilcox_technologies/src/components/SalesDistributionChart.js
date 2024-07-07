// src/components/SalesDistributionChart.js

import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const SalesDistributionChart = ({ webSales, socialMediaSales, walkinSales }) => {
  const data = [
    { name: 'Web Sales', value: webSales },
    { name: 'Social Media Sales', value: socialMediaSales },
    { name: 'Walk-in Sales', value: walkinSales }
  ];

  const COLORS = ['#003f5c', '#58508d', '#bc5090'];

  return (
    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
      <h2 style={{ fontSize: '2em', color: '#333' }}>Sales Distribution</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value" label>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesDistributionChart;
