import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const key = process.env.REACT_APP_API_KEY;
const baseUrl = process.env.REACT_APP_BASE_URL;

export const fetchRandomImg = createAsyncThunk("img/random", async () => {
  const { data } = await axios.get(`${baseUrl}?key=${key}&ps=10`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  //   console.log("data", data.artObjects);

  return data.artObjects;
});

const initialState = {
  artObjects: {
    items: [],
  },
};

const gallerySlice = createSlice({
  name: "artObjects",
  initialState,
  reducers: {
    [fetchRandomImg.pending]: (state) => {
      state.artObjects.items = [];
    },
    [fetchRandomImg.fulfilled]: (state, action) => {
      state.artObjects.items = action.payload;
    },
    [fetchRandomImg.rejected]: (state) => {
      state.artObjects.items = [];
    },
  },
});

export const galleryReducer = gallerySlice.reducer;
