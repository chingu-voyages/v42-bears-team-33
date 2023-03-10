import { createSlice } from '@reduxjs/toolkit';

import { login, logout, signup } from '@actions/user';

const initialState = {
  me: null,
  focusTab: '1',
  loginLoading: false,
  loginDone: false,
  loginError: null,
  logoutLoading: false,
  logoutDone: false,
  logoutError: null,
  signupLoading: false,
  signupDone: false,
  signupError: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(login.pending, state => {
        state.loginLoading = true;
        state.loginDone = false;
        state.loginError = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loginLoading = false;
        state.loginDone = true;
        state.me = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loginLoading = false;
        state.loginError = action.payload;
      })
      .addCase(logout.pending, state => {
        state.logoutLoading = true;
        state.logoutDone = false;
        state.logoutError = null;
      })
      .addCase(logout.fulfilled, state => {
        state.logoutLoading = false;
        state.logoutDone = true;
        state.me = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.logoutLoading = false;
        state.logoutError = action.payload;
      })
      .addCase(signup.pending, state => {
        state.signupLoading = true;
        state.signupDone = false;
        state.signupError = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.signupLoading = false;
        state.signupDone = true;
        state.me = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.signupLoading = false;
        state.signupError = action.payload;
      }),
  reducers: {
    FOCUS_LOGIN_TAB: state => {
      state.focusTab = '1';
    },
    FOCUS_SIGN_UP_TAB: state => {
      state.focusTab = '2';
    },
    LOAD_USER: (state, action) => {
      state.me = action.payload;
    },
  },
});

export const { FOCUS_LOGIN_TAB, FOCUS_SIGN_UP_TAB, LOAD_USER } = userSlice.actions;
export default userSlice.reducer;
