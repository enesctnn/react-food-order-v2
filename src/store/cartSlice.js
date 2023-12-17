import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex !== -1) {
        state.cart[existingItemIndex].quantity += 1;
        localStorage.setItem('cart', JSON.stringify(state.cart));
        return;
      }
      state.cart.push({ ...action.payload.item, quantity: +1 });
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    updateCart: (state, action) => {
      const updatedItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cart[updatedItemIndex].quantity += action.payload.amount;

      if (state.cart[updatedItemIndex].quantity <= 0) {
        state.cart.splice(updatedItemIndex, 1);
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
