import "./Navbar.css";
import { AutoSuggest } from "../";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StateContext } from "../../context";

export const Navbar = () => {
  const { state } = useContext(StateContext);

  const isHiddenNav =
    window.location.pathname.includes("/login") ||
    window.location.pathname.includes("/product") ||
    window.location.pathname.includes("/search");

  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <div className="navbar-brand">
          <a href="/">N O U S</a>
        </div>
        {!isHiddenNav && <AutoSuggest />}
      </div>
      <div className="navbar-right">
        {!isHiddenNav && (
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
        {!isHiddenNav && (
          <div className="navbar-login">
            <i class="fa-solid fa-circle-user" />
            {state.auth.username && state.auth.password ? (
              <span>state.auth.username</span>
            ) : (
              <Link to="login">Log In</Link>
            )}
          </div>
        )}
        {!isHiddenNav && (
          <div className="navbar-cart">
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
        )}
      </div>
    </div>
  );
};
