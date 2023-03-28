import React, { useState, useRef, useEffect } from "react";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import "./login.scss";
import Dashboard from "../Dashboard/Dashboard";

const Login = () => {
  const [show, setShow] = useState({
    password: "",
    showPassword: false,
  });
  const [showHome, setShowHome] = useState(false);

  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const localEmail = localStorage.getItem("email");
  const localPassword = localStorage.getItem("password");
  const localLogin = localStorage.getItem("logIn");

  useEffect(() => {
    if (localLogin) {
      setShowHome(true);
    }
  }, [localLogin]);

  const handleSubmit = () => {
    if (
      email?.current?.value === localEmail &&
      password?.current?.value === localPassword
    ) {
      localStorage.setItem("email", email?.current?.value);
      localStorage.setItem("password", password?.current?.value);
      localStorage.setItem("logIn", email?.current?.value);
      window.location.reload();
    } else {
      alert("Please enter valid details");
    }
  };

  const handleClick = (prop: any) => (event: any) => {
    event?.preventDefault();
    setShow({ ...show, showPassword: !show.showPassword });
  };

  const handlePasswordChange = (prop: any) => (event: any) => {
    event.preventDefault();
    setShow({ ...show, [prop]: event.target.value });
  };

  return (
    <div className="login">
      {showHome ? (
        <Dashboard />
      ) : (
        <div className="login-content">
          <div className="login-pictures">
            <div className="login-logo">
              <img src={images.logo} alt="logo" />
            </div>

            <div className="login-pablo">
              <img src={images.pablo} alt="pablo" />
            </div>
          </div>

          <div className="login-sign">
            <h1>Welcome!</h1>
            <h4>Enter details to login</h4>
            <div className="login-input">
              <div className="login-input1">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  ref={email}
                  id="email"
                />
              </div>

              <div className="login-input2">
                <input
                  type={show.showPassword ? "text" : "password"}
                  onChange={handlePasswordChange("password")}
                  placeholder="Password"
                  name="password"
                  ref={password}
                  value={show.password}
                />
                <p onClick={handleClick}>{show ? "SHOW" : ""}</p>
              </div>
            </div>

            <p>Forgot Password?</p>

            <button type="button" onClick={handleSubmit}>
              LOGIN
            </button>

            <h5>
              Don't have an account yet?
              <Link to="/signup">click here to sign up</Link>
            </h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
