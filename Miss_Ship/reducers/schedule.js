import { createSlice } from '@reduxjs/toolkit';
import _find from 'lodash/find';

import {
  loadMyFriends,
  loadMySmsInfo,
  loadMyScheduleInfo,
  addFriends,
  removeFriend,
  sendMessage,
  scheduling,
} from '@actions/schedule';

const initialState = {
  friendsInfo: null,
  addFriendsVisible: false,
  anonymousScheduleModalVisible: false,
  scheduleModalVisible: false,
  scheduleInfo: null,
  messageNowModalVisible: false,
  loadMyFriendsLoading: false,
  loadMyFriendsDone: false,
  loadMyFriendsError: null,
  loadMySmsLoading: false,
  loadMySmsDone: false,
  loadMySmsError: null,
  loadMyScheduleLoading: false,
  loadMyScheduleDone: false,
  loadMyScheduleError: null,
  addFriendsLoading: false,
  addFriendsDone: false,
  addFriendsError: null,
  removeFriendLoading: false,
  removeFriendDone: false,
  removeFriendError: null,
  sendMessageLoading: false,
  sendMessageDone: false,
  sendMessageError: null,
  schedulingLoading: false,
  schedulingDone: false,
  schedulingError: null,
};

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  extraReducers: builder =>
    builder
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
      })
      .addCase(loadMySmsInfo.pending, state => {
        state.loadMySmsLoading = true;
        state.loadMySmsDone = false;
        state.loadMySmsError = null;
      })
      .addCase(loadMySmsInfo.fulfilled, (state, action) => {
        action.payload.data.forEach(v => {
          const friend = _find(state.friendsInfo, { _id: v.friendId });
          if (friend) friend.status = 'sms';
        });
        state.loadMySmsLoading = false;
        state.loadMySmsDone = true;
      })
      .addCase(loadMySmsInfo.rejected, (state, action) => {
        state.loadMySmsLoading = false;
        state.loadMySmsError = action.pyload;
      })
      .addCase(loadMyScheduleInfo.pending, state => {
        state.loadMyScheduleLoading = true;
        state.loadMyScheduleDone = false;
        state.loadMyScheduleError = null;
      })
      .addCase(loadMyScheduleInfo.fulfilled, (state, action) => {
        action.payload.data.forEach(v => {
          const friend = _find(state.friendsInfo, { _id: v.friendId });
          if (friend) friend.status = 'schedule';
        });
        state.loadMyScheduleLoading = false;
        state.loadMyScheduleDone = true;
      })
      .addCase(loadMyScheduleInfo.rejected, (state, action) => {
        state.loadMyScheduleLoading = false;
        state.loadMyScheduleError = action.pyload;
      })
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
      .addCase(removeFriend.pending, state => {
        state.removeFriendLoading = true;
        state.removeFriendDone = false;
        state.removeFriendError = null;
      })
      .addCase(removeFriend.fulfilled, state => {
        state.removeFriendLoading = false;
        state.removeFriendDone = true;
      })
      .addCase(removeFriend.rejected, (state, action) => {
        state.removeFriendLoading = false;
        state.removeFriendError = action.payload;
      })
      .addCase(sendMessage.pending, state => {
        state.sendMessageLoading = true;
        state.sendMessageDone = false;
        state.sendMessageError = null;
      })
      .addCase(sendMessage.fulfilled, state => {
        state.sendMessageLoading = false;
        state.sendMessageDone = true;
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.sendMessageLoading = false;
        state.sendMessageError = action.payload;
      })
      .addCase(scheduling.pending, state => {
        state.schedulingLoading = true;
        state.schedulingDone = false;
        state.schedulingError = null;
      })
      .addCase(scheduling.fulfilled, state => {
        state.schedulingLoading = false;
        state.schedulingDone = true;
      })
      .addCase(scheduling.rejected, (state, action) => {
        state.schedulingLoading = false;
        state.schedulingError = action.payload;
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
} = scheduleSlice.actions;
export default scheduleSlice.reducer;
