import React from 'react';
import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	LineElement, // whatever element you are trying to install, if you want a arcchart you would type ArcElement
	CategoryScale,
	LinearScale, // y axis
	PointElement,
	Legend,
	Tooltip
} from 'chart.js';

ChartJS.register(
	LineElement,
	CategoryScale, 
	LinearScale, 
	PointElement,
	Legend,
	Tooltip
)

const LineGraph = () => {
    const config = {
		labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		datasets: [
			{
				/* 
					if we want curve or no curve. if we want curve we can specify or take it off (it will auto do curves)
					if we want no curves (straight lines), set tension to 0.0
				*/

				label: 'Sales of the week',
				data: [1200, 1600, 1400, 0, 500],
				backgroundColor: 'blue',
				borderColor: 'blue',
				pointBorderColor: 'blue',
				fill: "true",
				tension: 0.0 
			},
			{
				label: 'Sales of the week',
				data: [1500, 1200, 1100], // going to have to pull the information here
				backgroundColor: 'red',
				borderColor: 'red',
				pointBorderColor: 'red',
				displayColors: "true",

				tension: 0.2
			},
		],
		tooltips: {
      	backgroundColor: 'transparent',
        displayColors: false
		},
		scales: {
            xAxes: [{
				display: false
			}]
		}

	}

	const options = {
		plugins: {
			legend: true
		},
		scales: {
			y:{
				min: 0,
			},
			
		}
    }
    
    // weird behavior, i tried adding a class to the parent div to edit the size dimensions and it didnt want to work
	// it accepted the inline css. must fix

    return (
        <div>
			<div style={{
				width: "40rem",
                margin: 'auto',
                backgroundColor: '#192027'
			}}> 
				<Line
					data={config}
					options={options}
				/>
			</div>
		</div>

    )
}
export default LineGraph;