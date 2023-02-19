import axios from "axios";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import AircraftInformation from "../components/FlightDetailPage/AircraftInformation";
import ArrivalFlightInformation from "../components/FlightDetailPage/ArrivalFlightInformation";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { fetchDetailPageInfo } from "../redux/features/FlightsSlice";

function ArrivalsFlightDetailPage() {
  const location = useLocation();
  const { state } = useLocation();
  const id = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const [airline, setAirline] = useState("");

  const config = {
    headers: {
      Accept: "application/json",
      app_id: "47351075",
      app_key: "ac353dccbad2d1bd8549dc774c6c04bc",
      ResourceVersion: "v4",
    },
  };
  useEffect(() => {
    dispatch(fetchDetailPageInfo(id));
  }, []);
  const flight = useSelector((state) => state.flights.flight);

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
  const aircraftType = useSelector((state) => state.flights.aircraftType);

  //if (!flight) return null;
  return (
    <>
      <div className="bg-[#dbf0ef] min-h-[800px] ">
        <Navbar />
        <ArrivalFlightInformation
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

export default ArrivalsFlightDetailPage;
