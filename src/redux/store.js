import { configureStore } from "@reduxjs/toolkit";
import FlightsReducer from "./features/FlightsSlice";

export const store = configureStore({
  reducer: {
    flights: FlightsReducer,
  },
});
