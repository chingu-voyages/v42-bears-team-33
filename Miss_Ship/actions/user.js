import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { backendUrl } from '@config/config';

axios.defaults.baseURL = backendUrl;
axios.defaults.withCredentials = true;

export const addFriends = createAsyncThunk('user/addFriends', async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post('/friends', data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
