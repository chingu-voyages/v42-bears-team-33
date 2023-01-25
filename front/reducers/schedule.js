import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  scheduleModalVisible: false,
};

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    OPEN_SCHEDULE_MODAL: state => {
      state.scheduleModalVisible = true;
    },
    CLOSE_SCHEDULE_MODAL: state => {
      state.scheduleModalVisible = false;
    },
  },
});

export const { OPEN_SCHEDULE_MODAL, CLOSE_SCHEDULE_MODAL } = scheduleSlice.actions;
export default scheduleSlice.reducer;
