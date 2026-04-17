import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    selectedItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id,
      );

      state.selectedItems = state.selectedItems.filter(
        (id) => id !== action.payload.id,
      );
    },
    updateQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );

      if (item) item.quantity = action.payload.quantity;
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    handleCheckBox: (state, action) => {
      if (state.selectedItems.includes(action.payload.id)) {
        state.selectedItems = state.selectedItems.filter(
          (id) => id !== action.payload.id,
        );
      } else {
        state.selectedItems.push(action.payload.id);
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  handleCheckBox,
} = cartSlice.actions;
export default cartSlice;
