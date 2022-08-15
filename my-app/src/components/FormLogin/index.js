import { useState } from "react";
import "./Login.css";

export const FormLogin = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const disabled = user.username === "" || user.password === "";

  const handleChange = (event) => {
    if (event.target.name === "username") {
      setUser({ ...user, username: event.target.value });
    }
    if (event.target.name === "password") {
      setUser({ ...user, password: event.target.value });
    }
  };

  const handleOnBlur = (event) => {
    if (event.target.name === "username") {
      setUser({ ...user, username: event.target.value.trim() });
    }
    if (event.target.name === "password") {
      setUser({ ...user, password: event.target.value.trim() });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //TODO: handle store user to context
  };

  return (
    <div className="login-container">
      <form id="form-login" className="form-login">
        <div className="main">
          <h2 className="title-login">Login</h2>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            placeholder="Type your username"
            onChange={handleChange}
            onBlur={handleOnBlur}
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Type your password"
            onChange={handleChange}
            onBlur={handleOnBlur}
          />
          <a className="forgot-password" href="/">
            Forgot password?
          </a>
          <button
            disabled={disabled}
            onClick={handleSubmit}
            className="btn-login"
          >
            LOGIN
          </button>
          <div className="login-social">
            <p>Or Sign Up Using</p>
            <div className="social-icon">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-square-twitter"></i>
              <i class="fa-brands fa-google"></i>
            </div>
          </div>
          <p>Or Sign Up Using</p>
          <a href="/" className="sign-up">
            SIGN UP
          </a>
        </div>
      </form>
    </div>
  );
};
