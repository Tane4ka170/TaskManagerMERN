import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  currentUser: null,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    },

    loginFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});
