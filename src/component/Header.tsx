import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav className="nav-bar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/form" className="nav-link">
              Form
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/column" className="nav-link">
              Column
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
