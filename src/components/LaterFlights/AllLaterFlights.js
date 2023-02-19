import React from "react";
import LaterFlights from "./LaterFlights";

function AllLaterFlights({ laterFlightsArrays }) {
  return (
    <div>
      {laterFlightsArrays.map((arr, index) => (
        <LaterFlights flightArray={arr} key={index} />
      ))}
    </div>
  );
}

export default AllLaterFlights;
