import React from "react";
import EarlierFlights from "./EarlierFlights";

function AllEarlierFlights({ earlierFlightsArray }) {
  return (
    <div>
      {earlierFlightsArray.map((arr, index) => (
        <EarlierFlights flights={arr} key={index} />
      ))}
    </div>
  );
}

export default AllEarlierFlights;
