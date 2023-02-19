import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import AircraftInformation from "../components/FlightDetailPage/AircraftInformation";
import DepartureFlightInformation from "../components/FlightDetailPage/DepartureFlightInformation";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  fetchAircraftType,
  fetchDetailPageInfo,
} from "../redux/features/FlightsSlice";

function DeparturesFlightDetailPage() {
  const config = {
    headers: {
      Accept: "application/json",
      app_id: "47351075",
      app_key: "ac353dccbad2d1bd8549dc774c6c04bc",
      ResourceVersion: "v4",
    },
  };
  const [airline, setAirline] = useState("");

  const location = useLocation();
  const { state } = useLocation();
  const dispatch = useDispatch();
  const id = location.pathname.split("/")[2];
  useEffect(() => {
    dispatch(fetchDetailPageInfo(id));
  }, []);
  useEffect(() => {
    dispatch(
      fetchAircraftType({ iataMain: state?.iataMain, iataSub: state?.iataSub })
    );
  }, []);
  const fetchAirlinesName = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/public-flights/airlines/${state?.prefixIATA}`,
      config
    );
    const name = await data.publicName;
    setAirline(name);
  };
  useEffect(() => {
    fetchAirlinesName();
  }, []);

  const flight = useSelector((state) => state.flights.flight);
  const aircraftType = useSelector((state) => state.flights.aircraftType);
  //if (!flight) return null;

  return (
    <>
      <div className="bg-[#dbf0ef] min-h-[800px] ">
        <Navbar />
        <DepartureFlightInformation
          flight={flight}
          where={state?.destination}
          airline={airline}
        />
        <AircraftInformation
          aircraft={flight}
          aircraftType={aircraftType?.[0]?.longDescription}
        />
      </div>
      <Footer />
    </>
  );
}

export default DeparturesFlightDetailPage;
