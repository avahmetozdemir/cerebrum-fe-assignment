import React, { useEffect } from "react";
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

  useEffect(() => {
    dispatch(fetchDetailPageInfo(id));
  }, []);

  const flight = useSelector((state) => state.flights.flight);

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
