import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";

// Register necessary components for ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SalesOverview = () => {
  const dataset = [
    {
      london: 152,
      paris: 300,
      month: "Mon",
    },
    {
      london: 200,
      paris: 350,

      month: "Tue",
    },
    {
      london: 110,
      paris: 305,

      month: "Wed",
    },
    {
      london: 289,
      paris: 100,

      month: "Thu",
    },
    {
      london: 57,
      paris: 69,

      month: "Fry",
    },
    {
      london: 60,
      paris: 63,

      month: "Sat",
    },
  ];

  const chart = {
    yAxis: [
      {
        label: "rainfall (mm)",
      },
    ],
    width: 600,
    height: 450,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: "translate(-20px, 0)",
      },
    },
  };

  const valueFormatter = (value) => `${value}mm`;

  return (
    <div className="ml-4 mr-8">
      <BarChart
        borderRadius={13}
        dataset={dataset}
        xAxis={[{ scaleType: "band", dataKey: "month" }]}
        series={[
          { dataKey: "london", label: "London", valueFormatter },
          { dataKey: "paris", label: "Paris", valueFormatter },
          { dataKey: "newYork", label: "New York", valueFormatter },
          { dataKey: "seoul", label: "Seoul", valueFormatter },
        ]}
        {...chart}
      />
    </div>
  );
};

export default SalesOverview;
