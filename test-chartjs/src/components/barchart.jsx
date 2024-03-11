import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const BarChart = ({ data, additionalConfig }) => {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Alerts Status',
      },
    },
    ...additionalConfig,
  };

  return (
    <div className="bar-chart-container" style={{ margin: "1.5rem 1rem", width: "50rem" }}>
      <Bar
        data={data}
        options={options}
      />
    </div>
  )
};

export default BarChart;