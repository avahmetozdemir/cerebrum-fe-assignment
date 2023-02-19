import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchEarlierArrivals,
  fetchLaterArrivals,
} from "../redux/features/FlightsSlice";
import AllEarlierFlights from "./EarlierFlights/AllEarlierFlights";
import FlightDetails from "./FlightDetails";
import AllLaterFlights from "./LaterFlights/AllLaterFlights";
import ShowFlightsButton from "./ShowFlightsButton";

function Flights({ flights }) {
  // const firstFlight = flights[0].scheduleDate;
  // const date = new Date(firstFlight);
  // const fligthDate = date.toISOString().slice(0, 10);
  // const now = new Date();
  // const today = now.toISOString().slice(0, 10);
  // const yesterdayDate = now.setDate(now.getDate() - 1);
  // console.log(yesterdayDate);
  // // const yesterday = yesterdayDate.toISOString().slice(0.1);

  // const tomorrowDate = now.setDate(now.getDate() + 1);
  // //const tomorrow = tomorrowDate.toISOString().slice(0, 10);

  // let day;
  // if (fligthDate === today) {
  //   day = "Today";
  // } else if (fligthDate === yesterday) {
  //   day = "Yesterday";
  // } else if (fligthDate === tomorrow) {
  //   day = "Tomorrow";
  // } else {
  //   day = fligthDate.toString().slice(0, 3);
  // }

  const dispatch = useDispatch();

  const laterFlightsArrays = useSelector((state) => state.flights.laterFlights);
  const [pageNumberForArrivalLater, setPageNumberForArrivalLater] = useState(0);
  const [pageNumberForArrivalEarlier, setPageNumberForArrivalEarlier] =
    useState(10);

  function laterFlightsHandler() {
    dispatch(fetchLaterArrivals(pageNumberForArrivalLater));
    setPageNumberForArrivalLater(pageNumberForArrivalLater + 1);
  }

  const earlierFlightsArray = useSelector(
    (state) => state.flights.earlierFlights
  );

  function earlierFlightsHandler() {
    dispatch(fetchEarlierArrivals(pageNumberForArrivalEarlier));
    setPageNumberForArrivalEarlier(pageNumberForArrivalEarlier - 1);
  }

  return (
    <div className="min-h-screen bg-slate-300 flex flex-col items-center">
      <div className="pt-10">
        <ShowFlightsButton
          onClickHandler={earlierFlightsHandler}
          type="earlier"
        />
        {earlierFlightsArray && (
          <AllEarlierFlights earlierFlightsArray={earlierFlightsArray} />
        )}
        <div className="flex flex-col space-y-2 my-2">
          {flights?.map((flight) => (
            <FlightDetails flight={flight} key={flight.id} />
          ))}
        </div>
        {laterFlightsArrays && (
          <AllLaterFlights laterFlightsArrays={laterFlightsArrays} />
        )}
        <ShowFlightsButton onClickHandler={laterFlightsHandler} type="later" />
      </div>
    </div>
  );
}

export default Flights;
