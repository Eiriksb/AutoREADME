import React, { useEffect, useState } from 'react';
import '../App.css'; // Import your CSS file for Navbar styles

interface NavbarProps {
  supabaseClient: any; // Pass Supabase client as a prop
}

const Navbar: React.FC<NavbarProps> = ({ supabaseClient }) => {
  const handleLogout = async () => {
    try {
      await supabaseClient.auth.signOut();
    } catch (error: any) {
      console.error('Error logging out:', error.message);
    }
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {/* Add more navigation items as needed */}
        <li className="navbar-item">
            <button onClick={handleLogout} className="logout-button">Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;