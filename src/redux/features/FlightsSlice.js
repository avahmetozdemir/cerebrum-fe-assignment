import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const FlightSlice = createSlice({
  name: "Netflix",
  initialState,
  extraReducers: (builder) => {},
});

export const { setGenres, setMovies } = FlightSlice.actions;

export default FlightSlice.reducer;
