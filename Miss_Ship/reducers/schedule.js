import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  scheduleModalVisible: false,
  scheduleInfo: null,
  addSchedulDone: false,
};

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    OPEN_SCHEDULE_MODAL: (state, action) => {
      state.scheduleModalVisible = true;
      state.scheduleInfo = action.payload;
    },
    CLOSE_SCHEDULE_MODAL: state => {
      state.scheduleModalVisible = false;
      state.scheduleInfo = null;
    },
    ADD_SCHEDUL: state => {
      state.addSchedulDone = true;
    },
    ADD_SCHEDUL_INIT: state => {
      state.addSchedulDone = false;
    },
  },
});

export const { OPEN_SCHEDULE_MODAL, CLOSE_SCHEDULE_MODAL, ADD_SCHEDUL, ADD_SCHEDUL_INIT } = scheduleSlice.actions;
export default scheduleSlice.reducer;
