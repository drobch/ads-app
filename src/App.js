import React, {Component} from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Sold from './components/Sold';
import Selling from './components/Selling';
import Navigation from './components/Navigation';
import {Switch, Route} from 'react-router-dom';

class App extends Component {
  
  render() {
    return (
        <Navigation />
    );
  };
}

export default App;
