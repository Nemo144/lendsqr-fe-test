import React, { useState } from "react";
import { Dashboard, Login, Navbar, SignUp } from "./components";
import Routees from "./components/Routes";

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      {/* <Dashboard /> */}
      <Routees />
    </div>
  );
};

export default App;
