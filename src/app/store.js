import { configureStore } from '@reduxjs/toolkit';

function emptyReducer(state = [], action) {
  switch (action.type) {
    default:
      return state
  }
}

export default configureStore({
  reducer: emptyReducer,
});
