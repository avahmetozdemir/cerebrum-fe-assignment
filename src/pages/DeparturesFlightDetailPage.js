import axios from "axios";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AircraftInformation from "../components/FlightDetailPage/AircraftInformation";
import DepartureFlightInformation from "../components/FlightDetailPage/DepartureFlightInformation";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function DeparturesFlightDetailPage() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  return (
    <>
      <div className="bg-[#dbf0ef] min-h-[800px] ">
        <Navbar />
        <DepartureFlightInformation />
        <AircraftInformation />
      </div>
      <Footer />
    </>
  );
}

export default DeparturesFlightDetailPage;
