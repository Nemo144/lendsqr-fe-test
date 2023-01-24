import React from "react";
import { images } from "../../constants";

const Navbar = () => {
  return (
    <div>
      <div>
        <img src={images.logo} alt="logo" />
      </div>

      <div>
        <input
          type="search"
          placeholder="search for anything"
          name="search"
          id="search"
        />
      </div>

      <div>
        <a href="/">Docs</a>
      </div>

      <div>🔔</div>

      <div>
        <img src={images.avatar} alt="avatar" />
        <h5>adedeji</h5>
        <>˯</>
      </div>
    </div>
  );
};

export default Navbar;
