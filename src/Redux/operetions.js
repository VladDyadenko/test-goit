import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://645510a9f803f345763957ea.mockapi.io/follower";

export const fetchContacts = createAsyncThunk(
  "follower/fetchAll",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const follower = state.tweets.follower;
    if (follower.length) {
      return follower;
    }
    try {
      const response = await axios.get("/follower");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const addDisplayedItems = createAsyncThunk(
  "follower/addDisplayedItems",
  async (_, { getState }) => {
    try {
      const { currentPage, itemsPerPage } = getState().follower;
      console.log(currentPage);
      console.log(itemsPerPage);
      console.log(getState().follower);

      const start = currentPage * itemsPerPage;
      const end = start + itemsPerPage;
      const response = await axios.get(`/follower?_start=${start}&_end=${end}`);
      return response.data;
    } catch (error) {
      return error.message;
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
