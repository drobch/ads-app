import React, {Component} from 'react';
import '../index.css';
import Popup from './Popup';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    
  };
  
  render() {
    return (
        <Popup />
    );
  };
}

export default Dashboard;
