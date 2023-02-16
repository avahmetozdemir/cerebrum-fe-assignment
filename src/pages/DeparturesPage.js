import React from "react";
import FilterFlights from "../components/FilterFlights";
import FlightType from "../components/FlightType";
import Flights from "../components/Flights";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function DeparturesPage() {
  return (
    <div className="">
      <Navbar />
      <FilterFlights pageType="departing" />
      <FlightType />
      <Flights />
      <Footer />
    </div>
  );
}

export default DeparturesPage;
