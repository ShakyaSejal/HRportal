import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

const Line = () => {
  const chartConfig = {
    width: 300,
    height: 200,
  xAxis: [
  {
    data: [1, 2, 3, 5, 8, 10],
    axisLine: false, // Hide the x-axis line
    axisBorder: false, // Hide the x-axis border
    tickSize: 0, // Remove ticks
    label: '', // Optionally remove the label if not needed
  },
],
yAxis: [
  {
    axisLine: false, // Hide the y-axis line
    axisBorder: false, // Hide the y-axis border
    tickSize: 0, // Remove ticks
    label: '', // Optionally remove the label if not needed
  },
],

   
    sx: {
      [`.${axisClasses.left}, .${axisClasses.bottom}`]: {
        border: 'none', // Remove the additional border around axes
        padding: 0, // Remove padding
        margin: 0, // Remove margins
      },
      [`.${axisClasses.left}`]: {
        transform: 'translateX(-1px)', // Adjust x-axis to touch the left border
      },
      [`.${axisClasses.bottom}`]: {
        transform: 'translateY(-1px)', // Adjust y-axis to touch the bottom border
      },
    },
    margin: { top: 0, right: 0, bottom: 0, left: 0 }, // No margins around the chart
    grid: { top: 0, right: 0, bottom: 0, left: 0 }, // No grid padding
  };

  return (
    <LineChart
      {...chartConfig}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          color: 'blue', // Line color
        },
      ]}
    />
  );
};

export default Line;
