import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { backendUrl } from '@config/config';

axios.defaults.baseURL = backendUrl;
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(
  config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('FB_TOKEN')}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export const addFriends = createAsyncThunk('schedule/addFriends', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post('/friends', data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const loadMyFriends = createAsyncThunk('schedule/loadMyFriends', async () => {
  const response = await axios.get('/friends');
  return response.data;
});
