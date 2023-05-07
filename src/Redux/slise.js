import { createSlice } from "@reduxjs/toolkit";
import {
  addDisplayedItems,
  addFollower,
  deleteFollower,
  fetchContacts,
} from "./operetions";

const followerInitialState = {
  follower: {
    items: [],
    operetion: false,
    error: null,
    displayedItems: [],
    itemsPerPage: 3,
    currentPage: 1,
    totalPages: 0,
    filter: "all",
  },
};

const followerSlice = createSlice({
  name: "tweets",
  initialState: followerInitialState,
  reducers: {
    setFilter: {
      reducer: (state, { payload }) => {
        state.filter = payload;
      },
    },
    setDisplayedItems: {
      reducer: (state, { payload }) => {
        state.displayedItems = payload;
      },
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.operetion = true;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.operetion = false;
        state.error = null;
        state.follower.items = payload;
        state.follower.totalPages = Math.ceil(
          payload.length / state.follower.itemsPerPage
        );
        state.displayedItems = payload.slice(0, state.follower.itemsPerPage);
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.operetion = false;
        state.error = payload;
      })
      .addCase(addDisplayedItems.fulfilled, (state) => {
        state.operetion = false;
        const start = state.follower.currentPage * state.follower.itemsPerPage;
        const end = start + state.follower.itemsPerPage;
        const nextItems = state.follower.items.slice(start, end);
        state.displayedItems = [...state.displayedItems, ...nextItems];
        state.follower.currentPage += 1;
      })
      .addCase(deleteFollower.pending, (state) => {
        state.operetion = true;
      })
      .addCase(deleteFollower.fulfilled, (state, { meta: { arg } }) => {
        state.operetion = false;
        const index = state.follower.items.findIndex((item) => item.id === arg);
        if (index >= 0) {
          state.follower.items[index].followers -= 1;
          state.follower.items[index].isFollower = false;
        }
      })
      .addCase(deleteFollower.rejected, (state, { payload }) => {
        state.operetion = false;
        state.error = payload;
      })
      .addCase(addFollower.pending, (state) => {
        state.operetion = true;
      })
      .addCase(addFollower.fulfilled, (state, { meta: { arg } }) => {
        state.operetion = false;
        const index = state.follower.items.findIndex((item) => item.id === arg);
        if (index >= 0) {
          state.follower.items[index].followers += 1;
          state.follower.items[index].isFollower = true;
        }
      })
      .addCase(addFollower.rejected, (state, { payload }) => {
        state.operetion = false;
        state.error = payload;
      });
  },
});

export const followerReduser = followerSlice.reducer;
export const { setFilter, setDisplayedItems } = followerSlice.actions;
