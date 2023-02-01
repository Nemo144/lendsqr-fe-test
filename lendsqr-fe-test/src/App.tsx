import React, { useState } from "react";
import { Login, Navbar, SignUp } from "./components";
import Routees from "./components/Routes";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routees />
    </div>
  );
};

export default App;
