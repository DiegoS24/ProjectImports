import React from 'react';
import './styles/App.css';
import DonutChart from './DonutChart';
import LineChart from './LineGraph';

const App = () => {
  return (
    <div className="App">
        <div className='Activity-Ring'>
            <DonutChart dailyIntake={2.5} dailyTotal={10}></DonutChart>
            <DonutChart dailyIntake={ 6.5} dailyTotal={10}></DonutChart>
            <DonutChart dailyIntake={ 6.5} dailyTotal={10}></DonutChart>
        </div>   
        <div className="line_graph">
              <LineChart />
        </div>
    </div>
    );
};

export default App;
