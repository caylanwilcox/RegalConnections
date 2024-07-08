import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import CountUp from 'react-countup';
import './css/LocalSearchesCharts.css';

Chart.register(ArcElement, Tooltip, Legend);

const statistics = [
  { id: 1, label: 'Local Searches', value: 46, total: 100, description: 'of all searches on Google are local' },
  { id: 2, label: 'Near Me Searches', value: 900, total: 1000, description: 'increase in "near me" searches' },
  { id: 3, label: 'Users Searching for Local Businesses', value: 97, total: 100, description: 'of users search for local businesses' },
  { id: 4, label: 'Calls Within One Day', value: 88, total: 100, description: 'call the business within one day' },
  { id: 5, label: 'Google Maps Users', value: 86, total: 100, description: 'of Google Maps users look for local businesses' },
  { id: 6, label: 'Mobile Device Influence', value: 1400, total: 2000, description: 'in local sales influenced by mobile devices', isMoney: true }
];

const LocalSearchesCharts = () => {
  return (
    <section className="local-searches-charts section">
      <h2>Local Searches Statistics</h2>
      <div className="grid-container">
        {statistics.map((stat) => {
          const pieData = {
            labels: [stat.label, 'Others'],
            datasets: [
              {
                data: [stat.value, stat.total - stat.value],
                backgroundColor: ['#08B2FF', '#c0c0c0'], // Blue for local search statistic, grey for others
              },
            ],
          };
          return (
            <div key={stat.id} className="grid-item">
              <Pie data={pieData} />
              <div className="countup-container">
                <CountUp start={0} end={stat.value} duration={2.75} suffix={stat.isMoney ? "B" : "%"} />
                <p>{stat.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LocalSearchesCharts;
