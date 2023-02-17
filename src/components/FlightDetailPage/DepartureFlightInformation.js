import React from "react";
import { BiRun } from "react-icons/bi";
import { BsArrowRightShort } from "react-icons/bs";

function DepartureFlightInformation({ flight }) {
  console.log(flight);
  const { scheduleTime, route, codeshares, publicFlightState, id } = flight;
  return (
    <div className="flex justify-center">
      <div className="w-[800px] mt-4">
        <div className="flex flex-col -space-y-1">
          <h3 className="text-[25px]">HV 735 to</h3>
          <h1 className="text-pink-600 text-[55px] font-semibold">Kittlila</h1>
          <h2 className="text-[30px] font-medium">
            Havayolu Ismi <span>(KAO)</span>
          </h2>
        </div>
        <div className="flex justify-between mt-2">
          <div className="flex flex-col">
            <p>Date</p>
            <p className="font-semibold">17 Feb</p>
          </div>
          <div className="flex flex-col">
            <p>Departure time</p>
            <p className="font-semibold">08:50</p>
          </div>
          <div className="flex flex-col">
            <p>Departures</p>
            <p className="font-semibold">1</p>
          </div>
          <div className="flex flex-col">
            <p>Check-in Desk</p>
            <p className="font-semibold">4</p>
          </div>
          <div className="flex flex-col">
            <p>Gate</p>
            <div className="bg-yellow-500 rounded-lg">
              <p className="font-semibold p-1">B15</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg mt-3 w-[700px] justify-start">
          <div className="px-4 py-2">
            <div className="flex space-x-4 py-2 border-b border-gray-200">
              <BiRun size={24} color="black" />
              <h3 className="font-semibold ">Gate closing</h3>
            </div>
            <div className="flex py-2 space-x-1 cursor-pointer">
              <h3 className="text-blue-500 underline">
                Receive updates on this flight
              </h3>
              <BsArrowRightShort size={24} color="#3B82F6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DepartureFlightInformation;
