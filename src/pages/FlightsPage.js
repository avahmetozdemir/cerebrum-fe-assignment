import React from "react";
import FilterFlights from "../components/FilterFlights";
import FlightType from "../components/FlightType";
import Flights from "../components/Flights";
import Navbar from "../components/Navbar";

function FlightsPage() {
  return (
    <div className="">
      <Navbar />
      <FilterFlights />
      <FlightType />
      <Flights />
    </div>
  );
}

export default FlightsPage;
