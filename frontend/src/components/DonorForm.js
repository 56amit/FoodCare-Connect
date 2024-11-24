// DonorForm.js
import React, { useState } from "react";

const DonorForm = () => {
  const [donorName, setDonorName] = useState("");
  const [foodType, setFoodType] = useState("");
  const [quantity, setQuantity] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const donationData = {
      donorName,
      foodType,
      quantity,
    };

    // Send donation data to backend API
    const response = await fetch("http://localhost:5000/api/donations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(donationData),
    });

    if (response.ok) {
      alert("Donation submitted successfully!");
    } else {
      alert("Failed to submit donation.");
    }
  };

  return (
    <div>
      <h2>Submit a Donation</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Your Name" 
          value={donorName} 
          onChange={(e) => setDonorName(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Food Type" 
          value={foodType} 
          onChange={(e) => setFoodType(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Quantity" 
          value={quantity} 
          onChange={(e) => setQuantity(e.target.value)} 
        />
        <button type="submit">Submit Donation</button>
      </form>
    </div>
  );
};

export default DonorForm;
