import React, {Component} from 'react';
import '../index.css';
import Ads from './Ads';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    
  };
  
  render() {
    return (
        <Ads/>
    );
  };
}

export default Dashboard;
