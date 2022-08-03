import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <div className="navbar-brand">
          <a href="/">N O U S</a>
        </div>
        <div className="navbar-search">
          <div className="search-icon">
            <label htmlFor="search">
              {" "}
              <i class="fa-solid fa-magnifying-glass"></i>{" "}
            </label>
          </div>
          <div className="search-input">
            <input id="search" type="text" placeholder="Search..." />
          </div>
        </div>
      </div>

      <div className="navbar-right">
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
        <div className="navbar-login">
          <i class="fa-solid fa-circle-user"></i>
          <span>Log In</span>
        </div>
        <div className="navbar-cart">
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
      </div>
    </div>
  );
};
