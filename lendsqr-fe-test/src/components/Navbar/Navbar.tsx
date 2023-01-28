import React from "react";
import { images } from "../../constants";
import { FcSearch } from "react-icons/fc";
import { RiArrowDownSFill } from "react-icons/ri";
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

      <div className="nav-others">
        <a href="/">Docs</a>

        <p>🔔</p>

        <img src={images.avatar} alt="avatar" />

        <h5>Adedeji</h5>

        <RiArrowDownSFill />
      </div>
    </div>
  );
};

export default Navbar;
