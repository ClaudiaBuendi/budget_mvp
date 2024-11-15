import React from "react";
import "./Home.css";

export default function Header() {
  const headerStyle = {
    height: "100vh", // Makes the container full viewport height
    backgroundImage:
      'url("https://plus.unsplash.com/premium_photo-1661663603858-2df08fe3d65d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', // Replace with your image path
    backgroundSize: "cover", // Ensures the image covers the entire container
    backgroundPosition: "center", // Centers the image
    display: "flex", // Centers the content
    justifyContent: "center",
    alignItems: "center",
    color: "#fff", // White text for contrast
    textShadow: "1px 1px 5px rgba(0, 0, 0, 0.7)", // Text shadow for better readability
  };

  return (
    <div style={headerStyle}>
      <h1 style={{ fontSize: "4rem" }}>Budget Tracker</h1>
    </div>
  );
}
