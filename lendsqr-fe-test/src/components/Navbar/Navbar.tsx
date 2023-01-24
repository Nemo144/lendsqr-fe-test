import React from "react";
import { images } from "../../constants";
import { FcSearch } from "react-icons/fc";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">
        <img src={images.logo} alt="logo" />
      </div>

      <div className="nav-input">
        <input
          type="search"
          placeholder="search for anything"
          name="search"
          id="search"
        />
        <FcSearch />
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
