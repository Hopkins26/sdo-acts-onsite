import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import LoginPage from "@/pages/LoginPage.jsx";
import CreateTicket from "@/pages/CreateTicket.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/create-ticket" element={<CreateTicket />} />
    </Routes>
  </BrowserRouter>
);
