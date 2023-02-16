import React from "react";
import FilterFlights from "../components/FilterFlights";
import FlightType from "../components/FlightType";
import Flights from "../components/Flights";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ArrivalsPage() {
  return (
    <div className="">
      <Navbar />
      <FilterFlights pageType="arriving" />
      <FlightType />
      <Flights />
      <Footer />
    </div>
  );
}

export default ArrivalsPage;