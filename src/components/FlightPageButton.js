import React from "react";
import { Link } from "react-router-dom";

function FlightPageButton() {
  return (
    <div className="flex justify-center">
      <div className="w-[800px] flex flex-col justify-center mt-5">
        <h3 className="text-center text-3xl font-semibold mb-5">
          Welcome to Esenboğa Airport
        </h3>
        <div className="flex justify-center space-x-5">
          <Link to="/arrivals">
            <div className="border border-white bg-black">
              <h3 className="text-center px-4 py-2 text-white cursor-pointer">
                Arrivals
              </h3>
            </div>
          </Link>
          <Link to="/departures">
            <div className="border border-white bg-black">
              <h3 className="text-center px-4 py-2 text-white cursor-pointer">
                Departures
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FlightPageButton;
