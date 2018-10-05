import {
  LOAD_ADS,
  NEW_AD,
  DELETE_AD,
} from '../actions/types';

const initialState = {
  items: [],
  item: {},
};

export default (state = initialState, action) => {
  console.log('adReducer: ', state);
  switch (action.type) {
    case LOAD_ADS:
      return {
        ...state,
        items: action.payload,
      };
    case NEW_AD:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
};