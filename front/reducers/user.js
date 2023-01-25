import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  me: null,
  firendsInfo: null,
};

const dummyUser = {
  id: 1,
  email: 'dummy@google.com',
  nickname: 'Jenny Wilson',
  image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
};

const dummyFriends = [
  { key: '1', name: 'Cody Fisher', status: { info: 'success', text: 'Sent' }, birthday: '1992-06-23' },
  {
    key: '2',
    name: 'Darlene Robertson',
    status: { info: 'default', text: 'Draft' },
    birthday: '1973-12-11',
  },
  {
    key: '3',
    name: 'Annette Black',
    status: { info: 'error', text: 'Overdue' },
    birthday: '2007-01-08',
  },
];

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    LOG_IN_SUCCESS: state => {
      state.me = dummyUser;
    },
    LOAD_MY_FRIENDS_SUCCESS: state => {
      state.firendsInfo = dummyFriends;
    },
  },
});

export const { LOG_IN_SUCCESS, LOAD_MY_FRIENDS_SUCCESS } = userSlice.actions;
export default userSlice.reducer;
