import { combineReducers } from 'redux'
import { SET_PAGE } from './actions';

function revenue(state = [], action) {
  switch (action.type) {
    case SET_PAGE:
      return action.payload;
    default:
      return state;
  }
}

const revenueGrid = combineReducers({revenue});

export default revenueGrid