import "./Navbar.css";
import { AutoSuggest } from "../";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const isLoginPage = window.location.pathname.includes("/login");

  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <div className="navbar-brand">
          <a href="/">N O U S</a>
        </div>
        {!isLoginPage && <AutoSuggest />}
      </div>
      <div className="navbar-right">
        {!isLoginPage && (
          <ul className="navbar-links">
            <li className="navbar-link">
              <a href="/">Shop All</a>
            </li>
            <li className="navbar-link">
              <a href="/">Women</a>
            </li>
            <li className="navbar-link">
              <a href="/">Men</a>
            </li>
            <li className="navbar-link">
              <a href="/">Sale</a>
            </li>
            <li className="navbar-link">
              <a href="/">About</a>
            </li>
            <li className="navbar-link">
              <a href="/">Contact</a>
            </li>
          </ul>
        )}
        {!isLoginPage && (
          <div className="navbar-login">
            <i class="fa-solid fa-circle-user" />
            <Link to="login">Log In</Link>
          </div>
        )}
        {!isLoginPage && (
          <div className="navbar-cart">
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
        )}
      </div>
    </div>
  );
};
