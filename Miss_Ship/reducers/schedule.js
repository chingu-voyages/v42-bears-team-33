import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  scheduleModalVisible: false,
  scheduleInfo: null,
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
  },
});

export const { OPEN_SCHEDULE_MODAL, CLOSE_SCHEDULE_MODAL } = scheduleSlice.actions;
export default scheduleSlice.reducer;
