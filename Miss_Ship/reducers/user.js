import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  me: null,
  firendsInfo: null,
  focusTab: '1',
};

const dummyFriends = [
  { key: '1', name: 'Cody Fisher', status: { info: 'success', text: 'Sent' }, birthday: '1992-06-23' },
  {
    key: '2',
    name: 'Darlene Robertson',
    status: { info: 'default', text: 'Draft' },
    birthday: '1973-12-11',
  },
  {
    key: '3',
    name: 'Annette Black',
    status: { info: 'error', text: 'Overdue' },
    birthday: '2007-01-08',
  },
];

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    FOCUS_LOGIN_TAB: state => {
      state.focusTab = '1';
    },

    FOCUS_SIGN_UP_TAB: state => {
      state.focusTab = '2';
    },

    USER_LOGIN: (state, action) => {
      state.me = action.payload;
    },

    LOAD_MY_FRIENDS_SUCCESS: state => {
      state.firendsInfo = dummyFriends;
    },
  },
});

export const { FOCUS_LOGIN_TAB, FOCUS_SIGN_UP_TAB, USER_LOGIN, LOAD_MY_FRIENDS_SUCCESS } = userSlice.actions;
export default userSlice.reducer;
