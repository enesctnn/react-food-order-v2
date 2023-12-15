import { configureStore } from '@reduxjs/toolkit';
import uiSliceReducer from './uiSlice';
import cartSliceReducer from './cartSlice';

export const store = configureStore({
  reducer: { ui: uiSliceReducer, cart: cartSliceReducer },
});
