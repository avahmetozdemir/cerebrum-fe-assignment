import React, { useEffect } from "react";
import FilterFlights from "../components/FilterFlights";
import FlightType from "../components/FlightType";
import Flights from "../components/Flights";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodayArrival } from "../redux/features/FlightsSlice";

function ArrivalsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodayArrival());
  }, [dispatch]);

  const flights = useSelector((state) => state.flights.flights);

  return (
    <>
      <Navbar />
      <FilterFlights pageType="arriving" />
      <FlightType />
      <Flights flights={flights} />
      <Footer />
    </>
  );
}

export default ArrivalsPage;
