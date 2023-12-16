import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isCartOpen: false,
  userLoggedIn: {},
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
    setUser: (state, action) => {
      state.userLoggedIn = { ...action.payload.user };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
