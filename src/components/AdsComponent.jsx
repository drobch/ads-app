import React, {Component} from 'react';
import '../index.css';

import {
  Button
} from 'react-bootstrap';

import AdComponent from './AdComponent';

class AdsComponent extends Component {
  constructor(props) {
    super(props);
    
  };
  
  render() {
    return (
        <AdComponent bsStyle="primary"/>
    );
  };
  
}

export default AdsComponent;
