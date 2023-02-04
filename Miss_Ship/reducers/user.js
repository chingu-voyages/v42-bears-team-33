import { createSlice } from '@reduxjs/toolkit';

import { addFriends } from '@actions/user';

const initialState = {
  me: null,
  loginDone: false,
  firendsInfo: null,
  signUpDone: false,
  focusTab: '1',
  addFriendsLoading: false,
  addFriendsDone: false,
  addFriendsError: null,
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
  extraReducers: builder =>
    builder
      .addCase(addFriends.pending, state => {
        state.addFriendsLoading = true;
        state.addFriendsDone = false;
        state.addFriendsError = null;
      })
      .addCase(addFriends.fulfilled, state => {
        state.addFriendsLoading = false;
        state.addFriendsDone = true;
      })
      .addCase(addFriends.rejected, (state, action) => {
        state.addFriendsLoading = false;
        state.addFriendsError = action.payload;
      }),
  reducers: {
    FOCUS_LOGIN_TAB: state => {
      state.focusTab = '1';
    },
    FOCUS_SIGN_UP_TAB: state => {
      state.focusTab = '2';
    },
    USER_LOGIN: (state, action) => {
      state.loginDone = true;
      state.me = action.payload;
    },
    USER_LOGOUT: state => {
      state.loginDone = false;
      state.me = null;
    },
    USER_SIGNUP: (state, action) => {
      state.signUpDone = true;
      state.me = action.payload;
    },
    LOAD_MY_FRIENDS_SUCCESS: state => {
      state.firendsInfo = dummyFriends;
    },
  },
});

export const { FOCUS_LOGIN_TAB, FOCUS_SIGN_UP_TAB, USER_LOGIN, USER_LOGOUT, LOAD_MY_FRIENDS_SUCCESS, USER_SIGNUP } =
  userSlice.actions;
export default userSlice.reducer;
