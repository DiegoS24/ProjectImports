import {
	Chart as ChartJS,
	BarElement, // whatever element you are trying to install, if you want a arcchart you would type ArcElement
	CategoryScale,
	LinearScale, // y axis
	Tooltip,
	Legend
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
	BarElement,
	CategoryScale,
	LinearScale, // y axis
	Tooltip,
	Legend
)

const BarChart = () => {
  const data = {
		labels: ['Monday', 'Tuesday', 'Wednesday'],
		datasets: [
			{
				label: '369',
				data: [3, 6, 9],
				backgroundColor: 'aqua',
				borderColor: 'black',
				borderWidth: 1
			},
			{
				label: '333',
				data: [3, 3, 3],
				backgroundColor: 'red',
				borderColor: 'black',
				borderWidth: 1
			}
		]
	}

	const options = { 

	}
  return (
    <div>
      <Bar
				style={
					{
						margin: '20px',
						width: '400px',
					}
				}
				data={data}
        options={options}
			></Bar>
    </div>
  )
}
export default BarChart