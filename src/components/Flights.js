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
  //Fetching data from that date time

  //for earlier
  const firstFlightOfFlightsArray = flights?.[0]?.scheduleDateTime;
  const willBeChangedTime = firstFlightOfFlightsArray?.slice(0, 19);
  let focusDateTime;
  if (willBeChangedTime) {
    focusDateTime = new Date(willBeChangedTime);
  }

  const makeOneHourBefore = addHours(focusDateTime, 2);
  const to = willBeChangedTime;
  const from = makeOneHourBefore?.toISOString()?.slice(0, 19);
  console.log("from:" + from, "to:" + to);
  ////
  //for later
  const lastFlightOfFlightsArray = flights?.slice(-1);
  const lastItemScheduleDateTime =
    lastFlightOfFlightsArray?.[0]?.scheduleDateTime;
  const focusTimeAsString = lastItemScheduleDateTime?.slice(0, 19);
  let laterFocusDateTime;
  if (focusTimeAsString) {
    laterFocusDateTime = new Date(focusTimeAsString);
  }
  const makeOneHourLater = addHours(laterFocusDateTime, 4);

  const toOfLater = makeOneHourLater?.toISOString()?.slice(0, 19);
  const dispatch = useDispatch();

  function addHours(date, hours) {
    date?.setHours(date.getHours() + hours);

    return date;
  }

  function minusHours(date, hours) {
    date?.setHours(date.getHours() - hours);

    return date;
  }
  const [pageNumberForArrivalLater, setPageNumberForArrivalLater] = useState(0);
  const [pageNumberForArrivalEarlier, setPageNumberForArrivalEarlier] =
    useState(5);

  function laterFlightsHandler() {
    dispatch(
      fetchLaterArrivals({
        pageNumber: pageNumberForArrivalLater,
        from: focusTimeAsString,
        to: toOfLater,
      })
    );
    setPageNumberForArrivalLater(pageNumberForArrivalLater + 1);
  }

  function earlierFlightsHandler(from, to) {
    console.log(from, to);
    dispatch(
      fetchEarlierArrivals({
        pageNumber: pageNumberForArrivalEarlier,
        from: from,
        to: to,
      })
    );
    if (pageNumberForArrivalEarlier >= 0) {
      setPageNumberForArrivalEarlier(pageNumberForArrivalEarlier - 1);
    }
  }

  const random = Math.floor(Math.random() * 100);

  return (
    <div className="min-h-screen bg-slate-300 flex flex-col items-center">
      <div className="pt-10">
        <ShowFlightsButton
          onClickHandler={() => earlierFlightsHandler(from, to)}
          type="earlier"
        />

        <div className="flex flex-col space-y-2 my-2">
          {flights?.map((flight, index) => (
            <FlightDetails flight={flight} key={index} />
          ))}
        </div>

        <ShowFlightsButton onClickHandler={laterFlightsHandler} type="later" />
      </div>
    </div>
  );
}

export default Flights;
