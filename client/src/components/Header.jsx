// Header.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Header({ loggedIn, setLoggedIn }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     // Decode the token to get user info or fetch from the backend
  //     setUser({ username: "UserName" }); // Replace with actual user info from the token
  //   }
  // }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    setUser(null);
    navigate("/login");
  };

  return (
    <header>
      <nav>
        <ul>
          <p> </p>
          {loggedIn && <p>Welcome to Budget Tracker!</p>}{" "}
          {/* Show user greeting */}
          {loggedIn ? (
            <p>
              <button onClick={handleLogout}>Logout</button>
            </p>
          ) : (
            <p> </p>
          )}
        </ul>
      </nav>
    </header>
  );
}
