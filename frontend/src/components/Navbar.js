import React from 'react';
import '../styles/Navbar.css';  // Adjust the path if necessary


const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>FoodCare-Connect</h1>
      <div>
        <a href="/">Home</a>
        <a href="/donor">Donate</a>
        <a href="/admin">Admin</a>
      </div>
    </nav>
  );
};

export default Navbar;
