import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { message } from 'antd';

import { CLOSE_SCHEDULE_MODAL, INITIAL_ADD_FRIENDS_STATE, INITIAL_MESSAGE_STATE } from '@reducers/schedule';
import { backendUrl } from '@config/config';
import { getToken } from './user';

axios.defaults.baseURL = backendUrl;
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(
  async config => {
    const token = await getToken();
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export const loadMyFriends = createAsyncThunk('schedule/loadMyFriends', async () => {
  const response = await axios.get('/friends');
  return response.data;
});

export const addFriends = createAsyncThunk('schedule/addFriends', async (data, thunkAPI) => {
  try {
    const response = await axios.post('/friends', data);
    thunkAPI.dispatch(INITIAL_ADD_FRIENDS_STATE());
    message.success('A friend has been added.');
    return response.data;
  } catch (error) {
    thunkAPI.dispatch(INITIAL_ADD_FRIENDS_STATE());
    message.error('Adding friend failed.');
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const removeFriend = createAsyncThunk('schedule/removeFriend', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.delete(`/friends/${data.friendId}`);
    message.success('Your friend has been successfully deleted.');
    return response.data;
  } catch (error) {
    message.error('Friend deletion failed.');
    return rejectWithValue(error.response.data);
  }
});

export const sendMessage = createAsyncThunk('schedule/message', async (data, thunkAPI) => {
  try {
    const response = await axios.post('/sms', data);
    thunkAPI.dispatch(CLOSE_SCHEDULE_MODAL());
    thunkAPI.dispatch(INITIAL_MESSAGE_STATE());
    message.success('Your message has been sent successfully.');
    return response.data;
  } catch (error) {
    thunkAPI.dispatch(CLOSE_SCHEDULE_MODAL());
    thunkAPI.dispatch(INITIAL_MESSAGE_STATE());
    message.error('Message sending failed.');
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const scheduling = createAsyncThunk('schedule/scheduling', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post('/scheduledsms', data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
