import axios from "axios";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AircraftInformation from "../components/FlightDetailPage/AircraftInformation";
import FlightInformation from "../components/FlightDetailPage/FlightInformation";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function ArrivalsFlightDetailPage() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const config = {
    headers: {
      Accept: "application/json",
      app_id: "47351075",
      app_key: "ac353dccbad2d1bd8549dc774c6c04bc",
      ResourceVersion: "v4",
    },
  };

  const fetchFlightDetail = async () => {
    const response = await axios.get(
      `http://localhost:5000/public-flights/flights/${id}`,
      config
    );
    const data = await response.data;
    console.log(data);
  };

  useEffect(() => {
    fetchFlightDetail();
  }, []);

  return (
    <>
      <div className="bg-[#dbf0ef] min-h-[800px] ">
        <Navbar />
        <FlightInformation />
        <AircraftInformation />
      </div>
      <Footer />
    </>
  );
}

export default ArrivalsFlightDetailPage;
