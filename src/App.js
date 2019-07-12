import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/Homepage/Homepage.component';

import './App.css';

// Test for router will be moving to own page
const CpusPage = () => (
  <div>
    <h1>CPUS</h1>
  </div>
)

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop/cpus' component={CpusPage} />
    </Switch>
  </Router>
);


export default App;
