import React from "react";
import { HiArrowSmRight } from "react-icons/hi";
function FlightDetails({ flight }) {
  const { when, where, destinations, knownAs, situation } = flight;

  let situationColor;
  if (situation === "GATE CHANGE" || situation === "DELAYED") {
    situationColor = "bg-red-500";
  } else if (situation === "WAIT IN LOUNGE") {
    situationColor = "bg-yellow-500";
  } else {
    situationColor = "bg-blue-500";
  }

  return (
    <div className="w-[900px] h-[150px] min-h-[80px] cursor-pointer bg-white">
      <div className="flex flex-col space-y-4 py-2 px-4">
        <div className="flex justify-between ">
          <div className="flex justify-start ">
            <h1>{when}</h1>
          </div>
          <div className="border-dashed border-r-2 h-[75px]"></div>
          <div className="">
            <h1>
              {where} {destinations}
            </h1>
          </div>
          <div className="border-dashed border-r-2 h-[80px]"></div>
          <div className="">
            <div className={`${situationColor} h-7 `}>
              <h3 className="text-white text-[12px] font-medium p-1">
                {situation}
              </h3>
            </div>
          </div>
          <div className="border-dashed border-r-2 h-[80px]"></div>

          <div className="flex space-x-1 justify-end">
            <h3 className="text-blue-500 ">Details</h3>
            <HiArrowSmRight size={20} color="#3B82F6" />
          </div>
        </div>
        {knownAs && (
          <div className=" border-dashed border-t-2">
            <h3 className="pt-2">
              Also known as: <span>{knownAs}</span>
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default FlightDetails;
