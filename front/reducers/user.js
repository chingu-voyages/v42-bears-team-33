import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  me: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
