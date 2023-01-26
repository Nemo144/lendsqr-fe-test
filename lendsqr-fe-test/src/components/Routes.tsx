import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";
import SignUp from "./Signup/SignUp";

const Routees = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default Routees;
