import React from "react";
import { HiOutlineArrowSmDown, HiOutlineArrowSmUp } from "react-icons/hi";
function ShowFlightsButton({ type, onClickHandler }) {
  return (
    <div
      onClick={() => onClickHandler()}
      className="w-[900px] h-[50px] bg-white flex items-center justify-center cursor-pointer my-4"
    >
      <div className="flex space-x-2 items-center">
        <h3 className="hover:underline text-blue-500">Show {type} flights</h3>
        {type === "earlier" ? (
          <HiOutlineArrowSmUp size={20} color="#3B82F6" />
        ) : (
          <HiOutlineArrowSmDown size={20} color="#3B82F6" />
        )}
      </div>
    </div>
  );
}

export default ShowFlightsButton;
