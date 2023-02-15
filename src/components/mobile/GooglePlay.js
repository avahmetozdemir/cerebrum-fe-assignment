import React from "react";
import { FcGoogle } from "react-icons/fc";

function GooglePlay() {
  return (
    <div>
      <div className="flex space-x-1 px-3 border border-white  bg-black cursor-pointer h-10">
        <div className="flex items-center">
          <FcGoogle size={26} />
        </div>
        <div className="flex flex-col text-white ">
          <p className="text-[10px]">GET IT ON</p>
          <p className="font-medium">Google Play</p>
        </div>
      </div>
    </div>
  );
}

export default GooglePlay;
