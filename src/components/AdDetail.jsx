import React, {Component} from 'react';
import '../index.css';
import { Route } from "react-router-dom" ;

class AdDetail extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
/*      title: this.props.ad.title,
      description: this.props.ad.description,
      phone: this.props.ad.phone,
      price: this.props.ad.price,
      currency: this.props.ad.currency,
      picUrl: this.props.ad.picUrl,
      isSelling: this.props.ad.isSelling,*/
    };
  };
  
  componentDidMount () {
    const {handle} = this.props.match.params;
    console.log(handle)
  }
  render() {
    return (
        <React.Fragment>
          <p>ddfkfkl</p>
        </React.Fragment>
    );
  };
  
}

export default AdDetail;
