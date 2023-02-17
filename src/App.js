import DeparturesPage from "./pages/DeparturesPage";
import ArrivalsPage from "./pages/ArrivalsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import ArrivalsFlightDetailPage from "./pages/ArrivalsFlightDetailPage";
import DeparturesFlightDetailPage from "./pages/DeparturesFlightDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/departures" element={<DeparturesPage />} />
        <Route path="/arrivals" element={<ArrivalsPage />} />
        <Route
          path="/departures/:id"
          element={<DeparturesFlightDetailPage />}
        />
        <Route path="/arrivals/:id" element={<ArrivalsFlightDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
