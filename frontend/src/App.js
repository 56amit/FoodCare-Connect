import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import DonorForm from "./components/DonorForm";
import AdminDashboard from "./components/AdminDashboard";
import Home from "./components/Home"; // Optional: Add Home if using
import './styles/App.css';  // Ensure this path is correct
import './HomePage.css';  // This is to import the HomePage.css file



const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donor" element={<DonorForm />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
