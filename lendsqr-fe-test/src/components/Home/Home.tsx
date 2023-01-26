import React from "react";
import Login from "../Login/Login";
import Navbar from "../Navbar/Navbar";

const Home = () => {
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

export default Home;
