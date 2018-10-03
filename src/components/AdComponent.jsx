import React, {Component} from 'react';
import '../index.css';

import {
  FormGroup,
  Accordion,
  PanelGroup,
  Badge,
  Button,
  Panel
} from 'react-bootstrap';

class AdComponent extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: 'Fender Telecaster',
      description: 'Lorem ipsum lorem ipsum lorem ipsum',
      phone: '35438436',
      price: '1955',
      currency: '$'
    };
  };
  
  
  render() {
    return (
        <Panel bsStyle="primary">
          <Panel.Heading>
            <Panel.Title>
              <span className="ad__title">
                {this.state.title}
              </span>
              <Badge>
                {this.state.price}{this.state.currency}
                </Badge>
              </Panel.Title>
          </Panel.Heading>
          <Panel.Body>
                <p>{this.state.description}</p>
            <Button bsStyle="success">
              More
            </Button>
          </Panel.Body>
        </Panel>
    );
  };
  
}

export default AdComponent;
