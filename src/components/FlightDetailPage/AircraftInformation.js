import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAircraftType } from "../../redux/features/FlightsSlice";

function AircraftInformation({ aircraft }) {
  // const codeshares = aircraft?.codeshares?.codeshares;
  // const iataMain = aircraft?.aircraftType.iataMain;
  // const iataSub = aircraft?.aircraftType.iataSub;
  const [aircraftType, setAircraftType] = useState([]);
  const config = {
    headers: {
      Accept: "application/json",
      app_id: "47351075",
      app_key: "ac353dccbad2d1bd8549dc774c6c04bc",
      ResourceVersion: "v4",
    },
  };

  //Fetch aircraft type
  const fetchAircraftType = async (iataMain, iataSub) => {
    const response = await axios.get(
      `http://localhost:5000/public-flights/aircrafttypes?iataMain=${iataMain}&iataSub=${iataSub}&page=0&sort=%2BiataMain
      `,
      config
    );
    const data = await response.data;
    setAircraftType(data);
  };

  // useEffect(() => {
  //   fetchAircraftType(iataMain, iataSub);
  // }, []);

  //TODO get aircraft data and show its type!!!!

  return (
    <div className="flex justify-center">
      <div className="w-[800px] mt-5 ">
        <h2 className="font-semibold text-xl">Aircraft details</h2>
        <div className="bg-white w-[700px] mt-4 rounded-lg">
          <div className="px-4 py-2 flex flex-col">
            <div className="flex flex-col border-b border-gray-200 py-2">
              <h4 className="text-gray-300">Type</h4>
              <p className="">{}</p>
            </div>
            <div className="flex flex-col border-b border-gray-200 py-2">
              <h4 className="text-gray-300">Registration</h4>
              <p className="">FHGYM</p>
            </div>
            <div className="flex flex-col py-2">
              <h4 className="text-gray-300">This flight is also known as:</h4>
              <div className="flex space-x-2">
                {/* {codeshares?.map((code, index) => (
                  <p key={index}>{code}</p>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AircraftInformation;
