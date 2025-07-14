import React from 'react';
import "./style.css";

export const Header = () => {
  return (
    <div>
      <header>
        <nav className="navbar">
          <a className="navbar-brand" href="/">
            Employee Management System
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Header;