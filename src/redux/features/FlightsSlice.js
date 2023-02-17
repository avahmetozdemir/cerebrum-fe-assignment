import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  flights: [],
  flightsLoaded: false,
};

const config = {
  headers: {
    Accept: "application/json",
    app_id: "47351075",
    app_key: "ac353dccbad2d1bd8549dc774c6c04bc",
    ResourceVersion: "v4",
  },
};

// Fetch Default Today Arrival Flights
export const fetchTodayArrival = createAsyncThunk(
  "flights/todayArrival",
  async () => {
    const {
      data: { flights },
    } = await axios.get(
      "http://localhost:5000/public-flights/flights?flightDirection=A&includedelays=false&page=1&sort=%2BscheduleTime",
      config
    );

    return flights;
  }
);

// Fetch Default Today Arrival Flights
export const fetchTodayDeparture = createAsyncThunk(
  "flights/todayDeparture",
  async () => {
    const {
      data: { flights },
    } = await axios.get(
      "http://localhost:5000/public-flights/flights?flightDirection=D&includedelays=false&page=1&sort=%2BscheduleTime",
      config
    );

    return flights;
  }
);

const FlightSlice = createSlice({
  name: "Flights",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTodayArrival.fulfilled, (state, action) => {
      state.flights = action.payload;
      state.flightsLoaded = true;
    });
    builder.addCase(fetchTodayDeparture.fulfilled, (state, action) => {
      state.flights = action.payload;
      state.flightsLoaded = true;
    });
  },
});

export const {} = FlightSlice.actions;

export default FlightSlice.reducer;
