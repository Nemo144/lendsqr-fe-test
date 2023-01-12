import React from "react";
import { images } from "../../constants";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="login-content">
        <div className="login-pictures">
          <div className="login-logo">
            <img src={images.logo} alt="logo" />
          </div>

          <div className="login-pablo">
            <img src={images.pablo} alt="pablo" />
          </div>
        </div>

        <div>
          <h1>Welcome!</h1>
          <p>Enter details to login</p>
          <div>
            <div>
              <input type="email" placeholder="Email" name="email" value="" />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value=""
              />
              <p>SHOW</p>
            </div>
          </div>

          <p>Forgot Password?</p>

          <button type="button">LOG IN</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
