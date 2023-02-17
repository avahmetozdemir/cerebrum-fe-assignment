import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

function ArrivalsFlightDetailPage() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  return (
    <div>
      <Navbar />
    </div>
  );
}

export default ArrivalsFlightDetailPage;
