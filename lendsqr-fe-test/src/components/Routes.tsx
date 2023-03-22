import React from "react";
import { Routes, Route } from "react-router-dom";
// import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login/Login";
import SignUp from "./Signup/SignUp";

const Routees = () => {
  return (
    <Routes>
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default Routees;
