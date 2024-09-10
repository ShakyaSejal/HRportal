import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

// Register necessary components for ChartJS
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SalesOverview = () => {
  
  const dataset = [
    {
      london: 59,
      paris: 57,
      
      month: 'Jan',
    },
    {
      london: 50,
      paris: 52,
     
      month: 'Feb',
    },
    {
      london: 47,
      paris: 53,
     
      month: 'Mar',
    },
    {
      london: 54,
      paris: 56,
     
      month: 'Apr',
    },
    {
      london: 57,
      paris: 69,
    
      month: 'May',
    },
    {
      london: 60,
      paris: 63,
    
      month: 'June',
    },
  
  ];
  

const chart = {
  yAxis: [
    {
      label: 'rainfall (mm)',
    },
  ],
  width: 600,
  height: 450,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  } 
}


const valueFormatter = (value) => `${value}mm`;


  return (
   <div className='ml-4 mr-8'>
     <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        { dataKey: 'london', label: 'London', valueFormatter },
        { dataKey: 'paris', label: 'Paris', valueFormatter },
        { dataKey: 'newYork', label: 'New York', valueFormatter },
        { dataKey: 'seoul', label: 'Seoul', valueFormatter },
      ]}
      {...chart}
    />
   </div>
  );

}

export default SalesOverview;
