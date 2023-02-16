import axios from "axios";
import React, { useEffect, useState } from "react";
import FlightDetails from "./FlightDetails";
import ShowFlightsButton from "./ShowFlightsButton";

// const flights = [
//   {
//     when: "13:05",
//     where: "Los Angeles",
//     destinations: "(LAX)",
//     knownAs: "AF 8246 / DL 9170 / VS 6842",
//     situation: "NOW BOARDING",
//   },
//   {
//     when: "13:05",
//     where: "Los Angeles",
//     destinations: "(LAX)",
//     knownAs: "AF 8246 / DL 9170 / VS 6842",
//     situation: "GATE CHANGE",
//   },
//   {
//     when: "13:05",
//     where: "Los Angeles",
//     destinations: "(LAX)",
//     knownAs: "AF 8246 / DL 9170 / VS 6842",
//     situation: "WAIT IN LOUNGE",
//   },
//   {
//     when: "13:05",
//     where: "Los Angeles",
//     destinations: "(LAX)",
//     knownAs: "AF 8246 / DL 9170 / VS 6842",
//     situation: "GATE CLOSED",
//   },
//   {
//     when: "13:05",
//     where: "Los Angeles",
//     destinations: "(LAX)",
//     knownAs: "AF 8246 / DL 9170 / VS 6842",
//     situation: "GATE CLOSING",
//   },
//   {
//     when: "13:05",
//     where: "Los Angeles",
//     destinations: "(LAX)",
//     knownAs: "AF 8246 / DL 9170 / VS 6842",
//     situation: "GATE OPEN",
//   },
//   {
//     when: "13:05",
//     where: "Los Angeles",
//     destinations: "(LAX)",
//     knownAs: "AF 8246 / DL 9170 / VS 6842",
//     situation: "NOW BOARDING",
//   },
//   {
//     when: "13:05",
//     where: "Los Angeles",
//     destinations: "(LAX)",
//     knownAs: "AF 8246 / DL 9170 / VS 6842",
//     situation: "GATE CHANGE",
//   },
//   {
//     when: "13:05",
//     where: "Los Angeles",
//     destinations: "(LAX)",
//     knownAs: "AF 8246 / DL 9170 / VS 6842",
//     situation: "WAIT IN LOUNGE",
//   },
//   {
//     when: "13:05",
//     where: "Los Angeles",
//     destinations: "(LAX)",
//     knownAs: "AF 8246 / DL 9170 / VS 6842",
//     situation: "GATE OPEN",
//   },
//   {
//     when: "13:05",
//     where: "Los Angeles",
//     destinations: "(LAX)",
//     knownAs: "AF 8246 / DL 9170 / VS 6842",
//     situation: "NOW BOARDING",
//   },
//   {
//     when: "13:05",
//     where: "Los Angeles",
//     destinations: "(LAX)",
//     knownAs: "AF 8246 / DL 9170 / VS 6842",
//     situation: "GATE CHANGE",
//   },
// ];

function Flights() {
  const [flights, setFlights] = useState([]);
  const config = {
    headers: {
      Accept: "application/json",
      app_id: "47351075",
      app_key: "ac353dccbad2d1bd8549dc774c6c04bc",
      ResourceVersion: "v4",
    },
  };

  const fetchFlights = async () => {
    const response = await axios.get(
      "http://localhost:5000/public-flights/flights?includedelays=false&page=1&sort=%2BscheduleTime",
      config
    );
    const data = await response.data;
    setFlights(data.flights);
  };

  useEffect(() => {
    fetchFlights();
  }, []);
  return (
    <div className="min-h-screen bg-slate-300 flex flex-col items-center">
      <div className="pt-10">
        <ShowFlightsButton type="earlier" />
        <div className="flex flex-col space-y-2">
          {flights.map((flight) => (
            <FlightDetails flight={flight} key={flight.id} />
          ))}
        </div>
        <ShowFlightsButton type="later" />
      </div>
    </div>
  );
}

export default Flights;
