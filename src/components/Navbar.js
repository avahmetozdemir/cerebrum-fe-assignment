import React from "react";
import { BsPersonFill } from "react-icons/bs";
import { ImSearch } from "react-icons/im";
function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 h-[75px] text-md text-sky-800">
      {/* left */}
      <div>
        <h1 className="text-3xl font-bold cursor-pointer">Shiphol</h1>
      </div>
      {/* center */}
      <div className="flex space-x-3">
        <h3>Flights</h3>
        <h3>Parking & Transport</h3>
        <h3>Shop,Taste & Discover</h3>
        <h3>Services</h3>
        <h3>Covid</h3>
      </div>
      {/* right */}
      <div className="flex space-x-2">
        <div className="flex space-x-2">
          <BsPersonFill size={20} />
          <h3>Login</h3>
        </div>
        <div className="">
          <ImSearch size={20} />
          {/* TODO- There will be another icon which is close icon, they will be changed after click. */}
        </div>
        <div className="flex space-x-3">
          <h3 className="font-bold">EN</h3>
          <h3>|</h3>
          <h3>TR</h3>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
