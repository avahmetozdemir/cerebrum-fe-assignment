import React from "react";
import { BiRun } from "react-icons/bi";
import { BsArrowRightShort } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

function ArrivalFlightInformation({ flight }) {
  const flightStates = {
    SCH: { state: "Flight scheduled", color: "#E2CE49" },
    AIR: { state: "Airbone", color: "#E2CE49" },
    EXP: { state: "Expect landing", color: "#627A9E" },
    FIR: { state: "Flight in Dutch airspace", color: "#E2CE49" },
    LND: { state: "Landed", color: "#627A9E" },
    FIB: { state: "FIBAG", color: "#E2CE49" },
    ARR: {
      state: "Arrived Flight has been completely handled",
      color: "#DA2626",
    },
    DIV: { state: "Diverted", color: "#DA2626" },
    CNX: { state: "Canceled", color: "#DA2626" },
    DEL: { state: "Delayed", color: "#DA2626" },
    WIL: { state: "Wait in Lounge", color: "#E2CE49" },
    GTO: { state: "Gate Open", color: "#627A9E" },
    BRD: { state: "Boarding", color: "#627A9E" },
    GCL: { state: "Gate Closing", color: "#627A9E" },
    GTD: { state: "Gate Closed", color: "#627A9E" },
    DEP: { state: "Departed", color: "#627A9E" },
    GCH: { state: "Gate Change", color: "#DA2626" },
    TOM: { state: "Tomorrow", color: "#627A9E" },
  };

  function findState(state) {
    if (state) {
      const stateValue = flightStates[state];
      return stateValue;
    } else {
      return null;
    }
  }
  // const publicFlightState = flight?.publicFlightState;

  //let baggageNumber = flight?.baggageClaim.belts[0];
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
            <p>Arrival time</p>
            <p className="font-semibold">08:50</p>
          </div>
          <div className="flex flex-col">
            <p>Arrivals</p>
            <p className="font-semibold">3</p>
          </div>
          <div className="flex flex-col">
            <p>Baggage belt</p>
            <p className="font-semibold">17</p>
          </div>
          <div className="flex flex-col">
            <p>Gate</p>
            {flight?.gate && (
              <div className="bg-yellow-500 rounded-lg">
                <p className="font-semibold p-1">B15</p>
              </div>
            )}
          </div>
        </div>
        <div className="bg-white rounded-lg mt-3 w-[700px] justify-start">
          <div className="px-4 py-2">
            <div className="flex space-x-4 py-2 border-b border-gray-200">
              <BiRun size={24} color="black" />
              <h3 className="font-semibold ">Departured</h3>
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

export default ArrivalFlightInformation;
