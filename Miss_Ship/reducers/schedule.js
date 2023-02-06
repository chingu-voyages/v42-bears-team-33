import { createSlice } from '@reduxjs/toolkit';

import { addFriends } from '@actions/schedule';

const initialState = {
  scheduleModalVisible: false,
  scheduleInfo: null,
  category: [],
  addFriendsLoading: false,
  addFriendsDone: false,
  addFriendsError: null,
};

const scheduleSlice = createSlice({
  name: 'schedule',
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
    OPEN_SCHEDULE_MODAL: (state, action) => {
      state.scheduleModalVisible = true;
      state.scheduleInfo = action.payload;
    },
    CLOSE_SCHEDULE_MODAL: state => {
      state.scheduleModalVisible = false;
      state.scheduleInfo = null;
    },
    ADD_CATEGORY: (state, action) => {
      state.category.push(action.payload);
    },
    DELETE_CATEGORY: (state, action) => {
      state.category = state.category.filter(v => v !== action.payload);
    },
  },
});

export const {
  OPEN_SCHEDULE_MODAL,
  CLOSE_SCHEDULE_MODAL,
  ADD_SCHEDUL,
  ADD_SCHEDUL_INIT,
  ADD_CATEGORY,
  DELETE_CATEGORY,
} = scheduleSlice.actions;
export default scheduleSlice.reducer;
