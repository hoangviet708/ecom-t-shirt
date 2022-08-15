import { isDisabled } from "@testing-library/user-event/dist/utils";
import { useRef, useState } from "react";
import "./Login.css";
export const FormLogin = () => {
  const refName = useRef();
  const refPass = useRef();
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const [isDisabledLogin, setIsDisabledLogin] = useState(true);

  if (refName.current.value !== "" || refPass.current.value !== "") {
    setIsDisabledLogin(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = refName.current.value;
    const pass = refPass.current.value;

    if (!name || !pass) {
      alert("Khong duoc bo trong");
      return;
    } else {
      const newUser = {
        userName: name,
        password: pass,
      };
      setUser(newUser);
    }
  };
  console.log(user);

  return (
    <div className="login-container">
      <form id="form-login" className="form-login">
        <div className="main">
          <h2 className="title-login">Login</h2>
          <label htmlFor="username">Username</label>
          <input
            ref={refName}
            id="username"
            type="text"
            placeholder="Type your username"
          />
          <label htmlFor="password">Password</label>
          <input
            ref={refPass}
            id="password"
            type="password"
            placeholder="Type your username"
          />
          <a className="forgot-password" href="/">
            Forgot password?
          </a>
          <button
            disabled={isDisabledLogin}
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
