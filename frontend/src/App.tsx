import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FarmerDashboard from "./pages/FarmerDashboard";
import FindCentre from "./pages/FindCentre";
import CentreDetails from "./pages/CentreDetails";
import Booking from "./pages/Booking";
import MyBookings from "./pages/MyBookings";
import LiveQueue from "./pages/LiveQueue";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Farmer flow */}
        <Route path="/dashboard" element={<FarmerDashboard />} />
        <Route path="/find-centre" element={<FindCentre />} />
        <Route path="/centre-details" element={<CentreDetails />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/live-queue" element={<LiveQueue />} />

        {/* Unknown URL */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
