import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import SignUp from "./Signup/SignUp";

const Routees = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default Routees;
