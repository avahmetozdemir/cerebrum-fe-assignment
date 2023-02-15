import React from "react";
import { AiFillApple } from "react-icons/ai";
function AppStore() {
  return (
    <div>
      <div className="flex space-x-1 pl-3 pr-5 bg-black h-10 border border-white cursor-pointer">
        <div className="flex items-center">
          <AiFillApple size={26} color="white" />
        </div>
        <div className="flex flex-col text-white">
          <p className="text-[10px]">Download on the</p>
          <p className="font-medium">App Store</p>
        </div>
      </div>
    </div>
  );
}

export default AppStore;
