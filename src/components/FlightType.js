import React from "react";

function FlightType() {
  return (
    <div className="flex justify-center mb-[1px]">
      <div className="w-[900px] text-blue-500 text-xl flex space-x-2">
        <div className="font-semibold border-b-2 border-blue-600 ">
          <h1 className="py-2 px-5">Departures</h1>
        </div>
        <div className="hover:bg-blue-600 hover:text-white cursor-pointer">
          <h1 className="py-2 px-5">Arrivals</h1>
        </div>
      </div>
    </div>
  );
}

export default FlightType;
