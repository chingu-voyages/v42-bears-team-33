import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  me: null,
  firendsInfo: null,
  focusTab: '1',
};

const dummyFriends = [
  { key: 1, name: 'Dummy 2', status: { info: 'processing', text: 'None' }, birthday: '1992-06-23' },
  { key: 2, name: 'Dummy 1', status: { info: 'warning', text: 'Scheduled' }, birthday: '2001-02-21' },
  { key: 3, name: 'Dummy 3', status: { info: 'success', text: 'Sent' }, birthday: '1982-01-04' },
  { key: 4, name: 'Dummy 4', status: { info: 'default', text: 'Draft' }, birthday: '2002-01-13' },
  { key: 5, name: 'Dummy 5', status: { info: 'error', text: 'Overdue' }, birthday: '1994-03-11' },
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
    USER_LOGOUT: state => {
      state.me = null;
    },
    LOAD_MY_FRIENDS_SUCCESS: state => {
      state.firendsInfo = dummyFriends;
    },
  },
});

export const { FOCUS_LOGIN_TAB, FOCUS_SIGN_UP_TAB, USER_LOGIN, USER_LOGOUT, LOAD_MY_FRIENDS_SUCCESS } =
  userSlice.actions;
export default userSlice.reducer;
