'use client'
import React from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const data = [
  { x: -5.6, y: 0 },
  { x: -4.5, y: 10 },
  { x: -3.2, y: 30 },
  { x: -2.1, y: 60 },
  { x: -1, y: 80 },
  { x: 0.5, y: 90 },
  { x: 1.8, y: 95 },
  { x: 2.9, y: 100 },
  { x: 4.4, y: 100 },
];

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    animations: {
      enabled: true,
      easing: 'easeinout',
      speed: 800,
      animateGradually: {
        enabled: true,
        delay: 150
      },
      dynamicAnimation: {
        enabled: true,
        speed: 350
      }
    }
  },
  xaxis: {
    labels: {
      formatter: (value) => `${value.toFixed(1)} Done`,
      style: {
        fontSize: '12px',
        colors: '#000',
        rotate: -45
      },
    },
    tickAmount: 10,
    min: -5.6,
    max: 4.4,
  },
  yaxis: {
    show: false,
  },
  grid: {
    show: false,
  },
};

const TaskProgressTracker = () => {
  return (
    <div className="lg:w-full w-80 lg:h-80 h-72 lg:mt-0 mb-20">
      <Chart options={options} series={[{ data: data }]} type="line" width="100%" height="100%" />
    </div>
  );
};

export default TaskProgressTracker;



