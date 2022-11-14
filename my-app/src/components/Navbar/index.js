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

  const isHiddenCart = window.location.pathname.includes("login");

  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <div className="navbar-brand">
          <Link to="/">N O U S</Link>
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
            <i className="fa-solid fa-circle-user" />
            {state.auth.username ? (
              <span>{state.auth.username}</span>
            ) : (
              <Link to="login">Log In</Link>
            )}
          </div>
        )}

        {!isHiddenCart && (
          <div className="navbar-cart">
            <i className="fa-solid fa-cart-shopping"></i>
            {state.cart.length > 0 && (
              <div className="value-cart">{state.cart.length}</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
