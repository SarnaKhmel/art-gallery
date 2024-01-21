import { configureStore } from "@reduxjs/toolkit";
import { galleryReducer } from "./slices/randomImg";
const store = configureStore({
  reducer: {
    galleryReducer: galleryReducer,
  },
});

export default store;
