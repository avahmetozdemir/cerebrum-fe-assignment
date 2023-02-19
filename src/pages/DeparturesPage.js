import React, { useEffect } from "react";
import FilterFlights from "../components/FilterFlights";
import FlightType from "../components/FlightType";
import Flights from "../components/Flights";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchDepartures } from "../redux/features/FlightsSlice";

function DeparturesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDepartures());
  }, [dispatch]);

  const flights = useSelector((state) => state.flights.flights);
  // var sortBy = (function () {
  //   var toString = Object.prototype.toString,
  //     // default parser function
  //     parse = function (x) {
  //       return x;
  //     },
  //     // gets the item to be sorted
  //     getItem = function (x) {
  //       var isObject = x != null && typeof x === "object";
  //       var isProp = isObject && this.prop in x;
  //       return this.parser(isProp ? x[this.prop] : x);
  //     };

  //   /**
  //    * Sorts an array of elements.
  //    *
  //    * @param {Array} array: the collection to sort
  //    * @param {Object} cfg: the configuration options
  //    * @property {String}   cfg.prop: property name (if it is an Array of objects)
  //    * @property {Boolean}  cfg.desc: determines whether the sort is descending
  //    * @property {Function} cfg.parser: function to parse the items to expected type
  //    * @return {Array}
  //    */
  //   return function sortby(array, cfg) {
  //     if (!(array instanceof Array && array.length)) return [];
  //     if (toString.call(cfg) !== "[object Object]") cfg = {};
  //     if (typeof cfg.parser !== "function") cfg.parser = parse;
  //     cfg.desc = !!cfg.desc ? -1 : 1;
  //     return array.sort(function (a, b) {
  //       a = getItem.call(cfg, a);
  //       b = getItem.call(cfg, b);
  //       return cfg.desc * (a < b ? -1 : +(a > b));
  //     });
  //   };
  // })();
  // sortBy(flights, { prop: "scheduleDateTime" });

  return (
    <>
      <Navbar />
      <FilterFlights pageType="departing" />
      <FlightType />
      <Flights flights={flights} />
      <Footer />
    </>
  );
}

export default DeparturesPage;
