import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
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

export const addFriends = createAsyncThunk('schedule/addFriends', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post('/friends', data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const removeFriend = createAsyncThunk('schedule/removeFriend', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.delete(`/friends/${data.friendId}`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
