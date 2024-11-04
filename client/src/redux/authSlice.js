import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import history from "../history";

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
    logoutSuccess: (state) => {
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

export const register = (user) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("username", user.username);
    formData.append("email", user.email);
    formData.append("password", user.password);

    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    const response = await axios.post(
      "http://localhost:8325/auth/register",
      formData,
      config
    );
    if (response) {
      dispatch(registerSuccess(response.data));
      history.push("/signin");
      window.location.reload();
    } else {
      dispatch(registerFailure("Registration failed"));
    }
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};

export const signin = (user) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:8325/auth/signin",
      user
    );
    if (response) {
      localStorage.setItem("auth", JSON.stringify(response.data));
      dispatch(loginSuccess(response.data));
      history.push("/dashboard");
      window.location.reload();
    } else {
      dispatch(loginFailure("Login failed"));
    }
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};
