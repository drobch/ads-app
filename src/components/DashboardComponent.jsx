import React, {Component} from 'react';
import '../index.css';
import NavComponent from './NavComponent';
import AdsComponent from './AdsComponent';

class DashboardComponent extends Component {
  constructor(props) {
    super(props);
    
  };
  
  render() {
    return (
        <div className="content">
          <NavComponent/>
          <div className="ads__wrapper">
            <AdsComponent />
          </div>
        </div>
    );
  };
}

export default DashboardComponent;
