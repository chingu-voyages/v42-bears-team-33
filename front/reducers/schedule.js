import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  scheduleModalVisible: false,
};

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    openScheduleModal: state => {
      state.scheduleModalVisible = true;
    },
    closeScheduleModal: state => {
      state.scheduleModalVisible = false;
    },
  },
});

export const { openScheduleModal, closeScheduleModal } = scheduleSlice.actions;
export default scheduleSlice.reducer;
