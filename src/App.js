import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import DataForm from './DataForm';
import DataChart from './DataChart';

import localStorageService from './localStorageService';
import Grid from "./Grid";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let storageItems = localStorageService.get();
    setItems(storageItems);
  }, []);

  function onSubmit(data) {
    localStorageService.save(data);

    let currentItems = items.slice();
    currentItems.push(data);
    setItems(currentItems);
  }

  return (
    <div className="container">
      <h1>COVID-19 Monitor</h1>
      <Router>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <NavLink to="/" className='nav-link' activeClassName='active' exact>Add Data</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/chart" className='nav-link' activeClassName='active'>Chart</NavLink>
          </li>
        </ul>
        <div>
          <Switch>
            <Route exact path="/">
              <DataForm
                onSubmit={onSubmit}
              />
              <br/>
              <Grid
                items={items}
              />
            </Route>
            <Route path="/chart">
              <DataChart
                items={items}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
