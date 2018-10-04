import {
  LOAD_ADS,
  ADD_AD,
  DELETE_AD,
} from './types';

export const loadAds = () => (dispatch) => {
  console.log('fetching');
  
  fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(ads => dispatch({
      type: LOAD_ADS,
      payload: ads,
    }));
};