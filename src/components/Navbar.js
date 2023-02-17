import React from "react";
import { BsPersonFill } from "react-icons/bs";
import { ImSearch } from "react-icons/im";
function Navbar() {
  return (
    <nav className="flex bg-white items-center justify-between px-10 h-[75px] text-md text-sky-800 border-b border-gray-200 mb-4">
      {/* left */}
      <div>
        <h1 className="text-3xl font-bold cursor-pointer">Esenboğa</h1>
      </div>
      {/* center */}
      <div className="flex space-x-5">
        <h3 className="cursor-pointer">Flights</h3>
        <h3 className="cursor-pointer">Parking & Transport</h3>
        <h3 className="cursor-pointer">Shop,Taste & Discover</h3>
        <h3 className="cursor-pointer">Services</h3>
        <h3 className="cursor-pointer">Covid</h3>
      </div>
      {/* right */}
      <div className="flex space-x-2">
        <div className="flex space-x-2">
          <BsPersonFill size={20} />
          <h3 className="cursor-pointer">Login</h3>
        </div>
        <div className="">
          <ImSearch size={20} className="cursor-pointer" />
          {/* TODO- There will be another icon which is close icon, they will be changed after click. */}
        </div>
        <div className="flex space-x-3">
          <h3 className="font-bold cursor-pointer">EN</h3>
          <h3>|</h3>
          <h3 className="cursor-pointer">TR</h3>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
