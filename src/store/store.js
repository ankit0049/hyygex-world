import { configureStore } from "@reduxjs/toolkit";
import { detailReducers } from "../details/detailsSlice";
export const store = configureStore({

  reducer: {
    detail: detailReducers,
  },
});
