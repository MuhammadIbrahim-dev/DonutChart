import React from "react";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the necessary components
ChartJS.register(ArcElement, Tooltip, Legend);
export default function Chartjs() {
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [10, 50, 100, 150],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
            ],
            hoverOffset: 4,
            
          },
        ],
      };
    
      const options = {
        responsive: true,
        animation : {
            tension :{
                duration: 1000,
                easing : 'easeInOutBounce',
                from : 1,
                to : 0,
                loop : true,
            }
        },
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Donut Chart Example',
          },
        },
      };
      return (
        <div style={{width : '300px',height : '300px'}}>
      <Doughnut data={data} options={options}/>
</div>
);
};