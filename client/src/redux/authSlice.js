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
    registerSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
    },

    registerFailure: (state, action) => {
      state.error = action.payload;
    },
    logoutSuccess: (state, action) => {
      state.currentUser = null;
    },
  },
});

export const {
  loginFailure,
  loginSuccess,
  logoutSuccess,
  registerFailure,
  registerSuccess,
} = authSlice.actions;

export default authSlice.reducer;

export const register = (user) => async (dispatch){
  

  try {
    const formData = new FormData()

      formData.append('username', user.username)
  formData.append('email', user.email)
    formData.append('password', user.password)
    
    const config = {
      headers: {
        'content-type': 'application/json'
      }
    }
  } catch (error) {
    
  }


};
