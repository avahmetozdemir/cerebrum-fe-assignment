import React, { useState } from "react";
import flight from "../assets/flights.svg";
import { ImSearch } from "react-icons/im";
import { useDispatch } from "react-redux";
import { fetchByDate, fetchByIATACode } from "../redux/features/FlightsSlice";
import { useLocation } from "react-router-dom";

function FilterFlights({ pageType }) {
  const [IATACode, setIATACode] = useState("");
  const [dateFilterTime, setDateFilterTime] = useState("");
  const location = useLocation();
  const type = location.pathname.split("/")[1];

  const dispatch = useDispatch();

  function getNewDateForValue(number, type) {
    let now = new Date();
    if (type === "increase") {
      now.setDate(now.getDate() + number);
    } else if (type === "decrease") {
      now.setDate(now.getDate() - number);
    } else {
      now = new Date();
    }
    return now.toISOString().slice(0, 10);
  }

  function getNewDateForName(number) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let now = new Date();
    now.setDate(now.getDate() + number);
    return `${now.getDate()} ${monthNames[now.getMonth()]}`;
  }

  function sendParamsToFetchFilteredData() {
    if (type === "arrivals") {
      dispatch(
        fetchByIATACode({
          dateValue: dateFilterTime,
          IATACode: IATACode,
          type: "A",
        })
      );
    } else if (type === "departures") {
      dispatch(
        fetchByIATACode({
          dateValue: dateFilterTime,
          IATACode: IATACode,
          type: "D",
        })
      );
    }
  }

  function fetchFlightsByDate(e) {
    setDateFilterTime(e.target.value);

    if (IATACode === "") {
      if (type === "arrivals") {
        dispatch(fetchByDate({ dateValue: e.target.value, type: "A" }));
      } else if (type === "departures") {
        dispatch(fetchByDate({ dateValue: e.target.value, type: "D" }));
      }
    }
  }

  return (
    <div className="flex items-center justify-center mb-6">
      <div className="w-[900px]">
        <div className="flex justify-between">
          <div className="flex flex-col -space-y-4 font-bold text-[50px] ">
            <h1>Find a</h1>
            {/* TODO- departing will be change according to choose of client with arriving */}
            <h1>{pageType}</h1>
            <h1>flight</h1>
          </div>
          <img src={flight} alt="" className="w-[400px] h-[250px]" />
        </div>
        <div className="flex space-x-4">
          <select
            name="day"
            defaultValue={`${getNewDateForValue(0, "today")}`}
            id=""
            onChange={(e) => fetchFlightsByDate(e)}
            className="bg-white border border-gray-300 py-2 px-4 outline-none"
          >
            <option value={`${getNewDateForValue(1, "decrease")}`}>
              Yesterday
            </option>
            <option value={`${getNewDateForValue(0, "today")}`}>Today</option>
            <option value={`${getNewDateForValue(1, "increase")}`}>
              Tomorrow
            </option>
            <option value={`${getNewDateForValue(2, "increase")}`}>
              {getNewDateForName(2)}
            </option>
            <option value={`${getNewDateForValue(3, "increase")}`}>
              {getNewDateForName(3)}
            </option>
            <option value={`${getNewDateForValue(4, "increase")}`}>
              {getNewDateForName(4)}
            </option>
            <option value={`${getNewDateForValue(5, "increase")}`}>
              {getNewDateForName(5)}
            </option>
            <option value={`${getNewDateForValue(6, "increase")}`}>
              {getNewDateForName(6)}
            </option>
            <option value={`${getNewDateForValue(7, "increase")}`}>
              {getNewDateForName(7)}
            </option>
            <option value={`${getNewDateForValue(8, "increase")}`}>
              {getNewDateForName(8)}
            </option>
            <option value={`${getNewDateForValue(9, "increase")}`}>
              {getNewDateForName(9)}
            </option>
            <option value={`${getNewDateForValue(10, "increase")}`}>
              {getNewDateForName(10)}
            </option>
            <option value={`${getNewDateForValue(11, "increase")}`}>
              {getNewDateForName(11)}
            </option>
            <option value={`${getNewDateForValue(12, "increase")}`}>
              {getNewDateForName(12)}
            </option>
            <option value={`${getNewDateForValue(13, "increase")}`}>
              {getNewDateForName(13)}
            </option>
            <option value={`${getNewDateForValue(14, "increase")}`}>
              {getNewDateForName(14)}
            </option>
            <option value={`${getNewDateForValue(15, "increase")}`}>
              {getNewDateForName(15)}
            </option>
            <option value={`${getNewDateForValue(16, "increase")}`}>
              {getNewDateForName(16)}
            </option>
            <option value={`${getNewDateForValue(17, "increase")}`}>
              {getNewDateForName(17)}
            </option>
            <option value={`${getNewDateForValue(18, "increase")}`}>
              {getNewDateForName(18)}
            </option>
            <option value={`${getNewDateForValue(19, "increase")}`}>
              {getNewDateForName(19)}
            </option>
            <option value={`${getNewDateForValue(20, "increase")}`}>
              {getNewDateForName(20)}
            </option>
            <option value={`${getNewDateForValue(21, "increase")}`}>
              {getNewDateForName(21)}
            </option>
            <option value={`${getNewDateForValue(22, "increase")}`}>
              {getNewDateForName(22)}
            </option>
            <option value={`${getNewDateForValue(23, "increase")}`}>
              {getNewDateForName(23)}
            </option>
          </select>
          <div className="flex w-[320px] justify-between border border- p-2">
            <input
              type="text"
              value={IATACode}
              onChange={(e) => setIATACode(e.target.value)}
              className="outline-none w-[275px]"
              placeholder="Enter destination IATA code like AGP"
            />
            <div
              onClick={sendParamsToFetchFilteredData}
              className="flex items-center cursor-pointer"
            >
              <ImSearch size={20} color="#0891B2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterFlights;
