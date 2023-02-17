import DeparturesPage from "./pages/DeparturesPage";
import ArrivalsPage from "./pages/ArrivalsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/departures" element={<DeparturesPage />} />
        <Route path="/arrivals" element={<ArrivalsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
