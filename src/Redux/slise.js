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
        state.follower.operetion = "fatch";
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.follower.operetion = false;
        state.error = null;
        state.follower.items = payload;
        state.displayedItems = payload;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.follower.operetion = false;
        state.error = payload;
      })
      .addCase(addDisplayedItems.pending, (state) => {
        state.follower.operetion = "addItems";
      })
      .addCase(addDisplayedItems.fulfilled, (state, { meta, payload }) => {
        state.follower.operetion = false;
        state.follower.currentPage = meta.arg;
        state.follower.items = [...state.follower.items, ...payload];
        state.displayedItems = [...state.displayedItems, ...payload];
      })
      .addCase(addDisplayedItems.rejected, (state, { payload }) => {
        state.follower.operetion = false;
        state.follower.error = payload;
      })
      .addCase(deleteFollower.pending, (state, payload) => {
        state.follower.operetion = `${payload.meta.arg}`;
      })
      .addCase(deleteFollower.fulfilled, (state, { meta: { arg } }) => {
        state.follower.operetion = false;
        const index = state.follower.items.findIndex((item) => item.id === arg);
        if (index >= 0) {
          state.follower.items[index].followers -= 1;
          state.follower.items[index].isFollower = false;
        }
        state.displayedItems = state.follower.items;
      })
      .addCase(deleteFollower.rejected, (state, { payload }) => {
        state.follower.operetion = false;
        state.follower.error = payload;
      })
      .addCase(addFollower.pending, (state, payload) => {
        state.follower.operetion = `${payload.meta.arg}`;
      })
      .addCase(addFollower.fulfilled, (state, { meta: { arg } }) => {
        state.follower.operetion = false;
        const index = state.follower.items.findIndex((item) => item.id === arg);
        if (index >= 0) {
          state.follower.items[index].followers += 1;
          state.follower.items[index].isFollower = true;
        }
        state.displayedItems = state.follower.items;
      })
      .addCase(addFollower.rejected, (state, { payload }) => {
        state.follower.operetion = false;
        state.follower.error = payload;
      });
  },
});

export const followerReduser = followerSlice.reducer;
export const { setFilter, setDisplayedItems } = followerSlice.actions;
