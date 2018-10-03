import React, {Component} from 'react';
import '../index.css';
import Nav from './Nav';
import Popup from './Popup';
import Ad from './Ad';

class DashboardComponent extends Component {
  constructor(props) {
    super(props);
    
  };
  
  render() {
    return (
        <div className="content">
          <Nav />
          <div className="modal__inner">
            <Ad />
            <Ad />
            <Ad />
            <Popup />
          </div>
        </div>
    );
  };
}

export default DashboardComponent;
