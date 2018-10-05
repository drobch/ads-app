import React, {Component} from 'react';
import '../index.css';
import { Route } from "react-router-dom" ;
import AdDetail from './AdDetail';
import {
  Image,
  PanelGroup,
  Badge,
  Button,
  Panel,
} from 'react-bootstrap';

class Ad extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: this.props.ad.title,
      description: this.props.ad.description,
      phone: this.props.ad.phone,
      price: this.props.ad.price,
      currency: this.props.ad.currency,
      picUrl: this.props.ad.picUrl,
      isSelling: this.props.ad.isSelling,
    };
  };
  
  bgStyle() {
    if (this.state.isSelling)
      return 'success';
    else return 'warning';
  }
  
  render() {
    return (
        <React.Fragment>
          <Panel bsStyle={this.bgStyle()}>
            <Panel.Heading>
              <Panel.Title>
              <span className="ad__title">
                {this.state.title}
              </span>
                <Badge>
                  {this.state.price} {this.state.currency}
                </Badge>
              </Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <Image src={this.state.picUrl} alt="ad-pic" thumbnail/>
              <p>{this.state.description}</p>
              <p>phone: {this.state.phone}</p>
              <Button bsStyle="success" href='/:id'>
                More
              </Button>
            </Panel.Body>
          </Panel>
          <Route
              path="/:id"
              component={AdDetail}
          />
        </React.Fragment>
    );
  };
  
}

export default Ad;
