import React from "react";
import FlightDetails from "./FlightDetails";
import ShowFlightsButton from "./ShowFlightsButton";

const flights = [
  {
    when: "13:05",
    where: "Los Angeles",
    destinations: "(LAX)",
    knownAs: "AF 8246 / DL 9170 / VS 6842",
    situation: "GATE CLOSED",
  },
  {
    when: "13:05",
    where: "Los Angeles",
    destinations: "(LAX)",
    knownAs: "AF 8246 / DL 9170 / VS 6842",
    situation: "GATE CLOSING",
  },
  {
    when: "13:05",
    where: "Los Angeles",
    destinations: "(LAX)",
    knownAs: "AF 8246 / DL 9170 / VS 6842",
    situation: "GATE OPEN",
  },
  {
    when: "13:05",
    where: "Los Angeles",
    destinations: "(LAX)",
    knownAs: "AF 8246 / DL 9170 / VS 6842",
    situation: "NOW BOARDING",
  },
  {
    when: "13:05",
    where: "Los Angeles",
    destinations: "(LAX)",
    knownAs: "AF 8246 / DL 9170 / VS 6842",
    situation: "GATE CHANGE",
  },
  {
    when: "13:05",
    where: "Los Angeles",
    destinations: "(LAX)",
    knownAs: "AF 8246 / DL 9170 / VS 6842",
    situation: "WAIT IN LOUNGE",
  },
];

function Flights() {
  return (
    <div className="min-h-screen bg-slate-300 flex flex-col items-center">
      <div className="pt-10">
        <ShowFlightsButton type="earlier" />
        <div className="flex flex-col space-y-2">
          {flights.map((flight) => (
            <FlightDetails flight={flight} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Flights;
