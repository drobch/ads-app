import {
  LOAD_ADS,
  NEW_AD,
  DELETE_AD,
} from './types';

export const loadAds = () => (dispatch) => {
  console.log('fetching');
  
  fetch('http://localhost:3000/ads')
    .then(res => res.json())
    //.then(ads => ads.filter((ad, i) => (i < 10)))
    .then(ads => dispatch({
      type: LOAD_ADS,
      payload: ads
    }));
};

export const createAd = (adData) => (dispatch) => {
  fetch('http://localhost:3000/ads', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(adData)
  })
  .then(res => res.json())
  .then(ad =>
      dispatch({
        type: NEW_AD,
        payload: ad
      }));
};
