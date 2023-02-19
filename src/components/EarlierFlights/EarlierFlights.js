import React from "react";
import FlightDetails from "../FlightDetails";

function EarlierFlights({ flights }) {
  return (
    <div>
      {flights.map((flight) => (
        <FlightDetails flight={flight} key={flight.id} />
      ))}
    </div>
  );
}

export default EarlierFlights;
