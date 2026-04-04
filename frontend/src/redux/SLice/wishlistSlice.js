import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlistItems: [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      const existingItem = state.wishlistItems.find(
        (item) => item.id === action.payload.id,
      );

      if (!existingItem) state.wishlistItems.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== action.payload.id,
      );
    },
    clearWishlist: (state) => {
      state.wishlistItems = [];
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } =
  wishlistSlice.actions;
export default wishlistSlice;
