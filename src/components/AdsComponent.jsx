import React, {Component} from 'react';
import PopupComponent from './PopupComponent';
import '../index.css';

import AdComponent from './AdComponent';

class AdsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:  [
          {
            title: 'Fender Telecaster',
            description: 'Lorem ipsum lorem ipsum lorem ipsum',
            phone: '35438436',
            price: '1955',
            currency: '$',
          },
          {
            title: 'Fender Stratocaster Squier',
            description: 'Lorem ipsum lorem ipsum lorem ipsum',
            phone: '35438436',
            price: '1355',
            currency: '$',
          },
          {
            title: 'Fender Jazzmaster',
            description: 'Lorem ipsum lorem ipsum lorem ipsum',
            phone: '35438436',
            price: '2955',
            currency: '$',
          }
        ]
      };
    
  this.returnData = this.returnData.bind(this);
  
  };
  
  returnData(newState) {
    this.setState({data: [...this.state.data, newState]});
  };
  
  render() {
    let list = this.state.data.map((ad, i) => <AdComponent key={i} ad={ad}/>);
    
    return (
        <React.Fragment>
          {list}
          <PopupComponent returnData={this.returnData} />
        </React.Fragment>
    );
  };
  
}

export default AdsComponent;
