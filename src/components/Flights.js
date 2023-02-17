import axios from "axios";
import React, { useEffect, useState } from "react";
import FlightDetails from "./FlightDetails";
import ShowFlightsButton from "./ShowFlightsButton";

function Flights({ flights }) {
  const config = {
    headers: {
      Accept: "application/json",
      app_id: "47351075",
      app_key: "ac353dccbad2d1bd8549dc774c6c04bc",
      ResourceVersion: "v4",
    },
  };

  const fetchFlights = async () => {
    const response = await axios.get(
      "http://localhost:5000/public-flights/flights?includedelays=false&page=1&sort=%2BscheduleTime",
      config
    );
    const data = await response.data;
  };

  useEffect(() => {
    fetchFlights();
  }, []);
  return (
    <div className="min-h-screen bg-slate-300 flex flex-col items-center">
      <div className="pt-10">
        <ShowFlightsButton type="earlier" />
        <div className="flex flex-col space-y-2">
          {flights.map((flight) => (
            <FlightDetails flight={flight} key={flight.id} />
          ))}
        </div>
        <ShowFlightsButton type="later" />
      </div>
    </div>
  );
}

export default Flights;
