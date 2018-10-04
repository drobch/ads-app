import {
  LOAD_ADS,
  ADD_AD,
  DELETE_AD,
} from '../actions/types';


const initialState = {
  items: [],
  item: {}
};

export default (state = initialState, action) => {
  console.log('adReducer: ', state)
  switch (action.type) {
    case LOAD_ADS:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
};