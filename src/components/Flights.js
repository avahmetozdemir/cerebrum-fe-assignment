import React, { useState } from "react";
import FlightDetails from "./FlightDetails";
import ShowFlightsButton from "./ShowFlightsButton";

function Flights({ flights }) {
  return (
    <div className="min-h-screen bg-slate-300 flex flex-col items-center">
      <div className="pt-10">
        <ShowFlightsButton type="earlier" />
        <div className="flex flex-col space-y-2">
          {flights?.map((flight) => (
            <FlightDetails flight={flight} key={flight.id} />
          ))}
        </div>
        <ShowFlightsButton type="later" />
      </div>
    </div>
  );
}

export default Flights;
