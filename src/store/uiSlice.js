import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCartOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isCartOpen = true;
    },
    closeModal: (state) => {
      state.isCartOpen = false;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
