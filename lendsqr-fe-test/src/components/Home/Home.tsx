import React from "react";

const Home = () => {
  const handleLogout = () => {
    localStorage.removeItem("signup");
    window.location.reload();
  };
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
