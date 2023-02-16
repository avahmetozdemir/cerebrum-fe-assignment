import React from "react";
import AppStore from "./mobile/AppStore";
import GooglePlay from "./mobile/GooglePlay";

function Footer() {
  return (
    <div className="h-[475px] flex justify-center bg-blue-700">
      <div className="w-[900px] py-4 text-white">
        <div className="flex justify-between">
          <div>
            <div className="flex flex-col space-y-1">
              <h1 className="font-semibold">Flights</h1>
              <h3 className="cursor-pointer">Departures</h3>
              <h3 className="cursor-pointer">Arrivals</h3>
              <h3 className="cursor-pointer">Transfers</h3>
            </div>
            <div className="flex flex-col space-y-1 mt-3">
              <h1 className="font-semibold">Things to do at Esenboğa</h1>
              <h3 className="cursor-pointer">Experience all</h3>
              <h3 className="cursor-pointer">Shop</h3>
              <h3 className="cursor-pointer">Taste</h3>
              <h3 className="cursor-pointer">Discover</h3>
              <h3 className="cursor-pointer">Plaza</h3>
            </div>
          </div>
          <div>
            <div className="flex flex-col space-y-1">
              <h1 className="font-semibold">Flights</h1>
              <h3 className="cursor-pointer">Departures</h3>
              <h3 className="cursor-pointer">Arrivals</h3>
              <h3 className="cursor-pointer">Transfers</h3>
            </div>
            <div className="flex flex-col space-y-1 mt-3">
              <h1 className="font-semibold">Things to do at Esenboğa</h1>
              <h3 className="cursor-pointer">Experience all</h3>
              <h3 className="cursor-pointer">Shop</h3>
              <h3 className="cursor-pointer">Taste</h3>
              <h3 className="cursor-pointer">Discover</h3>
              <h3 className="cursor-pointer">Plaza</h3>
            </div>
          </div>
          <div>
            <div className="flex flex-col space-y-1">
              <h1 className="font-semibold">Flights</h1>
              <h3 className="cursor-pointer">Departures</h3>
              <h3 className="cursor-pointer">Arrivals</h3>
              <h3 className="cursor-pointer">Transfers</h3>
            </div>
            <div className="flex flex-col space-y-1 mt-3">
              <h1 className="font-semibold">Things to do at Esenboğa</h1>
              <h3 className="cursor-pointer">Experience all</h3>
              <h3 className="cursor-pointer">Shop</h3>
              <h3 className="cursor-pointer">Taste</h3>
              <h3 className="cursor-pointer">Discover</h3>
              <h3 className="cursor-pointer">Plaza</h3>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h1 className="font-semibold text-2xl mb-2">
            Download the Esenboğa app
          </h1>
          <div className="flex space-x-3">
            <GooglePlay />
            <AppStore />
          </div>
        </div>
        <div className="flex flex-col space-y-2 mt-4">
          <h1>&copy; Esenboğa 2023</h1>
          <div className="flex space-x-2">
            <p>Privacy</p>
            <p>Esenboğa regulations</p>
            <p>Disclaimer</p>
            <p>Newsletter</p>
            <p>Contact us</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
