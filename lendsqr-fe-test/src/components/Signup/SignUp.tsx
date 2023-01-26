import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Home from "../Home/Home";

import "./signup.scss";

const SignUp = () => {
  const [show, setShow] = useState({
    password: "",
    showPassword: false,
  });
  const [showHome, setShowHome] = useState(false); // this state will aid in routing to new page after successful signup

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const localsignUp = localStorage.getItem("signUp");

  useEffect(() => {
    if (localsignUp) {
      setShowHome(true);
    }
  }, [localsignUp]);

  const handleSubmit = () => {
    if (
      name?.current?.value &&
      email?.current?.value &&
      password?.current?.value
    ) {
      localStorage.setItem("name", name?.current?.value);
      localStorage.setItem("email", email?.current?.value);
      localStorage.setItem("password", password?.current?.value);
      localStorage.setItem("signUp", email?.current?.value);
      alert("account created successfully");
      window.location.reload();
    }
  };

  const handleClick = () => {
    setShow({ ...show, showPassword: !show.showPassword });
  };

  const handlePasswordChange = (prop: any) => (event: any) => {
    setShow({ ...show, [prop]: event.target.value });
  };
  return (
    <div className="signup">
      {showHome ? (
        <Home />
      ) : (
        <div className="signup-content">
          <h1>Welcome!</h1>
          <h4>SIGN UP</h4>

          <div className="signup-input">
            <div className="signup-name">
              <input
                type="text"
                ref={name}
                placeholder="Name"
                name="name"
                id="name"
              />
            </div>

            <div className="signup-email">
              <input
                type="email"
                ref={email}
                placeholder="Email"
                name="email"
                id="email"
              />
            </div>

            <div className="signup-password">
              <input
                type={show.showPassword ? "text" : "password"}
                ref={password}
                onChange={handlePasswordChange("password")}
                placeholder="Password"
                name="password"
                value={show.password}
              />
              <p onClick={handleClick}>{show ? "SHOW" : ""}</p>
            </div>

            <div>
              <div className="signup-date">
                <input type="date" name="date" id="date" />
              </div>

              <div className="signup-tel">
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="📞 phone number"
                />
              </div>
            </div>
          </div>

          <div className="signup-p">
            <p>Forgot Password?</p>
          </div>

          <button onClick={handleSubmit} type="button">
            SIGN UP
          </button>
          <h5>
            already have an account yet?
            <Link to="/">click here to log in</Link>
          </h5>
        </div>
      )}
    </div>
  );
};

export default SignUp;
