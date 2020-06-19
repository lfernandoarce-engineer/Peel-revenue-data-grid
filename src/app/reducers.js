import { combineReducers } from 'redux'
import { SET_PAGE, APPEND_PAGE } from './actions';

function revenue(state = [], action) {
  switch (action.type) {
    case APPEND_PAGE:
      return {count: action.payload.count, 
              data: state.data ? state.data.concat(action.payload.data) : action.payload.data,
              next_cursor: action.payload.next_cursor, 
              group_by: action.payload.group_by};
    case SET_PAGE:
      return {count: action.payload.count, 
              data: action.payload.data,
              next_cursor: action.payload.next_cursor, 
              group_by: action.payload.group_by};
    default:
      return state;
  }
}

const revenueGrid = combineReducers({revenue});

export default revenueGrid