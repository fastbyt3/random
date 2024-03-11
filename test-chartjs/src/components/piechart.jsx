import React from 'react';
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import ChartDataOutLabels from '@energiency/chartjs-plugin-piechart-outlabels';

ChartJS.register(ArcElement, ChartDataOutLabels, Title, Tooltip, Legend);

const PieChart = ({ data }) => {
  const COLORS = [
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(75, 192, 192, 1)",
  ];

  const options = {
    layout: {
      padding: 75,
    },
    plugins: {
      legend: {
        display: false
      },
      outlabels: {
        backgroundColor: null,
        color: COLORS,
        stretch: 30,
        font: {
          resizable: true,
          minSize: 15,
          maxSize: 20,
        },
        zoomOutPercentage: 100,
        textAlign: 'start',
        backgroundColor: null
      },
      title: {
        display: true,
        text: 'NewRelic Alert Priority',
        padding: {
          bottom: 50,
        }
      },
    }
  };

  return (
    <div className="pie-chart-container" style={{ margin: "1rem" }}>
      <Pie
        height="480px"
        width="500px"
        data={data}
        plugins={[ChartDataLabels]}
        options={options}
      />
    </div>
  )
};

export default PieChart;