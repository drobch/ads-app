import React, {Component} from 'react';
import Popup from './Popup';
import '../index.css';
import { connect } from 'react-redux';
import { loadAds } from '../actions/adActions';
import PropTypes from 'prop-types';


import Ad from './Ad';

class Ads extends Component {
  componentWillMount() {
    this.props.loadAds();
  }
  
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if(nextProps.newAd) {
      this.props.ads.push(nextProps.newAd);
    }
  }
  
  render() {
    const adsList = this.props.ads.map((ad, i) => (
        <Ad key={i} ad={ad}/>
    ));
    
    return (
        <React.Fragment>
          {adsList}
          <Popup />
        </React.Fragment>
    );
  };
}


Ads.propTypes = {
  loadAds: PropTypes.func.isRequired,
  ads: PropTypes.array.isRequired,
  newAd: PropTypes.object
};

const mapStateToProps = (state) => ({
  ads: state.ads.items,
  newAd: state.ads.item
});

export default connect(mapStateToProps, { loadAds })(Ads);
