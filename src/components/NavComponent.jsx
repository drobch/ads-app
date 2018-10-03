import React, {Component} from 'react';
import '../index.css';

import {
  Nav, NavItem,
  Button,
} from 'react-bootstrap';

class NavComponent extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    return (
        <Nav
            bsStyle="tabs"
            activeKey={1}>
          <NavItem eventKey={1} href="/home">
            All Ads
          </NavItem>
          <NavItem eventKey={2}>
            Selling
          </NavItem>
          <NavItem eventKey={3}>
            Sold
          </NavItem>
        </Nav>
    );
  };
  
}

export default NavComponent;
