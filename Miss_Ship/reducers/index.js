import { combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import user from './user';
import schedule from './schedule';

const reducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        user,
        schedule,
      });
      return combineReducer(state, action);
    }
  }
};

export default reducer;
