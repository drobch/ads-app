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
      title: this.props.ad.title,
      description: this.props.ad.description,
      phone: this.props.ad.phone,
      price: this.props.ad.price,
      currency: this.props.ad.currency
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
