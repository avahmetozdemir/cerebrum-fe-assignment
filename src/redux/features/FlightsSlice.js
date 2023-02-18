import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  flights: [],
  flightsLoaded: false,
  flight: null,
};

const config = {
  headers: {
    Accept: "application/json",
    app_id: "47351075",
    app_key: "ac353dccbad2d1bd8549dc774c6c04bc",
    ResourceVersion: "v4",
  },
};

// Fetch Arrival Flights
export const fetchArrivals = createAsyncThunk(
  "flights/todayArrival",
  async (pageNumber) => {
    const {
      data: { flights },
    } = await axios.get(
      `http://localhost:5000/public-flights/flights?flightDirection=A&includedelays=false&page=${pageNumber}&sort=%2BscheduleTime`,
      config
    );

    return flights;
  }
);

// Fetch departure Flights
export const fetchDepartures = createAsyncThunk(
  "flights/todayDeparture",
  async () => {
    const {
      data: { flights },
    } = await axios.get(
      "http://localhost:5000/public-flights/flights?flightDirection=D&includedelays=false&page=0&sort=%2BscheduleTime",
      config
    );
    return flights;
  }
);

//Fetch specific flight when detail page render
export const fetchDetailPageInfo = createAsyncThunk(
  "flights/flightDetail",
  async (id) => {
    const { data } = await axios.get(
      `http://localhost:5000/public-flights/flights/${id}`,
      config
    );
    return data;
  }
);

//Fetch earlier arrival flights and concat with current state
export const fetchEarlierArrivalFlights = createAsyncThunk(
  "flights/earlierFlights",
  async (from, to) => {
    const { data } = await axios.get(
      `https://localhost:5000/public-flights/flights?flightDirection=A&includedelays=false&page=0&sort=%2BscheduleTime&fromDateTime=${from}&toDateTime=${to}&searchDateTimeField=scheduleDateTime
`,
      config
    );
    return data;
  }
);

//fetch flights with date to filter by client
//TODO try with IATA code and give if statements
export const fetchByDate = createAsyncThunk(
  "flights/filterByDate",
  async ({ dateValue, type }) => {
    console.log("ONLY TIME FILTER", dateValue, type);
    const {
      data: { flights },
    } = await axios.get(
      `http://localhost:5000/public-flights/flights?scheduleDate=${dateValue}&flightDirection=${type}&includedelays=false&page=0&sort=%2BscheduleTime
  `,
      config
    );
    return flights;
  }
);

//fetch flights by IATA code

export const fetchByIATACode = createAsyncThunk(
  "flights/filterByIATACode",
  async ({ dateValue, IATACode, type }) => {
    console.log("TIME AND IATA FILTER", dateValue, IATACode, type);
    const {
      data: { flights },
    } = await axios.get(
      `http://localhost:5000/public-flights/flights?scheduleDate=${dateValue}&flightDirection=${type}&route=${IATACode}&includedelays=false&page=0&sort=%2BscheduleTime
    `,
      config
    );
    console.log(flights);
    return flights;
  }
);

const FlightSlice = createSlice({
  name: "Flights",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchArrivals.fulfilled, (state, action) => {
      state.flights = action.payload;
    });
    builder.addCase(fetchDepartures.fulfilled, (state, action) => {
      state.flights = action.payload;
      state.flightsLoaded = true;
    });
    builder.addCase(fetchDetailPageInfo.fulfilled, (state, action) => {
      state.flight = action.payload;
    });
    builder.addCase(fetchByDate.fulfilled, (state, action) => {
      state.flights = action.payload;
    });
    builder.addCase(fetchByIATACode.fulfilled, (state, action) => {
      state.flights = action.payload;
    });
  },
});

export const {} = FlightSlice.actions;

export default FlightSlice.reducer;
