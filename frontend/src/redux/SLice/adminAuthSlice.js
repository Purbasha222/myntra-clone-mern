import { createSlice } from "@reduxjs/toolkit";

const adminAuthSlice = createSlice({
  name: "admin",
  initialState: {
    token: null,
    isAuthenticated: false,
    email: null,
    role: "admin",
  },
  reducers: {
    adminLogin: (state, action) => {
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.isAuthenticated = true;
    },
    adminLogout: (state) => {
      state.token = null;
      state.email = null;
      state.isAuthenticated = false;
    },
  },
});

export const { adminLogin, adminLogout } = adminAuthSlice.actions;
export default adminAuthSlice.reducer;
