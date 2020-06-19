import { combineReducers } from 'redux'
import { SET_PAGE } from './actions';

function revenue(state = [], action) {
  switch (action.type) {
    case SET_PAGE:
      return {count: action.payload.count, 
              data: state.data ? action.payload.data.concat(state.data) : action.payload.data,
              next_cursor: action.payload.next_cursor };
    default:
      return state;
  }
}

const revenueGrid = combineReducers({revenue});

export default revenueGrid