import React from "react";

function AircraftInformation() {
  return (
    <div className="flex justify-center">
      <div className="w-[800px] mt-5 ">
        <h2 className="font-semibold text-xl">Aircraft details</h2>
        <div className="bg-white w-[700px] mt-4 rounded-lg">
          <div className="px-4 py-2 flex flex-col">
            <div className="flex flex-col border-b border-gray-200 py-2">
              <h4 className="text-gray-300">Type</h4>
              <p className="">Embraer145</p>
            </div>
            <div className="flex flex-col border-b border-gray-200 py-2">
              <h4 className="text-gray-300">Registration</h4>
              <p className="">FHGYM</p>
            </div>
            <div className="flex flex-col py-2">
              <h4 className="text-gray-300">This flight is also known as:</h4>
              <p className="">AF 4055</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AircraftInformation;
