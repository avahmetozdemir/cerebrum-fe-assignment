import React, { useEffect } from "react";
import FilterFlights from "../components/FilterFlights";
import FlightType from "../components/FlightType";
import Flights from "../components/Flights";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchDepartures } from "../redux/features/FlightsSlice";

function DeparturesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDepartures());
  }, [dispatch]);

  const flights = useSelector((state) => state.flights.flights);

  return (
    <>
      <Navbar />
      <FilterFlights pageType="departing" />
      <FlightType />
      <Flights flights={flights} />
      <Footer />
    </>
  );
}

export default DeparturesPage;
