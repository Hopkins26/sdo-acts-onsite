import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import CreateTicket from "./pages/CreateTicket.jsx";
import TicketForm from "./pages/TicketForm.jsx";
import LogoutPage from "./pages/LogoutPage.jsx"; // ✅ Add this line
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/create-ticket" element={<CreateTicket />} />
      <Route path="/ticket-form" element={<TicketForm />} />
      <Route path="/logout" element={<LogoutPage />} /> {/* ✅ Add this line */}
    </Routes>
  </Router>
);
