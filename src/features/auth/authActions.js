import { createAsyncThunk } from "@reduxjs/toolkit";
import { tokenConfig, api } from "../../Api";
import { createMessage } from "../../features/auth/authSlice";

export const login = createAsyncThunk(
  "auth/login",
  async (loginDetails, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await api.post("/api/auth/login", loginDetails);
      dispatch(createMessage("You are logged in successfully"));
      return data;
    } catch (error) {
      if (error) {
        if (error.response.data.message) {
          return rejectWithValue(error.response.data.message);
        }
        return rejectWithValue(error.response.data.error.message);
      } else {
        return rejectWithValue(error.response.data.error.message);
      }
    }
  }
);

export const loadUser = createAsyncThunk(
  "auth/loadUser",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { data } = await api.get(`/api/auth/me`, tokenConfig(getState));
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const register = createAsyncThunk(
  "auth/signup",
  async (registerDetails, { getState, rejectWithValue }) => {
    try {
      const { data } = await api.post(
        "/signup/",
        registerDetails,
        tokenConfig(getState)
      );
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);
