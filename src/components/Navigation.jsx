import React, {Component} from 'react';
import '../index.css';
import {Switch, Route} from 'react-router-dom';

import {Link} from 'react-router-dom';
import {
  Nav, NavItem,
  Button,
} from 'react-bootstrap';
import Dashboard from './Dashboard';
import Selling from './Selling';
import Sold from './Sold';
import App from '../App';

class Navigation extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    return (
        <div className="content" >
          <Nav bsStyle="tabs">
            <NavItem eventKey={1} href="/">
              abc
            </NavItem>
            <NavItem eventKey={2} href='/selling'>
              selling
            </NavItem>
            <NavItem eventKey={3} href='/sold'>
              sold
            </NavItem>
          </Nav>
          <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/selling' component={Selling}/>
            <Route path='/sold' component={Sold}/>
          </Switch>
        </div>
    );
  };
  
}

export default Navigation;
