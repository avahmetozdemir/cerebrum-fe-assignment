import axios from "axios";
import React, { useEffect, useState } from "react";
import { HiArrowSmRight } from "react-icons/hi";
function FlightDetails({ flight }) {
  const { scheduleTime, route, codeshares, publicFlightState } = flight;
  const [where, setWhere] = useState([]);

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
    const stateValue = flightStates[state];
    return stateValue;
  }

  const config = {
    headers: {
      Accept: "application/json",
      app_id: "47351075",
      app_key: "ac353dccbad2d1bd8549dc774c6c04bc",
      ResourceVersion: "v4",
    },
  };

  const fetchDestination = async () => {
    const response = await axios.get(
      `http://localhost:5000/public-flights/destinations/${route.destinations[0]}`,
      config
    );
    const data = await response.data;
    setWhere(data.city);
  };
  useEffect(() => {
    fetchDestination();
  }, []);

  return (
    <div className="w-[900px] h-[150px] min-h-[80px] cursor-pointer bg-white">
      <div className="flex flex-col space-y-4 py-2 px-4">
        <div className="flex justify-between ">
          <div className="flex justify-start ">
            <h1>{scheduleTime.slice(0, 5)}</h1>
          </div>
          <div className="border-dashed border-r-2 h-[75px]"></div>
          <div className="">
            <h1>
              {where} {route.destinations[0]}
            </h1>
          </div>
          <div className="border-dashed border-r-2 h-[80px]"></div>
          <div className="">
            <div
              className={`text-[${
                findState(publicFlightState.flightStates[0]).color
              }] h-7 `}
            >
              <h3 className=" text-[12px] font-medium p-1">
                {findState(publicFlightState.flightStates[0]).state}
              </h3>
            </div>
          </div>
          <div className="border-dashed border-r-2 h-[80px]"></div>

          <div className="flex space-x-1 justify-end">
            <h3 className="text-blue-500 ">Details</h3>
            <HiArrowSmRight size={20} color="#3B82F6" />
          </div>
        </div>
        {codeshares && (
          <div className=" border-dashed border-t-2">
            <h3 className="pt-2">
              Also known as:{" "}
              {codeshares.codeshares.map((code, index) => (
                <span key={index}>
                  {code.slice(0, 2)} {code.slice(2, code.length)} /{" "}
                </span>
              ))}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default FlightDetails;
