import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  flights: [],
  flight: null,
  aircraftType: [],
  airlineName: null,
};

const config = {
  headers: {
    Accept: "application/json",
    app_id: "47351075",
    app_key: "ac353dccbad2d1bd8549dc774c6c04bc",
    ResourceVersion: "v4",
  },
};

//Fetching data from that date time
function addHours(date, hours) {
  date.setHours(date.getHours() + hours);

  return date;
}

const now = new Date();

const makeTwoHoursLater = addHours(now, 2);
const twoHoursLater = makeTwoHoursLater.toISOString().slice(0, 19);

const makeThreeHoursLater = addHours(now, 1);
const threeHoursLater = makeThreeHoursLater.toISOString().slice(0, 19);

const makeFourHoursLater = addHours(now, 1);
const fourHoursLater = makeFourHoursLater.toISOString().slice(0, 19);

const makeFiveHoursLater = addHours(now, 5);
const fiveHoursLater = makeFiveHoursLater.toISOString().slice(0, 19);
console.log(threeHoursLater, fourHoursLater);
// Fetch Arrival Flights
export const fetchArrivals = createAsyncThunk(
  "flights/todayArrival",
  async () => {
    const {
      data: { flights },
    } = await axios.get(
      `http://localhost:5000/public-flights/flights?flightDirection=A&includedelays=false&page=0&sort=%2BscheduleTime&fromDateTime=${threeHoursLater}&toDateTime=${fourHoursLater}&searchDateTimeField=scheduleDateTime`,
      config
    );

    return flights;
  }
);

//Fetch Later Arrivals Flights

export const fetchLaterArrivals = createAsyncThunk(
  "flights/laterArrival",
  async ({ pageNumber, from, to }) => {
    const {
      data: { flights },
    } = await axios.get(
      `http://localhost:5000/public-flights/flights?flightDirection=A&includedelays=false&page=${pageNumber}&sort=%2BscheduleTime&fromDateTime=${from}&toDateTime=${to}&searchDateTimeField=scheduleDateTime`,
      config
    );

    return flights;
  }
);

//Fetch earlier Arrivals Flights

export const fetchEarlierArrivals = createAsyncThunk(
  "flights/earlierArrival",
  async ({ pageNumber, from, to }) => {
    console.log(pageNumber, from, to);
    const {
      data: { flights },
    } = await axios.get(
      `http://localhost:5000/public-flights/flights?flightDirection=A&includedelays=false&page=${pageNumber}&sort=%2BscheduleTime&fromDateTime=${from}&toDateTime=${to}&searchDateTimeField=scheduleDateTime`,
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
      `http://localhost:5000/public-flights/flights?flightDirection=D&includedelays=false&page=0&sort=%2BscheduleTime&fromDateTime=${threeHoursLater}&toDateTime=${fourHoursLater}&searchDateTimeField=scheduleDateTime`,
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

//fetch aircraft type
export const fetchAircraftType = createAsyncThunk(
  "flights/aircraftType",
  async ({ iataMain, iataSub }) => {
    const {
      data: { aircraftTypes },
    } = await axios.get(
      `http://localhost:5000/public-flights/aircrafttypes?iataMain=${iataMain}&iataSub=${iataSub}&page=0&sort=%2BiataMain
      `,
      config
    );
    return aircraftTypes;
  }
);

//fetch airline name
export const fetchAirlineName = createAsyncThunk(
  "flights/airlineName",
  async (IATA) => {
    const { data } = await axios.get(
      `http://localhost5000/public-flights/airlines/${IATA}`,
      config
    );
    return data;
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
    builder.addCase(fetchLaterArrivals.fulfilled, (state, action) => {
      state.flights = [...state.flights, ...action.payload];
    });
    builder.addCase(fetchEarlierArrivals.fulfilled, (state, action) => {
      state.flights = [...action.payload, ...state.flights];
    });
    builder.addCase(fetchAircraftType.fulfilled, (state, action) => {
      state.aircraftType = action.payload;
    });
    builder.addCase(fetchAirlineName.fulfilled, (state, action) => {
      state.airlineName = action.payload;
    });
  },
});

export const {} = FlightSlice.actions;

export default FlightSlice.reducer;
