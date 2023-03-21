import React from "react";
import "./dashboard.scss";

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem("logIn");
    localStorage.removeItem("signUp");
    window.location.reload();
  };

  return (
    <div>
      {/* <Navbar /> */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
