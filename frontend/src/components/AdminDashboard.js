// AdminDashboard.js
import React, { useState, useEffect } from "react";

const AdminDashboard = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    // Simulate fetching data (in a real case, you'd call an API to get donation data)
    const fetchDonations = () => {
      setDonations([
        { donorName: "John Doe", foodType: "Vegetarian", quantity: "20 kg" },
        // Add more donations here
      ]);
    };

    fetchDonations();
  }, []);

  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>
      <div className="donation-notifications">
        <h3>New Donations</h3>
        <ul>
          {donations.map((donation, index) => (
            <li key={index}>
              {donation.donorName} donated {donation.quantity} of {donation.foodType}.
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
