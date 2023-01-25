import React from "react";

const Home = () => {
  const handleLogout = () => {
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
