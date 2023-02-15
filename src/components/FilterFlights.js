import React from "react";
import flight from "../assets/flights.svg";
import { ImSearch } from "react-icons/im";

function FilterFlights() {
  return (
    <div className="flex items-center justify-center mb-6">
      <div className="w-[900px]">
        <div className="flex justify-between">
          <div className="flex flex-col -space-y-4 font-bold text-[50px] ">
            <h1>Find a</h1>
            {/* TODO- departing will be change according to choose of client with arriving */}
            <h1>departing</h1>
            <h1>flight</h1>
          </div>
          <img src={flight} alt="" className="w-[400px] h-[250px]" />
        </div>
        <div className="flex space-x-4">
          <select
            name="day"
            id=""
            className="bg-white border border-gray-300 py-2 px-4 outline-none"
          >
            <option value="yesterday">Yesterday</option>
            <option value="today">Today</option>
            <option value="tomorrow">Tomorrow</option>
          </select>
          <div className="flex w-[300px] justify-between border border- p-2">
            <input
              type="text"
              name=""
              id=""
              className="outline-none"
              placeholder="Enter destination,flight number or airline"
            />
            <div className="flex items-center cursor-pointer">
              <ImSearch size={20} color="#0891B2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterFlights;
