import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://645510a9f803f345763957ea.mockapi.io/follower";

export const fetchContacts = createAsyncThunk(
  "follower/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/follower", {
        params: {
          page: 1,
          limit: 3,
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const addDisplayedItems = createAsyncThunk(
  "follower/addDisplayedItems",
  async (currentPage, thunkAPI) => {
    try {
      const response = await axios.get("/follower", {
        params: {
          page: currentPage,
          limit: 3,
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteFollower = createAsyncThunk(
  "follower/deleteFollower",
  async (id, thunkAPI) => {
    try {
      const response = await axios.put(`/follower/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const addFollower = createAsyncThunk(
  "follower/addFollower",
  async (id, thunkAPI) => {
    try {
      const response = await axios.put(`/follower/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
