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
  const id = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const [flight, setFlight] = useState([]);

  const config = {
    headers: {
      Accept: "application/json",
      app_id: "47351075",
      app_key: "ac353dccbad2d1bd8549dc774c6c04bc",
      ResourceVersion: "v4",
    },
  };
  // useEffect(() => {
  //   dispatch(fetchDetailPageInfo(id));
  // }, []);

  // const flight = useSelector((state) => state.flights.flight);

  useLayoutEffect(() => {
    const fetchFlightById = async () => {
      const response = await axios.get(
        `http://localhost:5000/public-flights/flights/${id}`,
        config
      );
      const data = await response.data;
      console.log(data);
      setFlight(data);
    };
    fetchFlightById();
  }, []);

  console.log(flight);
  return (
    <>
      <div className="bg-[#dbf0ef] min-h-[800px] ">
        <Navbar />
        <ArrivalFlightInformation flight={flight} />
        <AircraftInformation aircraft={flight} />
      </div>
      <Footer />
    </>
  );
}

export default ArrivalsFlightDetailPage;
