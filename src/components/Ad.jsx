import React, {Component} from 'react';
import '../index.css';

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
      description: this.props.ad.body,
      price: this.props.ad.id,
      picUrl: this.props.ad.thumbnailUrl
    };
  };
  
  bgStyle() {
    if (this.state.selling)
      return 'success';
    else return 'warning';
  }
  
  render() {
      return (
        <Panel bsStyle={this.bgStyle()}>
          <Panel.Heading>
            <Panel.Title>
              <span className="ad__title">
                {this.state.title}
              </span>
              <Badge>
                {this.state.price}$
              </Badge>
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <Image src={this.state.picUrl} alt="ad-pic" thumbnail/>
            <p>{this.state.title}</p>
            <Button bsStyle="success">
              More
            </Button>
          </Panel.Body>

        </Panel>
    );
  };
  
}

export default Ad;
