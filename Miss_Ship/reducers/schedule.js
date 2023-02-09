import { createSlice } from '@reduxjs/toolkit';
import _find from 'lodash/find';

import { addFriends, loadMyFriends } from '@actions/schedule';

const initialState = {
  friendsInfo: null,
  category: [],
  addFriendsVisible: false,
  anonymousScheduleModalVisible: false,
  scheduleModalVisible: false,
  scheduleInfo: null,
  messageNowModalVisible: false,
  addFriendsLoading: false,
  addFriendsDone: false,
  addFriendsError: null,
  loadMyFriendsLoading: false,
  loadMyFriendsDone: false,
  loadMyFriendsError: null,
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
        state.addFriendsVisible = false;
      })
      .addCase(addFriends.rejected, (state, action) => {
        state.addFriendsLoading = false;
        state.addFriendsError = action.payload;
      })
      .addCase(loadMyFriends.pending, state => {
        state.loadMyFriendsLoading = true;
        state.loadMyFriendsDone = false;
        state.loadMyFriendsError = null;
      })
      .addCase(loadMyFriends.fulfilled, (state, action) => {
        state.loadMyFriendsLoading = false;
        state.loadMyFriendsDone = true;
        state.friendsInfo = action.payload.data;
      })
      .addCase(loadMyFriends.rejected, (state, action) => {
        state.loadMyFriendsLoading = false;
        state.loadMyFriendsError = action.payload;
      }),
  reducers: {
    INITIAL_ADD_FRIENDS_STATE: state => {
      state.addFriendsLoading = false;
      state.addFriendsDone = false;
      state.addFriendsError = null;
      state.addFriendsVisible = false;
    },
    VISIBLE_ADD_FRIENDS: state => {
      state.addFriendsVisible = true;
    },
    INVISIBLE_ADD_FRIENDS: state => {
      state.addFriendsVisible = false;
    },
    OPEN_ANONYMOUS_SCHEDULE_MODAL: state => {
      state.anonymousScheduleModalVisible = true;
      state.scheduleModalVisible = true;
    },
    OPEN_ANONYMOUS_MESSAGE_NOW_MODAL: state => {
      state.anonymousScheduleModalVisible = true;
      state.scheduleModalVisible = true;
      state.messageNowModalVisible = true;
    },
    ANONYMOUS_MODAL_SELECT_USER: (state, action) => {
      state.scheduleInfo = _find(state.friendsInfo, { _id: action.payload });
    },
    OPEN_SCHEDULE_MODAL: (state, action) => {
      state.scheduleModalVisible = true;
      state.scheduleInfo = action.payload;
    },
    OPEN_MESSAGE_NOW_MODAL: (state, action) => {
      state.scheduleModalVisible = true;
      state.messageNowModalVisible = true;
      state.scheduleInfo = action.payload;
    },
    CLOSE_SCHEDULE_MODAL: state => {
      state.scheduleModalVisible = false;
      state.messageNowModalVisible = false;
      state.anonymousScheduleModalVisible = false;
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
  INITIAL_ADD_FRIENDS_STATE,
  VISIBLE_ADD_FRIENDS,
  INVISIBLE_ADD_FRIENDS,
  OPEN_ANONYMOUS_SCHEDULE_MODAL,
  OPEN_ANONYMOUS_MESSAGE_NOW_MODAL,
  ANONYMOUS_MODAL_SELECT_USER,
  OPEN_SCHEDULE_MODAL,
  OPEN_MESSAGE_NOW_MODAL,
  CLOSE_SCHEDULE_MODAL,
  ADD_SCHEDUL,
  ADD_SCHEDUL_INIT,
  ADD_CATEGORY,
  DELETE_CATEGORY,
} = scheduleSlice.actions;
export default scheduleSlice.reducer;
