// Header.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Decode the token to get user info or fetch from the backend
      setUser({ username: "UserName" }); // Replace with actual user info from the token
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <header>
      <nav>
        <ul>
          <li>Welcome to Budget Tracker</li>
          {user && <li>You are logged!</li>} {/* Show user greeting */}
          {user ? (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          ) : (
            <li>?</li>
          )}
        </ul>
      </nav>
    </header>
  );
}
