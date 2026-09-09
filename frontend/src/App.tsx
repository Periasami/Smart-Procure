import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import FindCentre from "./pages/FindCentre";
import CentreDetails from "./pages/CentreDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/find-centre" element={<FindCentre />} />
        <Route path="/centre-details" element={<CentreDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
