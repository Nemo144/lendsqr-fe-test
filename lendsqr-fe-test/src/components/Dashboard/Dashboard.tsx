import React from "react";
import Navbar from "../Navbar/Navbar";
import "./dashboard.scss";

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem("logIn");
    localStorage.removeItem("signUp");
    window.location.reload();
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
