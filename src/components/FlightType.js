import React from "react";
import { Link } from "react-router-dom";

function FlightType({ path }) {
  return (
    <div className="flex justify-center mb-[1px]">
      <div className="w-[900px] text-blue-500 text-xl flex space-x-2">
        <div className="hover:bg-blue-600 hover:text-white cursor-pointer">
          <Link to="/departures">
            {" "}
            <h1 className="py-2 px-5">Departures</h1>
          </Link>
        </div>
        <div className="hover:bg-blue-600 hover:text-white cursor-pointer">
          <Link to="/arrivals">
            {" "}
            <h1 className="py-2 px-5">Arrivals</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FlightType;
