import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  scheduleModalVisible: false,
  scheduleInfo: null,
  addSchedulDone: false,
  category: [],
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
    ADD_CATEGORY: (state, action) => {
      state.category.push(action.payload);
    },
    DELETE_CATEGORY: (state, action) => {
      state.category = state.category.filter(v => v !== action.payload);
    },
  },
});

export const {
  OPEN_SCHEDULE_MODAL,
  CLOSE_SCHEDULE_MODAL,
  ADD_SCHEDUL,
  ADD_SCHEDUL_INIT,
  ADD_CATEGORY,
  DELETE_CATEGORY,
} = scheduleSlice.actions;
export default scheduleSlice.reducer;
