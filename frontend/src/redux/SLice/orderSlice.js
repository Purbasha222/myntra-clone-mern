import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    addresses: [],
    selectedAddressIndex: 0,
    paymentMethod: "",
    orders: [],
  },
  reducers: {
    addAddress: (state, action) => {
      state.addresses.push(action.payload);
      state.selectedAddressIndex = state.addresses.length - 1;
    },
    editAddress: (state, action) => {
      state.addresses[action.payload.index] = action.payload.data;
    },
    removeAddress: (state, action) => {
      state.addresses.splice(action.payload, 1);
      state.selectedAddressIndex = 0;
    },
    selectAddress: (state, action) => {
      state.selectedAddressIndex = action.payload;
    },
    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
    placeOrder: (state, action) => {
      if (!state.orders) {
        state.orders = [];
      }
      state.orders.push(action.payload);
    },
  },
});

export const {
  addAddress,
  editAddress,
  removeAddress,
  selectAddress,
  setPaymentMethod,
  placeOrder,
} = orderSlice.actions;
export default orderSlice;
