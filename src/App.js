import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// @components
import HomePage from './pages/Homepage/Homepage.component';
import ShopPage from './pages/Shop/Shop.component';
import Header from './components/Header/Header.component';
// @styles
import './App.css';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
    </Switch>
  </Router>
);


export default App;
