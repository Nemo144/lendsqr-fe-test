import React from "react";
import Navbar from "../Navbar/Navbar";

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem("logIn");
    localStorage.removeItem("signUp");
    window.location.reload();
  };
  return (
    <div>
      <Navbar />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
