import React from "react";
import FlightDetails from "../FlightDetails";

function LaterFlights({ flightArray }) {
  return (
    <div className="mb-2">
      {flightArray.map((flight) => (
        <FlightDetails flight={flight} key={flight.id} />
      ))}
    </div>
  );
}

export default LaterFlights;
