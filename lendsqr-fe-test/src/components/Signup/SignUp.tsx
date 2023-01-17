import React, { useState } from "react";

import "./signup.scss";

const SignUp = () => {
  const [show, setShow] = useState({
    password: "",
    showPassword: false,
  });

  const handleClick = () => {
    setShow({ ...show, showPassword: !show.showPassword });
  };

  const handlePasswordChange = (prop: any) => (event: any) => {
    setShow({ ...show, [prop]: event.target.value });
  };
  return (
    <div className="signup">
      <div className="signup-content">
        <h1>Welcome!</h1>
        <h4>SIGN UP</h4>
        <div className="">
          <div className="signup-email">
            <input type="email" placeholder="Email" name="email" id="email" />
          </div>

          <div className="signup-password">
            <input
              type={show.showPassword ? "text" : "password"}
              onChange={handlePasswordChange("password")}
              placeholder="Password"
              name="password"
              value={show.password}
            />
            <p onClick={handleClick}>{show ? "SHOW" : ""}</p>
          </div>

          <div>
            <input type="date" name="date" id="date" />
          </div>

          <div>
            <input type="tel" name="tel" id="tel" />
          </div>
        </div>

        <p>Forgot Password?</p>

        <button type="button">SIGN UP</button>

        <h5>
          already have an account yet?
          <a href="/">click here to log in</a>
        </h5>
      </div>
    </div>
  );
};

export default SignUp;
