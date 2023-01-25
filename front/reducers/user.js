import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  me: null,
};

const dummyUser = {
  id: 1,
  email: 'dummy@google.com',
  nickname: 'Jenny Wilson',
  profileImage: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    LOG_IN_SUCCESS: state => {
      state.me = dummyUser;
    },
  },
});

export const { LOG_IN_SUCCESS } = userSlice.actions;
export default userSlice.reducer;
