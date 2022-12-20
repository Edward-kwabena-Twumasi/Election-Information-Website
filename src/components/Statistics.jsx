import React, { Component } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut,Pie,Bar } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const Statistics =()=> {

		
		 const data = {
			labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
			datasets: [
			  {
				label: '# of Votes',
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: [
				  'rgba(255, 99, 132, 0.2)',
				  'rgba(54, 162, 235, 0.2)',
				  'rgba(255, 206, 86, 0.2)',
				  'rgba(75, 192, 192, 0.2)',
				  'rgba(153, 102, 255, 0.2)',
				  'rgba(255, 159, 64, 0.2)',
				],
				borderColor: [
				  'rgba(255, 99, 132, 1)',
				  'rgba(54, 162, 235, 1)',
				  'rgba(255, 206, 86, 1)',
				  'rgba(75, 192, 192, 1)',
				  'rgba(153, 102, 255, 1)',
				  'rgba(255, 159, 64, 1)',
				],
				borderWidth: 1,
			  },
			],
		  };
		 const options={
			plugins: {
			  title: {
				display: true,
				text: "Doughnut chart"
			  }
			}
		  };
		return (

            <div className='bg-white flex flex-col justify-center h-screen p-10 gap-6'>
                <h1 className='font-bold font-serif text-3xl uppercase text-center m-6 self-start'>Statistics</h1>
				
				<div className='grid grid-cols-2 m-3 p-2 divide-x-2 rounded-l-xl shadow-2xl h-[400px]'>
			  		
				<Doughnut data={data} options={options} height="100px" width="100px"/>
				
							
				<Pie data={data} options={options} height="100px" width="100px"/>
				

				</div>
					
               
         </div>
        
		);
	}

export default Statistics;                        