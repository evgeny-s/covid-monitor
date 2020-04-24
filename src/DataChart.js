import React, {useEffect, useState} from 'react';
import { Chart } from 'react-charts';

function DataChart({items}) {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const currentCities = new Set();
    items.forEach((item) => {
      currentCities.add(item.city);
    });

    let uniqueCities = [];
    for (let city of currentCities.entries()) {
      uniqueCities.push(city[0]);
    }

    setCities(uniqueCities);
  }, []);

  let data = [];
  items.forEach((item) => {
    data.push([new Date(item.date), +item.amount]);
  });

  return (
    <div
      style={{
        width: '100%',
        height: '500px'
      }}
    >
      <div className="form-row align-items-center">
        <div className="col-auto my-1">
          <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Select City</label>
          <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
            <option>...Select city...</option>
            {
              cities.map((city) => <option key={city}>{city}</option>)
            }
          </select>
        </div>
      </div>

      <Chart data={[
        {
          label: 'Minsk',
          data: data
        }
      ]} axes={[
        { primary: true, type: 'time', position: 'bottom' },
        { type: 'linear', position: 'left' }
      ]} />
    </div>
  );
}

export default DataChart;
